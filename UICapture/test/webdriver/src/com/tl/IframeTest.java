package com.tl;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

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
public class IframeTest extends UICInit {
    public IframeTest(final String browser) {
        super(browser, "iframes", "index.html", "google_logo", null, false);
    }

    @Override
    @Before
    public void setUp() {
        super.setUp();
    }

    // Note x/y coordinates are only captured for click event only within a
    // frame/iframe

    @Test
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

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            test.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("textbox").equals(dcType)) {
            test.addMsg("targetType", "textbox", dcType);
        }

        verifyTargetName(target, test, "Text1");

        verifyCurrState(target, test, "Text inside iframe01");

        verifyPrevState(target, test, "");

        verifyVisitedCount(target, test, 1);

        return test;
    }

    @Test
    public void captureShouldNotFailWithDifferentDomainIframe() throws Exception {

        final String mainWindow = driver.getWindowHandles().iterator().next();

        assertTrue(isElementPresent(By.id("si")));
        final WebElement element = driver.findElement(By.id("si"));
        element.sendKeys("Sample text");

        assertTrue(isElementPresent(By.id("iframe2")));

        driver.switchTo().frame(driver.findElement(By.id("iframe2")));

        final WebElement textBox = driver.findElement(By.name("Text2"));
        textBox.sendKeys("Text inside iframe2");

        final WebElement clickButton = driver.findElement(By.id("clk"));
        clickButton.click();

        driver.switchTo().window(mainWindow);

        assertTrue(isElementPresent(By.id("ti")));
        final WebElement element2 = driver.findElement(By.id("ti"));
        element2.sendKeys("UIC is still working");
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("ti");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyCaptureShouldNotFailWithDifferentDomainIframe(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyCaptureShouldNotFailWithDifferentDomainIframe(final JSONObject uicObject) throws Exception {

        final UICTest test = new UICTest("diff_domain_iframe_input", browser);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            test.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, test, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, test, "ti");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            test.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("textbox").equals(dcType)) {
            test.addMsg("targetType", "textbox", dcType);
        }

        // verifySubType(target,test,"text");

        verifyTargetName(target, test, "text2");

        // JSONObject position = (JSONObject) target.get("position");
        // verifyPosHeight(position,test,22);
        // verifyPosWidth(position,test,153);

        // verifyRelXY(position,test,"0.5,0.5");

        verifyCurrState(target, test, "UIC is still working");

        verifyPrevState(target, test, "");

        verifyVisitedCount(target, test, 1);

        return test;
    }

    @Test
    public void ifr1PasswordField() throws Exception {
        final String mainWindow = driver.getWindowHandles().iterator().next();

        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

        final WebElement passwordField = driver.findElement(By.id("pi"));
        passwordField.click();
        passwordField.sendKeys("TEST!test1 test");
		Thread.sleep(this.DWELL_TIME);
        final WebElement button = driver.findElement(By.id("bi"));
        button.click();

        // switch back
        driver.switchTo().window(mainWindow);

        final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"pi\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyIfr1PasswordField(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyIfr1PasswordField(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("ifr1_passwordField", browser);

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

        verifyTargetID(target, t, "[[\"iframe3\"],[\"pi\"]]");

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

        verifyCurrState(target, t, "XXXX@xxxx99xxxx");

        verifyDwell(target, t, this.DWELL_TIME);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void ifr2CheckBox() throws Exception {
        final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

        final WebElement checkbox = driver.findElement(By.id("cb3"));
        checkbox.click();
        final WebElement button = driver.findElement(By.id("bi"));
        button.click();

        // switch back
        driver.switchTo().window(mainWindow);

        final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"cb3\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);
        

        final UICTest t = verifyIfr2CheckBox(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyIfr2CheckBox(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("ifr2_checkBox", browser);

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

        verifyTargetID(target, t, "[[\"iframe3\"],[\"cb3\"]]");

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
    public void ifr3ClickButton() throws Exception {
        final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("iframe01")));
        driver.switchTo().frame(driver.findElement(By.id("iframe01")));

        final WebElement submitButton = driver.findElement(By.id("btn"));
        submitButton.click();
        final WebElement textBox = driver.findElement(By.id("Text1"));
        textBox.sendKeys("Text inside iframe01");

        // switch back
        driver.switchTo().window(mainWindow);

        final JSONObject uicObject = getUICObject("[[\"iframe01\"],[\"btn\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyIfr3ClickButton(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyIfr3ClickButton(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("ifr3_clickButton", browser);

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

        verifyTargetID(target, t, "[[\"iframe01\"],[\"btn\"]]");

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

    // Defect 26461
    //@Test
    public void ifr4HashTest() throws Exception {
        final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

        driver.findElement(By.linkText("Go to Description")).click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");

        // switch back
        driver.switchTo().window(mainWindow);

        final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"#lorem\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyIfr4HashTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyIfr4HashTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("verify_ifr4_hashTest", browser);

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
    public void ifr5CaptureHREFParentLink() throws Exception {
    	final String mainWindow = driver.getWindowHandles().iterator().next();
    	System.out.println(mainWindow);
        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

        final String iframeurl = driver.getCurrentUrl();
        final WebElement image = driver.findElement(By.id("google_logo"));
        image.click();
        final WebElement button = driver.findElement(By.id("bi"));
        button.click();

        // switch back
        System.out.println("PREV: " + driver.getCurrentUrl());
        driver.switchTo().window(mainWindow);
        System.out.println("AFTER " + driver.getCurrentUrl());
        
        final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"google_logo\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyIfr5CaptureHREFParentLink(uicObject,
                iframeurl);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyIfr5CaptureHREFParentLink(final JSONObject uicObject, final String expectedUrl) throws Exception {

        final UICTest t = new UICTest("ifr5_captureHREFParentLink", browser);

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

        verifyTargetID(target, t, "[[\"iframe3\"],[\"google_logo\"]]");

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
    //@Test
    public void ifr6ButtonIsParentLinkTrue() throws Exception {
        final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

        final WebElement button = driver.findElement(By
                .xpath("/html/body/table/tbody/tr[27]/td/button/span/span"));
        button.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");

        // switch back
        driver.switchTo().window(mainWindow);

        final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",26],[\"TD\",0],[\"BUTTON\",0],[\"SPAN\",0],[\"SPAN\",0]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyIfr6ButtonIsParentLinkTrue(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyIfr6ButtonIsParentLinkTrue(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("ifr6_buttonIsParentLinkTrue", browser);

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
                "[[\"iframe3\"],[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",26],[\"TD\",0],[\"BUTTON\",0],[\"SPAN\",0],[\"SPAN\",0]]");

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
    public void ifr7AnchorTagIsParentLink() throws Exception {
        final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

        final String iframeurl = driver.getCurrentUrl();
        final WebElement link = driver.findElement(By
                .xpath("html/body/table/tbody/tr[28]/td/a/span"));
        link.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");

        // switch back
        driver.switchTo().window(mainWindow);

        final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",27],[\"td\",0],[\"a\",0],[\"span\",0]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyIfr7AnchorTagIsParentLink(uicObject,
                iframeurl);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyIfr7AnchorTagIsParentLink(final JSONObject uicObject, final String expectedUrl) throws Exception {

        final UICTest t = new UICTest("ifr7_anchorTagIsParentLink", browser);

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
                "[[\"iframe3\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",27],[\"td\",0],[\"a\",0],[\"span\",0]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("span").equals(targetType)) {
            t.addMsg("targetType", "span", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("span").equals(dcType)) {
            t.addMsg("targetType", "span", dcType);
        }
        
        //Error arises here
        verifyCurrState(target, t, "href", expectedUrl + "#Discover");
        verifyCurrState(target, t, "innerText", "Link");
        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void ifr8AnchorTagIsParentLink() throws Exception {
        final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

        final String frameurl = driver.getCurrentUrl();
        final WebElement link = driver.findElement(By.xpath("html/body/table/tbody/tr[28]/td/a/img"));
        link.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");

        // switch back
        driver.switchTo().window(mainWindow);

        final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"google\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyIfr8AnchorTagIsParentLink(uicObject,
                frameurl);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyIfr8AnchorTagIsParentLink(final JSONObject uicObject, final String expectedUrl) throws Exception {

        final UICTest t = new UICTest("ifr8_anchorTagIsNotParentLink",
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

        assertTrue(target.getBoolean("isParentLink"));

        verifyTargetID(target, t, "[[\"iframe3\"],[\"google\"]]");

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
    public void ifr9ButtonIsNotParentLinkTrue() throws Exception {
        final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

        final WebElement button = driver.findElement(By
                .xpath("/html/body/table/tbody/tr[27]/td/button"));
        button.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");

        // switch back
        driver.switchTo().window(mainWindow);

        final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",26],[\"td\",0],[\"button\",0]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyIfr9ButtonIsNotParentLinkTrue(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyIfr9ButtonIsNotParentLinkTrue(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("ifr9_buttonIsNotParentLinkTrue",
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
                "[[\"iframe3\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",26],[\"td\",0],[\"button\",0]]");

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
    public void ifr10TextareaTest() throws Exception {
        final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

        driver.findElement(By.id("ai")).click();
        driver.findElement(By.id("ai")).clear();
        driver.findElement(By.id("ai")).sendKeys(Keys.BACK_SPACE);
        driver.findElement(By.id("ai")).sendKeys("test text");
        Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("ai")).sendKeys("test text");
        driver.findElement(By.id("ai")).sendKeys(Keys.TAB);
        driver.findElement(By.id("bi")).click();

        // switch back
        driver.switchTo().window(mainWindow);

        final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"ai\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyIfr10TextareaTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyIfr10TextareaTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("ifr10_textareaTest", browser);

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

        verifyTargetID(target, t, "[[\"iframe3\"],[\"ai\"]]");

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
    public void ifr11UTF8textBoxTest() throws Exception {
        final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

        driver.findElement(By.id("utf")).click();
        driver.findElement(By.id("utf")).clear();
        driver.findElement(By.id("utf")).sendKeys("� � �");
        Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("utf")).sendKeys("� � �");
        driver.findElement(By.id("bi")).click();

        // switch back
        driver.switchTo().window(mainWindow);

        final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"utf\"]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyIfr11UTF8textBoxTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyIfr11UTF8textBoxTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("ifr11_UTF8textBoxTest", browser);

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

        verifyTargetID(target, t, "[[\"iframe3\"],[\"utf\"]]");

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
    public void ifr12GreenSelectListTest() throws Exception {
        //final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

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

        final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",14],[\"td\",0],[\"select\",0]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyIfr12GreenSelectListTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyIfr12GreenSelectListTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("ifr12_greenSelectListTest", browser);

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
                "[[\"iframe3\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",14],[\"td\",0],[\"select\",0]]");

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
	public void ifr13BlacklistTest() throws Exception {

    	final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

        final WebElement blackList = driver.findElement(By.id("blacklisted"));
        blackList.click();
        blackList.sendKeys("Test Blacklist");
        final WebElement button = driver.findElement(By.id("bi"));
        button.click();
        driver.switchTo().window(mainWindow);
		final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",28],[\"td\",0],[\"input\",0]]");
		final UICTest t = verifyIfr13BlacklistTest(uicObject);	
		assertTrue(t.getErrs(),t.getStatus());		
	}
    public UICTest verifyIfr13BlacklistTest(final JSONObject uicObject) throws Exception {
    	
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
                "[[\"iframe3\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",28],[\"td\",0],[\"input\",0]]");
        
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
	public void ifr14BlacklistTestRegEx() throws Exception {

    	final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("iframe3")));
        driver.switchTo().frame(driver.findElement(By.id("iframe3")));

        final WebElement blackList = driver.findElement(By.id("TestForBlacklistElement"));
        blackList.click();
        blackList.sendKeys("Test Blacklist RegEx");
        final WebElement button = driver.findElement(By.id("bi"));
        button.click();
        driver.switchTo().window(mainWindow);
		final JSONObject uicObject = getUICObject("[[\"iframe3\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",29],[\"td\",0],[\"input\",0]]");
		final UICTest t = verifyIfr14BlacklistTestRegEx(uicObject);	
		assertTrue(t.getErrs(),t.getStatus());		
	}
    public UICTest verifyIfr14BlacklistTestRegEx(final JSONObject uicObject) throws Exception {
    	
		final UICTest t = new UICTest("ifr14BlacklistTestRegEx", browser);
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
                "[[\"iframe3\"],[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",29],[\"td\",0],[\"input\",0]]");
        
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
        super.tearDown();
    }

}
