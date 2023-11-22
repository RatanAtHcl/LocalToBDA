package com.tl;

import static org.junit.Assert.*;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Scanner;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

public class DOM_Capture_Frame extends UICInit {
	private final String browserService = properties
            .getProperty("browserService");
    private final String currentDirectory;
    private final String uicTestDataDir;
    private final String uicExpectedHTMLDir;
    private final String pathSeparator = System.getProperty("file.separator");

	public DOM_Capture_Frame(final String browser) {
        super(browser, "DOMCapture", "frame.html", "ai", null, true);
        
        this.currentDirectory = System.getProperty("user.dir");
        this.uicTestDataDir = this.currentDirectory + this.pathSeparator
                + "UICTestData" + this.pathSeparator;
        this.uicExpectedHTMLDir = this.currentDirectory + this.pathSeparator
                + "testWebsite" + this.pathSeparator + "DOMCaptureFrame" + this.pathSeparator;
        System.out.println("BROWSER: " + browser);
        System.out.println("BROWSER SERVICE: "  + this.browserService);
        System.out.println("UIC TEST DATA DIRECTORY: "  + this.uicTestDataDir);

	}

    @Override
    @Before
    public void setUp() {
        super.setUp();
    }

	@Override
    @After
    public void tearDown() throws Exception {
        super.tearDown();
    }
	
	public static String readFileAsString(String fileName) throws Exception {
      String data = "";
      data = new String(Files.readAllBytes(Paths.get(fileName)));
      return data;
    }
	
    @Test
	public void doctypeCapturedOnTestPageWithFramesTest() throws Exception {
        final UICTest t = new UICTest("doctypeCapturedOnTestPageWithFramesTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
	        executeDCXInitJavaScript(t, this.uicTestDataDir
	                + "DOMCaptureInitFiles" + this.pathSeparator
	                + "init_jquery_dom_capture_enabled_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_enabled_true.js", browser);
        }
        verifyDoctypeCapturedOnTestPageWithFramesTest(t);
        assertTrue(t.getErrs(), t.getStatus());
	}

	public void verifyDoctypeCapturedOnTestPageWithFramesTest(final UICTest t) throws Exception {	    
        driver.switchTo().frame("frame");

	    assertTrue(isElementPresent(By.id("addDivBtn")));
        final WebElement addDivBtn = driver.findElement(By.id("addDivBtn"));
        addDivBtn.click();
        
        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        
        final JSONObject uicObject = getUICObjectbymsgType("12");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);
        
        // check type
        final Integer type = uicObject.getInt("type");
        if (12 != type) {
            t.addMsg("type", "12", type.toString());
        }
        
        // check offset
        verifyOffset(uicObject, t, 1);
        
        // check screenview offset
        verifyScreenviewOffset(uicObject, t, 1); 
        
        // check count
        verifyCount(uicObject, t, 1);
        
