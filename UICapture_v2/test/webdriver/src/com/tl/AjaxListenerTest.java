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

//Precondition: 
//Need start the fakerest server before running the tests, or will get the "Service Unavailable" status 

//TOP-****: Story - ****
//TOP-****: Story - ****

public class AjaxListenerTest extends UICInit{
    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String pathSeparator = System.getProperty("file.separator");

    public AjaxListenerTest(final String browser) {
        super(browser, "AjaxTest", "index.html", "", null, false);
        System.out.println(browser);
        this.currentDirectory = System.getProperty("user.dir");
        this.uicTestDataDir = this.currentDirectory + this.pathSeparator
             + "UICTestData" + this.pathSeparator;
        System.out.println(uicTestDataDir);
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

    // verify the logged data by Ajax Listener for "get" request without any filter 
    @Test
    public void testGetNoFilter() throws Exception {
        final UICTest test = new UICTest("GetNoFilter", browser);
        
        executeDCXInitJavaScript(test, this.uicTestDataDir
                + "AjaxTest" + this.pathSeparator
                + "AjaxTest.js", "Chrome26");
        
        WebElement postBtn1 = driver.findElement(By.id("get-btn-1"));
        postBtn1.click();
        
        JSONObject arr[] = getUICObjectArray("5",1);
        
        JSONObject customEventObject = (JSONObject) arr[0].get("customEvent");
        JSONObject dataObject = (JSONObject) customEventObject.get("data");
        String method = dataObject.getString("method");
        String statusText = dataObject.getString("statusText");
        System.out.println("ajax call uses "+ method + " method and gets status text: "+ statusText);
        
        if(!method.equalsIgnoreCase("get") && !statusText.equalsIgnoreCase("OK")){
            test.addMsg("Ajax call", " use GET method and return OK status text", "none of them");
        }
        
        //assertTrue(test.getErrs(), test.getStatus());
        assertTrue(test.getErrs(), test.getStatus() && statusText.equalsIgnoreCase("OK"));
  }

    // verify the logged data by Ajax Listener for "post" request without any filter    
    @Test
    public void testPostNoFilter() throws Exception {
    	final UICTest test = new UICTest("PostNoFilter", browser);
    	
    	executeDCXInitJavaScript(test, this.uicTestDataDir
                + "AjaxTest" + this.pathSeparator
                + "AjaxTest.js", "Chrome26");
    	
    	WebElement postBtn1 = driver.findElement(By.id("post-btn-1"));
        postBtn1.click();
        
        JSONObject arr[] = getUICObjectArray("5",1);
        
        JSONObject customEventObject = (JSONObject) arr[0].get("customEvent");
        JSONObject dataObject = (JSONObject) customEventObject.get("data");
        String method = dataObject.getString("method");
        String statusText = dataObject.getString("statusText");
        System.out.println("ajax call uses "+ method + " method and gets status text: "+ statusText);
        
        if(!method.equalsIgnoreCase("post") && !statusText.equalsIgnoreCase("OK")){
            test.addMsg("Ajax call", " use POST method and return OK status text", "none of them");
        }        
        
        assertTrue(test.getErrs(), test.getStatus() && statusText.equalsIgnoreCase("OK"));        
    }

    // verify the logged data by Ajax Listener for "post" request with filter: log additional data    
    @Test
    public void testPostWithFilterLogMore() throws Exception {
    	final UICTest test = new UICTest("PostWithFilterLogMore", browser);
    	
    	executeDCXInitJavaScript(test, this.uicTestDataDir
                + "AjaxTest" + this.pathSeparator
                + "AjaxTest_log.js", "Chrome26");
    	
    	WebElement postBtn1 = driver.findElement(By.id("post-btn-1"));
        postBtn1.click();
        
        JSONObject arr[] = getUICObjectArray("5",1);
        
        JSONObject customEventObject = (JSONObject) arr[0].get("customEvent");
        JSONObject dataObject = (JSONObject) customEventObject.get("data");
        String method = dataObject.getString("method");
        String statusText = dataObject.getString("statusText");
        System.out.println("ajax call uses "+ method + " method and gets status text: "+ statusText);
        
        if(!method.equalsIgnoreCase("post") && !statusText.equalsIgnoreCase("OK")){
            test.addMsg("Ajax call", " use POST method and return OK status text", "none of them");
        }        
        
        System.out.println("requestHeaders: " + dataObject.getString("requestHeaders"));
        System.out.println("request: " + dataObject.getString("request"));
        System.out.println("responseHeaders: " + dataObject.getString("responseHeaders"));
        System.out.println("response: " + dataObject.getString("response"));
        assertTrue(test.getErrs(), test.getStatus() && statusText.equalsIgnoreCase("OK"));       
    }

    // verify the logged data by Ajax Listener with filter: specify the method "get"
    @Test
    public void testRequestsWithFilterMethod() throws Exception {
        final UICTest test = new UICTest("RequestsWithFilterMethod", browser);
        
        executeDCXInitJavaScript(test, this.uicTestDataDir
                + "AjaxTest" + this.pathSeparator
                + "AjaxTest_method.js", "Chrome26");
        
        WebElement postBtn1 = driver.findElement(By.id("get-btn-1"));
        postBtn1.click();
        
        WebElement postBtn2 = driver.findElement(By.id("post-btn-1"));
        postBtn2.click();
        
        JSONObject arr[] = getUICObjectArray("5",1);
        
        JSONObject customEventObject = (JSONObject) arr[0].get("customEvent");
        JSONObject dataObject = (JSONObject) customEventObject.get("data");
        String method = dataObject.getString("method");
        String statusText = dataObject.getString("statusText");
        System.out.println("ajax call uses "+ method + " method and gets status text: "+ statusText);
        
        if(!method.equalsIgnoreCase("get") && !statusText.equalsIgnoreCase("OK")){
            test.addMsg("Ajax call", " use GET method and return OK status text", "none of them");
        }        
        
        assertTrue(test.getErrs(), test.getStatus() && statusText.equalsIgnoreCase("OK") && method.equalsIgnoreCase("get"));
  }

    // verify the logged data by Ajax Listener with filter: specify the status "401"
    @Test
    public void testRequestsWithFilterStatus() throws Exception {
        final UICTest test = new UICTest("RequestsWithFilterStatus", browser);
        
        executeDCXInitJavaScript(test, this.uicTestDataDir
                + "AjaxTest" + this.pathSeparator
                + "AjaxTest_status.js", "Chrome26");
        
        WebElement postBtn1 = driver.findElement(By.id("post-btn-3"));
        postBtn1.click();
        
        JSONObject arr[] = getUICObjectArray("5",1);
        
        JSONObject customEventObject = (JSONObject) arr[0].get("customEvent");
        JSONObject dataObject = (JSONObject) customEventObject.get("data");
        String method = dataObject.getString("method");
        String statusText = dataObject.getString("statusText");
        System.out.println("ajax call uses "+ method + " method and gets status text: "+ statusText);
        
        if(!method.equalsIgnoreCase("get") && !statusText.equalsIgnoreCase("Unauthorized")){
            test.addMsg("Ajax call", " use GET method and return Unauthorized status text", "none of them");
        }        
        
        assertTrue(test.getErrs(), test.getStatus() && statusText.equalsIgnoreCase("Unauthorized"));
  }

    // verify the logged data by Ajax Listener with filter: specify the url
    @Test
    public void testRequestsWithFilterURL() throws Exception {
        final UICTest test = new UICTest("RequestsWithFilterURL", browser);
        
        executeDCXInitJavaScript(test, this.uicTestDataDir
                + "AjaxTest" + this.pathSeparator
                + "AjaxTest_url.js", "Chrome26");
        
        WebElement postBtn1 = driver.findElement(By.id("post-btn-2"));
        postBtn1.click();
        
        JSONObject arr[] = getUICObjectArray("5",1);
        
        JSONObject customEventObject = (JSONObject) arr[0].get("customEvent");
        JSONObject dataObject = (JSONObject) customEventObject.get("data");
        String method = dataObject.getString("method");
        String statusText = dataObject.getString("statusText");
        System.out.println("ajax call uses "+ method + " method and gets status text: "+ statusText);
        
        if(!method.equalsIgnoreCase("get") && !statusText.equalsIgnoreCase("OK")){
            test.addMsg("Ajax call", " use GET method and return OK status text", "none of them");
        }        
        
        assertTrue(test.getErrs(), test.getStatus() && statusText.equalsIgnoreCase("OK"));
  }

    // verify the logged data by Ajax Listener with filter: specify the url, containing a specific query parameter debug=on
    @Test
    public void testRequestsWithFilterURL2() throws Exception {
        final UICTest test = new UICTest("RequestsWithFilterURL2", browser);
        
        executeDCXInitJavaScript(test, this.uicTestDataDir
                + "AjaxTest" + this.pathSeparator
                + "AjaxTest_url2.js", "Chrome26");
        
        WebElement postBtn1 = driver.findElement(By.id("get-btn-2"));
        postBtn1.click();
        
        JSONObject arr[] = getUICObjectArray("5",1);
        
        JSONObject customEventObject = (JSONObject) arr[0].get("customEvent");
        JSONObject dataObject = (JSONObject) customEventObject.get("data");
        String method = dataObject.getString("method");
        String statusText = dataObject.getString("statusText");
        System.out.println("ajax call uses "+ method + " method and gets status text: "+ statusText);
        
        if(!method.equalsIgnoreCase("get") && !statusText.equalsIgnoreCase("OK")){
            test.addMsg("Ajax call", " use GET method and return OK status text", "none of them");
        }        
        
        assertTrue(test.getErrs(), test.getStatus() && statusText.equalsIgnoreCase("OK"));
  }

    // verify the logged data by Ajax Listener with multiple filters
    @Test
    public void testRequestsWithMultiFilters() throws Exception {
        final UICTest test = new UICTest("RequestsWithMultiFilters", browser);
        
        executeDCXInitJavaScript(test, this.uicTestDataDir
                + "AjaxTest" + this.pathSeparator
                + "AjaxTest_mutiFilters.js", "Chrome26");
        
        // send 5 requests, only three of them will be logged
        WebElement postBtn1 = driver.findElement(By.id("get-btn-1"));
        postBtn1.click();
        WebElement postBtn2 = driver.findElement(By.id("get-btn-2"));
        postBtn2.click();
        WebElement postBtn3 = driver.findElement(By.id("post-btn-1"));
        postBtn3.click();
        WebElement postBtn4 = driver.findElement(By.id("post-btn-2"));
        postBtn4.click();
        WebElement postBtn5 = driver.findElement(By.id("post-btn-3"));
        postBtn5.click();
        
        JSONObject arr[] = getUICObjectArray("5",3);
        
        JSONObject customEventObject = (JSONObject) arr[0].get("customEvent");
        JSONObject dataObject = (JSONObject) customEventObject.get("data");
        String method = dataObject.getString("method");
        String statusText = dataObject.getString("statusText");
        System.out.println("ajax call uses "+ method + " method and gets status text: "+ statusText);
        
        if(!method.equalsIgnoreCase("get") && !statusText.equalsIgnoreCase("OK")){
            test.addMsg("Ajax call", " use GET method and return OK status text", "none of them");
        } 
        assertTrue(test.getErrs(), test.getStatus() && statusText.equalsIgnoreCase("OK"));
        
        JSONObject customEventObject2 = (JSONObject) arr[1].get("customEvent");
        JSONObject dataObject2 = (JSONObject) customEventObject2.get("data");
        String method2 = dataObject2.getString("method");
        String statusText2 = dataObject2.getString("statusText");
        String response2 = dataObject2.getString("response");
        System.out.println("ajax call uses "+ method2 + " method and gets status text: "+ statusText2);
        
        if(!method2.equalsIgnoreCase("get") && !statusText2.equalsIgnoreCase("OK")){
            test.addMsg("Ajax call", " use GET method and return OK status text", "none of them");
        } 
        assertTrue(test.getErrs(), test.getStatus() && statusText2.equalsIgnoreCase("OK") && response2.equalsIgnoreCase("admin"));
        
        JSONObject customEventObject3 = (JSONObject) arr[2].get("customEvent");
        JSONObject dataObject3 = (JSONObject) customEventObject3.get("data");
        String method3 = dataObject3.getString("method");
        String statusText3 = dataObject3.getString("statusText");
        String request3 = dataObject3.getString("request");
        System.out.println("ajax call uses "+ method3 + " method and gets status text: "+ statusText3);
        
        if(!method3.equalsIgnoreCase("post") && !statusText3.equalsIgnoreCase("Unauthorized")){
            test.addMsg("Ajax call", " use POST method and return OK status text", "none of them");
        }        
        assertTrue(test.getErrs(), test.getStatus() && statusText3.equalsIgnoreCase("Unauthorized") && request3.equalsIgnoreCase("foo=bar"));
  }

    // verify the logged data by Ajax Listener with multiple filters
    @Test
    public void testRequestsWithMultiFilters_sync() throws Exception {
        final UICTest test = new UICTest("RequestsWithMultiFilters_sync", browser);
        
        executeDCXInitJavaScript(test, this.uicTestDataDir
                + "AjaxTest" + this.pathSeparator
                + "AjaxTest_mutiFilters.js", "Chrome26");
        
        // send 5 requests, only three of them will be logged
        WebElement postBtn1 = driver.findElement(By.id("get-btn-1-s"));
        postBtn1.click();
        WebElement postBtn2 = driver.findElement(By.id("get-btn-2-s"));
        postBtn2.click();
        WebElement postBtn3 = driver.findElement(By.id("post-btn-1-s"));
        postBtn3.click();
        WebElement postBtn4 = driver.findElement(By.id("post-btn-2-s"));
        postBtn4.click();
        WebElement postBtn5 = driver.findElement(By.id("post-btn-3-s"));
        postBtn5.click();
        
        JSONObject arr[] = getUICObjectArray("5",3);
        
        JSONObject customEventObject = (JSONObject) arr[0].get("customEvent");
        JSONObject dataObject = (JSONObject) customEventObject.get("data");
        String method = dataObject.getString("method");
        String statusText = dataObject.getString("statusText");
        String async = dataObject.getString("async");
        System.out.println("ajax call uses "+ method + " method and gets status text: "+ statusText + " and async is: " + async);
        
        if(!method.equalsIgnoreCase("get") && !statusText.equalsIgnoreCase("OK")){
            test.addMsg("Ajax call", " use GET method and return OK status text", "none of them");
        } 
        assertTrue(test.getErrs(), test.getStatus() && statusText.equalsIgnoreCase("OK") && async.equalsIgnoreCase("false"));
        
        JSONObject customEventObject2 = (JSONObject) arr[1].get("customEvent");
        JSONObject dataObject2 = (JSONObject) customEventObject2.get("data");
        String method2 = dataObject2.getString("method");
        String statusText2 = dataObject2.getString("statusText");
        String response2 = dataObject2.getString("response");
        String async2 = dataObject.getString("async");
        System.out.println("ajax call uses "+ method2 + " method and gets status text: "+ statusText2 + " and async is: " + async2);
        
        if(!method2.equalsIgnoreCase("get") && !statusText2.equalsIgnoreCase("OK")){
            test.addMsg("Ajax call", " use GET method and return OK status text", "none of them");
        } 
        assertTrue(test.getErrs(), test.getStatus() && statusText2.equalsIgnoreCase("OK") && response2.equalsIgnoreCase("admin") && async2.equalsIgnoreCase("false"));
        
        JSONObject customEventObject3 = (JSONObject) arr[2].get("customEvent");
        JSONObject dataObject3 = (JSONObject) customEventObject3.get("data");
        String method3 = dataObject3.getString("method");
        String statusText3 = dataObject3.getString("statusText");
        String request3 = dataObject3.getString("request");
        String async3 = dataObject.getString("async");
        System.out.println("ajax call uses "+ method3 + " method and gets status text: "+ statusText3 + " and async is: " + async3);
        
        if(!method3.equalsIgnoreCase("post") && !statusText3.equalsIgnoreCase("Unauthorized")){
            test.addMsg("Ajax call", " use POST method and return OK status text", "none of them");
        }        
        assertTrue(test.getErrs(), test.getStatus() && statusText3.equalsIgnoreCase("Unauthorized") && request3.equalsIgnoreCase("foo=bar") && async3.equalsIgnoreCase("false"));
  }

    public final void executeDCXInitJavaScript(final UICTest test, final String testcaseFileName, final String browserName) {

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
        //System.out.println("printing contents of jsfile\r\n" + jsCommand);

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
