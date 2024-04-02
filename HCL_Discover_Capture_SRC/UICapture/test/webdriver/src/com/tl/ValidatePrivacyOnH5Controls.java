package com.tl;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.util.LinkedList;

import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runners.Parameterized.Parameters;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class ValidatePrivacyOnH5Controls extends UICCustomizeInit{
    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String maskType;
    private final String flavor;
	private final String browserService = properties.getProperty("browserService");
    private final String pathSeparator = System.getProperty("file.separator");
    
    
    public ValidatePrivacyOnH5Controls(final String browser, final String flavor, final String maskType) {
        super(browser, "h5", "index.html", "index", null, false);
        
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
        	if (!("firefox").equals(tempBrowsers[i])){
        		continue;
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
        + "init_"+flavor.toLowerCase()+"_no_dom_diff_h5_mask_type_"+maskType.toLowerCase()+".js";
    }
    
    private void verifyResult(UICTest uicTest, JSONObject uicObject, String preExpected, String curExpected, String eventType) throws Exception{

        final JSONObject event = (JSONObject) uicObject.get("event");
        
        if(eventType == null){
            verifyEventType(event, uicTest, "change");        	
        }else{
            verifyEventType(event, uicTest, eventType);        	
        	
        }
        
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
    public void testBirthDayInput() throws Exception{
    	
        if (browser.toLowerCase().contains("firefox") || browser.toLowerCase().contains("ie")) {
            System.out
                    .println("###########################################################################");
            System.out
                    .println("testBirthDayInput() has been ignored on FireFox and IE as the HTML5 Select Time element is not supported on it");
            driver.quit();
            return;
        }
        // System.out.println(driver.getEval("navigator.appVersion;"));

    	final String date = "2013-08-02";

        assertTrue(isElementPresent(By.id("br")));
        final WebElement element = driver.findElement(By.id("br"));

        final JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.getElementById('br').value='"+date+"'");

        element.click();
        Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("bt")).sendKeys("Test");

        final JSONObject uicObject = getUICObject("br");
        
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

    	final UICTest test = new UICTest("_PRIVACY_MASK_H5_CHANGE_"+this.browserService+"_"+this.maskType, browser);

    	String preExpected = null;
    	
    	String curExpected =getExpectedMaskValue(this.maskType, date ) ;
    	
    	verifyResult(test, uicObject, preExpected, curExpected, "blur");    	
    }
    
    @Test
    public void testBirthDayTimeInput() throws Exception{
    	
        if (browser.toLowerCase().contains("firefox") || browser.toLowerCase().contains("ie")) {
            System.out
                    .println("###########################################################################");
            System.out
                    .println("testBirthDayInput() has been ignored on FireFox and IE as the HTML5 Select Time element is not supported on it");
            driver.quit();
            return;
        }

        
    	final String date = "2010-12-28T14:57:00";

        assertTrue(isElementPresent(By.id("bd")));

        final WebElement element = driver.findElement(By.id("bd"));

        // java script to set the value for this HTML5 element
        final JavascriptExecutor js = (JavascriptExecutor) driver;
        
        js.executeScript("document.getElementById('bd').value='"+date+"'");

        element.click();
        
        Thread.sleep(this.DWELL_TIME);
        
        driver.findElement(By.id("bt")).click();

        final UICTest test = new UICTest("_PRIVACY_MASK_H5_CHANGE_"+this.browserService+"_"+this.maskType, browser);
        
    	final JSONObject uicObject = getUICObject("bd");   
    	
    	String preExpected = null;
    	
    	String curExpected =getExpectedMaskValue(this.maskType, date ) ;
    	
    	verifyResult(test, uicObject, preExpected, curExpected,"blur");           	
    }
    
    @Test
    public void testBirthMonthInput() throws Exception{
    	
        if (browser.toLowerCase().contains("firefox") || browser.toLowerCase().contains("ie")) {
            System.out
                    .println("###########################################################################");
            System.out
                    .println("testBirthDayInput() has been ignored on FireFox and IE as the HTML5 Select Time element is not supported on it");
            driver.quit();
            return;
        }

        final String date = "2013-07";
        
        assertTrue(isElementPresent(By.id("bm")));
        
        final WebElement element = driver.findElement(By.id("bm"));

        // java script to set the value for this HTML5 element
        final JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.getElementById('bm').value='2013-07'");

        element.click();
        driver.findElement(By.id("bt")).click();

        final UICTest test = new UICTest("_PRIVACY_MASK_H5_CHANGE_"+this.browserService+"_"+this.maskType, browser);
        
        final JSONObject uicObject = getUICObject("bm");
        
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

    	String preExpected = null;
    	
    	String curExpected =getExpectedMaskValue(this.maskType, date ) ;
    	
    	verifyResult(test, uicObject, preExpected, curExpected,"blur");
    	
    	verifyResult(test, uicObject, preExpected, curExpected,"blur");   
    	
    }
    
}
