package com.tl;

import static org.junit.Assert.assertTrue;

import java.util.LinkedList;

import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import org.openqa.selenium.By;

//Test Case TOP-3262: Story - 53607 : Detect hashchange even when there is no hashchange event
//Test Case TOP-3263: Story - 53607 : Detect hashchange even when there is no hash change event with DOM diff enabled
@RunWith(Parameterized.class)
public class ValidateHashchangeEvent extends UICCustomizeInit{

    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String flavor;
    private final String enableDomDiff;
	private final String pathSeparator = System.getProperty("file.separator");

    public ValidateHashchangeEvent(final String browser, final String flavor, final String enableDomDiff) {
        super(browser, "h4", "index.html", "ai", null, false);
        this.flavor = flavor;
        this.enableDomDiff = enableDomDiff;
        this.currentDirectory = System.getProperty("user.dir");
        this.uicTestDataDir = this.currentDirectory + this.pathSeparator
                + "UICTestData" + this.pathSeparator;
    }

    @Override
    @Before
    public void setUp() {
        super.setUp();
        String initialFile = getInitialJsFile(this.flavor, this.enableDomDiff ) ;

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
        
    	final String[] enableDOMDiffList= {"true","false"};
    	
        for (int i = 0; i < tempBrowsers.length; i++) {
        	String addBrowser = tempBrowsers[i];
        	if (("ie").equals(tempBrowsers[i])){
        		addBrowser = getIEbyVersion(ieVersion);
        	}
        	
        	for(String type : enableDOMDiffList){
        		String[] param = {addBrowser, flavor, type };
            	params.add(param);
        	}	
        }
        return params;
    }
    
    public String getInitialJsFile(String flavor, String enableDomDiff){
    	return this.uicTestDataDir
        + "NohashChangeEventInitFiles" + this.pathSeparator
        + "init_"+flavor.toLowerCase()+"_no_hashchange_event_"+enableDomDiff.toLowerCase()+".js";
    }
    
    @Test
    public void testNoHashchange() throws Exception{

    		assertTrue(isElementPresent(By.id("google_logo")));
    		
    		driver.findElement(By.id("google_logo")).click();    		
    		
    		Thread.sleep(1000);
    		
    		driver.findElement(By.id("rawButton")).click();   
    		
            final JSONObject uicObject = getUICObject("#google_image_in_link");
            
            int type = uicObject.getInt("type");
            
            assertTrue( type == 2);
            
    }
    

    
}
