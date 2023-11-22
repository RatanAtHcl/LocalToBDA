package com.tl;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

@RunWith(Parameterized.class)
public class FramesTest extends UICInit {
    public FramesTest(final String browser) {
        super(browser, "frames", "index.html", "google_logo", null, false);
    }

    @Override
    @Before
    public void setUp() {
        super.setUp();
    }

    // Note x/y coordinates are only captured for click event only within a
    // frame/iframe

    @Test
    public void fr1PasswordField() throws Exception {

        driver.switchTo().frame("fr1");
        final WebElement passwordField = driver.findElement(By.id("pi"));
        passwordField.click();
        passwordField.sendKeys("TEST!test1 test");
		Thread.sleep(this.DWELL_TIME);
        final WebElement button = driver.findElement(By.id("bi"));
        button.click();
        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);

        final JSONObject uicObject = getUICObject("[[\"fr1\"],[\"pi\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr1PasswordField(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr1PasswordField(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("fr1_passwordField", browser);

        verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1); // new - just checking existence

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "[[\"fr1\"],[\"pi\"]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("textbox").equals(dcType)) {
            t.addMsg("dcType", "textbox", dcType);
        }

        verifySubType(target, t, "password");

        verifyTargetName(target, t, "passwordInput");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 18);
        verifyPosWidth(position, t, 153);

        verifyRelXY(position, t, "0.7,0.5");
        //Error is here, values can only be between 0 and 1.0 but are showing 3,6

        verifyCurrState(target, t, "XXXX@xxxx99xxxx");

        verifyDwell(target, t, this.DWELL_TIME);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void fr2CheckBox() throws Exception {
        driver.switchTo().frame("fr1");
        final WebElement checkbox = driver.findElement(By.id("cb3"));
        checkbox.click();
        final WebElement button = driver.findElement(By.id("bi"));
        button.click();
        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);

        final JSONObject uicObject = getUICObject("[[\"fr1\"],[\"cb3\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr2CheckBox(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr2CheckBox(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("fr2_checkBox", browser);

        verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1); // new - just checking existence

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "[[\"fr1\"],[\"cb3\"]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("checkbox").equals(dcType)) {
            t.addMsg("dcType", "checkbox", dcType);
        }

        verifySubType(target, t, "checkbox");

        verifyTargetName(target, t, "blueBox");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 13);
        verifyPosWidth(position, t, 13);

        verifyRelXY(position, t, "0.3,0.5");

        verifyCurrState(target, t, "blue");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void fr3ClickButton() throws Exception {
        driver.switchTo().frame("fr2");
        final WebElement button = driver.findElement(By.id("btn"));
        button.click();
        final WebElement textbox = driver.findElement(By.id("Text1"));
        textbox.sendKeys("Within frame2");
        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);

        final JSONObject uicObject = getUICObject("[[\"fr2\"],[\"btn\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr3ClickButton(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr3ClickButton(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("fr3_clickButton", browser);

        verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1); // new - just checking existence

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "click");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "[[\"fr2\"],[\"btn\"]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("button").equals(dcType)) {
            t.addMsg("dcType", "button", dcType);
        }

        verifySubType(target, t, "button");

        verifyTargetName(target, t, "buttonInput");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 22);
        verifyPosWidth(position, t, 67);

        verifyRelXY(position, t, "0.7,0.4");

        verifyCurrState(target, t, "Continue");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void fr4InputTextField() throws Exception {
        driver.switchTo().frame("fr2");
        final WebElement textbox = driver.findElement(By.id("Text1"));
        textbox.sendKeys("Within frame2");
		Thread.sleep(this.DWELL_TIME);
        final WebElement button = driver.findElement(By.id("btn"));
        button.click();
        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);

        final JSONObject uicObject = getUICObject("[[\"fr2\"],[\"Text1\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr4InputTextField(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr4InputTextField(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("fr4_inputTextField", browser);

        verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1); // new - just checking existence

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "[[\"fr2\"],[\"Text1\"]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("textbox").equals(dcType)) {
            t.addMsg("dcType", "textbox", dcType);
        }

        verifySubType(target, t, "text");

        verifyTargetName(target, t, "Text1");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 22);
        verifyPosWidth(position, t, 153);

        verifyCurrState(target, t, "Within frame2");

        verifyDwell(target, t, this.DWELL_TIME);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    // Defect 26461
    // @Test
    public void fr5HashTest() throws Exception {
        driver.switchTo().frame("fr1");
        driver.findElement(By.linkText("Go to Description")).click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");
        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);

        final JSONObject uicObject = getUICObject("[[\"fr2\"],[\"#lorem\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr5HashTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr5HashTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("verify_fr5_hashTest", browser);

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1); // just checking existence

        final Integer type = uicObject.getInt("type");
        if (2 != type) {
            t.addMsg("type", "2", type.toString());
        }

        final JSONObject screenview = (JSONObject) uicObject.get("screenview");
        assertTrue(("LOAD").equals(screenview.getString("type")));
        assertTrue(("#lorem").equals(screenview.getString("name")));

        return t;
    }

    // RTC #5853
    @Test
    public void fr6CaptureHREFParentLink() throws Exception {
        driver.switchTo().frame("fr1");
        final String frameurl = driver.getCurrentUrl();
        assertTrue(isElementPresent(By.id("google_logo")));
        final WebElement image = driver.findElement(By.id("google_logo"));
        image.click();
        System.out.println(image.isSelected());
        final WebElement button = driver.findElement(By.id("bi"));
        button.click();
        System.out.println(button.isSelected());
        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);

        final JSONObject uicObject = getUICObject("[[\"fr1\"],[\"google_logo\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr6CaptureHREFParentLink(uicObject, frameurl);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr6CaptureHREFParentLink(final JSONObject uicObject, final String expectedUrl) throws Exception {

        final UICTest t = new UICTest("captureHREFParentLink", browser);

        verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1); // new - just checking existence

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "click");

        final JSONObject target = (JSONObject) uicObject.get("target");
        assertTrue(target.getBoolean("isParentLink"));

        verifyTargetID(target, t, "[[\"fr1\"],[\"google_logo\"]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("img").equals(targetType)) {
            t.addMsg("targetType", "img", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("img").equals(dcType)) {
            t.addMsg("targetType", "img", dcType);
        }

        verifyCurrState(target, t, "href", expectedUrl
                + "#google_image_in_link");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    // RTC #11937
    // @Test
    public void fr7ButtonIsParentLinkTrue() throws Exception {
        driver.switchTo().frame("fr1");
        final WebElement button = driver.findElement(By
                .xpath("/html/body/table/tbody/tr[27]/td/button/span/span"));
        button.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");
        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);

        final JSONObject uicObject = getUICObject("[[\"fr1\"],[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",26],[\"TD\",0],[\"BUTTON\",0],[\"SPAN\",0],[\"SPAN\",0]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr7ButtonIsParentLinkTrue(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr7ButtonIsParentLinkTrue(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("buttonIsParentLinkTrue", browser);

        verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1); // new - just checking existence

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "click");

        final JSONObject target = (JSONObject) uicObject.get("target");

        assertTrue(target.getBoolean("isParentLink"));

        verifyTargetID(
                target,
                t,
                "[[\"fr1\"],[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",26],[\"TD\",0],[\"BUTTON\",0],[\"SPAN\",0],[\"SPAN\",0]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("SPAN").equals(targetType)) {
            t.addMsg("targetType", "SPAN", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("SPAN").equals(dcType)) {
            t.addMsg("targetType", "SPAN", dcType);
        }

        verifyCurrState(target, t, "innerText", "Click Me");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    // RTC #11937
    @Test
    public void fr8AnchorTagIsParentLink() throws Exception {
        driver.switchTo().frame("fr1");
        final String frameurl = driver.getCurrentUrl();
        final WebElement link = driver.findElement(By
                .xpath("html/body/table/tbody/tr[28]/td/a/span"));
        link.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");
        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);
        final JSONObject uicObject = getUICObject("[[\"fr1\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",27],[\"td\",0],[\"a\",0],[\"span\",0]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr8AnchorTagIsParentLink(uicObject, frameurl);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr8AnchorTagIsParentLink(final JSONObject uicObject, final String expectedUrl) throws Exception {

        final UICTest t = new UICTest("fr8_anchorTagIsParentLink", browser);

        verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1); // new - just checking existence

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "click");

        final JSONObject target = (JSONObject) uicObject.get("target");

        assertTrue(target.getBoolean("isParentLink"));

        verifyTargetID(
                target,
                t,
                "[[\"fr1\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",27],[\"td\",0],[\"a\",0],[\"span\",0]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("span").equals(targetType)) {
            t.addMsg("targetType", "span", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("span").equals(dcType)) {
            t.addMsg("targetType", "span", dcType);
        }

        verifyCurrState(target, t, "href", expectedUrl + "#Discover");
        verifyCurrState(target, t, "innerText", "Link");
        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void fr9AnchorTagIsParentLink() throws Exception {
        driver.switchTo().frame("fr1");
        final String frameurl = driver.getCurrentUrl();
        final WebElement link = driver.findElement(By.xpath("html/body/table/tbody/tr[28]/td/a/img"));
        link.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");
        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);
        final JSONObject uicObject = getUICObject("[[\"fr1\"],[\"google\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr9AnchorTagIsParentLink(uicObject, frameurl);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr9AnchorTagIsParentLink(final JSONObject uicObject, final String expectedUrl) throws Exception {

        final UICTest t = new UICTest("fr9_anchorTagIsParentLink", browser);

        verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1); // new - just checking existence

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "click");

        final JSONObject target = (JSONObject) uicObject.get("target");

        assertTrue(target.getBoolean("isParentLink"));

        verifyTargetID(target, t, "[[\"fr1\"],[\"google\"]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("img").equals(targetType)) {
            t.addMsg("targetType", "img", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("img").equals(dcType)) {
            t.addMsg("targetType", "img", dcType);
        }

        verifyCurrState(target, t, "href", expectedUrl + "#Discover");
        verifyCurrState(target, t, "innerText", "Link");
        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void fr10ButtonIsNotParentLinkTrue() throws Exception {
        driver.switchTo().frame("fr1");
        final WebElement button = driver.findElement(By
                .xpath("/html/body/table/tbody/tr[27]/td/button"));
        button.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");
        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);

        final JSONObject uicObject = getUICObject("[[\"fr1\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",26],[\"td\",0],[\"button\",0]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr10ButtonIsNotParentLinkTrue(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr10ButtonIsNotParentLinkTrue(
            final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("fr10_buttonIsNotParentLinkTrue",
                browser);

        verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1); // new - just checking existence

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "click");

        final JSONObject target = (JSONObject) uicObject.get("target");

        assertFalse(target.getBoolean("isParentLink"));

        verifyTargetID(
                target,
                t,
                "[[\"fr1\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",26],[\"td\",0],[\"button\",0]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("button").equals(targetType)) {
            t.addMsg("targetType", "button", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("button").equals(dcType)) {
            t.addMsg("targetType", "button", dcType);
        }

        // verifyCurrState(target, t, "href", expectedUrl
        // + "#google_image_in_link");
        verifyCurrState(target, t, "innerText", "Click Me");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void fr11TextareaTest() throws Exception {
        driver.switchTo().frame("fr1");
        driver.findElement(By.id("ai")).click();
        driver.findElement(By.id("ai")).clear();
        driver.findElement(By.id("ai")).sendKeys(Keys.BACK_SPACE);
        driver.findElement(By.id("ai")).sendKeys("test text");
        Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("ai")).sendKeys("test text");
        driver.findElement(By.id("ai")).sendKeys(Keys.TAB);
        driver.findElement(By.id("bi")).click();

        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);

        final JSONObject uicObject = getUICObject("[[\"fr1\"],[\"ai\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr11TextareaTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr11TextareaTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("fr11_textareaTest", browser);

        verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        verifyCount(uicObject, t, 1); // new - just checking existence

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "[[\"fr1\"],[\"ai\"]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("textarea").equals(targetType)) {
            t.addMsg("targetType", "textarea", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("textbox").equals(dcType)) {
            t.addMsg("targetType", "textbox", dcType);
        }

        verifySubType(target, t, "textarea");

        verifyTargetName(target, t, "textareaInput");

        final JSONObject position = (JSONObject) target.get("position");

        verifyPosHeight(position, t, 135);
        verifyPosWidth(position, t, 494);

        verifyCurrState(target, t, "test texttest text");

        verifyPrevState(target, t, "");

        verifyDwell(target, t, this.DWELL_TIME);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void fr12UTF8textBoxTest() throws Exception {

        driver.switchTo().frame("fr1");

        driver.findElement(By.id("utf")).click();
        driver.findElement(By.id("utf")).clear();
        driver.findElement(By.id("utf")).sendKeys("� � �");
        Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("utf")).sendKeys("� � �");
        driver.findElement(By.id("bi")).click();

        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);

        final JSONObject uicObject = getUICObject("[[\"fr1\"],[\"utf\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr12UTF8textBoxTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr12UTF8textBoxTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("fr12_UTF8textBoxTest", browser);

        verifyScreenviewOffset(uicObject, t, 1); // just checking existence

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1); // just checking existence

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "[[\"fr1\"],[\"utf\"]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("textbox").equals(dcType)) {
            t.addMsg("targetType", "textbox", dcType);
        }

        verifySubType(target, t, "text");

        verifyTargetName(target, t, "textInputUTF");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 18);
        verifyPosWidth(position, t, 153);

        verifyCurrState(target, t, "� � �� � �");

        verifyPrevState(target, t, "");

        verifyDwell(target, t, this.DWELL_TIME);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void fr13GreenSelectListTest() throws Exception {
        driver.switchTo().frame("fr1");
        if (("ie").equals(browser) || ("IE9").equals(browser)) {
            focusOnElement(driver.findElement(By.name("selectList")));
            driver.findElement(By.name("selectList")).click();
        }
        new Select(driver.findElement(By.name("selectList")))
                .selectByVisibleText("GREEN");
        driver.findElement(By.id("bi")).click();

        // switch back
        // get current window
        final String mainWindowHandle = driver.getWindowHandles().iterator()
                .next();
        driver.switchTo().window(mainWindowHandle);

        final JSONObject uicObject = getUICObject("[[\"fr1\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",14],[\"td\",0],[\"select\",0]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyFr13GreenSelectListTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyFr13GreenSelectListTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("fr13_greenSelectListTest", browser);

        verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence

        if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, t, 1); // new - just checking existence

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(
                target,
                t,
                "[[\"fr1\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",14],[\"td\",0],[\"select\",0]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("select").equals(targetType)) {
            t.addMsg("targetType", "select", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("selectlist").equals(dcType)) {
            t.addMsg("targetType", "selectlist", dcType);
        }

        verifySubType(target, t, "select-one");

        verifyTargetName(target, t, "selectList");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 19);
        verifyPosWidth(position, t, 82);

        verifyCurrState(target, t, "green");

        if (("IE9").equals(browser)) {
            verifyPrevState(target, t, "red");
        }

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t; // failCount.equals(0);
    }
    
    @Test
	public void fr14BlacklistTest() throws Exception {
    	final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("fr1")));
        driver.switchTo().frame(driver.findElement(By.id("fr1")));

        final WebElement blackList = driver.findElement(By.id("blacklisted"));
        blackList.click();
        blackList.sendKeys("Test Blacklist");
        final WebElement button = driver.findElement(By.id("bi"));
        button.click();
        driver.switchTo().window(mainWindow);
		final JSONObject uicObject = getUICObject("[[\"fr1\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",28],[\"td\",0],[\"input\",0]]");
		final UICTest t = verifyFr14BlacklistTest(uicObject);	
		assertTrue(t.getErrs(),t.getStatus());				
	}
