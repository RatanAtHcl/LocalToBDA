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
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;

public class DOM_Capture_iFrame_Privacy extends UICInit {
    private final String browserService = properties
            .getProperty("browserService");
    private final String currentDirectory;
    private final String uicTestDataDir;
    private final String uicExpectedHTMLDir;
    private final String pathSeparator = System.getProperty("file.separator");
    
    public DOM_Capture_iFrame_Privacy(final String browser) {
        super(browser, "DOMCapture", "iframe.html", "ai", null, true);
        
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
        // in case of non-standard controls, state1 refers to currstate stored upon input events, and 
        // state2 refers to currstate stored upon interactions with textarea
        // in case of select controls, state1 refers to the currstate and state2 refers to prevstate
        private final String state1;
        private final String state2;
        private final String subtype;
        public ExpectedValues(final String expectedId, final String expectedIdType, final String expectedName,
                final String expectedDcType, final String expectedType, final Integer expectedHeight, 
                final Integer expectedWidth, final String expectedRelXY, final String expectedState1, 
                final String expectedState2, final String expectedSubtype) {
            this.id = expectedId;
            this.idType = expectedIdType;
            this.name = expectedName;
            this.dcType = expectedDcType;
            this.type = expectedType;
            this.height = expectedHeight;
            this.width = expectedWidth;
            this.relXY = expectedRelXY;
            this.state1 = expectedState1;
            this.state2 = expectedState2;
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
        public String getState1() {
            return state1;
        }
        public String getState2() {
            return state2;
        }
        public String getSubtype() {
            return subtype;
        }
    }
    
    public void nonStandardInteract(final UICTest t, final String expectedState1, 
            final String expectedState2) throws Exception {
        assertTrue(isElementPresent(By.id("cb1")));
        driver.findElement(By.id("cb1")).click();
        driver.findElement(By.id("pi")).click();
        final ExpectedValues v1 = new ExpectedValues("cb1", "-1", "redBox", "checkBox", "input", 
                13, 13, "0,0", expectedState1, expectedState2, "checkbox");
        verify(t, v1, true);
        
        assertTrue(isElementPresent(By.id("rb1")));
        driver.findElement(By.id("rb1")).click();
        driver.findElement(By.id("pi")).click();
        final ExpectedValues v2 = new ExpectedValues("rb1", "-1", "radioButton", "radioButton", "input", 
                13, 12, "0,0", expectedState1, expectedState2, "radio");
        verify(t, v2, true);

        assertTrue(isElementPresent(By.cssSelector("input[myattr=\"ti_pvt\"]")));
        driver.findElement(By.cssSelector("input[myattr=\"ti_pvt\"]")).click();
        driver.findElement(By.cssSelector("input[myattr=\"ti_pvt\"]")).sendKeys("Test123!@#" + Keys.TAB);
        final ExpectedValues v3 = new ExpectedValues("myattr=ti_pvt", "-3", "textInput", "textBox", "input", 
                19, 131, "0,0", expectedState1, expectedState2, "text");
        verify(t, v3, true);

        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().frame("iframe");

        assertTrue(isElementPresent(By.id("cb1")));
        driver.findElement(By.id("cb1")).click();
        driver.findElement(By.id("pi")).click();
        driver.switchTo().window(mainWindow); 
        final ExpectedValues v4 = new ExpectedValues("[[\"iframe\"],[\"cb1\"]]", "-2", "redBox", "checkBox", "input", 
                13, 13, "0,0", expectedState1, expectedState2, "checkbox");
        verify(t, v4, true);

        driver.switchTo().frame("iframe");
        assertTrue(isElementPresent(By.id("rb1")));
        driver.findElement(By.id("rb1")).click();
        driver.findElement(By.id("pi")).click();
        driver.switchTo().window(mainWindow); 
        final ExpectedValues v5 = new ExpectedValues("[[\"iframe\"],[\"rb1\"]]", "-2", "radioButton", "radioButton", "input", 
                13, 12, "0,0", expectedState1, expectedState2, "radio");
        verify(t, v5, true);

        driver.switchTo().frame("iframe");
        assertTrue(isElementPresent(By.cssSelector("input[myattr=\"ti_pvt\"]")));
        driver.findElement(By.cssSelector("input[myattr=\"ti_pvt\"]")).click();
        driver.findElement(By.cssSelector("input[myattr=\"ti_pvt\"]")).sendKeys("Test123!@#" + Keys.TAB);
        driver.switchTo().window(mainWindow); 
        final ExpectedValues v6 = new ExpectedValues("[[\"iframe\"],[\"ti_pvt\"]]", "-2", "textInput", "textBox", "input", 
                19, 131, "3,14", expectedState1, expectedState2, "text");
        verify(t, v6, true);        
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void nonStandardMaskEmptyTest() throws Exception {
        final UICTest t = new UICTest("nonStandardMaskEmptyTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_jquery_non_standard_mask_empty.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_w3c_non_standard_mask_empty.js", browser);
        }  
        nonStandardInteract(t, "", "");
    }
    
    @Test
    public void nonStandardMaskBasicTest() throws Exception {
        final UICTest t = new UICTest("nonStandardMaskBasicTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_jquery_non_standard_mask_basic.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_w3c_non_standard_mask_basic.js", browser);
        }  
        nonStandardInteract(t, "XXXXX", "XXXXX");
    }
    
