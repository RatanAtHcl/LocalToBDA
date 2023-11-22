package com.tl;

import static org.junit.Assert.*;

import java.io.File;
import java.io.FileNotFoundException;
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
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.UnhandledAlertException;
import org.openqa.selenium.WebElement;

public class DOM_Capture_HTML extends UICInit {
    private final String browserService = properties
            .getProperty("browserService");
    private final String currentDirectory;
    private final String uicTestDataDir;
    private final String uicExpectedHTMLDir;

    private final String pathSeparator = System.getProperty("file.separator");

    public DOM_Capture_HTML(final String browser) {
        super(browser, "DOMCapture", "html5.html", "ai", null, true);
        
        this.currentDirectory = System.getProperty("user.dir");
        this.uicTestDataDir = this.currentDirectory + this.pathSeparator
                + "UICTestData" + this.pathSeparator;
        this.uicExpectedHTMLDir = this.currentDirectory + this.pathSeparator
                + "testWebsite" + this.pathSeparator + "DOMCaptureiFrame" + this.pathSeparator;
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
    public void doctypeCapturedOnHTML5PageTest() throws Exception {
        if (this.currBrowser.contains("ie")) {
            return;
        }
        final UICTest t = new UICTest("doctypeCapturedOnHTML5PageTest", browser);
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
        verifyDoctypeCapturedOnHTML5PageTest(t);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public void verifyDoctypeCapturedOnHTML5PageTest(final UICTest t) throws Exception {        
        assertTrue(isElementPresent(By.id("submitbtn")));
        final WebElement submitBtn = driver.findElement(By.id("submitbtn"));
        submitBtn.click();
        
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
            t.addMsg("charset", "iso-8859-1", "");
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
    public void charsetISO8859Test() throws Exception {
        if (this.currBrowser.contains("ie")) {
            return;
        }
        final UICTest t = new UICTest("charsetISO8859Test", browser);
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
        verifyCharsetISO8859Test(t);
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    public void verifyCharsetISO8859Test(final UICTest t) throws Exception {
        assertTrue(isElementPresent(By.id("submitbtn")));
        final WebElement submitBtn = driver.findElement(By.id("submitbtn"));
        submitBtn.click();
        
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
        if (!this.currBrowser.contains("ie") && !("windows-1252").equals(charset)) {
            t.addMsg("charset", "windows-1252", charset);
        }
        else if (this.currBrowser.contains("ie") && !("iso-8859-1").equals(charset)) {
            t.addMsg("charset", "windows-1252", charset);
        }
        
        // check dcid in domCapture
        if (!domCapture.has("dcid")) {
            t.addMsg("dcid", "dcid-1", "");
        }
    }
    
    @Test
    public void domCaptureEnabledOnLoadWithCaptureFramesTrueRemoveScriptsTrueTest() {
        if (this.currBrowser.contains("ie")) {
            return;
        }
        final UICTest t = new UICTest("domCaptureEnabledOnLoadWithCaptureFramesTrueRemoveScriptsTrueTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_load_capture_frames_true_remove_scripts_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_load_capture_frames_true_remove_scripts_true.js", browser);
        }  
        
        assertTrue(isElementPresent(By.id("changescreenview1")));
        // clicking on link triggers alert, need to handle it
        try {
            driver.findElement(By.id("changescreenview1")).click();
        } catch (UnhandledAlertException e){
            Alert alert = driver.switchTo().alert();
            alert.accept();
            driver.findElement(By.id("changescreenview1")).click();
        }
        try {
            verifyDomCaptureLoadCaptureFramesRemoveScriptsTest(t);
        } catch (Exception e) {
            System.out.println("Exception: " + e);
        }
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    public void verifyDomCaptureLoadCaptureFramesRemoveScriptsTest(final UICTest t) throws Exception {
        final JSONObject uicObject = getUICObjectbymsgType("2");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);
        verifyOffset(uicObject, t, 1);
        verifyScreenviewOffset(uicObject, t, 1); 
        verifyCount(uicObject, t, 1);
        assertTrue(uicObject.getBoolean("fromWeb"));
        final JSONObject screenview = (JSONObject) uicObject.get("screenview");
        System.out.println(screenview.toString());
        assertTrue(screenview.getString("type").equals("LOAD"));
        assertTrue(screenview.getString("name").equals("NotCapturedLoad1"));
        assertTrue(!screenview.getString("url").isEmpty());
        assertTrue(!screenview.getString("host").isEmpty());
        assertTrue(!screenview.getString("referrer").isEmpty());
    }
    
    @Test
    public void domCaptureEnabledOnUnloadWithCaptureFramesTrueRemoveScriptsTrueTest() {
        if (this.currBrowser.contains("ie")) {
            return;
        }
        final UICTest t = new UICTest("domCaptureEnabledOnUnloadWithCaptureFramesTrueRemoveScriptsTrueTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_unload_capture_frames_true_remove_scripts_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_unload_capture_frames_true_remove_scripts_true.js", browser);
        }  
        
        assertTrue(isElementPresent(By.id("changescreenviewUnload")));
        // clicking on link triggers alert, need to handle it
        try {
            driver.findElement(By.id("changescreenviewUnload")).click();
        } catch (UnhandledAlertException e){
            Alert alert = driver.switchTo().alert();
            alert.accept();
            driver.findElement(By.id("changescreenviewUnload")).click();
        }
        try {
            verifyDomCaptureUnloadCaptureFramesRemoveScriptsTest(t, "dcid-2", 
                    this.uicExpectedHTMLDir + "domCaptureUnloadCaptureFramesTrueRemoveScriptsTrueTest.txt");
        } catch (Exception e) {
            System.out.println("Exception: " + e);
        }
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void domCaptureEnabledOnUnloadMultipleWithCaptureFramesTrueRemoveScriptsTrueTest() {
        if (this.currBrowser.contains("ie")) {
            return;
        }
        final UICTest t = new UICTest("domCaptureEnabledOnUnloadMultipleWithCaptureFramesTrueRemoveScriptsTrueTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_unload_capture_frames_true_remove_scripts_true.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_unload_capture_frames_true_remove_scripts_true.js", browser);
        }  
        
        assertTrue(isElementPresent(By.id("changescreenviewUnload")));
        // clicking on link triggers alert, need to handle it
        try {
            driver.findElement(By.id("changescreenviewUnload")).click();
        } catch (UnhandledAlertException e){
            Alert alert = driver.switchTo().alert();
            alert.accept();
            driver.findElement(By.id("changescreenviewUnload")).click();
        }
        try {
            verifyDomCaptureUnloadCaptureFramesRemoveScriptsTest(t, "dcid-2", 
                    this.uicExpectedHTMLDir + "domCaptureUnloadCaptureFramesTrueRemoveScriptsTrueTest.txt");
            verifyDomCaptureUnloadCaptureFramesRemoveScriptsTest(t, "dcid-3", 
                    this.uicExpectedHTMLDir + "domCaptureUnloadCaptureFramesTrueRemoveScriptsTrueTest.txt");
        } catch (Exception e) {
            System.out.println("Exception: " + e);
        }
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    public void verifyDomCaptureUnloadCaptureFramesRemoveScriptsTest(final UICTest t, final String expectedDcid, 
            final String expectedHTMLFile) throws Exception {
        final JSONObject type12Msg = getUICObjectbyDcid(expectedDcid, "12");
        assertNotNull("UIC," + browser + ",uicObject,NULL", type12Msg);
        verifyOffset(type12Msg, t, 1);
        verifyScreenviewOffset(type12Msg, t, 1); 
        verifyCount(type12Msg, t, 1);
        assertTrue(type12Msg.getBoolean("fromWeb"));
        
        final JSONObject domCapture = (JSONObject) type12Msg.get("domCapture");
        final JSONArray frames = (JSONArray) domCapture.get("frames");
        assertTrue(frames.length() == 0);
        
        String expectedRootHTML = readFileAsString(expectedHTMLFile);
        assertTrue(domCapture.get("root").equals(expectedRootHTML));
        
        assertTrue(domCapture.get("charset").equals("windows-1252"));
        assertTrue(!domCapture.getString("host").isEmpty());
        assertTrue(!domCapture.getString("url").isEmpty());
        assertTrue(domCapture.getBoolean("fullDOM"));
        assertFalse(domCapture.getBoolean("forced"));
        assertFalse(domCapture.getBoolean("eventOn"));

        final JSONObject[] type2Msgs = getUICObjectArray("2", 2);
        for (int i = 0; i < 2; i++) {
            final JSONObject type2Msg = type2Msgs[i];
            verifyOffset(type2Msg, t, 1);
            verifyScreenviewOffset(type2Msg, t, 1); 
            verifyCount(type2Msg, t, 1);
            assertTrue(type2Msg.getBoolean("fromWeb"));
            final JSONObject screenview = (JSONObject) type2Msg.get("screenview");
            assertTrue(screenview.getString("type").equals("UNLOAD"));
            assertTrue(!screenview.getString("url").isEmpty());
            assertTrue(!screenview.getString("host").isEmpty());
            assertTrue(screenview.getString("referrer").isEmpty());
            if (type2Msg.has("dcid")) {
                assertTrue(type2Msg.getString("dcid").equals(type12Msg.getString("dcid")));                
                assertTrue(screenview.getString("name").equals("TestScreenViewUnload1"));
            }
            else {
                assertTrue(screenview.getString("name").equals("root"));
            }
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
