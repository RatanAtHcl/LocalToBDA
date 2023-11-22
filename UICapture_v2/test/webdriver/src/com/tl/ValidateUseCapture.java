package com.tl;

import static org.junit.Assert.assertTrue;

import java.util.LinkedList;

import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runners.Parameterized.Parameters;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
//Test Case TOP-2103: 48155 : Click on non-input/textarea/select/ elements should not be consolidated when useCapture True
//Test Case TOP-2104: 48155 : Click on non-input/textarea/select/ elements should be consolidated when useCapture False
public class ValidateUseCapture extends UICCustomizeInit{

    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String flavor;
	private final String browserService = properties.getProperty("browserService");
	private final String useCapture;
	private final String pathSeparator = System.getProperty("file.separator");
    
    
    public ValidateUseCapture(final String browser, final String flavor, final String useCapture) {
        super(browser, "h4", "clickSequence.html", "index", null, false);
        
        System.out.println("Start test with paramter: [ browser: "+browser+" flavor: "+flavor+ " useCapture: " + useCapture+" ]");
        
        this.flavor = flavor;
        this.useCapture = useCapture;
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
        String initialFile = getInitialJsFile(this.flavor, this.useCapture) ;

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
        
    	final String[] useCaptureList= {"true","false"};
    	
        for (int i = 0; i < tempBrowsers.length; i++) {
        	String addBrowser = tempBrowsers[i];
        	if (("ie").equals(tempBrowsers[i])){
        		addBrowser = getIEbyVersion(ieVersion);
        	}
        	
        	for(String type : useCaptureList){
        		String[] param = {addBrowser, flavor, type };
            	params.add(param);
        	}	
        }
        return params;
    }
    
    public String getInitialJsFile(String flavor, String useCapture){
    	return this.uicTestDataDir
        + "UseCaptureInitFiles" + this.pathSeparator
        + "init_"+flavor.toLowerCase()+"_use_capture_"+useCapture.toLowerCase()+".js";
    }
    
    private void verifyResult(UICTest uicTest, JSONObject uicObjectType4,JSONObject uicObjectType2, String useCapture) throws Exception
    {
    	int countType4 = Integer.parseInt(uicObjectType4.getString("count"));
    	int countType2 = Integer.parseInt(uicObjectType2.getString("count"));
    	
    	if("true".equals(useCapture)){ //case use capture
    		if(countType4 > countType2){
    			uicTest.addMsg("Check Type4 event and Type2 event", "Type4 before Type2 event", "Type4 after Type2 event");
    		}
    	}else if("false".equals(useCapture)){//case not use capture
    		if(countType4 < countType2){
    			uicTest.addMsg("Check Type4 event and Type2 event", "Type2 before Type4 event", "Type2 after Type4 event");
    		}
    	}else{
    		uicTest.addMsg("Check useCapture", "true or false", "None of them");
    	}
    }
    
    @Test
    public void testButton1Click() throws Exception{
    	
    	assertTrue(isElementPresent(By.id("button1")));
        
    	driver.findElement(By.id("button1")).click();
        
    	final UICTest test = new UICTest("_USE_CAPTURE_"+this.browserService+"_"+this.useCapture, browser);
        
    	final JSONObject uicObjectType4 = getUICObject("button1");   
    	
    	final JSONObject uicObjectType2 = getUICObject("button 1 screenview");
    	
    	verifyResult(test ,uicObjectType4, uicObjectType2, this.useCapture);
    		
    } 
    
    @Test
    public void testSpan2Click() throws Exception{
    	
    	assertTrue(isElementPresent(By.id("span2")));
        
    	driver.findElement(By.id("span2")).click();
        
    	final UICTest test = new UICTest("_USE_CAPTURE_"+this.browserService+"_"+this.useCapture, browser);
        
    	final JSONObject uicObjectType4 = getUICObject("span2");   
    	
    	final JSONObject uicObjectType2 = getUICObject("span 2 screenview");
    	
    	verifyResult(test ,uicObjectType4, uicObjectType2, this.useCapture);
    		
    }     
    
    @Test
    public void testButton3Click() throws Exception{
    	
    	assertTrue(isElementPresent(By.id("button3")));
    	
    	driver.findElement(By.id("textarea3")).sendKeys("test");;    	
        
    	driver.findElement(By.id("button3")).click();
        
    	final UICTest test = new UICTest("_USE_CAPTURE_"+this.browserService+"_"+this.useCapture, browser);
        
    	final JSONObject uicObjectType4 = getUICObject("button3");   
    	
    	final JSONObject uicObjectType2 = getUICObject("button 3 screenview");
    	
    	verifyResult(test ,uicObjectType4, uicObjectType2, this.useCapture);
    		
    }     
    
    @Test
    public void testButton4Click() throws Exception{
    	
    	assertTrue(isElementPresent(By.id("button4")));
    	
    	 new Select(driver.findElement(By.id("select4"))).selectByVisibleText("Two");   	
        
    	driver.findElement(By.id("button4")).click();
        
    	final UICTest test = new UICTest("_USE_CAPTURE_"+this.browserService+"_"+this.useCapture, browser);
        
    	final JSONObject uicObjectType4 = getUICObject("button4");   
    	
    	final JSONObject uicObjectType2 = getUICObject("button 4 screenview");
    	
    	verifyResult(test ,uicObjectType4, uicObjectType2, this.useCapture);
    		
    }     
    
    
    
}
