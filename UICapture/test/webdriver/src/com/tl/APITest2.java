package com.tl;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.logging.Logs;

@RunWith(Parameterized.class)
public class APITest2 extends UICInit {
	
	private final String uicTestDataDir;
    private final String currentDirectory;
    private final String pathSeparator = System.getProperty("file.separator");
    
	public APITest2(final String browser) {
		super(browser, "APITesting", "index.html",
				"registerBridgeCallbacks_addRequestHeaders_enable_duplicate",
				null, true);
		this.currentDirectory = System.getProperty("user.dir");
        this.uicTestDataDir = this.currentDirectory + this.pathSeparator
                + "UICTestData" + this.pathSeparator;
		
	}
	
	@Test
	public void getSessionDataTest()
			throws Exception {
		
		final UICTest test = new UICTest("GetSessionData", browser);
        
        executeDCXInitJavaScript(test, this.uicTestDataDir
                + "GetSessionDataAPI" + this.pathSeparator
                + "getSessionData.js", "Chrome26");
        
        final WebElement cookieName = driver.findElement(By.id("cookieName"));
        cookieName.clear();
        cookieName.sendKeys("PHPSESSID");
        final WebElement cookieValue = driver.findElement(By.id("cookieValue"));
        cookieValue.clear();
        cookieValue.sendKeys("value");
        final WebElement element2 = driver.findElement(By.id("setcookie"));
		element2.click();
		element2.click();
		final WebElement element3 = driver.findElement(By.id("testSessionDataAPI"));
		element3.click();
		final WebElement element4 = driver.findElement(By.id("sessionid"));
		String text = element4.getText();
		if(!text.equals("PHPSESSID"))
		{
			test.addMsg("Session ID", "Not matching", text);			
		}
		final WebElement element5 = driver.findElement(By.id("sessionval"));
		text = element5.getText();
		if(!text.equals("value"))
		{
			test.addMsg("Session Value", "Not matching", text);
		}
		assertTrue(test.getErrs(),test.getStatus());		
		
	}	 
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
	
	@Override
	@Before
	public void setUp() {
		super.setUp();
	}
	
	
}