public UICTest verifyFr14BlacklistTest(final JSONObject uicObject) throws Exception {
    	
		final UICTest t = new UICTest("a25blackListTest", browser);
		verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence
		
		if (!uicObject.getBoolean("fromWeb")) {
            t.addMsg("fromWeb", "true", "false");
        }
		
		verifyCount(uicObject, t, 1); // new - just checking existence

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            t.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, t, "change");
    
		final JSONObject target = (JSONObject) uicObject.get("target");
		
        verifyTargetID(
                target,
                t,
                "[[\"fr1\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",28],[\"td\",0],[\"input\",0]]");
        
        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("textbox").equals(dcType)) {
            t.addMsg("targetType", "textbox", dcType);
        }
        verifySubType(target, t, "text");
        verifyTargetName(target, t, "textBlacklist");        
        
        verifyDwell(target, t, 1);
        verifyVisitedCount(target, t, 1);
        
        return t;
	}

	@Test
	public void fr14BlacklistTestRegEx() throws Exception {
   	final String mainWindow = driver.getWindowHandles().iterator().next();
       assertTrue(isElementPresent(By.id("fr1")));
       driver.switchTo().frame(driver.findElement(By.id("fr1")));

       final WebElement blackList = driver.findElement(By.id("TestForBlacklistElement"));
       blackList.click();
       blackList.sendKeys("Test Blacklist RegEx");
       final WebElement button = driver.findElement(By.id("bi"));
       button.click();
       driver.switchTo().window(mainWindow);
		final JSONObject uicObject = getUICObject("[[\"fr1\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",29],[\"td\",0],[\"input\",0]]");
		final UICTest t = verifyFr15BlacklistTestRegExp(uicObject);	
		assertTrue(t.getErrs(),t.getStatus());				
	}
	public UICTest verifyFr15BlacklistTestRegExp(final JSONObject uicObject) throws Exception {
   	
		final UICTest t = new UICTest("fr15blackListTestregEx", browser);
		verifyScreenviewOffset(uicObject, t, 1); // new -just checking existence
		
		if (!uicObject.getBoolean("fromWeb")) {
           t.addMsg("fromWeb", "true", "false");
       }
		
		verifyCount(uicObject, t, 1); // new - just checking existence

       final Integer type = uicObject.getInt("type");
       if (4 != type) {
           t.addMsg("type", "4", type.toString());
       }

       final JSONObject event = (JSONObject) uicObject.get("event");
       verifyEventType(event, t, "change");
   
		final JSONObject target = (JSONObject) uicObject.get("target");
		
       verifyTargetID(
               target,
               t,
               "[[\"fr1\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",29],[\"td\",0],[\"input\",0]]");
       
       final String targetType = target.getString("type").toLowerCase();
       if (!("input").equals(targetType)) {
           t.addMsg("targetType", "input", targetType);
       }
       final String dcType = target.getString("dcType").toLowerCase();
       if (!("textbox").equals(dcType)) {
           t.addMsg("targetType", "textbox", dcType);
       }
       verifySubType(target, t, "text");
       verifyTargetName(target, t, "textBlacklistRegEx");        
       
       verifyDwell(target, t, 1);
       verifyVisitedCount(target, t, 1);
       
       return t;
	}

    @Override
    @After
    public void tearDown() throws Exception {
        driver.quit();
        final String verificationErrorString = this.verificationErrors
                .toString();
        if (!"".equals(verificationErrorString)) {
            fail(verificationErrorString);
        }
    }
}
