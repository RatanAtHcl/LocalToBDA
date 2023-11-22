package com.tl;

import java.util.LinkedList;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runners.Parameterized.Parameters;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

public class ValidateInactivityTimeout extends UICCustomizeInit{
    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String flavor;
	private final String browserService = properties.getProperty("browserService");
	private final String pathSeparator = System.getProperty("file.separator");
    private final String timeout;


	public ValidateInactivityTimeout(final String browser, final String flavor, final String timeout) {
	    super(browser, "h4", "index.html", "bi", null, false);
	    
	    System.out.println("Start test with paramter: [ browser: "+browser+" flavor: "+flavor+ " timeout: " + timeout+" ]");
	    
	    this.timeout = timeout;
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
	    String initialFile = getInitialJsFile(this.flavor, this.timeout) ;
	
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
	    
		final String[] timeoutList= {"0","60"};
		
	    for (int i = 0; i < tempBrowsers.length; i++) {
	    	
	    	String addBrowser = tempBrowsers[i];
	    	if (("ie").equals(tempBrowsers[i])){
	    		continue; //pass IE in this test suit.
	    	}
	    	
	    	for(String type : timeoutList){
	    		String[] param = {addBrowser, flavor, type };
	        	params.add(param);
	    	}	
	    }
	    return params;
	}
	
    public String getInitialJsFile(String flavor, String timeout){
    	return this.uicTestDataDir
        + "InactivityTimeoutInitFiles" + this.pathSeparator
        + "init_"+flavor.toLowerCase()+"_inactivity_timeout_"+timeout.toLowerCase()+".js";
    }
	
    
    private void verifyResult(UICTest uicTest,  String timeout) throws Exception
    {
    	String currentStatus = getCoreStatus();
    	if(!"loaded".equals(currentStatus)){
    		uicTest.addMsg("Check start status", "loaded", currentStatus);
    		return;
    	}
    	
    	if("60".equals(timeout)){
    		int sleepSeconds = 65;
    		Thread.sleep(sleepSeconds * 1000);
    		currentStatus = getCoreStatus();
    		if(!"destroyed".equals(currentStatus)){
    			uicTest.addMsg("Check status after sleep "+sleepSeconds, "destroyed", currentStatus);
    		}
    	}else{
    		int sleepSeconds = 60*10;
    		Thread.sleep(sleepSeconds * 1000);    		
    		currentStatus = getCoreStatus();
    		if(!"loaded".equals(currentStatus)){
    			uicTest.addMsg("Check status after sleep "+sleepSeconds, "destroyed", currentStatus);
    		}
    	}
    }
    
    private String getCoreStatus() throws Exception{
        final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;

        String status = (String)javascriptExecutor.executeScript("return DCX.getState()");

        return status;
    }
    
    @Test
    public void testTimeout() throws Exception {
    	
    	driver.findElement(By.id("bi")).click();
    	
    	final UICTest test = new UICTest("_INACTIVITY_TIMEOUT_"+this.browserService+"_"+this.timeout, browser);

    	verifyResult(test,this.timeout);
    }

}