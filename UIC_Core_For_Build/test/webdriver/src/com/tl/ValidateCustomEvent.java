package com.tl;

import static org.junit.Assert.assertTrue;

import java.util.LinkedList;

import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runners.Parameterized.Parameters;
import org.openqa.selenium.By;


//TOP-1549: Story - 36338 : DOM Captures triggered by Custom UI Events on HTML5 page
//TOP-1551: Story - 36338 : DOM Captures triggered by Custom UI Events on iframe
//TOP-1553: Story - 36338 : DOM Captures triggered by Custom UI Events on frame

public class ValidateCustomEvent extends UICCustomizeInit{
    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String flavor;
	private final String browserService = properties.getProperty("browserService");
	private final String page;
	private final String browser;
	private final String pathSeparator = System.getProperty("file.separator");
    
    
    public ValidateCustomEvent(final String browser, final String flavor, final String page) {
        super(browser, "CustomEvent\\"+page, "index.html", "index", null, false);
        
        System.out.println("Start test with paramter: [ browser: "+browser+" flavor: "+flavor+ " page: " + page+" ]");
        
        this.flavor = flavor;
        this.page = page;
        this.browser = browser;
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
        String initialFile = getInitialJsFile(this.browser, this.flavor, this.page) ;

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
        
    	final String[] pageList= {"html5","frame","iframe"};
    	
        for (int i = 0; i < tempBrowsers.length; i++) {
        	String addBrowser = tempBrowsers[i];
        	if (("ie").equals(tempBrowsers[i])){
        		continue;
        	}
        	
        	for(String type : pageList){
        		String[] param = {addBrowser, flavor, type };
            	params.add(param);
        	}	
        }
        return params;
    }
    
    public String getInitialJsFile(String browser, String flavor, String page){
    	return this.uicTestDataDir
        + "CustomEventInitFiles" + this.pathSeparator
        + "init_"+flavor.toLowerCase()+"_custom_event_"+page.toLowerCase()+".js";
    }
    
    private void verifyResult(UICTest uicTest,JSONObject uicObject) throws Exception
    {
        final JSONObject event = (JSONObject) uicObject.get("event");
        
        verifyEventType(event, uicTest, "Login");
    	
        final JSONObject target = (JSONObject) uicObject.get("target");
        

        JSONObject currState = (JSONObject)  target.get("currState");
        	
        String message = currState.getString("message");
        	
        if(!message.contains("FirstName") && !message.contains("LastName")){
            uicTest.addMsg("Detail message", "include FirstName and LastName", "none of them");
        }
        
    }
    
    @Test
    public void testHTML5() throws Exception{
    	if(!"html5".equals(this.page)){
    		System.out.println("Skip this test case due to other page");
    		return;
    	}
    	
    	assertTrue(isElementPresent(By.id("firstname")));
    	
    	driver.findElement(By.id("firstname")).sendKeys("f");
    	
    	driver.findElement(By.id("lastname")).sendKeys("l");
    	
    	driver.findElement(By.id("submitbtn")).click();
    	
    	final UICTest test = new UICTest("_CUSTOM_EVENT_"+this.browserService+"_"+this.page, browser);
    	
    	final JSONObject uicObject = getUICObjectByEventType("submitbtn","Login");
    	
    	verifyResult(test ,uicObject);
    	
    } 
    
    @Test
    public void testFrame() throws Exception{
    	if(!"frame".equals(this.page)){
    		System.out.println("Skip this test case due to other page");
    		return;
    	}    	
    	
    	assertTrue(isElementPresent(By.id("fr1")));
    	
    	driver.switchTo().frame(driver.findElement(By.id("fr1")));
    	
    	driver.findElement(By.id("firstname")).sendKeys("f");
    	
    	driver.findElement(By.id("lastname")).sendKeys("l");
    	
    	driver.findElement(By.id("submitbtn")).click();
    	
    	driver.switchTo().defaultContent();
    	
    	final UICTest test = new UICTest("_CUSTOM_EVENT_"+this.browserService+"_"+this.page, browser);
    	
    	final JSONObject uicObject = getUICObjectByEventType("[[\"fr1\"],[\"submitbtn\"]]","Login");  
    	
    	verifyResult(test ,uicObject);
    		
    }
    
    @Test
    public void testIFrameOutSide() throws Exception{
    	if(!"iframe".equals(this.page)){
    		System.out.println("Skip this test case due to other page");
    		return;
    	}    	
    	
    	assertTrue(isElementPresent(By.id("firstname")));
    	
    	driver.findElement(By.id("firstname")).sendKeys("f");
    	
    	driver.findElement(By.id("lastname")).sendKeys("l");
    	
    	driver.findElement(By.id("submitbtn")).click();
    	
    	final UICTest test = new UICTest("_CUSTOM_EVENT_"+this.browserService+"_"+this.page, browser);
    	
    	final JSONObject uicObject = getUICObjectByEventType("submitbtn","Login"); 
    	
    	verifyResult(test ,uicObject);
    	
    }
    
    @Test
    public void testIFrameInSide() throws Exception{
    	if(!"iframe".equals(this.page)){
    		System.out.println("Skip this test case due to other page");
    		return;
    	}    	
    	
    	assertTrue(isElementPresent(By.id("iframe01")));
    	
    	driver.switchTo().frame(driver.findElement(By.id("iframe01")));
    	
    	driver.findElement(By.id("firstname")).sendKeys("f");
    	
    	driver.findElement(By.id("lastname")).sendKeys("l");
    	
    	driver.findElement(By.id("submitbtn")).click();
    	
    	driver.switchTo().defaultContent();
    	
    	final UICTest test = new UICTest("_CUSTOM_EVENT_"+this.browserService+"_"+this.page, browser);
    	
    	final JSONObject uicObject = getUICObjectByEventType("[[\"iframe01\"],[\"submitbtn\"]]","Login"); 
    	
    	verifyResult(test ,uicObject);
    	
    }
    
}
