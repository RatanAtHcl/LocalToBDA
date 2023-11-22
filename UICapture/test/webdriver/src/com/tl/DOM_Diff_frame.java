package com.tl;

import org.json.JSONObject;
import org.json.JSONArray;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runners.Parameterized;
import org.junit.runner.RunWith;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.openqa.selenium.By;

@RunWith(Parameterized.class)
public class DOM_Diff_frame extends UICInit {
	
	private final String browserService = properties
            .getProperty("browserService");
    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String pathSeparator = System.getProperty("file.separator");
	
	public DOM_Diff_frame(final String browser) {
        super(browser, "DOM_Diff_frame", "index.html", "addDivBtn", null, true);
        System.out.println(browser);
        this.currentDirectory = System.getProperty("user.dir");
        this.uicTestDataDir = this.currentDirectory + this.pathSeparator
                + "UICTestData" + this.pathSeparator;
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
    
    @Test
    public void fr1_nestedInputsDiffsAreBeingCapturedCorrectly() throws Exception {
    	
    	final UICTest t = new UICTest("fr1_nestedInputsDiffsAreBeingCapturedCorrectly", browser);
    	
    	executeDCXInitJavaScript(t, this.uicTestDataDir
                + "DOMDiffInitFiles" + this.pathSeparator
                + "init_nested_inputs_diffs.js", browser);
    	
    	
    	//Click the button "Add nested inputs" within frame
    	driver.switchTo().frame("fr1");
    	assertTrue(isElementPresent(By.id("addChildInputsBtn1")));
    	final WebElement e1 = driver.findElement(By.id("addChildInputsBtn1"));
    	e1.click();
    	
    	assertTrue(isElementPresent(By.className("domcapture")));
    	driver.findElement(By.className("domcapture")).click();
    	
    	//Wait until the desired elements appear on the website
    	WebDriverWait wait = new WebDriverWait(driver, 15);
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("container_1.target.td_ip")));
    	
