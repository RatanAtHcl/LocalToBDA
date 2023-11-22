package com.tl;

import static org.junit.Assert.assertTrue;

import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

//Test Case TOP-3197: 50260 - Privacy on selectlist with HTML-ID,Custom Attribute,Xpath,CSS selector,RegEx and mask empty 
//Test Case TOP-3198: 50260 - Privacy on selectlist with HTML-ID,Custom Attribute,Xpath,CSS selector,RegEx and mask basic
//Test Case TOP-3199: 50260 - Privacy on selectlist with HTML-ID,Custom Attribute,Xpath,CSS selector,RegEx and mask type
//Test Case TOP-3200: 50260 - Privacy on selectlist with HTML-ID,Custom Attribute,Xpath,CSS selector,RegEx and mask custom

public class ValidatePrivacyOnSelectControls extends UICCustomizeInit{

	private final String browserService = properties
            .getProperty("browserService");
    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String pathSeparator = System.getProperty("file.separator");

	private final String initialFileMaskEmptyW3c;
	private final String initialFileMaskEmptyJq;
	private final String initialFileMaskBasicW3c;
	private final String initialFileMaskBasicJq;
	private final String initialFileMaskTypeW3c;
	private final String initialFileMaskTypeJq;
	private final String initialFileMaskCustomW3c;
	private final String initialFileMaskCustomJq;
	
    public ValidatePrivacyOnSelectControls(final String browser) {
        super(browser, "PrivacyMasking", "index2.html", "addDivBtn", null, false);
        System.out.println(browser);
        this.currentDirectory = System.getProperty("user.dir");
        this.uicTestDataDir = this.currentDirectory + this.pathSeparator
                + "UICTestData" + this.pathSeparator;
        
        this.initialFileMaskEmptyW3c = this.uicTestDataDir
                + "PrivacyMaskingInitFiles" + this.pathSeparator
                + "init_w3c_dom_diff_select_mask_type_empty.js";
        
        this.initialFileMaskEmptyJq = this.uicTestDataDir
                + "PrivacyMaskingInitFiles" + this.pathSeparator
                + "init_jq_dom_diff_select_mask_type_empty.js";

        this.initialFileMaskBasicW3c = this.uicTestDataDir
                + "PrivacyMaskingInitFiles" + this.pathSeparator
                + "init_w3c_dom_diff_select_mask_type_basic.js";

        this.initialFileMaskBasicJq = this.uicTestDataDir
                + "PrivacyMaskingInitFiles" + this.pathSeparator
                + "init_jq_dom_diff_select_mask_type_basic.js";

        this.initialFileMaskTypeW3c = this.uicTestDataDir
                + "PrivacyMaskingInitFiles" + this.pathSeparator
                + "init_w3c_dom_diff_select_mask_type_type.js";

        this.initialFileMaskTypeJq = this.uicTestDataDir
                + "PrivacyMaskingInitFiles" + this.pathSeparator
                + "init_jq_dom_diff_select_mask_type_type.js";

        this.initialFileMaskCustomW3c = this.uicTestDataDir
                + "PrivacyMaskingInitFiles" + this.pathSeparator
                + "init_w3c_dom_diff_select_mask_type_custom.js";

        this.initialFileMaskCustomJq = this.uicTestDataDir
                + "PrivacyMaskingInitFiles" + this.pathSeparator
                + "init_jq_dom_diff_select_mask_type_custom.js";

    }
    
    /*
     * @BeforeClass public void setUpConfigFiles() throws Exception {
     * 
     * }
     */

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
    
    /*********************************************************************************************************************
    *Test Case TOP-3197: 50260 - Privacy on selectlist with HTML-ID,Custom Attribute,Xpath,CSS selector,RegEx and mask empty
    *
    *********************************************************************************************************************/ 