    @Test
    public void nonStandardMaskTypeTest() throws Exception {
        final UICTest t = new UICTest("nonStandardMaskTypeTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_jquery_non_standard_mask_type.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_w3c_non_standard_mask_type.js", browser);
        }  
        nonStandardInteract(t, "xxx", "Xxxx999@@@");
    }
    
    @Test
    public void nonStandardMaskCustomTest() throws Exception {
        final UICTest t = new UICTest("nonStandardMaskCustomTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_jquery_non_standard_mask_custom.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_w3c_non_standard_mask_custom.js", browser);
        }  
        nonStandardInteract(t, "!@#$%*", "!@#$%*");
    }
    
    public void selectInteract() throws Exception {
        assertTrue(isElementPresent(By.id("abcd")));
        driver.findElement(By.id("abcd")).click();
        driver.findElement(By.id("abcd")).sendKeys("asdf" + Keys.TAB);
        
        assertTrue(isElementPresent(By.id("foo_private")));
        driver.findElement(By.id("foo_private")).click();
        driver.findElement(By.id("foo_private")).sendKeys("asdf" + Keys.TAB);
        
        assertTrue(isElementPresent(By.cssSelector("input[myattr=\"secret\"]")));
        driver.findElement(By.cssSelector("input[myattr=\"secret\"]")).click();
        driver.findElement(By.cssSelector("input[myattr=\"secret\"]")).sendKeys("asdf" + Keys.TAB);
        
        driver.switchTo().frame("iframe");
        
        Select s4 = new Select(driver.findElement(By.id("foo_priv")));
        s4.selectByVisibleText("GREEN");
        driver.findElement(By.id("pi")).click();
        
        Select s5 = new Select(driver.findElement(By.cssSelector("select[name=\"selectList.2\"]")));
        s5.selectByVisibleText("BLUE");
        driver.findElement(By.id("pi")).click();

        final String mainWindow = driver.getWindowHandles().iterator().next();
        driver.switchTo().window(mainWindow); 
    }
    
    @Test
    public void selectMaskEmptyTest() throws Exception {
        final UICTest t = new UICTest("selectMaskEmptyTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_jquery_select_mask_empty.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_w3c_select_mask_empty.js", browser);
        }
        selectInteract();
        final ExpectedValues v1 = new ExpectedValues("abcd", "-1", "test", "textBox", "input", 
                19, 131, "3,0", "", "", "text");
        verify(t, v1, false);
        final ExpectedValues v2 = new ExpectedValues("foo_private", "-1", "", "textBox", "input", 
                19, 131, "3,0", "", "", "text");
        verify(t, v2, false);
        final ExpectedValues v3 = new ExpectedValues("myattr=secret", "-3", "private3", "textBox", "input", 
                19, 131, "3,0", "", "", "text");
        verify(t, v3, false);
        final ExpectedValues v4 = new ExpectedValues("[[\"iframe\"],[\"foo_priv\"]]", "-2", "selectList", "selectList", "select", 
                18, 74, "3,12", "", "", "select-one");
        verify(t, v4, false);
        final ExpectedValues v5 = new ExpectedValues("[[\"iframe\"],[\"container_2\"],[\"table\",0],[\"tbody\",0],[\"tr\",2],[\"td\",1],[\"select\",0]]", 
                "-2", "selectList.2", "selectList", "select", 
                18, 74, "5,48", "", "", "select-one");
        verify(t, v5, false);
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void selectMaskBasicTest() throws Exception {
        final UICTest t = new UICTest("selectMaskBasicTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_jquery_select_mask_basic.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_w3c_select_mask_basic.js", browser);
        }
        selectInteract();
        final ExpectedValues v1 = new ExpectedValues("abcd", "-1", "test", "textBox", "input", 
                19, 131, "3,0", "XXXXX", "", "text");
        verify(t, v1, false);
        final ExpectedValues v2 = new ExpectedValues("foo_private", "-1", "", "textBox", "input", 
                19, 131, "3,0", "XXXXX", "", "text");
        verify(t, v2, false);
        final ExpectedValues v3 = new ExpectedValues("myattr=secret", "-3", "private3", "textBox", "input", 
                19, 131, "3,0", "XXXXX", "", "text");
        verify(t, v3, false);
        final ExpectedValues v4 = new ExpectedValues("[[\"iframe\"],[\"foo_priv\"]]", "-2", "selectList", "selectList", "select", 
                18, 74, "3,12", "XXXXX", "XXXXX", "select-one");
        verify(t, v4, false);
        final ExpectedValues v5 = new ExpectedValues("[[\"iframe\"],[\"container_2\"],[\"table\",0],[\"tbody\",0],[\"tr\",2],[\"td\",1],[\"select\",0]]", 
                "-2", "selectList.2", "selectList", "select", 
                18, 74, "5,48", "XXXXX", "XXXXX", "select-one");
        verify(t, v5, false);
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void selectMaskTypeTest() throws Exception {
        final UICTest t = new UICTest("selectMaskTypeTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_jquery_select_mask_type.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_w3c_select_mask_type.js", browser);
        }
        selectInteract();
        final ExpectedValues v1 = new ExpectedValues("abcd", "-1", "test", "textBox", "input", 
                19, 131, "3,0", "xxxx", "", "text");
        verify(t, v1, false);
        final ExpectedValues v2 = new ExpectedValues("foo_private", "-1", "", "textBox", "input", 
                19, 131, "3,0", "xxxx", "", "text");
        verify(t, v2, false);
        final ExpectedValues v3 = new ExpectedValues("myattr=secret", "-3", "private3", "textBox", "input", 
                19, 131, "3,0", "xxxx", "", "text");
        verify(t, v3, false);
        final ExpectedValues v4 = new ExpectedValues("[[\"iframe\"],[\"foo_priv\"]]", "-2", "selectList", "selectList", "select", 
                18, 74, "3,12", "xxxxx", "xxx", "select-one");
        verify(t, v4, false);
        final ExpectedValues v5 = new ExpectedValues("[[\"iframe\"],[\"container_2\"],[\"table\",0],[\"tbody\",0],[\"tr\",2],[\"td\",1],[\"select\",0]]", 
                "-2", "selectList.2", "selectList", "select", 
                18, 74, "5,48", "xxxx", "xxx", "select-one");
        verify(t, v5, false);
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    @Test
    public void selectMaskCustomTest() throws Exception {
        final UICTest t = new UICTest("selectMaskCustomTest", browser);
        if (this.browserService.toLowerCase().contains("jq")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_jquery_select_mask_custom.js", browser);
        }
        else if (this.browserService.toLowerCase().contains("w3c")) {
            executeDCXInitJavaScript(t, this.uicTestDataDir
                    + "DOMCaptureiFramePrivacyInitFiles" + this.pathSeparator
                    + "init_w3c_select_mask_custom.js", browser);
        }
        selectInteract();
        final ExpectedValues v1 = new ExpectedValues("abcd", "-1", "test", "textBox", "input", 
                19, 131, "3,0", "!@#$%*", "!@#$%*", "text");
        verify(t, v1, false);
        final ExpectedValues v2 = new ExpectedValues("foo_private", "-1", "", "textBox", "input", 
                19, 131, "3,0", "!@#$%*", "!@#$%*", "text");
        verify(t, v2, false);
        final ExpectedValues v3 = new ExpectedValues("myattr=secret", "-3", "private3", "textBox", "input", 
                19, 131, "3,0", "!@#$%*", "!@#$%*", "text");
        verify(t, v3, false);
        final ExpectedValues v4 = new ExpectedValues("[[\"iframe\"],[\"foo_priv\"]]", "-2", "selectList", "selectList", "select", 
                18, 74, "3,12", "!@#$%*", "!@#$%*", "select-one");
        verify(t, v4, false);
        final ExpectedValues v5 = new ExpectedValues("[[\"iframe\"],[\"container_2\"],[\"table\",0],[\"tbody\",0],[\"tr\",2],[\"td\",1],[\"select\",0]]", 
                "-2", "selectList.2", "selectList", "select", 
                18, 74, "5,48", "!@#$%*", "!@#$%*", "select-one");
        verify(t, v5, false);
        assertTrue(t.getErrs(), t.getStatus());
    }
    
    // nonstandard indicates whether the current test is for non standard controls
    // used to differentiate between what the two states correspond to
    public void verify(final UICTest t, final ExpectedValues values, final Boolean nonStandard) throws Exception {
        final JSONObject type4Msg = (JSONObject) getUICObject(values.getId());
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
        if (!this.currBrowser.contains("ie")) {
        	assertTrue(position.has("relXY"));
        }
//        verifyPosHeight(position, t, values.getHeight());
//        verifyPosWidth(position, t, values.getWidth());
//        verifyRelXY(position, t, values.getRelXY());  
        if (nonStandard) {
            if (target.getString("dcType").equals("checkBox") || target.getString("dcType").equals("radioButton")) {
                verifyCurrState(target, t, values.getState1()); // curr state value should be determined by mask
            }
            else if (target.getString("dcType").equals("textBox")) {
                verifyCurrState(target, t, values.getState2()); // curr state value should be determined by mask
            }
        }
        else {
            verifyCurrState(target, t, values.getState1());
            verifyPrevState(target, t, values.getState2());
        }
        verifySubType(target, t, values.getSubtype());
        assertFalse(target.getBoolean("isParentLink"));
        verifyDwell(target, t, 1);
        final JSONObject event = (JSONObject) type4Msg.get("event");
        assertTrue(event.getString("dcEvent").equals("valueChange"));
        assertTrue(event.getString("type").equals("change"));
        assertTrue(type4Msg.has("dcid"));
        verifyFocusInOffset(type4Msg, t, 1);
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
