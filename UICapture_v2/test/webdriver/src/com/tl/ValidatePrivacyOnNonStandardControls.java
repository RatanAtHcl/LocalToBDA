package com.tl;

import static org.junit.Assert.assertTrue;

import java.util.LinkedList;

import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runners.Parameterized.Parameters;
import org.openqa.selenium.By;

//Test Case TOP-3250: 53519 - Privacy on non standard controls and mask empty
//Test Case TOP-3251: 53519 - Privacy on non standard controls and mask basic
//Test Case TOP-3252: 53519 - Privacy on non standard controls and mask type
//Test Case TOP-3253: 53519 - Privacy on non standard controls and mask custom

public class ValidatePrivacyOnNonStandardControls extends UICCustomizeInit{
    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String maskType;
    private final String flavor;
	private final String browserService = properties.getProperty("browserService");
    private final String pathSeparator = System.getProperty("file.separator");
   
    public ValidatePrivacyOnNonStandardControls(final String browser, final String flavor, final String maskType) {
        super(browser, "PrivacyMasking", "index2.html", "addDivBtn", null, false);
        System.out.println("Start test with paramter: [ browser: "+browser+" flavor: "+flavor+ " maskType: " + maskType+" ]");
        
        this.maskType = maskType;
        this.flavor = flavor;
        
        this.currentDirectory = System.getProperty("user.dir");
        this.uicTestDataDir = this.currentDirectory + this.pathSeparator
                + "UICTestData" + this.pathSeparator;
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
        String initialFile = getInitialJsFile(this.flavor, this.maskType) ;

        executeDCXInitJavaScript( initialFile );
    
    }

    @Override
    @After
    public void tearDown() throws Exception {
        super.tearDown();
    }
    
    @Parameters(name = "{0}")
    public static LinkedList<String[]> data() {
        loadProperties();
        final LinkedList<String[]> params = new LinkedList<String[]>();
        final String browsers = properties.getProperty("browsers");
        final Integer ieVersion = Integer.parseInt(properties
                .getProperty("ieVersion"));
        final String[] tempBrowsers = browsers.split(",");
    	final String flavor = properties.getProperty("browserService");        
    	final String[] maskTypeList= {"empty","basic","type","custom"};
    	
        for (int i = 0; i < tempBrowsers.length; i++) {
        	String addBrowser = tempBrowsers[i];
        	if (("ie").equals(tempBrowsers[i])){
        		addBrowser = getIEbyVersion(ieVersion);
        	}
        	
        	for(String type : maskTypeList){
        		String[] param = {addBrowser, flavor, type };
            	params.add(param);
        	}	
        }
        return params;
    }
    
    public String getInitialJsFile(String flavor, String maskType){
    	return this.uicTestDataDir
        + "PrivacyMaskingInitFiles" + this.pathSeparator
        + "init_"+flavor.toLowerCase()+"_dom_diff_non_standard_mask_type_"+maskType.toLowerCase()+".js";
    }
    


    private void verifyResult(UICTest uicTest, JSONObject uicObject, String preExpected, String curExpected) throws Exception{

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, uicTest, "change");
        
        final JSONObject target = (JSONObject) uicObject.get("target");
        
    	if(preExpected != null){
            verifyPrevState(target, uicTest, preExpected);
            
    	}
    	
