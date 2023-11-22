package com.tl;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class Type14 extends UICInit{
	 private final String browserService = properties
	            .getProperty("browserService");
	    private final String uicTestDataDir;
	    private final String currentDirectory;
	    private final String pathSeparator = System.getProperty("file.separator");
	    
	public Type14(final String browser) {
     super(browser, "Type14", "Type14.html", "", null, false);
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
  public void testType14CookiesRegEx1W3c() throws Exception {
  
	  if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("Type14", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "Type14" + this.pathSeparator
                    + "Type14.js", "Chrome26");
         
		  String names[] = {"IBMDiscover","DiscoverIBM","CXAIBM","CommerceIBM","S1IBM","S2IBM","S3IBM","S4IBM","S5IBM","S6IBM","S7IBM"};
		  String values[] = {"TestSavedCookieValue123","TestSavedCookieValue123456","TestSavedCookieValue12345678901234567890",
				  			"TestSavedCookieValueCommerce","TestSavedCookieValueS1","TestSavedCookieValueS2","TestSavedCookieValueS3",
				  			"TestSavedCookieValueS4","TestSavedCookieValueS5","TestSavedCookieValueS6","TestSavedCookieValueS7"};
		  
		  for(int i=0;i<11;i++)
		  {
			  
			  WebElement element = driver.findElement(By.id("cookieName"));
			  element.clear();
			  element.sendKeys(names[i]);
			  WebElement element1 = driver.findElement(By.id("cookieValue"));
			  element1.clear();
			  element1.sendKeys(values[i]);
			  final WebElement element2 = driver.findElement(By.id("setcookie"));
			  element2.click();
			  final WebElement element3 = driver.findElement(By.id("changescreenview"));
			  element3.click();
			  if(driver.switchTo().alert() != null)
			  {
			      driver.switchTo().alert().dismiss();
			      
			  }			  
		  }
		  JSONObject arr[] = getUICObjectArray("14",11);		  
		  final UICTest nullTest = new UICTest("cookieNullTest_w3c", browser);
		  verifyCookiesNullTest(nullTest,arr[0]);
		  assertTrue(nullTest.getErrs(),nullTest.getStatus());
		  
		  for(int i=1;i<11;i++)
		  {
			  final UICTest t = new UICTest("cookiesTestRegEx1_w3c_" + i, browser);
			  verifyCookiesTestRegEx(t,arr[10],names[i],values[i]);
			  assertTrue(t.getErrs(), t.getStatus());
			  
		  }		
	  }
  
  }
  @Test
  public void testType14CookiesRegEx1Jq() throws Exception {
	  
	  if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("Type14", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "Type14" + this.pathSeparator
                    + "Type14_jq.js", "Chrome26");
            
	      String names[] = {"IBMDiscover","DiscoverIBM","CXAIBM","CommerceIBM","S1IBM","S2IBM","S3IBM","S4IBM","S5IBM","S6IBM","S7IBM"};
		  String values[] = {"TestSavedCookieValue123","TestSavedCookieValue123456","TestSavedCookieValue12345678901234567890",
				  			"TestSavedCookieValueCommerce","TestSavedCookieValueS1","TestSavedCookieValueS2","TestSavedCookieValueS3",
				  			"TestSavedCookieValueS4","TestSavedCookieValueS5","TestSavedCookieValueS6","TestSavedCookieValueS7"};
		  
		  for(int i=0;i<11;i++)
		  {
			  
			  WebElement element = driver.findElement(By.id("cookieName"));
			  element.clear();
			  element.sendKeys(names[i]);
			  WebElement element1 = driver.findElement(By.id("cookieValue"));
			  element1.clear();
			  element1.sendKeys(values[i]);
			  final WebElement element2 = driver.findElement(By.id("setcookie"));
			  element2.click();
			  final WebElement element3 = driver.findElement(By.id("changescreenview"));
			  element3.click();
			  if(driver.switchTo().alert() != null)
			  {
			      driver.switchTo().alert().dismiss();
			      
			  }			  
		  }
		  JSONObject arr[] = getUICObjectArray("14",11);	
		  final UICTest nullTest = new UICTest("cookieNullTest_jq", browser);
		  verifyCookiesNullTest(nullTest,arr[0]);
		  assertTrue(nullTest.getErrs(),nullTest.getStatus());		  
		  
		  for(int i=1;i<11;i++)
		  {
			  final UICTest t = new UICTest("cookiesTestRegEx1_jq_" + i, browser);
			  verifyCookiesTestRegEx(t,arr[10],names[i],values[i]);
			  assertTrue(t.getErrs(), t.getStatus());
			  
		  }	
	  }
  
  }
  
  @Test
  public void testType14CookiesRegEx2W3c() throws Exception {
  
	  if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("Type14", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "Type14" + this.pathSeparator
                    + "Type14_2.js", "Chrome26");
    
		  String names[] = {"IBMDiscover","IBMDigitalAnalytics","IBMCXA","IBMCommerce","IBMS1","IBMS2","IBMS3","IBMS4","IBMS5","IBMS6","IBMS7"};
		  String values[] = {"TestSavedCookieValue123","TestSavedCookieValue123456","TestSavedCookieValue12345678901234567890",
				  			"TestSavedCookieValueCommerce","TestSavedCookieValueS1","TestSavedCookieValueS2","TestSavedCookieValueS3",
				  			"TestSavedCookieValueS4","TestSavedCookieValueS5","TestSavedCookieValueS6","TestSavedCookieValueS7"};
		  
		  for(int i=0;i<11;i++)
		  {
			  
			  WebElement element = driver.findElement(By.id("cookieName"));
			  element.clear();
			  element.sendKeys(names[i]);
			  WebElement element1 = driver.findElement(By.id("cookieValue"));
			  element1.clear();
			  element1.sendKeys(values[i]);
			  final WebElement element2 = driver.findElement(By.id("setcookie"));
			  element2.click();
			  final WebElement element3 = driver.findElement(By.id("changescreenview"));
			  element3.click();
			  if(driver.switchTo().alert() != null)
			  {
			      driver.switchTo().alert().dismiss();
			      
			  }			
			 
		  }
		  JSONObject arr[] = getUICObjectArray("14",11);
		  
		  for(int i=0;i<11;i++)
		  {
			  final UICTest t = new UICTest("cookiesTestRegEx2_w3c_" + i, browser);
			  verifyCookiesTestRegEx(t,arr[10],names[i],values[i]);
			  assertTrue(t.getErrs(), t.getStatus());		  
		  }	
	  }
  
  }
  
  @Test
  public void testType14CookiesRegEx2Jq() throws Exception {
  
	  if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("Type14", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "Type14" + this.pathSeparator
                    + "Type14_2_jq.js", "Chrome26");

		  String names[] = {"IBMDiscover","IBMDigitalAnalytics","IBMCXA","IBMCommerce","IBMS1","IBMS2","IBMS3","IBMS4","IBMS5","IBMS6","IBMS7"};
		  String values[] = {"TestSavedCookieValue123","TestSavedCookieValue123456","TestSavedCookieValue12345678901234567890",
				  			"TestSavedCookieValueCommerce","TestSavedCookieValueS1","TestSavedCookieValueS2","TestSavedCookieValueS3",
				  			"TestSavedCookieValueS4","TestSavedCookieValueS5","TestSavedCookieValueS6","TestSavedCookieValueS7"};
		  
		  for(int i=0;i<11;i++)
		  {
			  
			  WebElement element = driver.findElement(By.id("cookieName"));
			  element.clear();
			  element.sendKeys(names[i]);
			  WebElement element1 = driver.findElement(By.id("cookieValue"));
			  element1.clear();
			  element1.sendKeys(values[i]);
			  final WebElement element2 = driver.findElement(By.id("setcookie"));
			  element2.click();
			  final WebElement element3 = driver.findElement(By.id("changescreenview"));
			  element3.click();
			  if(driver.switchTo().alert() != null)
			  {
			      driver.switchTo().alert().dismiss();
			      
			  }			  
		  }
		  JSONObject arr[] = getUICObjectArray("14",11);
		  
		  for(int i=0;i<11;i++)
		  {
			  final UICTest t = new UICTest("cookiesTestRegEx2_jq_" + i, browser);
			  verifyCookiesTestRegEx(t,arr[10],names[i],values[i]);
			  assertTrue(t.getErrs(), t.getStatus());		  
		  }	
	  }
  
  } 
 
  public void verifyCookiesTestRegEx(final UICTest t,final JSONObject uicObject,final String name,final String value) throws Exception {
      JSONObject obj = (JSONObject)uicObject.get("cookies");
      String str = obj.getString(name);
      if(!str.equals(value))
      {
    	  t.addMsg("cookiesTest", value, str);	    	  
      }           

  }
  public void verifyCookiesNullTest(final UICTest t,final JSONObject uicObject) throws Exception {
	  Object obj = uicObject.get("cookies");
	  if(!obj.equals(null))
	  {
		  t.addMsg("cookieNullTest", "Null", uicObject.toString());
		  
	  }
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
	

}