    	final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);
    	
    	//Check if click event occurred
    	final JSONObject c = getUICObject("[[\"fr1\"],[\"addChildInputsBtn1\"]]");
    	assertNotNull("UIC," + browser + ",uicObject,NULL", c);
    	
    	final JSONObject uicObject = getUICObjectbymsgType("12");
    	assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);
    	
    	verifyScreenviewOffset(uicObject, t, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1);
        
        final JSONObject diffs = (JSONObject) uicObject.get("domCapture");
        
        if(diffs.getBoolean("fullDOM")) {
        	t.addMsg("fullDOM", "false", "true");
        }
        
        //Get the diffs and split them
        JSONArray diffsArray = (JSONArray) diffs.get("diffs");
        JSONObject diff1 = diffsArray.getJSONObject(0);
        JSONObject diff2 = diffsArray.getJSONObject(1);
        
        String xpath1 = diff1.getString("xpath");
        if(!xpath1.equals("[[\"fr1\"],[\"container_1.target.td\"]]")) {
        	t.addMsg("xpath", "[[\"fr1\"],[\"container_1.target.td\"]]", xpath1);
        }
        
        String xpath2 = diff2.getString("xpath");
        if(!xpath2.equals("[[\"fr1\"],[\"container_2.target.td\"]]")) {
        	t.addMsg("xpath", "[[\"fr1\"],[\"container_2.target.td\"]]", xpath2);
        }
        
        String root1 = diff1.getString("root");
        if(!root1.equals("<td id=\"container_1.target.td\">Dynamic:<br><input type=\"password\" name=\"container_1.target.td_ip\" value=\"\"></td>")) {
        	t.addMsg("root", "<td id=\"container_1.target.td\">Dynamic:<br><input type=\"password\" name=\"container_1.target.td_ip\" value=\"\"></td>"
        			, root1);
        }
        
        String root2 = diff2.getString("root");
        if(!root2.equals("<td id=\"container_2.target.td\">Dynamic:<br><input type=\"password\" name=\"container_2.target.td_ip\" value=\"\"></td>")) {
        	t.addMsg("root", "<td id=\"container_2.target.td\">Dynamic:<br><input type=\"password\" name=\"container_2.target.td_ip\" value=\"\"></td>"
        			, root2);
        }
        
        //Check if the event dcid and the DOM diff dcid match
        String dcid1 = getUICObject("[[\"fr1\"],[\"html\",0],[\"body\",0],[\"input\",0]]").getString("dcid");
        String dcid2 = diffs.getString("dcid");
        
        if(!dcid1.equals(dcid2)) {
    		t.addMsg("dcid's do not match", dcid1, dcid2);
    	}
        
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void fr2_elementsAddToATargetDevAreBeingCaptured() throws Exception {
    	
    	final UICTest t = new UICTest("fr2_elementsAddToATargetDevAreBeingCaptured", browser);
    	
    	executeDCXInitJavaScript(t, this.uicTestDataDir
                + "DOMDiffInitFiles" + this.pathSeparator
                + "init_nested_inputs_diffs.js", browser);
    	
    	
    	//Click the button "Add to Target Div" within frame
    	driver.switchTo().frame("fr1");
    	assertTrue(isElementPresent(By.id("addDivBtn1")));
    	final WebElement e1 = driver.findElement(By.id("addDivBtn1"));
    	e1.click();
    	
    	assertTrue(isElementPresent(By.className("domcapture")));
    	driver.findElement(By.className("domcapture")).click();
    	
    	//Wait until desired element appears
    	WebDriverWait wait = new WebDriverWait(driver, 15);
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("txtarea.pvt")));
    	
    	final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);
        
    	final JSONObject c = getUICObject("[[\"fr1\"],[\"addDivBtn1\"]]");
    	assertNotNull("UIC," + browser + ",uicObject,NULL", c);
    	
    	final JSONObject uicObject = getUICObjectbymsgType("12");
    	assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);
    	
    	verifyScreenviewOffset(uicObject, t, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1);
        
        final JSONObject diffs = (JSONObject) uicObject.get("domCapture");
        
        if(!diffs.getString("dcid").contains("dcid-4")) {
        	t.addMsg("dcid", "dcid-4", diffs.getString("dcid"));
        }
        
        if(diffs.getBoolean("fullDOM")) {
        	t.addMsg("fullDOM", "false", "true");
        }
        
        JSONArray diffsArray = (JSONArray) diffs.get("diffs");
        
        JSONObject diff = diffsArray.getJSONObject(0);
        
        String xpath = diff.getString("xpath");
        if(!xpath.equals("[[\"fr1\"],[\"html\",0],[\"body\",0],[\"div\",1]]")) {
        	t.addMsg("xpath", "[[\"fr1\"],[\"html\",0],[\"body\",0],[\"div\",1]]", xpath);
        }
        
        String root = diff.getString("root");
        if(!root.equals("<div class=\"bluebg\"><div><div>Input 1<input type=\"text\" name=\"ip-x-1\" id=\"ip-x-1\" value=\"\"></div><div>Input 2<input type=\"password\" name=\"ip-x-2\" id=\"ip-x-2\" value=\"\"></div><div>Input 3<input type=\"text\" name=\"ip-x-3\" id=\"ip-x-3\" value=\"\"></div><div>Radio 1:<input type=\"radio\" name=\"ip.radio1\" id=\"ip.radio1\" class=\"toggle\">Radio 2:<input type=\"radio\" name=\"ip.radio2\" id=\"ip.radio2\" class=\"toggle\">Radio 3:<input type=\"radio\" name=\"ip.radio3\" id=\"ip.radio3\" class=\"toggle\"></div><div>Checkbox 1:<input type=\"checkbox\" name=\"ip.checkbox.1\" id=\"ip.checkbox.1\" class=\"toggle\">Checkbox 2:<input type=\"checkbox\" name=\"ip.checkbox.2\" id=\"ip.checkbox.2\" class=\"toggle\">Checkbox 3:<input type=\"checkbox\" name=\"ip.checkbox.3\" id=\"ip.checkbox.3\" class=\"toggle\"></div><div>Textarea:<textarea name=\"txtarea.pvt\" id=\"txtarea.pvt\" value=\"\"></textarea></div><div>Select List:<select name=\"select.pvt\" id=\"select.pvt\"><option value=\"Option 1\" selected=\"selected\">Option 1</option><option value=\"Option 2\">Option 2</option><option value=\"Option 3\">Option 3</option></select></div></div></div>")) {
        	t.addMsg("root", "<div class=\"bluebg\"><div><div>Input 1<input type=\"text\" name=\"ip-x-1\" id=\"ip-x-1\" value=\"\"></div><div>Input 2<input type=\"password\" name=\"ip-x-2\" id=\"ip-x-2\" value=\"\"></div><div>Input 3<input type=\"text\" name=\"ip-x-3\" id=\"ip-x-3\" value=\"\"></div><div>Radio 1:<input type=\"radio\" name=\"ip.radio1\" id=\"ip.radio1\" class=\"toggle\">Radio 2:<input type=\"radio\" name=\"ip.radio2\" id=\"ip.radio2\" class=\"toggle\">Radio 3:<input type=\"radio\" name=\"ip.radio3\" id=\"ip.radio3\" class=\"toggle\"></div><div>Checkbox 1:<input type=\"checkbox\" name=\"ip.checkbox.1\" id=\"ip.checkbox.1\" class=\"toggle\">Checkbox 2:<input type=\"checkbox\" name=\"ip.checkbox.2\" id=\"ip.checkbox.2\" class=\"toggle\">Checkbox 3:<input type=\"checkbox\" name=\"ip.checkbox.3\" id=\"ip.checkbox.3\" class=\"toggle\"></div><div>Textarea:<textarea name=\"txtarea.pvt\" id=\"txtarea.pvt\" value=\"\"></textarea></div><div>Select List:<select name=\"select.pvt\" id=\"select.pvt\"><option value=\"Option 1\" selected=\"selected\">Option 1</option><option value=\"Option 2\">Option 2</option><option value=\"Option 3\">Option 3</option></select></div></div></div>"
        			, root);
        }
        
        //Check if DOM diff dcid and the event dcid match
        String dcid1 = getUICObject("[[\"fr1\"],[\"html\",0],[\"body\",0],[\"input\",0]]").getString("dcid");
        String dcid2 = diffs.getString("dcid");
        
        if(!dcid1.equals(dcid2)) {
    		t.addMsg("dcid's do not match", dcid1, dcid2);
    	}
        
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void fr3_valuesEnteredWithinATargetDivAreBeingCaptured() throws Exception {
    	
    	final UICTest t = new UICTest("fr3_valuesEnteredWithinATargetDivAreBeingCaptured", browser);
    	
    	executeDCXInitJavaScript(t, this.uicTestDataDir
                + "DOMDiffInitFiles" + this.pathSeparator
                + "init_nested_inputs_diffs.js", browser);
    	
    	
    	//Click the button "Add to Target Div" within frame
    	driver.switchTo().frame("fr1");
    	assertTrue(isElementPresent(By.id("addDivBtn1")));
    	final WebElement e1 = driver.findElement(By.id("addDivBtn1"));
    	e1.click();
    	
    	WebDriverWait wait = new WebDriverWait(driver, 15);
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("txtarea.pvt")));
    	
    	assertTrue(isElementPresent(By.id("ip-x-1")));
    	final WebElement t1 = driver.findElement(By.id("ip-x-1"));
    	t1.click();
    	t1.sendKeys("TestText1");
    	
    	assertTrue(isElementPresent(By.id("ip-x-2")));
    	final WebElement t2 = driver.findElement(By.id("ip-x-2"));
    	t2.click();
    	t2.sendKeys("TestText2");
    	
    	assertTrue(isElementPresent(By.id("ip-x-3")));
    	final WebElement t3 = driver.findElement(By.id("ip-x-3"));
    	t3.click();
    	t3.sendKeys("TestText3");

    	assertTrue(isElementPresent(By.id("select.pvt")));
        new Select(driver.findElement(By.id("select.pvt")))
        .selectByVisibleText("Option 2");
        
        assertTrue(isElementPresent(By.id("ip.radio2")));
        final WebElement rb = driver.findElement(By.id("ip.radio2"));
        rb.click(); 	
    	
    	assertTrue(isElementPresent(By.id("txtarea.pvt")));
    	final WebElement t4 = driver.findElement(By.id("txtarea.pvt"));
    	t4.click();
    	t4.sendKeys("TestText4");
    	
        assertTrue(isElementPresent(By.id("ip.checkbox.1")));
    	final WebElement c1 = driver.findElement(By.id("ip.checkbox.1"));
    	c1.click();

    	final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);
        
        //Individually grab each type 4 event, check if it stores the new value, and check if the
        //dcid if the DOM diff matches the dcid of the event
        JSONObject event = getUICObject("[[\"fr1\"],[\"ip-x-1\"]]");
        verifyCurrState((JSONObject) event.get("target"), t, "value", "TestText1");
        String dcid = event.getString("dcid");
        JSONObject domdiff = getUICObjectbyDcid(dcid, "12");
        assertNotNull(domdiff);
        DomVerify(t, domdiff);
        
        event = getUICObject("[[\"fr1\"],[\"ip-x-2\"]]");
        verifyCurrState((JSONObject) event.get("target"), t, "value", "TestText2");
        dcid = event.getString("dcid");
        domdiff = getUICObjectbyDcid(dcid, "12");
        assertNotNull(domdiff);
        DomVerify(t, domdiff);
        
        event = getUICObject("[[\"fr1\"],[\"ip-x-3\"]]");
        verifyCurrState((JSONObject) event.get("target"), t, "value", "TestText3");
        dcid = event.getString("dcid");
        domdiff = getUICObjectbyDcid(dcid, "12");
        assertNotNull(domdiff);
        DomVerify(t, domdiff);
        
        event = getUICObject("[[\"fr1\"],[\"select.pvt\"]]");
        verifyCurrState((JSONObject) event.get("target"), t, "value", "Option 2");
        dcid = event.getString("dcid");
        domdiff = getUICObjectbyDcid(dcid, "12");
        assertNotNull(domdiff);
        DomVerify(t, domdiff);
        
        event = getUICObject("[[\"fr1\"],[\"ip.radio2\"]]");
        verifyCurrState((JSONObject) event.get("target"), t, "value", "on");
        dcid = event.getString("dcid");
        domdiff = getUICObjectbyDcid(dcid, "12");
        assertNotNull(domdiff);
        DomVerify(t, domdiff);
        
        event = getUICObject("[[\"fr1\"],[\"txtarea.pvt\"]]");
        verifyCurrState((JSONObject) event.get("target"), t, "value", "TestText4");
        dcid = event.getString("dcid");
        domdiff = getUICObjectbyDcid(dcid, "12");
        assertNotNull(domdiff);  
        DomVerify(t, domdiff);
    	
        assertTrue(t.getErrs(), t.getStatus());
        
    }
    
    @Test
    public void fr4_attributeDiffsAreBeingCapturedCorrectly() throws Exception{
    	
    	final UICTest t = new UICTest("fr4_attributeDiffsAreBeingCapturedCorrectly", browser);
    	
    	executeDCXInitJavaScript(t, this.uicTestDataDir
                + "DOMDiffInitFiles" + this.pathSeparator
                + "init_nested_inputs_diffs.js", browser);
    	
    	//Click the Toggle Attribute button
    	driver.switchTo().frame("fr1");
    	assertTrue(isElementPresent(By.id("toggleAttribute1")));
    	final WebElement e1 = driver.findElement(By.id("toggleAttribute1"));
    	e1.click();
    	
    	assertTrue(isElementPresent(By.className("domcapture")));
    	driver.findElement(By.className("domcapture")).click();
    	
    	final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);
        
        //Grab the type 12 element
        final JSONObject uicObject = getUICObjectbymsgType("12");
    	assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);
    	
    	verifyScreenviewOffset(uicObject, t, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1);
        
        final JSONObject diffs = (JSONObject) uicObject.get("domCapture");
        
        if(diffs.getBoolean("fullDOM")) {
        	t.addMsg("fullDOM", "false", "true");
        }
        
        JSONArray diffsArray = (JSONArray) diffs.get("diffs");
        JSONObject diff1 = diffsArray.getJSONObject(0);
        JSONObject diff2 = diffsArray.getJSONObject(1);
        JSONObject diff3 = diffsArray.getJSONObject(2);
        JSONObject diff4 = diffsArray.getJSONObject(3);
        
        //Check if xpath and roots of the DOM Diff match the expected values 
        String xpath1 = diff1.getString("xpath");
        if(!xpath1.equals("[[\"fr1\"],[\"cb1\"]]")) {
        	t.addMsg("xpath1", "[[\"fr1\"],[\"cb1\"]]", xpath1);
        }
        JSONArray attr1 = (JSONArray) diff1.get("attributes");
        if(!attr1.get(0).toString().equals("{\"name\":\"style\",\"value\":\"height: 13px; width: 13px; visibility: hidden;\"}")) {
        	t.addMsg("value1", "{\"name\":\"style\",\"value\":\"height: 13px; width: 13px; visibility: hidden;\"}", attr1.get(0).toString());
        }
        
        String xpath2 = diff2.getString("xpath");
        if(!xpath2.equals("[[\"fr1\"],[\"cb2\"]]")) {
        	t.addMsg("xpath2", "[[\"fr1\"],[\"cb2\"]]", xpath2);
        }
        JSONArray attr2 = (JSONArray) diff2.get("attributes");
        if(!attr2.get(0).toString().equals("{\"name\":\"style\",\"value\":\"visibility: hidden;\"}")) {
        	t.addMsg("value2", "{\"name\":\"style\",\"value\":\"visibility: hidden;\"}", attr2.get(0).toString());
        }
        
        String xpath3 = diff3.getString("xpath");
        if(!xpath3.equals("[[\"fr1\"],[\"cb3\"]]")) {
        	t.addMsg("xpath3", "[[\"fr1\"],[\"cb3\"]]", xpath3);
        }
        JSONArray attr3 = (JSONArray) diff3.get("attributes");
        if(!attr3.get(0).toString().equals("{\"name\":\"style\",\"value\":\"visibility: hidden;\"}")) {
        	t.addMsg("value3", "{\"name\":\"style\",\"value\":\"visibility: hidden;\"}", attr3.get(0).toString());
        }
        
        String xpath4 = diff4.getString("xpath");
        if(!xpath4.equals("[[\"fr1\"],[\"container_1\"],[\"table\",0],[\"tbody\",0],[\"tr\",2],[\"td\",1],[\"select\",0]]")) {
        	t.addMsg("xpath4", "[[\"fr1\"],[\"container_1\"],[\"table\",0],[\"tbody\",0],[\"tr\",2],[\"td\",1],[\"select\",0]]", xpath4);
        }
        JSONArray attr4 = (JSONArray) diff4.get("attributes");
        if(!attr4.get(0).toString().equals("{\"name\":\"style\",\"value\":\"visibility: hidden;\"}")) {
        	t.addMsg("value4", "{\"name\":\"style\",\"value\":\"visibility: hidden;\"}", attr4.get(0).toString());
        }
        
        String dcid1 = getUICObject("[[\"fr1\"],[\"html\",0],[\"body\",0],[\"input\",0]]").getString("dcid");
        String dcid2 = diffs.getString("dcid");
        
        //Check if the DOM Diff dcid matches the event dcid
        if(!dcid1.equals(dcid2)) {
    		t.addMsg("dcid's do not match", dcid1, dcid2);
    	}
        
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void fr5_valuesEnteredWithinNestedInputsBeingCapturedCorrectly() throws Exception {
    	
    	final UICTest t = new UICTest("fr5_valuesEnteredWithinNestedInputsBeingCapturedCorrectly", browser);
    	
    	executeDCXInitJavaScript(t, this.uicTestDataDir
                + "DOMDiffInitFiles" + this.pathSeparator
                + "init_nested_inputs_diffs.js", browser);
    	
    	//Click the AddChildInputs button
    	driver.switchTo().frame("fr1");
    	assertTrue(isElementPresent(By.id("addChildInputsBtn1")));
    	final WebElement e1 = driver.findElement(By.id("addChildInputsBtn1"));
    	e1.click();
    	
    	assertTrue(isElementPresent(By.name("container_1.target.td_ip")));
    	final WebElement t1 = driver.findElement(By.name("container_1.target.td_ip"));
    	t1.click();
    	t1.sendKeys("TestText1");
    	
    	assertTrue(isElementPresent(By.className("domcapture")));
    	driver.findElement(By.className("domcapture")).click();
    	
    	final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);
        
        //Get the type 12 element DOM Diff
        final JSONObject uicObject = getUICObjectbymsgType("12");
        
        verifyScreenviewOffset(uicObject, t, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1);
        
        final JSONObject diffs = (JSONObject) uicObject.get("domCapture");
        
        if(diffs.getBoolean("fullDOM")) {
        	t.addMsg("fullDOM", "false", "true");
        }
        
        //Check if DOM Diff attributes match the expected values
        JSONArray diffsArray = (JSONArray) diffs.get("diffs");
        JSONObject diff = diffsArray.getJSONObject(0);
        
        String root = diff.getString("root");
        if(!root.equals("<td id=\"container_1.target.td\">Dynamic:<br><input type=\"password\" name=\"container_1.target.td_ip\" value=\"TestText1\"></td>")) {
        	t.addMsg("root", "<td id=\"container_1.target.td\">Dynamic:<br><input type=\"password\" name=\"container_1.target.td_ip\" value=\"TestText1\"></td>", root);
        }
    	
    	final JSONObject v = (JSONObject) getUICObject("[[\"fr1\"],[\"container_1.target.td\"],[\"input\",0]]");
    	final JSONObject v1 = (JSONObject) v.get("target");
    	verifyCurrState(v1, t, "value", "TestText1");
    	
        String dcid1 = v.getString("dcid");
    	String dcid2 = diffs.getString("dcid");
    	
    	//Check if DOM Diff dcid and the type 4 event dcid match
    	if(!dcid1.equals(dcid2)) {
    		t.addMsg("dcid's do not match", dcid1, dcid2);
    	}
    	
    	assertTrue(t.getErrs(), t.getStatus());
    	
    }
    
    @Test
    public void fr6_DOMcapturesTriggeredByCustomUIEvents() throws Exception {
    	
    	final UICTest t = new UICTest("fr6_DOMcapturesTriggeredByCustomUIEvents", browser);
    	
    	executeDCXInitJavaScript(t, this.uicTestDataDir
                + "DOMDiffInitFiles" + this.pathSeparator
                + "init_nested_inputs_diffs.js", browser);
    	
    	driver.switchTo().frame("fr2");
    	assertTrue(isElementPresent(By.id("firstname")));
    	final WebElement e1 = driver.findElement(By.id("firstname"));
    	e1.click();
    	e1.sendKeys("Test");
    	
    	final WebElement e2 = driver.findElement(By.id("lastname"));
    	e2.click();
    	e2.sendKeys("Test");
    	
    	driver.findElement(By.id("submitbtn")).click();
    	
    	final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);
    	
    	final JSONObject uicObject = getUICObjectByEventType("[[\"fr2\"],[\"submitbtn\"]]", "Login");
    	
    	verifyScreenviewOffset(uicObject, t, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1);
        
        //Check if desired message in the type 4 element is present
    	final JSONObject target = (JSONObject) uicObject.get("target");
    	final JSONObject currState = (JSONObject) target.get("currState");
    	final String message = currState.getString("message");
    	if(!message.equals("FirstName: Test LastName: Test")) {
    		t.addMsg("message", "FirstName: Test LastName: Test", message);
    	}
    	
    }
    
    
    
    //************************************************************************
    //************************************************************************
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
    
    //This method does the basic verification for the Diff besides values like the 
    //actual diff attributes
    public void DomVerify(UICTest t, JSONObject uicObject) throws Exception {
    	verifyScreenviewOffset(uicObject, t, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1);
        
        final JSONObject diffs = (JSONObject) uicObject.get("domCapture");
        
        if(diffs.getBoolean("fullDOM")) {
        	t.addMsg("fullDOM", "false", "true");
        }
    }
    
}
