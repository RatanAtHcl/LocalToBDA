package com.tl;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
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
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

@RunWith(Parameterized.class)
public class DOM_Diff_Extra_2 extends UICInit {
	
	private final String browserService = properties
            .getProperty("browserService");
    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String pathSeparator = System.getProperty("file.separator");
	
    public DOM_Diff_Extra_2(final String browser) {
        super(browser, "DOM_Diff_Extra", "index2.html", "addDivBtn", null, true);
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
    public void testOne() throws Exception {
    	
    	final UICTest t = new UICTest("testOne", browser);
    	
    	executeDCXInitJavaScript(t, this.uicTestDataDir
                + "DOMDiffInitFiles" + this.pathSeparator
                + "init_extra.js", browser);
    	
    	driver.switchTo().frame("frame1");
    	assertTrue(isElementPresent(By.id("firstname")));
    	final WebElement e1 = driver.findElement(By.id("firstname"));
    	e1.click();
    	e1.sendKeys("Test");
    	
    	assertTrue(isElementPresent(By.id("firstname")));
    	final WebElement e2 = driver.findElement(By.id("lastname"));
    	e2.click();
    	e2.sendKeys("Text");
    	
    	assertTrue(isElementPresent(By.id("submitbtn")));
    	final WebElement e3 = driver.findElement(By.id("submitbtn"));
    	e3.click();
    	
    	final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);
        
        assertTrue(isElementPresent(By.id("domelement")));
    	final WebElement e4 = driver.findElement(By.id("domelement"));
    	e4.click();
    	
    	final JSONObject uicObject = getUICObjectbymsgType("12");
    	DomVerify(t, uicObject);
    	
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