    //Step 4 ~ Step 8 are with W3C flavor
    //Step 4
    //Change the value of the Select list on "Static Div1" outside the iframe to Green
    @Test
    public void testSelectList1SelectChangeMaskTypeEmptyW3C() throws Exception{
    	
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	executeDCXInitJavaScript(initialFileMaskEmptyW3c );
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("abcd");       
               UICTest test = verifySelectList1SelectChangeMaskTypeEmpty(uicObject);
               assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    private UICTest verifySelectList1SelectChangeMaskTypeEmpty(final JSONObject uicObject) throws Exception {
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "");
        
        verifyCurrState(target, test, "");
        return test;
    }
    //Step 5 
    //Change the value of the Select list on newly added div outside the iframe to Option 2
    @Test
    public void testSelectListChangeInNewAddDivMaskTypeEmptyW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	executeDCXInitJavaScript( initialFileMaskEmptyW3c);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	Thread.sleep(1000);
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name(""
               		+ "select.pvt"))).selectByVisibleText("Option 2");
               
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("foo_private");  

               UICTest test = verifySelectList1SelectChangeMaskTypeEmpty(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    	
    	}
    }
    
    //Step 6
    //Change the value of the Select list on "Static Div 2" outside the iframe to Blue
    @Test
    public void testSelectList2SelectChangeMaskTypeEmptyW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	executeDCXInitJavaScript( initialFileMaskEmptyW3c);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList.2")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList.2")));
                   driver.findElement(By.name("selectList.2")).click();
               }
               new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("selectList.2");       
               UICTest test = verifySelectList2SelectChangeMaskTypeEmpty(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }
    
    private UICTest verifySelectList2SelectChangeMaskTypeEmpty(final JSONObject uicObject) throws Exception {
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "");
        
        verifyCurrState(target, test, "");
        return test;
    }
    
    //Step 7
    //Change the value of the Select list on "Static Div1" within the iframe to Green
    @Test
    public void testSelectList3WithinIframeSelectChangeMaskTypeEmptyW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskEmptyW3c);
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));

            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList")));
                driver.findElement(By.name("selectList")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("[[\"iframe\"],[\"foo_priv\"]]");       
            UICTest test = verifySelectList3WithinIframeSelectChangeMaskTypeEmpty(uicObject);
            assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }
    
    private UICTest verifySelectList3WithinIframeSelectChangeMaskTypeEmpty(JSONObject uicObject) throws Exception{
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_WITHIN_IFRAME_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        
        verifyTargetID(target, test, "[[\"iframe\"],[\"foo_priv\"]]");
        
        verifyPrevState(target, test, "");
        
        verifyCurrState(target, test, "");
        return test;    	
    }
    
    //Step 8
    // Change the value of the Select list on "Static Div 2" within the iframe to Blue
    @Test
    public void testSelectList4WithinIframeSelectChangeMaskTypeEmptyW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskEmptyW3c);
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));
            
            driver.findElement(By.id("addDivBtn1")).click();
            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList.2")));
                driver.findElement(By.name("selectList.2")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();            
            
            final JSONObject uicObject = getUICObject("selectList.2");       
            UICTest test = verifySelectList4WithinIframeSelectChangeMaskTypeEmpty(uicObject);
            assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    private UICTest verifySelectList4WithinIframeSelectChangeMaskTypeEmpty(JSONObject uicObject) throws Exception{
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT4_CHANGE_WITHIN_IFRAME_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "");
        
        verifyCurrState(target, test, "");
        return test;    	
    }
    
    //Step 12 ~ Step 16 are with JQ flavor
    //Step 12
    //Change the value of the Select list on "Static Div1" outside the iframe to Green
    @Test
    public void testSelectList1SelectChangeMaskTypeEmptyJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	executeDCXInitJavaScript( initialFileMaskEmptyJq);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("abcd");       
               UICTest test = verifySelectList1SelectChangeMaskTypeEmpty(uicObject);
               assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    //Step 13
    //Change the value of the Select list on newly added div outside the iframe to Option 2
    @Test
    public void testSelectListChangeInNewAddDivMaskTypeEmptyJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	executeDCXInitJavaScript( initialFileMaskEmptyJq);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	Thread.sleep(1000);
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("select.pvt")));
                   driver.findElement(By.name("select.pvt")).click();
               }
               new Select(driver.findElement(By.name(""
               		+ "select.pvt"))).selectByVisibleText("Option 2");
               
           	driver.findElement(By.name("txtarea.pvt")).click();
           	Thread.sleep(1000);
               final JSONObject uicObject = getUICObject("foo_private");  

               UICTest test = verifySelectList1SelectChangeMaskTypeEmpty(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    	
    	}
    }
    
    //Step 14
    //Change the value of the Select list on "Static Div 2" outside the iframe to Blue
    @Test
    public void testSelectList2SelectChangeMaskTypeEmptyJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	executeDCXInitJavaScript( initialFileMaskEmptyJq);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList.2")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList.2")));
                   driver.findElement(By.name("selectList.2")).click();
               }
               new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("selectList.2");       
               UICTest test = verifySelectList2SelectChangeMaskTypeEmpty(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }    
    
    
    //Step 15
    //Change the value of the Select list on "Static Div1" within the iframe to Green
    @Test
    public void testSelectList3WithinIframeSelectChangeMaskTypeEmptyJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskEmptyJq);
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));

            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList")));
                driver.findElement(By.name("selectList")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("[[\"iframe\"],[\"foo_priv\"]]");       
            UICTest test = verifySelectList3WithinIframeSelectChangeMaskTypeEmpty(uicObject);
            assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }
    
    //Step 16
    //Change the value of the Select list on "Static Div 2" within the iframe to Blue
    @Test
    public void testSelectList4WithinIframeSelectChangeMaskTypeEmptyJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskEmptyJq);
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));
            
            driver.findElement(By.id("addDivBtn1")).click();
            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList.2")));
                driver.findElement(By.name("selectList.2")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("selectList.2");       
            UICTest test = verifySelectList4WithinIframeSelectChangeMaskTypeEmpty(uicObject);
            assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    /*********************************************************************************************************************
    *Test Case TOP-3198: 50260 - Privacy on selectlist with HTML-ID,Custom Attribute,Xpath,CSS selector,RegEx and mask basic
    *
    *********************************************************************************************************************/ 
  
    //Step 4 ~ Step 8 are with W3C flavor
    //Step 4
    //Change the value of the Select list on "Static Div1" outside the iframe to Green
    @Test
    public void testSelectList1SelectChangeMaskTypeBasicW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	executeDCXInitJavaScript( initialFileMaskBasicW3c );
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("abcd");       
               UICTest test = verifySelectList1SelectChangeMaskTypeBasic(uicObject);
               assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    private UICTest verifySelectList1SelectChangeMaskTypeBasic(final JSONObject uicObject) throws Exception {
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "XXXXX");
        
        verifyCurrState(target, test, "XXXXX");
        return test;
    }
    //Step 5 
    //Change the value of the Select list on newly added div outside the iframe to Option 2
    @Test
    public void testSelectListChangeInNewAddDivMaskTypeBasicW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	executeDCXInitJavaScript( initialFileMaskBasicW3c);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	Thread.sleep(1000);
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name(""
               		+ "select.pvt"))).selectByVisibleText("Option 2");
               
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("foo_private");  

               UICTest test = verifySelectList1SelectChangeMaskTypeBasic(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    	
    	}
    }
    
    //Step 6
    //Change the value of the Select list on "Static Div 2" outside the iframe to Blue
    @Test
    public void testSelectList2SelectChangeMaskTypeBasicW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	executeDCXInitJavaScript( initialFileMaskBasicW3c);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList.2")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList.2")));
                   driver.findElement(By.name("selectList.2")).click();
               }
               new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("selectList.2");       
               UICTest test = verifySelectList2SelectChangeMaskTypeBasic(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }
    
    private UICTest verifySelectList2SelectChangeMaskTypeBasic(final JSONObject uicObject) throws Exception {
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "XXXXX");
        
        verifyCurrState(target, test, "XXXXX");
        return test;
    }
    
    //Step 7
    //Change the value of the Select list on "Static Div1" within the iframe to Green
    @Test
    public void testSelectList3WithinIframeSelectChangeMaskTypeBasicW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskBasicW3c);
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));

            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList")));
                driver.findElement(By.name("selectList")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("[[\"iframe\"],[\"foo_priv\"]]");       
            UICTest test = verifySelectList3WithinIframeSelectChangeMaskTypeBasic(uicObject);
            assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }
    
    private UICTest verifySelectList3WithinIframeSelectChangeMaskTypeBasic(JSONObject uicObject) throws Exception{
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_WITHIN_IFRAME_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        
        verifyTargetID(target, test, "[[\"iframe\"],[\"foo_priv\"]]");
        
        verifyPrevState(target, test, "XXXXX");
        
        verifyCurrState(target, test, "XXXXX");
        return test;    	
    }
    
    //Step 8
    // Change the value of the Select list on "Static Div 2" within the iframe to Blue
    @Test
    public void testSelectList4WithinIframeSelectChangeMaskTypeBasicW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskBasicW3c );
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));
            
            driver.findElement(By.id("addDivBtn1")).click();
            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList.2")));
                driver.findElement(By.name("selectList.2")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("selectList.2");       
            UICTest test = verifySelectList4WithinIframeSelectChangeMaskTypeBasic(uicObject);
            assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    private UICTest verifySelectList4WithinIframeSelectChangeMaskTypeBasic(JSONObject uicObject) throws Exception{
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT4_CHANGE_WITHIN_IFRAME_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "XXXXX");
        
        verifyCurrState(target, test, "XXXXX");
        return test;    	
    }
    
    //Step 12 ~ Step 16 are with JQ flavor
    //Step 12
    //Change the value of the Select list on "Static Div1" outside the iframe to Green
    @Test
    public void testSelectList1SelectChangeMaskTypeBasicJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	executeDCXInitJavaScript( initialFileMaskBasicJq);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("abcd");       
               UICTest test = verifySelectList1SelectChangeMaskTypeBasic(uicObject);
               assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    //Step 13
    //Change the value of the Select list on newly added div outside the iframe to Option 2
    @Test
    public void testSelectListChangeInNewAddDivMaskTypeBasicJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	executeDCXInitJavaScript( initialFileMaskBasicJq );
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	Thread.sleep(1000);
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name(""
               		+ "select.pvt"))).selectByVisibleText("Option 2");
               
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("foo_private");  

               UICTest test = verifySelectList1SelectChangeMaskTypeBasic(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    	
    	}
    }
    
    //Step 14
    //Change the value of the Select list on "Static Div 2" outside the iframe to Blue
    @Test
    public void testSelectList2SelectChangeMaskTypeBasicJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	executeDCXInitJavaScript( initialFileMaskBasicJq);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList.2")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList.2")));
                   driver.findElement(By.name("selectList.2")).click();
               }

               new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("selectList.2");       
               UICTest test = verifySelectList2SelectChangeMaskTypeBasic(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }    
    
    
    //Step 15
    //Change the value of the Select list on "Static Div1" within the iframe to Green
    @Test
    public void testSelectList3WithinIframeSelectChangeMaskTypeBasicJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskBasicJq );
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));

            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList")));
                driver.findElement(By.name("selectList")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("[[\"iframe\"],[\"foo_priv\"]]");       
            UICTest test = verifySelectList3WithinIframeSelectChangeMaskTypeBasic(uicObject);
            assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }
    
    //Step 16
    //Change the value of the Select list on "Static Div 2" within the iframe to Blue
    @Test
    public void testSelectList4WithinIframeSelectChangeMaskTypeBasicJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskBasicJq);
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));
            
            driver.findElement(By.id("addDivBtn1")).click();
            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList.2")));
                driver.findElement(By.name("selectList.2")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("selectList.2");       
            UICTest test = verifySelectList4WithinIframeSelectChangeMaskTypeBasic(uicObject);
            assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }    
    
    /*********************************************************************************************************************
    *Test Case TOP-3199: 50260 - Privacy on selectlist with HTML-ID,Custom Attribute,Xpath,CSS selector,RegEx and mask type
    *
    *********************************************************************************************************************/ 
  
    //Step 4 ~ Step 8 are with W3C flavor
    //Step 4
    //Change the value of the Select list on "Static Div1" outside the iframe to Green
    @Test
    public void testSelectList1SelectChangeMaskTypeTypeW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	executeDCXInitJavaScript( initialFileMaskTypeW3c );
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("abcd");       
               UICTest test = verifySelectList1SelectChangeMaskTypeType(uicObject);
               assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    private UICTest verifySelectList1SelectChangeMaskTypeType(final JSONObject uicObject) throws Exception {
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "xxx");
        
        verifyCurrState(target, test, "xxxxx");
        return test;
    }
    //Step 5 
    //Change the value of the Select list on newly added div outside the iframe to Option 2
    @Test
    public void testSelectListChangeInNewAddDivMaskTypeTypeW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	executeDCXInitJavaScript( initialFileMaskTypeW3c);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	Thread.sleep(1000);
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name(""
               		+ "select.pvt"))).selectByVisibleText("Option 2");
               
               driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("foo_private");  

               UICTest test = verifySelectListChangeInNewAddDivMaskTypeType(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    	
    	}
    }

    private UICTest verifySelectListChangeInNewAddDivMaskTypeType(final JSONObject uicObject) throws Exception {
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "xxx");
        
        verifyCurrState(target, test, "xxxxx");
        return test;
    }
    
    //Step 6
    //Change the value of the Select list on "Static Div 2" outside the iframe to Blue
    @Test
    public void testSelectList2SelectChangeMaskTypeTypeW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	executeDCXInitJavaScript( initialFileMaskTypeW3c);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList.2")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList.2")));
                   driver.findElement(By.name("selectList.2")).click();
               }
               new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("selectList.2");       
               UICTest test = verifySelectList2SelectChangeMaskTypeType(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }
    
    private UICTest verifySelectList2SelectChangeMaskTypeType(final JSONObject uicObject) throws Exception {
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "xxx");
        
        verifyCurrState(target, test, "xxxx");
        return test;
    }
    
    //Step 7
    //Change the value of the Select list on "Static Div1" within the iframe to Green
    @Test
    public void testSelectList3WithinIframeSelectChangeMaskTypeTypeW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskTypeW3c);
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));

            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList")));
                driver.findElement(By.name("selectList")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("[[\"iframe\"],[\"foo_priv\"]]");       
            UICTest test = verifySelectList3WithinIframeSelectChangeMaskTypeType(uicObject);
            assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }
    
    private UICTest verifySelectList3WithinIframeSelectChangeMaskTypeType(JSONObject uicObject) throws Exception{
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_WITHIN_IFRAME_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        
        verifyTargetID(target, test, "[[\"iframe\"],[\"foo_priv\"]]");
        
        verifyPrevState(target, test, "xxx");
        
        verifyCurrState(target, test, "xxxxx");
        return test;    	
    }
    
    //Step 8
    // Change the value of the Select list on "Static Div 2" within the iframe to Blue
    @Test
    public void testSelectList4WithinIframeSelectChangeMaskTypeTypeW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskTypeW3c );
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));
            
            driver.findElement(By.id("addDivBtn1")).click();
            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList.2")));
                driver.findElement(By.name("selectList.2")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("selectList.2");       
            UICTest test = verifySelectList4WithinIframeSelectChangeMaskTypeType(uicObject);
            assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    private UICTest verifySelectList4WithinIframeSelectChangeMaskTypeType(JSONObject uicObject) throws Exception{
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT4_CHANGE_WITHIN_IFRAME_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "xxx");
        
        verifyCurrState(target, test, "xxxx");
        return test;    	
    }
    
    //Step 12 ~ Step 16 are with JQ flavor
    //Step 12
    //Change the value of the Select list on "Static Div1" outside the iframe to Green
    @Test
    public void testSelectList1SelectChangeMaskTypeTypeJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	executeDCXInitJavaScript( initialFileMaskTypeJq);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("abcd");       
               UICTest test = verifySelectList1SelectChangeMaskTypeType(uicObject);
               assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    //Step 13
    //Change the value of the Select list on newly added div outside the iframe to Option 2
    @Test
    public void testSelectListChangeInNewAddDivMaskTypeTypeJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	executeDCXInitJavaScript( initialFileMaskTypeJq );
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	Thread.sleep(1000);
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name(""
               		+ "select.pvt"))).selectByVisibleText("Option 2");
               
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("foo_private");  

               UICTest test = verifySelectList1SelectChangeMaskTypeType(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    	
    	}
    }
    
    //Step 14
    //Change the value of the Select list on "Static Div 2" outside the iframe to Blue
    @Test
    public void testSelectList2SelectChangeMaskTypeTypeJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	executeDCXInitJavaScript( initialFileMaskTypeJq);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList.2")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList.2")));
                   driver.findElement(By.name("selectList.2")).click();
               }
               new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("selectList.2");       
               UICTest test = verifySelectList2SelectChangeMaskTypeType(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }    
    
    
    //Step 15
    //Change the value of the Select list on "Static Div1" within the iframe to Green
    @Test
    public void testSelectList3WithinIframeSelectChangeMaskTypeTypeJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskTypeJq );
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));

            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList")));
                driver.findElement(By.name("selectList")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("[[\"iframe\"],[\"foo_priv\"]]");       
            UICTest test = verifySelectList3WithinIframeSelectChangeMaskTypeType(uicObject);
            assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }
    
    //Step 16
    //Change the value of the Select list on "Static Div 2" within the iframe to Blue
    @Test
    public void testSelectList4WithinIframeSelectChangeMaskTypeTypeJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskTypeJq);
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));
            
            driver.findElement(By.id("addDivBtn1")).click();
            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList.2")));
                driver.findElement(By.name("selectList.2")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("selectList.2");       
            UICTest test = verifySelectList4WithinIframeSelectChangeMaskTypeType(uicObject);
            assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }        
    
    /*********************************************************************************************************************
    *Test Case TOP-3200: 50260 - Privacy on selectlist with HTML-ID,Custom Attribute,Xpath,CSS selector,RegEx and mask custom
    *
    *********************************************************************************************************************/ 
  
    //Step 4 ~ Step 8 are with W3C flavor
    //Step 4
    //Change the value of the Select list on "Static Div1" outside the iframe to Green
    @Test
    public void testSelectList1SelectChangeMaskTypeCustomW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	executeDCXInitJavaScript( initialFileMaskCustomW3c );
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("abcd");       
               UICTest test = verifySelectList1SelectChangeMaskTypeCustom(uicObject);
               assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    private UICTest verifySelectList1SelectChangeMaskTypeCustom(final JSONObject uicObject) throws Exception {
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "!@#$%*");
        
        verifyCurrState(target, test, "!@#$%*");
        return test;
    }
    //Step 5 
    //Change the value of the Select list on newly added div outside the iframe to Option 2
    @Test
    public void testSelectListChangeInNewAddDivMaskTypeCustomW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	executeDCXInitJavaScript( initialFileMaskCustomW3c);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	Thread.sleep(1000);
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name(""
               		+ "select.pvt"))).selectByVisibleText("Option 2");
               
               driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("foo_private");  

               UICTest test = verifySelectListChangeInNewAddDivMaskTypeCustom(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    	
    	}
    }

    private UICTest verifySelectListChangeInNewAddDivMaskTypeCustom(final JSONObject uicObject) throws Exception {
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "!@#$%*");
        
        verifyCurrState(target, test, "!@#$%*");
        return test;
    }
    
    //Step 6
    //Change the value of the Select list on "Static Div 2" outside the iframe to Blue
    @Test
    public void testSelectList2SelectChangeMaskTypeCustomW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	executeDCXInitJavaScript( initialFileMaskCustomW3c);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList.2")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList.2")));
                   driver.findElement(By.name("selectList.2")).click();
               }
               new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("selectList.2");       
               UICTest test = verifySelectList2SelectChangeMaskTypeCustom(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }
    
    private UICTest verifySelectList2SelectChangeMaskTypeCustom(final JSONObject uicObject) throws Exception {
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "!@#$%*");
        
        verifyCurrState(target, test, "!@#$%*");
        return test;
    }
    
    //Step 7
    //Change the value of the Select list on "Static Div1" within the iframe to Green
    @Test
    public void testSelectList3WithinIframeSelectChangeMaskTypeCustomW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskCustomW3c);
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));

            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList")));
                driver.findElement(By.name("selectList")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("[[\"iframe\"],[\"foo_priv\"]]");       
            UICTest test = verifySelectList3WithinIframeSelectChangeMaskTypeCustom(uicObject);
            assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }
    
    private UICTest verifySelectList3WithinIframeSelectChangeMaskTypeCustom(JSONObject uicObject) throws Exception{
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT_CHANGE_WITHIN_IFRAME_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        
        verifyTargetID(target, test, "[[\"iframe\"],[\"foo_priv\"]]");
        
        verifyPrevState(target, test, "!@#$%*");
        
        verifyCurrState(target, test, "!@#$%*");
        return test;    	
    }
    
    //Step 8
    // Change the value of the Select list on "Static Div 2" within the iframe to Blue
    @Test
    public void testSelectList4WithinIframeSelectChangeMaskTypeCustomW3C() throws Exception{
    	if (this.browserService.toLowerCase().contains("w3c")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskCustomW3c );
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));
            
            driver.findElement(By.id("addDivBtn1")).click();
            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList.2")));
                driver.findElement(By.name("selectList.2")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("selectList.2");       
            UICTest test = verifySelectList4WithinIframeSelectChangeMaskTypeCustom(uicObject);
            assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    private UICTest verifySelectList4WithinIframeSelectChangeMaskTypeCustom(JSONObject uicObject) throws Exception{
    	final UICTest test = new UICTest("_PRIVACY_MASK_SELECT4_CHANGE_WITHIN_IFRAME_W3C", browser);
        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyPrevState(target, test, "!@#$%*");
        
        verifyCurrState(target, test, "!@#$%*");
        return test;    	
    }
    
    //Step 12 ~ Step 16 are with JQ flavor
    //Step 12
    //Change the value of the Select list on "Static Div1" outside the iframe to Green
    @Test
    public void testSelectList1SelectChangeMaskTypeCustomJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	executeDCXInitJavaScript( initialFileMaskCustomJq);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("abcd");       
               UICTest test = verifySelectList1SelectChangeMaskTypeCustom(uicObject);
               assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }
    
    //Step 13
    //Change the value of the Select list on newly added div outside the iframe to Option 2
    @Test
    public void testSelectListChangeInNewAddDivMaskTypeCustomJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	executeDCXInitJavaScript( initialFileMaskCustomJq );
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	Thread.sleep(1000);
           	assertTrue(isElementPresent(By.name("selectList")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList")));
                   driver.findElement(By.name("selectList")).click();
               }
               new Select(driver.findElement(By.name(""
               		+ "select.pvt"))).selectByVisibleText("Option 2");
               
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("foo_private");  

               UICTest test = verifySelectList1SelectChangeMaskTypeCustom(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    	
    	}
    }
    
    //Step 14
    //Change the value of the Select list on "Static Div 2" outside the iframe to Blue
    @Test
    public void testSelectList2SelectChangeMaskTypeCustomJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	executeDCXInitJavaScript( initialFileMaskCustomJq);
           	
           	driver.findElement(By.id("addDivBtn")).click();
           	   	
           	assertTrue(isElementPresent(By.name("selectList.2")));
               if (("ie").equals(browser) || ("IE9").equals(browser)) {
                   focusOnElement(driver.findElement(By.name("selectList.2")));
                   driver.findElement(By.name("selectList.2")).click();
               }
               new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
           	driver.findElement(By.id("addDivBtn")).click();
               final JSONObject uicObject = getUICObject("selectList.2");       
               UICTest test = verifySelectList2SelectChangeMaskTypeCustom(uicObject);
               assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }    
    
    
    //Step 15
    //Change the value of the Select list on "Static Div1" within the iframe to Green
    @Test
    public void testSelectList3WithinIframeSelectChangeMaskTypeCustomJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskCustomJq );
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));

            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList")));
                driver.findElement(By.name("selectList")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("[[\"iframe\"],[\"foo_priv\"]]");       
            UICTest test = verifySelectList3WithinIframeSelectChangeMaskTypeCustom(uicObject);
            assertTrue(test.getErrs(), test.getStatus());    		
    	}
    }
    
    //Step 16
    //Change the value of the Select list on "Static Div 2" within the iframe to Blue
    @Test
    public void testSelectList4WithinIframeSelectChangeMaskTypeCustomJq() throws Exception{
    	if (this.browserService.toLowerCase().contains("jq")) {
        	final String mainWindow = driver.getWindowHandles().iterator().next();

        	executeDCXInitJavaScript( initialFileMaskCustomJq);
        	    	   	
            assertTrue(isElementPresent(By.id("iframe")));

            driver.switchTo().frame(driver.findElement(By.id("iframe")));
            
            driver.findElement(By.id("addDivBtn1")).click();
            
            if (("ie").equals(browser) || ("IE9").equals(browser)) {
                focusOnElement(driver.findElement(By.name("selectList.2")));
                driver.findElement(By.name("selectList.2")).click();
            }
            
            
            new Select(driver.findElement(By.name("selectList.2"))).selectByVisibleText("BLUE");
        	
            driver.findElement(By.id("addDivBtn1")).click();
            
            driver.switchTo().defaultContent();
            
            final JSONObject uicObject = getUICObject("selectList.2");       
            UICTest test = verifySelectList4WithinIframeSelectChangeMaskTypeCustom(uicObject);
            assertTrue(test.getErrs(), test.getStatus());
    		
    	}
    }           
}
