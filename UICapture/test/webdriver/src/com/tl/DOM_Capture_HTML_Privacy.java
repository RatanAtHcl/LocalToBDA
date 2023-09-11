package com.tl;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;

public class DOM_Capture_HTML_Privacy extends UICInit {
    private final String browserService = properties
            .getProperty("browserService");
    private final String currentDirectory;
    private final String uicTestDataDir;
    private final String uicExpectedHTMLDir;
    private final String pathSeparator = System.getProperty("file.separator");
    
    public DOM_Capture_HTML_Privacy(final String browser) {
        super(browser, "h5", "index.html", "ai", null, true);
        
        this.currentDirectory = System.getProperty("user.dir");
        this.uicTestDataDir = this.currentDirectory + this.pathSeparator
                + "UICTestData" + this.pathSeparator;
        this.uicExpectedHTMLDir = this.currentDirectory + this.pathSeparator
                + "testWebsite" + this.pathSeparator + "DOMCaptureiFrame" + this.pathSeparator;
        System.out.println("BROWSER: " + browser);
        System.out.println("BROWSER SERVICE: "  + this.browserService);
        System.out.println("UIC TEST DATA DIRECTORY: "  + this.uicTestDataDir);
    }
    
    // expected values wrapper
    public class ExpectedValues {
        private final String id;
        private final String idType;
        private final String name;
        private final String dcType;
        private final String type;
        private final Integer height;
        private final Integer width;
        private final String relXY;
        private final String currState;
        private final String subtype;
        public ExpectedValues(final String expectedId, final String expectedIdType, final String expectedName,
                final String expectedDcType, final String expectedType, final Integer expectedHeight, 
                final Integer expectedWidth, final String expectedRelXY, final String expectedCurrState, final String expectedSubtype) {
            this.id = expectedId;
            this.idType = expectedIdType;
            this.name = expectedName;
            this.dcType = expectedDcType;
            this.type = expectedType;
            this.height = expectedHeight;
            this.width = expectedWidth;
            this.relXY = expectedRelXY;
            this.currState = expectedCurrState;
            this.subtype = expectedSubtype;
        }
        public String getId() {
            return id;
        }
        public String getIdType() {
            return idType;
        }
        public String getName() {
            return name;
        }
        public String getDcType() {
            return dcType;
        }
        public String getType() {
            return type;
        }
        public Integer getHeight() {
            return height;
        }
        public Integer getWidth() {
            return width;
        }
        public String getRelXY() {
            return relXY;
        }
        public String getCurrState() {
            return currState;
        }
        public String getSubtype() {
            return subtype;
        }
    }
    
    public void nonStandardInteract() throws Exception {
        assertTrue(isElementPresent(By.id("br")));
        driver.findElement(By.id("br")).click();        
        for (int i = 0; i < 2; i++) {
            driver.findElement(By.id("br")).sendKeys(Keys.ARROW_LEFT);
        }
        driver.findElement(By.id("br")).sendKeys("01011970");
        driver.findElement(By.id("bt")).click(); // remove focus by clicking on other element
        
        assertTrue(isElementPresent(By.id("bd")));
        driver.findElement(By.id("bd")).click(); 
        for (int i = 0; i < 3; i++) {
            driver.findElement(By.id("bd")).sendKeys(Keys.ARROW_LEFT);
        }        
        driver.findElement(By.id("bd")).sendKeys("01011970" + Keys.TAB + "1200pm");
        driver.findElement(By.id("bt")).click();
        
        assertTrue(isElementPresent(By.id("bm")));
        driver.findElement(By.id("bm")).click(); 
        driver.findElement(By.id("bm")).sendKeys(Keys.ARROW_LEFT + "January" + Keys.TAB + "1970");
        driver.findElement(By.id("bt")).click();
    }
    
    @Test
    public void nonStandardMaskEmptyTest() throws Exception {
        if (this.currBrowser.contains("ie")) {
            return;
        }
        final UICTest t = new UICTest("nonStandardMaskEmptyTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureHTMLPrivacyInitFiles" + this.pathSeparator
                    + "init_jquery_non_standard_mask_empty.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureHTMLPrivacyInitFiles" + this.pathSeparator
                    + "init_w3c_non_standard_mask_empty.js", browser);
        }  
        nonStandardInteract();
        
        final ExpectedValues v1 = new ExpectedValues("br", "-1", "bday", "datePicker", "input", 
                21, 134, "6,0", "", "date");
        verify(t, v1);
        final ExpectedValues v2 = new ExpectedValues("bd", "-1", "bdaytime", "datetime-local", "input", 
                21, 206, "6,0", "", "datetime-local");
        verify(t, v2);
        final ExpectedValues v3 = new ExpectedValues("bm", "-1", "bdaymonth", "month", "input", 
                21, 158, "7,0", "", "month");
        verify(t, v3);
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void nonStandardMaskBasicTest() throws Exception {
        if (this.currBrowser.contains("ie")) {
            return;
        }
        final UICTest t = new UICTest("nonStandardMaskBasicTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureHTMLPrivacyInitFiles" + this.pathSeparator
                    + "init_jquery_non_standard_mask_basic.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureHTMLPrivacyInitFiles" + this.pathSeparator
                    + "init_w3c_non_standard_mask_basic.js", browser);
        }  
        nonStandardInteract();
        
