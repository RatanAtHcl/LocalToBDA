package com.tl;

import static org.junit.Assert.assertNotNull;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.JavascriptExecutor;

public class UICCustomizeInit extends TestBase{

    private final JavascriptExecutor js;
    private final String fcnStrPre = "(function () {\r\n var changeTarget;\r\n"
            + "\"use strict\";\r\n" + "window.DCX.init(";
    private final String fcnStrPost = ");\r\n" + "}());";
    private Boolean uicInitCalled = false;
    final String coverageStoredText = "Coverage data stored at intermediate\\testresults\\jscoverresults";

    
    public UICCustomizeInit(final String browser, final String website,
            final String testPage, final String initialId,
            final String browsersToIgnore, final Boolean jsCoverEnabled) {
        super(browser, website, testPage, initialId, browsersToIgnore,
                jsCoverEnabled);
        this.js = (JavascriptExecutor) driver;
    }
	
    @Override
    @Before
    public void setUp() {
        super.setUp();
    }

    @Override
    @After
    public void tearDown() throws Exception {
        if (this.jsCoverEnabled && this.jsCoverEnabledBuild.equals("true")) {
            this.js.executeScript("jscoverage_report()");
            super.tearDown();
        } else {
            super.tearDown();
        }
    }    
    
    /**
     * Initializes the current test window by merging the supplied JSON object
     * with the default JSON object if merge is true Otherwise initializes the
     * current test window with the supplied JSON object.
     * 
     * @param json JSON object to be  used as the initialization object
     *           
     * 
     */
    public final void uicInit(final JSONObject json) {
        if (!this.uicInitCalled) {
           
            final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
            try{
                javascriptExecutor.executeScript(this.fcnStrPre + json + this.fcnStrPost);
            	
            }catch(Exception e){
            	e.printStackTrace();
            }
            //javascriptExecutor.executeScript("alert('test')");
            
            this.uicInitCalled = true;
        } else {
            driver.quit();
            this.uicInitCalled = false;
            int hasLoadTries = 0;
            final int numOfTries = Integer.parseInt(properties
                    .getProperty("numOfTries"));
            while (hasLoadTries < numOfTries) {
                if (loadBrowser()) {
                    hasLoadTries = numOfTries;
                } else {
                    hasLoadTries++;
                }
            }

            try {
                super.setUp();
            } catch (final Exception e) {
                System.out.print(e.toString());
            }
            uicInit(json);
        }
    }
    
    public final void executeDCXInitJavaScript(final String testcaseFileName) {

        final String jsCommand = getDCXInitJavaScriptFromFile(testcaseFileName);
        JSONObject init;

        try {

            init = new JSONObject(jsCommand);
            this.uicInit(init);

        } catch (final JSONException e1) {
            e1.printStackTrace();
        }

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

        if (null == jsCommand) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(jsCommand);
        return jsCommand;
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
    
    public static String getIEbyVersion(Integer ieVersion){
    	String browser = "";
            if (ie11.equals(ieVersion)) {
            	browser =  "ie11";
            }
            if (ie10.equals(ieVersion)) {
            	browser =  "ie10";
            }
            if (ie9.equals(ieVersion) || ie10.equals(ieVersion)) {
            	browser =  "ie9";
            }
            if (ie8.equals(ieVersion) || ie9.equals(ieVersion) || ie10.equals(ieVersion)) {
            	browser =  "ie8";
            }
            if (ie7.equals(ieVersion) || ie8.equals(ieVersion) || ie9.equals(ieVersion)
                    || ie10.equals(ieVersion)) {
            	browser =  "ie7";
            }
            if (ieQuirksMode.equals(ieVersion) || ie7.equals(ieVersion)
                    || ie8.equals(ieVersion) || ie9.equals(ieVersion)
                    || ie10.equals(ieVersion)) {
            	browser =  "ieQuirksMode";
            }
         return browser;           	
    }
    
    public static String getTypeMaskString(String data){
    	StringBuilder sb = new StringBuilder();
    	
    	for(int i=0; i< data.length(); i++){
    		char ch = data.charAt(i);
    		if(Character.isDigit(ch)){
    			sb.append("9");
    		}else if(Character.isLowerCase(ch)){
    			sb.append("x");
    		}else if(Character.isUpperCase(ch)){
    			sb.append("X");
    		}else if(Character.isSpace(ch)){
    			sb.append("9");
    		}
    		else
    		{
    			sb.append("@");
    		}
    	}
    	return sb.toString();
    }
    
    public static String getExpectedMaskValue(String maskType, String data){
    	
    	String expectedValue = "";
    	
    	if("empty".equals(maskType)){
    		expectedValue =  "";
    	}else if("basic".equals(maskType)){
    		expectedValue = "XXXXX";
    	}else if("type".equals(maskType)){
    		expectedValue = getTypeMaskString(data);
    	}else if("custom".equals(maskType)){
    		expectedValue = "!@#$%*";
    	}
    	return expectedValue;
    }
}