        // check fromWeb
        if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}
        
        // check domCapture
        final JSONObject domCapture = (JSONObject) uicObject.get("domCapture");

        // check domCapture root
        final String root = domCapture.getString("root");
        final String docType = 
        		"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">";
        if (!root.startsWith(docType)) {
        	t.addMsg("root", docType, root.substring(0, docType.length() - 1));
        }
        
        // check domCapture charset
        if (!domCapture.has("charset")) {
            t.addMsg("charset", "utf-8", "");
        }
        
        // check domCapture host
        if (!domCapture.has("host")) {
            t.addMsg("host", "http://9.19.145.86:8080", "");
        }
        
        // check domCapture url
        if (!domCapture.has("url")) {
            t.addMsg("url", "/CustomEventsIE/iframe/TestPage1.html", "");
        }
	}

	@Test
	public void domCaptureEnabledTrueOnTestPageWithFramesTest() throws Exception {
        final UICTest t = new UICTest("domCaptureEnabledTrueOnTestPageWithFramesTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_enabled_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_enabled_true.js", browser);
        }
        verifyDomCaptureEnabledTrueOnTestPageWithFramesTest(t);
        assertTrue(t.getErrs(), t.getStatus());
	}
	
	public void verifyDomCaptureEnabledTrueOnTestPageWithFramesTest(final UICTest t) throws Exception {
        driver.switchTo().frame("frame");

	    assertTrue(isElementPresent(By.id("addDivBtn")));
        final WebElement addDivBtn = driver.findElement(By.id("addDivBtn"));
        addDivBtn.click();
        
        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        
        final JSONObject type12Msg = getUICObjectbyDcid("dcid-6", "12");
        assertNotNull("UIC," + browser + ",uicObject,NULL", type12Msg);
        final JSONObject type4Msg = getUICObjectbyDcid("dcid-6", "4");
        assertNotNull("UIC," + browser + ",uicObject,NULL", type4Msg);
        
        // ==================
        // for type 12 message
        // ==================
        
		// check type
        final Integer typeA = type12Msg.getInt("type");
        if (12 != typeA) {
            t.addMsg("type", "12", typeA.toString());
        }
        
        // check offset
        verifyOffset(type12Msg, t, 1);
        
        // check screenview offset
        verifyScreenviewOffset(type12Msg, t, 1); 
        
        // check count
        verifyCount(type12Msg, t, 1);
        
        // check fromWeb
        if (!type12Msg.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}
        
        // check domCapture
        final JSONObject domCapture = (JSONObject) type12Msg.get("domCapture");

        // check domCapture root
        final String root = domCapture.getString("root");
        final String docType = 
        		"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">";
        if (!root.startsWith(docType)) {
        	t.addMsg("root", docType, root.substring(0, docType.length() - 1));
        }
        
        // check domCapture charset
        if (!domCapture.has("charset")) {
            t.addMsg("charset", "utf-8", "");
        }
        
        // check dcid
        final String dcidA = domCapture.getString("dcid");
        if (!dcidA.startsWith("dcid-6")) {
            t.addMsg("dcid", "dcid-6", dcidA);
        }
        
        // ==================
        // for type 4 message
        // ==================
        
        // check type
        final Integer typeB = type4Msg.getInt("type");
        if (4 != typeB) {
            t.addMsg("type", "4", typeB.toString());
        }
        
        // check offset
        verifyOffset(type4Msg, t, 1);
        
        // check screenview offset
        verifyScreenviewOffset(type4Msg, t, 1); 
        
        // check count
        verifyCount(type4Msg, t, 1);
        
        // check fromWeb
        if (!type4Msg.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}
        
        // check idType 
        final JSONObject target = (JSONObject) type4Msg.get("target");
        if (!target.has("idType")) {
            t.addMsg("idType", "-2", "");
        }
        
        // check id
        final String id = target.getString("id");
        if (!("[[\"frame\"],[\"addDivBtn\"]]").equals(id)) {
            t.addMsg("id", "[[\"frame\"],[\"addDivBtn\"]]", id);
        }
        
        // check name 
        final String name = target.getString("name");
        if (!name.isEmpty()) {
            t.addMsg("name", "", name);
        }
        
        // check dcType
        final String dcType = target.getString("dcType");
        if (!("button").equals(dcType)) {
            t.addMsg("dcType", "button", dcType);
        }
        
        // check type
        final String typ = target.getString("type");
        if (!("input").equals(typ)) {
            t.addMsg("type", "input", typ);
        }
        
        // check position
        final JSONObject position = (JSONObject) target.get("position");
        assertTrue(position.has("height"));
        assertTrue(position.has("width"));
        assertTrue(position.has("relXY"));
//        verifyPosHeight(position, t, 18);
//        verifyPosWidth(position, t, 107);
//        verifyRelXY(position, t, "0.6,0.4");
        
        // check currState
        verifyCurrState(target, t, "Add to Target Div");
        
        // check subType
        verifySubType(target, t, "button");
        
        // check parent link
        assertFalse(target.getBoolean("isParentLink"));
        
        // check dwell
        verifyDwell(target, t, 1);

        // check event
        final JSONObject event = (JSONObject) type4Msg.get("event");
        final String dcEvent = event.getString("dcEvent");
        if (!("click").equals(dcEvent)) {
        	t.addMsg("dcEvent", "click", dcEvent);
        }
        final String eventType = event.getString("type");
        if (!("click").equals(eventType)) {
        	t.addMsg("eventType", "click", eventType);
        }
        
        // check dcid
        final String dcidB = type4Msg.getString("dcid");
        if (!dcidB.startsWith("dcid-6")) {
            t.addMsg("dcid", "dcid-6", dcidB);
        }
        
        // check focusInOffset
        verifyOffset(type4Msg, t, 1); 
    }
	
	@Test
	public void domCaptureEnabledFalseOnTestPageWithFramesTest() throws Exception {
		final UICTest t = new UICTest("domCaptureEnabledFalseOnTestPageWithFramesTest", browser);
        
        if (this.browserService.toLowerCase().contains("jq")) {
	        executeDCXInitJavaScript(t, this.uicTestDataDir
	                + "DOMCaptureInitFiles" + this.pathSeparator
	                + "init_jquery_dom_capture_enabled_false.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
	        executeDCXInitJavaScript(t, this.uicTestDataDir
	                + "DOMCaptureInitFiles" + this.pathSeparator
	                + "init_w3c_dom_capture_enabled_false.js", browser);
        }
        
        driver.switchTo().frame("frame");
		assertTrue(isElementPresent(By.id("addDivBtn")));
		driver.findElement(By.id("addDivBtn")).click();
		
		final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        
        final JSONObject uicObject = getUICObject("[[\"frame\"],[\"addDivBtn\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        verifyDomCaptureEnabledFalseOnTestPageWithFramesTest(t, uicObject);
        assertTrue(t.getErrs(), t.getStatus());
	}
	
	public void verifyDomCaptureEnabledFalseOnTestPageWithFramesTest(final UICTest t, final JSONObject uicObject) throws Exception {
        // check type
        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }
        
        // check offset
        verifyOffset(uicObject, t, 1);
        
        // check screenview offset
        verifyScreenviewOffset(uicObject, t, 1); 
        
        // check count
        verifyCount(uicObject, t, 1);
        
        // check fromWeb
        if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}
        
        // check idType 
        final JSONObject target = (JSONObject) uicObject.get("target");
        if (!target.has("idType")) {
            t.addMsg("idType", "-2", "");
        }
        
        // check id
        final String id = target.getString("id");
        if (!("[[\"frame\"],[\"addDivBtn\"]]").equals(id)) {
            t.addMsg("id", "[[\"frame\"],[\"addDivBtn\"]]", id);
        }
        
        // check name 
        final String name = target.getString("name");
        if (!name.isEmpty()) {
            t.addMsg("name", "", name);
        }
        
        // check dcType
        final String dcType = target.getString("dcType");
        if (!("button").equals(dcType)) {
            t.addMsg("dcType", "button", dcType);
        }
        
        // check type
        final String typ = target.getString("type");
        if (!("input").equals(typ)) {
            t.addMsg("type", "input", typ);
        }
        
        // check position
        final JSONObject position = (JSONObject) target.get("position");
        assertTrue(position.has("height"));
        assertTrue(position.has("width"));
        assertTrue(position.has("relXY"));
//        verifyPosHeight(position, t, 18);
//        verifyPosWidth(position, t, 107);
//        verifyRelXY(position, t, "0.6,0.4");
        
        // check currState
        verifyCurrState(target, t, "Add to Target Div");
        
        // check subType
        verifySubType(target, t, "button");
        
        // check parent link
        assertFalse(target.getBoolean("isParentLink"));
        
        // check dwell
        verifyDwell(target, t, 1);

        // check event
        final JSONObject event = (JSONObject) uicObject.get("event");
        final String dcEvent = event.getString("dcEvent");
        if (!("click").equals(dcEvent)) {
        	t.addMsg("dcEvent", "click", dcEvent);
        }
        final String eventType = event.getString("type");
        if (!("click").equals(eventType)) {
        	t.addMsg("eventType", "click", eventType);
        }
        
        // check dcid
        if (uicObject.has("dcid")) {
        	t.addMsg("dcid", "", uicObject.getString("dcid"));
        }
        
        // check focusInOffset
        verifyOffset(uicObject, t, 1); 
  	}
	
	@Test
	public void charsetUTF8Test() throws Exception {
	    final UICTest t = new UICTest("charsetUTF8Test", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_enabled_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_enabled_true.js", browser);
        }
        verifyCharsetUTF8Test(t);
        assertTrue(t.getErrs(), t.getStatus());
	}
	
	public void verifyCharsetUTF8Test(final UICTest t) throws Exception {
        driver.switchTo().frame("frame");

	    assertTrue(isElementPresent(By.id("addDivBtn")));
        final WebElement addDivBtn = driver.findElement(By.id("addDivBtn"));
        addDivBtn.click();
        
        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        
        final JSONObject uicObject = getUICObjectbymsgType("12");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);
        
	    // check type
        final Integer type = uicObject.getInt("type");
        if (12 != type) {
            t.addMsg("type", "12", type.toString());
        }
        
        // check offset
        verifyOffset(uicObject, t, 1);
        
        // check screenview offset
        verifyScreenviewOffset(uicObject, t, 1); 
        
        // check count
        verifyCount(uicObject, t, 1);
        
        // check fromWeb
        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }
        
        // check domCapture
        final JSONObject domCapture = (JSONObject) uicObject.get("domCapture");

        // check domCapture frames
        if (!domCapture.has("frames")) {
            t.addMsg("frames", "[]", "");
        }
        
        // check domCapture root
        if (!domCapture.has("root")) {
            t.addMsg("root", "<!DOCTYPE html...", "");
        }
        
        // check charset in domCapture
        final String charset = domCapture.getString("charset");
        if (!(("UTF-8").equals(charset) || ("utf-8").equals(charset))) {
            t.addMsg("charset", "UTF-8", charset);
        }
        
        // check dcid in domCapture
        if (!domCapture.has("dcid")) {
            t.addMsg("dcid", "dcid-1", "");
        }
	}
	
	@Test
	public void maxLengthConfiguredToNumberResultingInErrorTest() throws Exception {
	    final UICTest t = new UICTest("maxLengthConfiguredToNumberResultingInErrorTestJq", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_enabled_true_max_captured_length_100.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_enabled_true_max_captured_length_100.js", browser);
            
        }
        verifyMaxLengthConfiguredToNumberResultingInErrorTest(t);
        assertTrue(t.getErrs(), t.getStatus());
    }
	
	public void verifyMaxLengthConfiguredToNumberResultingInErrorTest(final UICTest t) throws Exception {
        driver.switchTo().frame("frame");

	    assertTrue(isElementPresent(By.id("addDivBtn")));
        final WebElement addDivBtn = driver.findElement(By.id("addDivBtn"));
        addDivBtn.click();
        
        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        
        final JSONObject uicObject = getUICObjectbymsgType("12");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);
        
        // flush queue
        final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        javascriptExecutor.executeScript("DCX.flushAll()");
     
        // check type
        final Integer type = uicObject.getInt("type");
        if (12 != type) {
            t.addMsg("type", "12", type.toString());
        }
        
        // check offset
        verifyOffset(uicObject, t, 1);
        
        // check screenview offset
        verifyScreenviewOffset(uicObject, t, 1); 
        
        // check count
        verifyCount(uicObject, t, 1);
        
        // check fromWeb
        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }
        
        // check domCapture
        final JSONObject domCapture = (JSONObject) uicObject.get("domCapture");
        assertTrue(domCapture.has("error"));
        
        if (!domCapture.has("dcid")) {
            t.addMsg("dcid", "dcid-1", "");
        }
    }
	
	@Test
	public void domCaptureEnabledOnClickEventWithXPathAndOptionsCaptureTest() throws Exception {
        final UICTest t = new UICTest("domCaptureEnabledOnClickEventWithXPathAndOptionsCaptureTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_capture_frames_true_remove_scripts_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_capture_frames_true_remove_scripts_true.js", browser);
        }  
        
        driver.switchTo().frame("frame");
        assertTrue(isElementPresent(By.id("addChildInputsBtn")));
        final WebElement btnOutside = driver.findElement(By.id("addChildInputsBtn"));
        btnOutside.click();

        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        if (this.currBrowser.contains("ie")) {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-4", "click", "[[\"frame\"],[\"addChildInputsBtn\"]]", 
                    this.uicExpectedHTMLDir + "ieDomCaptureCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        else {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-4", "click", "[[\"frame\"],[\"addChildInputsBtn\"]]", 
                    this.uicExpectedHTMLDir + "domCaptureCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        assertTrue(t.getErrs(), t.getStatus());
    }

    @Test
    public void domCaptureEnabledOnClickEventWithCaptureFramesTrueRemoveScriptsFalseTest() throws Exception {
        final UICTest t = new UICTest("domCaptureEnabledOnClickEventWithCaptureFramesTrueRemoveScriptsFalseTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_capture_frames_true_remove_scripts_false.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_capture_frames_true_remove_scripts_false.js", browser);
        }  
        
        driver.switchTo().frame("frame");
        assertTrue(isElementPresent(By.id("addChildInputsBtn")));
        final WebElement btnOutside = driver.findElement(By.id("addChildInputsBtn"));
        btnOutside.click();

        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        if (this.currBrowser.contains("ie")) {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-6", "click", "[[\"frame\"],[\"addChildInputsBtn\"]]", 
                    this.uicExpectedHTMLDir + "ieDomCaptureCaptureFramesTrueRemoveScriptsFalseTest.txt", true, false);
        }
        else {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-6", "click", "[[\"frame\"],[\"addChildInputsBtn\"]]", 
                    this.uicExpectedHTMLDir + "domCaptureCaptureFramesTrueRemoveScriptsFalseTest.txt", true, false);
        }
        assertTrue(t.getErrs(), t.getStatus());
    }

    @Test
    public void domCaptureEnabledOnClickWithCaptureFramesFalseRemoveScriptsFalseTest() throws Exception {
        final UICTest t = new UICTest("domCaptureEnabledOnClickWithCaptureFramesFalseRemoveScriptsFalseTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_capture_frames_false_remove_scripts_false.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_frames_false_remove_scripts_false.js", browser);
        }  
        
        driver.switchTo().frame("frame");
        assertTrue(isElementPresent(By.id("addChildInputsBtn")));
        final WebElement btnOutside = driver.findElement(By.id("addChildInputsBtn"));
        btnOutside.click();
        
        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        if (this.currBrowser.contains("ie")) {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-2", "click", "[[\"frame\"],[\"addChildInputsBtn\"]]", 
                    this.uicExpectedHTMLDir + "ieDomCaptureCaptureFramesFalseRemoveScriptsFalseTest.txt", false, false);
        }
        else {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-2", "click", "[[\"frame\"],[\"addChildInputsBtn\"]]", 
                    this.uicExpectedHTMLDir + "domCaptureCaptureFramesFalseRemoveScriptsFalseTest.txt", false, false);
        }
        assertTrue(t.getErrs(), t.getStatus());       
    }

    @Test
    public void domCaptureEnabledOnChangeHTMLIdWithCaptureFramesTrueRemoveScriptsTrueTest() throws Exception {
        final UICTest t = new UICTest("domCaptureEnabledOnChangeHTMLIdWithCaptureFramesTrueRemoveScriptsTrueTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_change_capture_frames_true_remove_scripts_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_change_capture_frames_true_remove_scripts_true.js", browser);
        }  
        
        driver.switchTo().frame("frame");
        assertTrue(isElementPresent(By.id("ti.2")));
        final WebElement regularTextInput = driver.findElement(By.id("ti.2"));
        regularTextInput.click();
        regularTextInput.sendKeys("Manisha" + Keys.TAB);

        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        if (this.currBrowser.contains("ie")) {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-4", "change", "[[\"frame\"],[\"ti.2\"]]",
                    this.uicExpectedHTMLDir + "ieDomCaptureChangeCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        else {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-4", "change", "[[\"frame\"],[\"ti.2\"]]",
                    this.uicExpectedHTMLDir + "domCaptureChangeCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    // following two tests differ from testlink since the iframe page was changed to conform to another test (iframe privacy)
    // with the addition of the "ai"/"ti_pvt" id in the iframe div
    @Test
    public void domCaptureEnabledOnChangeCSSWithCaptureFramesTrueRemoveScriptsTrueTest() throws Exception {
        final UICTest t = new UICTest("domCaptureEnabledOnChangeCSSWithCaptureFramesTrueRemoveScriptsTrueTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_change_capture_frames_true_remove_scripts_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_change_capture_frames_true_remove_scripts_true.js", browser);
        }  
        
        driver.switchTo().frame("frame");
        assertTrue(isElementPresent(By.id("pi"))); // input[type=password]
        final WebElement passwordInput = driver.findElement(By.id("pi"));
        passwordInput.click();
        passwordInput.sendKeys("Manisha" + Keys.TAB);

        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        if (this.currBrowser.contains("ie")) {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-4", "change", "[[\"frame\"],[\"pi\"]]",
                    this.uicExpectedHTMLDir + "ieDomCaptureChangeCSSCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        else {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-4", "change", "[[\"frame\"],[\"pi\"]]",
                    this.uicExpectedHTMLDir + "domCaptureChangeCSSCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        assertTrue(t.getErrs(), t.getStatus());
    }

    
    @Test
    public void domCaptureEnabledOnChangeCustomIdWithCaptureFramesTrueRemoveScriptsTrueTest() throws Exception {
        final UICTest t = new UICTest("domCaptureEnabledOnChangeCSSWithCaptureFramesTrueRemoveScriptsTrueTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_change_capture_frames_true_remove_scripts_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_change_capture_frames_true_remove_scripts_true.js", browser);
        }  
        
        driver.switchTo().frame("frame");
        assertTrue(isElementPresent(By.cssSelector("input[myattr=\"ti_pvt\"]")));
        final WebElement regularTextInput = driver.findElement(By.cssSelector("input[myattr=\"ti_pvt\"]"));
        regularTextInput.click();
        regularTextInput.sendKeys("Manisha" + Keys.TAB);
        
        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        if (this.currBrowser.contains("ie")) {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-4", "change", "[[\"frame\"],[\"ti_pvt\"]]",
                    this.uicExpectedHTMLDir + "ieDomCaptureChangeCustomIdCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        else {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-4", "change", "[[\"frame\"],[\"ti_pvt\"]]",
                    this.uicExpectedHTMLDir + "domCaptureChangeCustomIdCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void domCaptureEnabledOnBlurWithCaptureFramesTrueRemoveScriptsTrueTest() throws Exception {
        final UICTest t = new UICTest("domCaptureEnabledOnBlurWithCaptureFramesTrueRemoveScriptsTrueTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_blur_capture_frames_true_remove_scripts_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_blur_capture_frames_true_remove_scripts_true.js", browser);
        }  
        
        driver.switchTo().frame("frame");
        assertTrue(isElementPresent(By.cssSelector("input[myattr=\"ti_pvt\"]")));
        driver.findElement(By.cssSelector("input[myattr=\"ti_pvt\"]")).click();
        driver.findElement(By.id("ti.2")).click();
        

        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        if (this.currBrowser.contains("ie")) {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-6", "blur", "[[\"frame\"],[\"ti_pvt\"]]", 
                    this.uicExpectedHTMLDir + "ieDomCaptureBlurCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        else {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-6", "blur", "[[\"frame\"],[\"ti_pvt\"]]", 
                    this.uicExpectedHTMLDir + "domCaptureBlurCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void domCaptureEnabledOnBlurDelayWithCaptureFramesTrueRemoveScriptsTrueTest() throws Exception {
        final UICTest t = new UICTest("domCaptureEnabledOnBlurDelayWithCaptureFramesTrueRemoveScriptsTrueTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_blur_delay_capture_frames_true_remove_scripts_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_blur_delay_capture_frames_true_remove_scripts_true.js", browser);
        }  
        
        driver.switchTo().frame("frame");
        assertTrue(isElementPresent(By.id("pi")));
        driver.findElement(By.id("pi")).click();
        driver.findElement(By.id("pi")).sendKeys(Keys.TAB);
        
        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        if (this.currBrowser.contains("ie")) {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-4", "blur", "[[\"frame\"],[\"pi\"]]", 
                    this.uicExpectedHTMLDir + "ieDomCaptureBlurDelayCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        else {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-4", "blur", "[[\"frame\"],[\"pi\"]]", 
                    this.uicExpectedHTMLDir + "domCaptureBlurDelayCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        assertTrue(t.getErrs(), t.getStatus());
    }
   
    @Test
    public void domCaptureEnabledCustomEventWithCaptureFramesTrueRemoveScriptsTrueTest() throws Exception {
        final UICTest t = new UICTest("domCaptureEnabledCustomEventWithCaptureFramesTrueRemoveScriptsTrueTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_custom_event_capture_frames_true_remove_scripts_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_custom_event_capture_frames_true_remove_scripts_true.js", browser);
        }
        
        driver.switchTo().frame("CustomEvent");
        assertTrue(isElementPresent(By.id("firstname")));
        final WebElement firstName = driver.findElement(By.id("firstname"));
        firstName.sendKeys("My");
        assertTrue(isElementPresent(By.id("lastname")));
        final WebElement lastName = driver.findElement(By.id("lastname"));
        lastName.sendKeys("Name");
        assertTrue(isElementPresent(By.id("submitbtn")));
        if (this.currBrowser.contains("ie")) {
            final WebElement submitBtn = driver.findElement(By.id("submitbtnIE"));
            submitBtn.click();
        }
        else {
            final WebElement submitBtn = driver.findElement(By.id("submitbtn"));
            submitBtn.click();
        }
       
        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow);
        if (this.currBrowser.contains("ie")) {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-6", "customIEEvent", "[[\"CustomEvent\"],[\"submitbtn\"]]",
                    this.uicExpectedHTMLDir + "ieDomCaptureCustomEventCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        else {
            verifyDomCaptureCaptureFramesRemoveScriptsTest(t, "dcid-6", "Login", "[[\"CustomEvent\"],[\"submitbtn\"]]",
                    this.uicExpectedHTMLDir + "domCaptureCustomEventCaptureFramesTrueRemoveScriptsTrueTest.txt", true, true);
        }
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    public void verifyDomCaptureCaptureFramesRemoveScriptsTest(final UICTest t, final String expectedDcid, final String expectedEvent,
            final String expectedId, final String expectedHTMLFile, final Boolean captureFramesEnabled, final Boolean removeScriptsEnabled) throws Exception {
        final JSONObject type12Msg = getUICObjectbyDcid(expectedDcid, "12");
        
        assertNotNull("UIC," + browser + ",uicObject,NULL", type12Msg);
        
        // check offset
        verifyOffset(type12Msg, t, 1);
        
        // check screenview offset
        verifyScreenviewOffset(type12Msg, t, 1); 
        
        // check count
        verifyCount(type12Msg, t, 1);
        
        // check fromWeb
        assertTrue(type12Msg.getBoolean("fromWeb"));
        
        // check domCapture
        final JSONObject domCapture = (JSONObject) type12Msg.get("domCapture");
        
        final String root = domCapture.getString("root");
        
        String expectedRootsHTML = readFileAsString(expectedHTMLFile);
        String[] expectedRoots = expectedRootsHTML.split("Root:\n");
        
        if (captureFramesEnabled) {
            // check domCapture frames
            if (!domCapture.has("frames")) {
                t.addMsg("frames", "[]", "");
            }
            
            // check common attributes across frames
            final JSONArray frames = (JSONArray) domCapture.get("frames");
            assertTrue(frames.length() == 2);
            
            for (int i = 0; i < 2; i++) {
                final JSONObject frame = frames.getJSONObject(i);
                final String frameRoot = frame.getString("root");
                
                if (removeScriptsEnabled) {
                    if (frameRoot.matches("(?s).*<script.*>.*")) {
                        t.addMsg("frame root does not contain script tag", "true", "false");
                    }                
                }
                else {
                    if (!frameRoot.matches("(?s).*<script.*>.*")) {
                        t.addMsg("frame root contains script tag", "true", "false");
                    }
                }
                
                System.out.println(frameRoot.replaceAll("\\s+",""));
                System.out.println(expectedRoots[i].replaceAll("\\s+",""));
                assertTrue(frameRoot.replaceAll("\\s+","").equals(expectedRoots[i].replaceAll("\\s+","")));
                assertTrue(frame.has("dcxid"));
                assertTrue(frame.has("host"));
                assertTrue(frame.has("url"));
                assertTrue(frame.has("charset"));
            }
        }
        else {
            assertTrue(!domCapture.has("frames"));
        }
        
//        final String root = domCapture.getString("root");
        if (removeScriptsEnabled) {
            if (root.matches("(?s).*<script.*>.*")) {
                t.addMsg("root does not script tag", "true", "false");
            }
        }
        else {
            if (!root.matches("(?s).*<script.*>.*")) {
                t.addMsg("frame root contains script tag", "true", "false");
            }
        }    
        assertTrue(root.replaceAll("\\s+|cd_frame_id_=\".{32}\"","").equals(expectedRoots[2].replaceAll("\\s+|cd_frame_id_=\".{32}\"","")));
        assertTrue(domCapture.has("host"));
        assertTrue(domCapture.has("url"));
        assertTrue(domCapture.getBoolean("fullDOM"));
        assertFalse(domCapture.getBoolean("forced"));
        assertFalse(domCapture.getBoolean("eventOn"));
        assertTrue(domCapture.has("dcid"));
        
        final String dcid = domCapture.getString("dcid");
        final JSONObject type4Msg = (JSONObject) getUICObjectbyDcid(dcid, "4");
        
        // check offset
        verifyOffset(type4Msg, t, 1);
        
        // check screenview offset
        verifyScreenviewOffset(type4Msg, t, 1); 
        
        // check count
        verifyCount(type4Msg, t, 1);
        
        // check fromWeb
        assertTrue(type4Msg.getBoolean("fromWeb"));
        
        // set some expected values based on expectedEvent
        String expectedDcType = "";
        String expectedDcEvent = "";
        switch (expectedEvent) {
            case "click": 
                expectedDcType = "button"; expectedDcEvent = expectedEvent;
                break;
            case "blur": 
                expectedDcType = "textBox"; expectedDcEvent = "focusout";
                break;
            case "change":
                expectedDcType = "textBox"; expectedDcEvent = "valueChange";
                break;
        }
        
        if (!expectedId.matches(".*[C|c]ustom.*")) {
            final JSONObject target = type4Msg.getJSONObject("target");
            
         // check idType 
            assertTrue(target.has("idType"));
            
            // check id
            final String id = target.getString("id");
            if (!(expectedId).equals(id)) {
                t.addMsg("id", expectedId, id);
            }
            
            // check name 
            final String name = target.getString("name");
            if (expectedId.equals("addChildInputsBtn")) {
                assertTrue(name.isEmpty());
            }
            else if (expectedId.contains("ti_pvt")) {
                assertTrue(name.equals("textInput"));
            }
            else if (expectedId.contains("ti.2")) {
                assertTrue(name.equals("textInput.2"));
            }
            
            // check dcType
            final String dcType = target.getString("dcType");
            assertTrue(expectedDcType.equals(dcType));
            
            // check type
            final String typ = target.getString("type");
            if (!("input").equals(typ)) {
                t.addMsg("type", "input", typ);
            }
            
            // check position
            final JSONObject position = (JSONObject) target.get("position");
            
            // just assert that position values are there
            assertTrue(position.has("height"));
            assertTrue(position.has("width"));
            // problem with IE registering click events
            if (!this.currBrowser.contains("ie")) {
                assertTrue(position.has("relXY"));            	
            }            
//            if (expectedId.equals("addChildInputsBtn")) {
//                verifyPosHeight(position, t, 18);
//                verifyPosWidth(position, t, 111);
//            }
//            else if (expectedId.contains("ti_pvt")) {
//                verifyPosHeight(position, t, 19);
//                verifyPosWidth(position, t, 131);
//            }
//            if (removeScriptsEnabled && expectedId.equals("addChildInputsBtn")) {
//                verifyRelXY(position, t, "2,0");
//            }
//            else if (removeScriptsEnabled && expectedId.equals("[[\"iframe\"],[\"addChildInputsBtn\"]]")) {
//                verifyRelXY(position, t, "2,36");
//            }
//            else if (!removeScriptsEnabled && expectedId.equals("addChildInputsBtn")) {
//                verifyRelXY(position, t, "3,0");
//            }
//            else if (!removeScriptsEnabled && expectedId.equals("[[\"iframe\"],[\"addChildInputsBtn\"]]")) {
//                verifyRelXY(position, t, "3,33");
//            }
//            else if (expectedId.equals("myattr=ti_pvt")) {
//                verifyRelXY(position, t, "3,0");
//            }
//            else if (expectedId.equals("[[\"iframe\"],[\"ti_pvt\"]]")) {
//                verifyRelXY(position, t, "3,14");
//            }
//            
            if (expectedId.contains("addChildInputsBtn")) {
                verifyCurrState(target, t, "Add nested inputs");
                verifySubType(target, t, "button");
            }
            else if (expectedId.contains("ti_pvt")) {
                if (expectedEvent.equals("change")) {
                    verifyCurrState(target, t, "Manisha");
                }
                else if (expectedEvent.equals("blur")) {
                    verifyCurrState(target, t, "");
                }
                verifySubType(target, t, "text");
            }
            else if (expectedId.contains("ti.2")) {
                verifyCurrState(target, t, "Manisha");
                verifySubType(target, t, "text");
            }
            
            // check parent link
            assertFalse(target.getBoolean("isParentLink"));
            
            // check dwell
            verifyDwell(target, t, 1);
        }
       
        // check event
        final JSONObject event = (JSONObject) type4Msg.get("event");
        final String eventType = event.getString("type");
        if (!(expectedEvent).equals(eventType)) {
            t.addMsg("eventType", expectedEvent, eventType);
        }
        if (!expectedId.matches(".*[C|c]ustom.*")) {
            final String dcEvent = event.getString("dcEvent");
            if (!(expectedDcEvent).equals(dcEvent)) {
                t.addMsg("dcEvent", expectedEvent, dcEvent);
            }
            // check focusInOffset
            verifyFocusInOffset(type4Msg, t, 1);
        }
    }

	public final void executeDCXInitJavaScript(final UICTest test,
            final String testcaseFileName, final String browserName) {

        final String jsCommand = getDCXInitJavaScriptFromFile(testcaseFileName);
        /*
         * The code below is when reading the init file via configuration wizard
         * String jsCommand = getDCXInitJavaScript(testcaseFileName,
         * browserName, test.getName(), test);
         */
        // JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        // javascriptExecutor.executeScript("DCX.destroy();");
        // jsCommand = "(function () {var changeTarget;" + jsCommand;
        JSONObject init;

        try {
            System.out.println(jsCommand);

            init = new JSONObject(jsCommand);
            this.uicInit(init, false);

        } catch (final JSONException e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        }

        System.out.println(jsCommand);
        // javascriptExecutor.executeScript(jsCommand);
        // ((JavascriptExecutor)driver).executeAsyncScript("arguments[0](); alert('Hello')");
        try {
            Thread.sleep(500);
        } catch (final InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    public final String getDCXInitJavaScriptFromFile(
            final String dcxInitTestCaseName) {

        final UICTest test = new UICTest("Reading the js file", browser);
        final String jsCommand = extractInitFromDownloadedFile(dcxInitTestCaseName);
        System.out.println("printing contents of jsfile\r\n" + jsCommand);

        if (null == jsCommand) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(jsCommand);
        return jsCommand;
    }

    public final String getDCXInitJavaScript(final String testcaseFileName,
            final String browserName, final String suffix, final UICTest test) {

        final ConfigWizardTest configWizard = new ConfigWizardTest(browserName);

        final String downloadedFileName = configWizard.downLoadConfigFile(
                testcaseFileName, suffix);

        // String jsCommand =
        // extractInitFromDownloadedFile(properties.getProperty("downloadLocation")+
        // "\\testcase" + suffix +".js");
        final String jsCommand = extractInitFromDownloadedFile(downloadedFileName);
        System.out.println(jsCommand);

        if (null == jsCommand) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(jsCommand);
        return jsCommand;

        // return "alert('Manisha')";//jsCommand;
    }

    static void deleteFilesFromDownLoadFolder() throws IOException {

        final File file = new File("C:\\Users\\Administrator\\Downloads");
        String[] myFiles;
        if (file.isDirectory()) {
            myFiles = file.list();
            for (int i = 0; i < myFiles.length; i++) {
                final File myFile = new File(file, myFiles[i]);
                myFile.delete();
            }
        }
    }

    public final String extractInitFromDownloadedFile(final String fileName) {
        Scanner scanner = null;
        try {
            final File file = new File(fileName);
            System.out.println("File path:" + file.getAbsolutePath());
            scanner = new Scanner(file);
            final String content = scanner.useDelimiter("\\Z").next();
            /*
             * if the file is extracyed from the downloaded file, then uncomment
             * the lines below //int startIndex = content.indexOf("DCX.init({");
             * //String init = content.substring(startIndex);
             */
            return content;
        } catch (final FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {
            if (scanner != null) {
                scanner.close();
            }
        }

        return null;

    }
}