    	if(curExpected != null){
            verifyCurrState(target, uicTest, curExpected);    		
    	}
    	assertTrue(uicTest.getErrs(), uicTest.getStatus());
    	
    }
    
    @Test
    public void testCheckBoxInStaticDiv() throws Exception{

    	assertTrue(isElementPresent(By.name("redBox")));
    	
    	driver.findElement(By.name("redBox")).click();
    	
    	driver.findElement(By.id("addDivBtn")).click();    	    	
    	
    	final UICTest test = new UICTest("_PRIVACY_MASK_NON_STANDARD_CHANGE_"+this.browserService+"_"+this.maskType, browser);
    	
    	final JSONObject uicObject = getUICObject("redBox");   
    	
    	String preExpected = null;
    	
    	String curExpected =getExpectedMaskValue(this.maskType, "red" ) ;
    	
    	verifyResult(test, uicObject, preExpected, curExpected);
    	
    }
    
    @Test
    public void testRadioButtonInStaticDiv() throws Exception{

    	assertTrue(isElementPresent(By.id("rb1")));
    	
    	driver.findElement(By.id("rb1")).click();
    	
    	driver.findElement(By.id("addDivBtn")).click();    	    	
    	
    	final UICTest test = new UICTest("_PRIVACY_MASK_NON_STANDARD_CHANGE_"+this.browserService+"_"+this.maskType, browser);
    	
    	final JSONObject uicObject = getUICObject("[[\"container_1\"],[\"table\",0],[\"tbody\",0],[\"tr\",1],[\"td\",1],[\"input\",0]]");   
    	
    	String preExpected = null;
    	
    	String curExpected = getExpectedMaskValue(this.maskType, "red" );
    	
    	verifyResult(test, uicObject, preExpected, curExpected);
    	
    }
    
    @Test
    public void testTextareaInStaticDiv() throws Exception{
    	
    	final String testString = "test TEXT 123";
    	
    	assertTrue(isElementPresent(By.name("textareaInput")));

    	driver.findElement(By.name("textareaInput")).sendKeys(testString);
    	
    	driver.findElement(By.id("addDivBtn")).click();    	    	
    	
    	final UICTest test = new UICTest("_PRIVACY_MASK_NON_STANDARD_CHANGE_"+this.browserService+"_"+this.maskType, browser);
    	
    	final JSONObject uicObject = getUICObject("textareaInput");   
    	
    	String preExpected =  null;
    	
    	String curExpected = getExpectedMaskValue(this.maskType, testString );
    	
    	verifyResult(test, uicObject, preExpected, curExpected);
    	
    }
    
    @Test
    public void testCheckBoxInStaticDivInIframe() throws Exception{
    	
        assertTrue(isElementPresent(By.id("iframe")));
        
        driver.switchTo().frame(driver.findElement(By.id("iframe")));
        
        driver.findElement(By.id("cb1")).click();
        
        driver.findElement(By.id("addDivBtn1")).click();
        
        driver.switchTo().defaultContent();
        
        final UICTest test = new UICTest("_PRIVACY_MASK_NON_STANDARD_CHANGE_"+this.browserService+"_"+this.maskType, browser);
        
    	final JSONObject uicObject = getUICObject("[[\"iframe\"],[\"cb1\"]]");   
    	
    	String preExpected =  null;
    	
    	String curExpected = getExpectedMaskValue(this.maskType, "red" );
    	
    	verifyResult(test, uicObject, preExpected, curExpected);
    }
    
    @Test
    public void testRadioButtonInStaticDivInIframe() throws Exception{
    	
        assertTrue(isElementPresent(By.id("iframe")));
            	
        driver.switchTo().frame(driver.findElement(By.id("iframe")));
        
        driver.findElement(By.id("rb1")).click();
        
        driver.findElement(By.id("addDivBtn1")).click();
        
        driver.switchTo().defaultContent();
        
        final UICTest test = new UICTest("_PRIVACY_MASK_NON_STANDARD_CHANGE_"+this.browserService+"_"+this.maskType, browser);
        
    	final JSONObject uicObject = getUICObject("[[\"iframe\"],[\"container_1\"],[\"table\",0],[\"tbody\",0],[\"tr\",1],[\"td\",1],[\"input\",0]]");   
    	
    	String preExpected =  null;
    	
    	String curExpected = getExpectedMaskValue(this.maskType, "red" );
    	
    	verifyResult(test, uicObject, preExpected, curExpected);
    	
    }
    
    @Test
    public void testTextareaInStaticDivInIframe()throws Exception{
    	
    	final String testString = "test TEXT 123";
    	
        assertTrue(isElementPresent(By.id("iframe")));
            	
        driver.switchTo().frame(driver.findElement(By.id("iframe")));
        
    	driver.findElement(By.name("textareaInput")).sendKeys(testString);
    	
    	driver.findElement(By.id("addDivBtn1")).click();   
        
        driver.switchTo().defaultContent();
        
        final UICTest test = new UICTest("_PRIVACY_MASK_NON_STANDARD_CHANGE_"+this.browserService+"_"+this.maskType, browser);
        
    	final JSONObject uicObject = getUICObject("[[\"iframe\"],[\"ai\"]]");   
    	
    	String preExpected =  null;
    	
    	String curExpected = getExpectedMaskValue(this.maskType, testString );
    	
    	verifyResult(test, uicObject, preExpected, curExpected);    	 
    }

    
}