        final ExpectedValues v1 = new ExpectedValues("br", "-1", "bday", "datePicker", "input", 
                21, 134, "6,0", "XXXXX", "date");
        verify(t, v1);
        final ExpectedValues v2 = new ExpectedValues("bd", "-1", "bdaytime", "datetime-local", "input", 
                21, 206, "6,0", "XXXXX", "datetime-local");
        verify(t, v2);
        final ExpectedValues v3 = new ExpectedValues("bm", "-1", "bdaymonth", "month", "input", 
                21, 158, "7,0", "XXXXX", "month");
        verify(t, v3);
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void nonStandardMaskTypeTest() throws Exception {
        if (this.currBrowser.contains("ie")) {
            return;
        }
        final UICTest t = new UICTest("nonStandardMaskTypeTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureHTMLPrivacyInitFiles" + this.pathSeparator
                    + "init_jquery_non_standard_mask_type.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureHTMLPrivacyInitFiles" + this.pathSeparator
                    + "init_w3c_non_standard_mask_type.js", browser);
        }  
        nonStandardInteract();
        
        final ExpectedValues v1 = new ExpectedValues("br", "-1", "bday", "datePicker", "input", 
                21, 134, "6,0", "9999@99@99", "date");
        verify(t, v1);
        final ExpectedValues v2 = new ExpectedValues("bd", "-1", "bdaytime", "datetime-local", "input", 
                21, 206, "6,0", "9999@99@99X99@99", "datetime-local");
        verify(t, v2);
        final ExpectedValues v3 = new ExpectedValues("bm", "-1", "bdaymonth", "month", "input", 
                21, 158, "7,0", "9999@99", "month");
        verify(t, v3);
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void nonStandardMaskCustomTest() throws Exception {
        if (this.currBrowser.contains("ie")) {
            return;
        }
        final UICTest t = new UICTest("nonStandardMaskCustomTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureHTMLPrivacyInitFiles" + this.pathSeparator
                    + "init_jquery_non_standard_mask_custom.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureHTMLPrivacyInitFiles" + this.pathSeparator
                    + "init_w3c_non_standard_mask_custom.js", browser);
        }  
        nonStandardInteract();
        
        final ExpectedValues v1 = new ExpectedValues("br", "-1", "bday", "datePicker", "input", 
                21, 134, "6,0", "!@#$%*", "date");
        verify(t, v1);
        final ExpectedValues v2 = new ExpectedValues("bd", "-1", "bdaytime", "datetime-local", "input", 
                21, 206, "6,0", "!@#$%*", "datetime-local");
        verify(t, v2);
        final ExpectedValues v3 = new ExpectedValues("bm", "-1", "bdaymonth", "month", "input", 
                21, 158, "7,0", "!@#$%*", "month");
        verify(t, v3);
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    public void verify(final UICTest t, final ExpectedValues values) throws Exception {
        final JSONObject type4Msg = (JSONObject) getUICObjectByEventType(values.getId(), "change");
        verifyOffset(type4Msg, t, 1);
        verifyScreenviewOffset(type4Msg, t, 1); 
        verifyCount(type4Msg, t, 1);
        assertTrue(type4Msg.getBoolean("fromWeb"));
        final JSONObject target = (JSONObject) type4Msg.get("target");
        assertTrue(target.getString("id").equals(values.getId()));
        assertTrue(target.getString("idType").equals(values.getIdType()));
        assertTrue(target.getString("name").equals(values.getName()));
        assertTrue(target.getString("dcType").equals(values.getDcType()));
        assertTrue(target.getString("type").equals(values.getType()));
        final JSONObject position = (JSONObject) target.get("position");
        // just assert that position values are there
        assertTrue(position.has("height"));
        assertTrue(position.has("width"));
        assertTrue(position.has("relXY"));
//        verifyPosHeight(position, t, values.getHeight());
//        verifyPosWidth(position, t, values.getWidth());
//        verifyRelXY(position, t, values.getRelXY());  
        verifyCurrState(target, t, values.getCurrState()); // curr state value should be determined by mask
        verifySubType(target, t, values.getSubtype());
        assertFalse(target.getBoolean("isParentLink"));
//        verifyDwell(target, t, 1);
        final JSONObject event = (JSONObject) type4Msg.get("event");
        assertTrue(event.getString("dcEvent").equals("valueChange"));
        assertTrue(event.getString("type").equals("change"));
        assertTrue(type4Msg.has("dcid"));
//        verifyFocusInOffset(type4Msg, t, 1); focus in offset field apppearing is inconsistent, don't validate it for now
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
