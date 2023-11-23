package com.tl;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

@RunWith(Parameterized.class)
public class BlacklistElementTest extends UICInit {

    private final String browserService = properties
            .getProperty("browserService");
    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String pathSeparator = System.getProperty("file.separator");

    public BlacklistElementTest(final String browser) {
        super(browser, "blacklist", "index.html", "iframe3", null, false);
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

    @Test
    public void blacklistedtextfield1W3c() throws Exception {

        if (this.browserService.toLowerCase().contains("w3c")) {

            final UICTest test = new UICTest("blacklistedtextfield", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "CustomConfigurationFiles" + this.pathSeparator
                    + "BlacklistedElements_w3c.js", "Chrome26");

            assertTrue(isElementPresent(By.id("blacklisted")));
            driver.findElement(By.id("blacklisted")).clear();
            driver.findElement(By.id("blacklisted")).sendKeys(
                    "Element ID is blacklisted");

            driver.findElement(By.id("ti")).clear();
            driver.findElement(By.id("ti")).sendKeys(
                    "Element ID is not blacklisted");

            final JSONObject uicObject1 = getUICObject("[[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",1],[\"TD\",0],[\"INPUT\",0]]");
            assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject1);

            final UICTest t1 = verifyblacklistedtextfield1(uicObject1);
            assertTrue(t1.getErrs(), t1.getStatus());

        }
    }

