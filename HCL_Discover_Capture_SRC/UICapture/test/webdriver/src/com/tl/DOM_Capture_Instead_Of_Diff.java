package com.tl;

import org.junit.After;
import org.junit.Before;

import static org.junit.Assert.*;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Scanner;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Test;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

public class DOM_Capture_Instead_Of_Diff extends UICInit {
    private final String browserService = properties
            .getProperty("browserService");
    private final String currentDirectory;
    private final String uicTestDataDir;
    private final String uicExpectedHTMLDir;

    private final String pathSeparator = System.getProperty("file.separator");

    public DOM_Capture_Instead_Of_Diff(final String browser) {
        super(browser, "DOMCaptureInsteadOfDiff", "index.html", "ai", null, true);
        
        this.currentDirectory = System.getProperty("user.dir");
        this.uicTestDataDir = this.currentDirectory + this.pathSeparator
                + "UICTestData" + this.pathSeparator;
        this.uicExpectedHTMLDir = this.currentDirectory + this.pathSeparator
                + "testWebsite" + this.pathSeparator + "DOMCaptureInsteadOfDiff" + this.pathSeparator;
        
        System.out.println("BROWSER: " + browser);
        System.out.println("BROWSER SERVICE: "  + this.browserService);
        System.out.println("UIC TEST DATA DIRECTORY: "  + this.uicTestDataDir);
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

    public static String readFileAsString(String fileName) throws Exception {
      String data = "";
      data = new String(Files.readAllBytes(Paths.get(fileName)));
      return data;
    }
    
    @Test
    public void regularHTMLTest() throws Exception {
        final UICTest t = new UICTest("regularHTMLTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInsteadOfDiffInitFiles" + this.pathSeparator
                    + "init_jquery_dom_capture_instead_of_diff.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureInsteadOfDiffInitFiles" + this.pathSeparator
                    + "init_w3c_dom_capture_instead_of_diff.js", browser);
        }  
        assertTrue(isElementPresent(By.id("addDivToBody")));
        driver.findElement(By.id("addDivToBody")).click();
        Thread.sleep(this.DWELL_TIME);
        if (this.currBrowser.contains("ie")) {
            verifyRegularHTMLTest(t, this.uicExpectedHTMLDir + "ieRegularHTMLCase.txt");
        }
        else {
            verifyRegularHTMLTest(t, this.uicExpectedHTMLDir + "regularHTMLCase.txt");
        }
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    public void verifyRegularHTMLTest(final UICTest t, final String expectedHTMLFile) throws Exception {
        final JSONObject type4Msg = (JSONObject) getUICObject("addDivToBody");
        verifyOffset(type4Msg, t, 1);
        verifyScreenviewOffset(type4Msg, t, 1); 
        verifyCount(type4Msg, t, 1);
        assertTrue(type4Msg.getBoolean("fromWeb"));
        final JSONObject target = (JSONObject) type4Msg.get("target");
        assertTrue(target.getString("id").equals("addDivToBody"));
        assertTrue(target.getString("idType").equals("-1"));
        assertTrue(target.getString("name").isEmpty());
        assertTrue(target.getString("dcType").equals("button"));
        assertTrue(target.getString("type").equals("input"));
        final JSONObject position = (JSONObject) target.get("position");
        // just assert that position values are there
        assertTrue(position.has("height"));
        assertTrue(position.has("width"));
        // problem with IE registering click events
        if (!this.currBrowser.contains("ie")) {
            assertTrue(position.has("relXY"));              
        }  
        verifyCurrState(target, t, "Add div to body");
        verifySubType(target, t, "button");
        assertFalse(target.getBoolean("isParentLink"));
        verifyDwell(target, t, 1);
        final JSONObject event = (JSONObject) type4Msg.get("event");
        assertTrue(event.getString("dcEvent").equals("click"));
        assertTrue(event.getString("type").equals("click"));
        assertTrue(type4Msg.has("dcid"));
        verifyFocusInOffset(type4Msg, t, 1);
        
        final String dcid = type4Msg.getString("dcid");
        final JSONObject type12Msg = (JSONObject) getUICObjectbyDcid(dcid, "12");
        verifyOffset(type12Msg, t, 1);
        verifyScreenviewOffset(type12Msg, t, 1); 
        verifyCount(type12Msg, t, 1);
        assertTrue(type12Msg.getBoolean("fromWeb"));
        
        final JSONObject domCapture = (JSONObject) type12Msg.get("domCapture");
        final JSONArray frames = (JSONArray) domCapture.get("frames");
        
        assertTrue(frames.length() == 2);
        final String[] expectedRoots = readFileAsString(expectedHTMLFile).split("Root:\n");
        for (int i = 0; i < frames.length(); i++) {
            final JSONObject frame = frames.getJSONObject(i);
            final String frameRoot = frame.getString("root");
            assertTrue(frameRoot.replaceAll("\\s+","").equals(expectedRoots[i].replaceAll("\\s+","")));                    
            assertTrue(frame.has("dcxid"));
            assertTrue(frame.has("host"));
            assertTrue(frame.has("url"));
            assertTrue(frame.has("charset"));
        }
        final String root = domCapture.getString("root");
        assertTrue(root.replaceAll("\\s+|cd_frame_id_=\".{32}\"","")
                    .equals(expectedRoots[2].replaceAll("\\s+|cd_frame_id_=\".{32}\"","")));
        assertTrue(domCapture.has("host"));
        assertTrue(domCapture.has("url"));
        assertTrue(domCapture.getBoolean("fullDOM"));
        assertFalse(domCapture.getBoolean("forced"));
//        assertFalse(domCapture.getBoolean("eventOn"));
        assertTrue(domCapture.has("dcid"));
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
}
