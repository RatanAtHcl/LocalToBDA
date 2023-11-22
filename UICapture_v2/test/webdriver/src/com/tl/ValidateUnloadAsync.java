package com.tl;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.openqa.selenium.By;

@RunWith(Parameterized.class)

//TOP-1911: Story - 25897 : Enable asynchronous XHR on page unload.
//TOP-1912: Story - 25897 : Disable asynchronous XHR on page unload.
public class ValidateUnloadAsync extends UICCustomizeInit{

	private final String browserService = properties
            .getProperty("browserService");
    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String pathSeparator = System.getProperty("file.separator");

	
    public ValidateUnloadAsync(final String browser) {
        super(browser, "h4", "index2.html", "clickTest", null, false);
        System.out.println(browser);
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
    }

    @Override
    @After
    public void tearDown() throws Exception {
        super.tearDown();
    }
    
    //To test the async request on unload, the request target was sent to a special php to make the request more than 5S.
    @Test
    public void testOnunloadAsyncTrueW3c() throws Exception{
    	
    	final UICTest test = new UICTest("_ON_UNLOAD_ASYNC_TRUE", browser);
    	executeDCXInitJavaScript( this.uicTestDataDir
             + "AsyncReqOnUnload" + this.pathSeparator
             + "init_w3c_async_req_onunload_true.js");
    		long startTimestamp = System.currentTimeMillis();
    		driver.findElement(By.id("clickTest")).click();
    		long durationTime = System.currentTimeMillis() - startTimestamp;

    		if(durationTime > 4000){
    			test.addMsg("loading time", "4000", ""+durationTime);
    		}
    		
    }
    
    @Test
    public void testOnunloadAsyncFalseW3c() throws Exception{
    	
    	final UICTest test = new UICTest("_ON_UNLOAD_ASYNC_FALSE", browser);
    	executeDCXInitJavaScript( this.uicTestDataDir
             + "AsyncReqOnUnload" + this.pathSeparator
             + "init_w3c_async_req_onunload_false.js");
    	
    		long startTimestamp = System.currentTimeMillis();
			driver.findElement(By.id("clickTest")).click(); // this will block more than 4S.
			long durationTime = System.currentTimeMillis() - startTimestamp;
			if(durationTime < 4000){
    			test.addMsg("loading time", "4000", ""+durationTime);
    		}
			
    }
    
    
}