    @Test
    public void blacklistedtextfield2W3c() throws Exception {

        if (this.browserService.toLowerCase().contains("w3c")) {

            final UICTest test = new UICTest("blacklistedtextfield", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "CustomConfigurationFiles" + this.pathSeparator
                    + "BlacklistedElements_w3c.js", "Chrome26");

            assertTrue(isElementPresent(By.id("ti")));
            driver.findElement(By.id("ti")).clear();
            driver.findElement(By.id("ti")).sendKeys(
                    "Element ID is not blacklisted");

            driver.findElement(By.id("bi")).click();

            final JSONObject uicObject2 = getUICObject("[[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",0],[\"TD\",0],[\"INPUT\",0]]");
            assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject2);

            final UICTest t2 = verifyblacklistedtextfield2(uicObject2);
            assertTrue(t2.getErrs(), t2.getStatus());

        }
    }

    @Test
    public void blacklistedtextfield1Jq() throws Exception {

        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("blacklistedtextfield", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "CustomConfigurationFiles" + this.pathSeparator
                    + "BlacklistedElements_jq.js", "Chrome26");

            assertTrue(isElementPresent(By.id("blacklisted")));
            driver.findElement(By.id("blacklisted")).clear();
            driver.findElement(By.id("blacklisted")).sendKeys(
                    "Element ID is blacklisted");

            driver.findElement(By.id("ti")).clear();
            driver.findElement(By.id("ti")).sendKeys(
                    "Element ID is not blacklisted");

            final JSONObject uicObject1 = getUICObject("blacklisted");
            assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject1);

            final UICTest t1 = verifyblacklistedtextfield1(uicObject1);
            assertTrue(t1.getErrs(), t1.getStatus());
        }
    }

    @Test
    public void blacklistedtextfield2Jq() throws Exception {

        if (this.browserService.toLowerCase().contains("jq")) {

            final UICTest test = new UICTest("blacklistedtextfield", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "CustomConfigurationFiles" + this.pathSeparator
                    + "BlacklistedElements_w3c.js", "Chrome26");

            assertTrue(isElementPresent(By.id("ti")));
            driver.findElement(By.id("ti")).clear();
            driver.findElement(By.id("ti")).sendKeys(
                    "Element ID is not blacklisted");

            driver.findElement(By.id("bi")).click();

            final JSONObject uicObject2 = getUICObject("[[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",0],[\"TD\",0],[\"INPUT\",0]]");
            assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject2);

            final UICTest t2 = verifyblacklistedtextfield2(uicObject2);
            assertTrue(t2.getErrs(), t2.getStatus());

        }
    }

    public UICTest verifyblacklistedtextfield1(final JSONObject uicObject) throws Exception {
        final UICTest t = new UICTest("blacklistedtextfield", browser);

        verifyScreenviewOffset(uicObject, t, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "change");
        verifyTLEvent(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(
                target,
                t,
                "[[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",1],[\"TD\",0],[\"INPUT\",0]]");

        final String targetType = target.getString("type");
        if (!("INPUT").equals(targetType)) {
            t.addMsg("targetType", "INPUT", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("textBox").equals(dcType)) {
            t.addMsg("targetType", "textBox", dcType);
        }

        verifySubType(target, t, "text");

        verifyTargetName(target, t, "text1");

        final JSONObject position = (JSONObject) target.get("position");

        verifyPosHeight(position, t, 18);
        verifyPosWidth(position, t, 153);

        verifyRelXY(position, t, "0.2,0.4");

        verifyCurrState(target, t, "Continue");

        verifyDwell(target, t, 1);

        if (target.getBoolean("isParentLink")) {
            t.addMsg("isParentLink", "false", "true");
        }

        verifyVisitedCount(target, t, 1);

        verifyFocusInOffset(uicObject, t, 1);
        verifyOffset(uicObject, t, 1);

        return t;
    }

    public UICTest verifyblacklistedtextfield2(final JSONObject uicObject) throws Exception {
        final UICTest t = new UICTest("blacklistedtextfield", browser);

        verifyScreenviewOffset(uicObject, t, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "click");
        verifyTLEvent(event, t, "click");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(
                target,
                t,
                "[[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",0],[\"TD\",0],[\"INPUT\",0]]");

        final String targetType = target.getString("type");
        if (!("INPUT").equals(targetType)) {
            t.addMsg("targetType", "INPUT", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("button").equals(dcType)) {
            t.addMsg("targetType", "button", dcType);
        }

        verifySubType(target, t, "button");

        verifyTargetName(target, t, "buttonInput");

        final JSONObject position = (JSONObject) target.get("position");
        if (this.quirksMode) {
            verifyPosHeight(position, t, 24);
            verifyPosWidth(position, t, 78);
        } else {
            verifyPosHeight(position, t, 20);
            verifyPosWidth(position, t, 80);
        }
        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "Continue");

        verifyDwell(target, t, 1);

        if (target.getBoolean("isParentLink")) {
            t.addMsg("isParentLink", "false", "true");
        }

        verifyVisitedCount(target, t, 1);

        verifyFocusInOffset(uicObject, t, 1);
        verifyOffset(uicObject, t, 1);

        return t;
    }

    // @Test
    public void captureEventsInSameDomainIframe() throws Exception {

        final String mainWindow = driver.getWindowHandles().iterator().next();

        assertTrue(isElementPresent(By.id("si")));
        final WebElement element = driver.findElement(By.id("si"));
        element.sendKeys("Sample text");

        assertTrue(isElementPresent(By.id("iframe01")));
        driver.switchTo().frame(driver.findElement(By.id("iframe01")));
        final WebElement textBox = driver.findElement(By.id("Text1"));
        textBox.sendKeys("Text inside iframe01");

        final WebElement submitButton = driver.findElement(By.id("btn"));
        submitButton.click();

        driver.switchTo().window(mainWindow);
        // driver.findElement(By.id("ai")).sendKeys("iframe test");
        // driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("Text1");
        // JSONObject uicObject = getUICObject("Text1");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyTextboxInputInSameDomain(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyTextboxInputInSameDomain(final JSONObject uicObject) throws Exception {

        final UICTest test = new UICTest("same_domain_iframe_input", browser);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            test.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, test, "[[\"iframe01\"],[\"Text1\"]]");

        final String targetType = target.getString("type");
        if (!("INPUT").equals(targetType)) {
            test.addMsg("targetType", "INPUT", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("textBox").equals(dcType)) {
            test.addMsg("targetType", "textBox", dcType);
        }

        verifyTargetName(target, test, "Text1");

        verifyCurrState(target, test, "Text inside iframe01");

        verifyPrevState(target, test, "");

        verifyVisitedCount(target, test, 1);

        return test;
    }

    public final void executeDCXInitJavaScript(final UICTest test,
            final String testcaseFileName, final String browserName) {

        final String jsCommand = getDCXInitJavaScriptFromFile(testcaseFileName);
        /*
         * The code below is when reading the init file via configuration wizard
         * String jsCommand = getDCXInitJavaScript(testcaseFileName,
         * browserName, test.getName(), test);
         */
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
        final String jsCommand = extractConfigurationFile(dcxInitTestCaseName);
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

        final String jsCommand = extractConfigurationFile(downloadedFileName);
        System.out.println(jsCommand);

        if (null == jsCommand) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(jsCommand);
        return jsCommand;

    }

    public final String extractConfigurationFile(final String fileName) {
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
