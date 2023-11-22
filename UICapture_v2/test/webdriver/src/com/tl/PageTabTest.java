package com.tl;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.json.JSONObject;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

@RunWith(Parameterized.class)
public class PageTabTest extends TestBase {
    public PageTabTest(final String browser) {
        super(browser, "h4", "index.html", "?", null, false);
    }

    @Test
    public void continueButtonTabTest() throws Exception {

        assertTrue(isElementPresent(By.id("bi")));
        sendTabs(1);
        driver.findElement(By.id("ii")).click();

        final JSONObject uicObject = getUICObject("bi");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA1ContinueButtonTest(uicObject); // new
                                                                   // UIC_Test();
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA1ContinueButtonTest(final JSONObject uicObject) throws Exception {
        final UICTest t = new UICTest("a1_continueButtonTest", browser);

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
        verifyEventType(event, t, "blur");
        verifyTLEvent(event, t, "focusout");
        /*
         * String eventType = event.getString("type");
         * if(!eventType.equals("click"))
         * t.addMsg("eventType","click",eventType);
         */

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "bi");

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
        verifyPosHeight(position, t, 20);
        verifyPosWidth(position, t, 80);

        verifyCurrState(target, t, "Continue");

        verifyDwell(target, t, 1);

        if (target.getBoolean("isParentLink")) {
            t.addMsg("isParentLink", "false", "true"); // new
        }

        verifyVisitedCount(target, t, 1);

        verifyFocusInOffset(uicObject, t, 1); // new -just checking existence
        verifyOffset(uicObject, t, 1); // new -just checking existence

        return t;
    }

    @Test
    public void imageTabTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("ii")));
        sendTabs(2);
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("ii");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);
        final UICTest t = verifyA2ImageTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyA2ImageTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a1_continueButtonTest", browser);

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
        verifyEventType(event, t, "blur");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, t, "ii");

        final String targetType = target.getString("type");
        if (!("INPUT").equals(targetType)) {
            t.addMsg("targetType", "INPUT", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("image").equals(dcType)) {
            t.addMsg("targetType", "image", dcType);
        }

        verifySubType(target, t, "image");

        verifyTargetName(target, t, "imageInput");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 194);
        verifyPosWidth(position, t, 259);

        verifyCurrStateSrc(target, t, this.testUrl + "/image/image.gif");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void redCheckBoxTabTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("cb1")));
        sendTabs(5);
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("cb1");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);
        final UICTest t = verifyA3RedCheckBoxTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA3RedCheckBoxTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a3_redCheckBoxTest", browser);

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
        verifyEventType(event, t, "blur");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, t, "cb1");

        final String targetType = target.getString("type");
        if (!("INPUT").equals(targetType)) {
            t.addMsg("targetType", "INPUT", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("checkBox").equals(dcType)) {
            t.addMsg("targetType", "checkBox", dcType);
        }

        verifySubType(target, t, "checkbox");

        verifyTargetName(target, t, "redBox");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 13);
        verifyPosWidth(position, t, 13);

        verifyCurrState(target, t, "red");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void greenCheckBoxTabTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("cb2")));
        sendTabs(6);
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("cb2");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA4GreenCheckBoxTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyA4GreenCheckBoxTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a4_greenCheckBoxTest", browser);

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
        verifyEventType(event, t, "blur");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, t, "cb2");

        final String targetType = target.getString("type");
        if (!("INPUT").equals(targetType)) {
            t.addMsg("targetType", "INPUT", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("checkBox").equals(dcType)) {
            t.addMsg("targetType", "checkBox", dcType);
        }

        verifySubType(target, t, "checkbox");

        verifyTargetName(target, t, "greenBox");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 13);
        verifyPosWidth(position, t, 13);

        verifyCurrState(target, t, "green");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void blueCheckBoxTabTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("cb3")));
        sendTabs(7);
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("cb3");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA5BlueCheckBoxTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyA5BlueCheckBoxTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a5_blueCheckBoxTest", browser);

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
        verifyEventType(event, t, "blur");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, t, "cb3");

        final String targetType = target.getString("type");
        if (!("INPUT").equals(targetType)) {
            t.addMsg("targetType", "INPUT", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("checkBox").equals(dcType)) {
            t.addMsg("targetType", "checkBox", dcType);
        }

        verifySubType(target, t, "checkbox");

        verifyTargetName(target, t, "blueBox");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 13);
        verifyPosWidth(position, t, 13);

        verifyCurrState(target, t, "blue");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void greenRadioButtonTabTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("rb2")));
        sendTabs(8);
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("rb2");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA7GreenRadioButtonTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyA7GreenRadioButtonTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a7_greenRadioButtonTest", browser);

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
        verifyEventType(event, t, "blur");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "rb2");

        final String targetType = target.getString("type");
        if (!("INPUT").equals(targetType)) {
            t.addMsg("targetType", "INPUT", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("radioButton").equals(dcType)) {
            t.addMsg("targetType", "radioButton", dcType);
        }

        verifySubType(target, t, "radio");

        verifyTargetName(target, t, "radioButton");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 13);
        verifyPosWidth(position, t, 13);

        verifyCurrState(target, t, "green");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void selectListTabTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.name("selectList")));
        sendTabs(9);

        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("selectList");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA9GreenSelectListTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA9GreenSelectListTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a9_greenSelectListTest", browser);

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
        verifyEventType(event, t, "blur");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(
                target,
                t,
                "[[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",14],[\"TD\",0],[\"SELECT\",0]]");

        final String targetType = target.getString("type");
        if (!("SELECT").equals(targetType)) {
            t.addMsg("targetType", "SELECT", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("selectList").equals(dcType)) {
            t.addMsg("targetType", "selectList", dcType);
        }

        verifySubType(target, t, "");

        verifyTargetName(target, t, "selectList");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 25);
        verifyPosWidth(position, t, 82);

        verifyCurrState(target, t, "red");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t; // failCount.equals(0);
    }

    @Test
    public void textBoxTabTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("ti")));
        sendTabs(10);
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("ti");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA14TextBoxTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA14TextBoxTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a14_textBoxTest", browser);

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
        verifyEventType(event, t, "blur");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "ti");

        final String targetType = target.getString("type");
        if (!("INPUT").equals(targetType)) {
            t.addMsg("targetType", "INPUT", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("textBox").equals(dcType)) {
            t.addMsg("targetType", "textBox", dcType);
        }

        verifySubType(target, t, "text");

        verifyTargetName(target, t, "textInput");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 18);
        verifyPosWidth(position, t, 153);

        verifyCurrState(target, t, "");

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void passwordTabTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("pi")));
        sendTabs(11);

        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("pi");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA15PasswordTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyA15PasswordTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a15_passwordTest", browser);

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
        verifyEventType(event, t, "blur");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "pi");

        final String targetType = target.getString("type");
        if (!("INPUT").equals(targetType)) {
            t.addMsg("targetType", "INPUT", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("textBox").equals(dcType)) {
            t.addMsg("targetType", "textBox", dcType);
        }

        verifySubType(target, t, "password");

        verifyTargetName(target, t, "passwordInput");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 18);
        verifyPosWidth(position, t, 153);

        verifyCurrState(target, t, "");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void textareaTabTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("ai")));
        sendTabs(12);
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("ai");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA16TextAreaTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA16TextAreaTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a16_textareaTest", browser);

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
        verifyEventType(event, t, "blur");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "ai");

        final String targetType = target.getString("type");
        if (!("TEXTAREA").equals(targetType)) {
            t.addMsg("targetType", "TEXTAREA", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("textBox").equals(dcType)) {
            t.addMsg("targetType", "textBox", dcType);
        }

        verifySubType(target, t, "");

        verifyTargetName(target, t, "textareaInput");

        final JSONObject position = (JSONObject) target.get("position");

        verifyPosHeight(position, t, 135);
        verifyPosWidth(position, t, 494);

        verifyCurrState(target, t, "");

        verifyVisitedCount(target, t, 1);

        return t;
    }

    /*
     * @Test public void a17_scrollTest() throws Exception { // Select item
     * assertTrue(isElementPresent(By.id("ai"))); WebElement element =
     * driver.findElement(By.id("ai")); element.click();
     * //driver.findElement(By.id("ii")).click();
     * 
     * Locatable hoverItem = (Locatable) driver.findElement(By.id("ai")); int y
     * = hoverItem.getCoordinates().getLocationOnScreen().getY();
     * 
     * ((JavascriptExecutor)driver).executeScript("window.scrollBy(0,"+y+");");
     * Thread.sleep(30000); y *= -1; JSONObject uicObject = getUICObject("ai");
     * ((JavascriptExecutor)driver).executeScript("window.scrollBy(0,"+y+");");
     * driver.findElement(By.id("bi")).click();
     * 
     * JSONObject uicObject = getUICObject("ai"); assertNotNull("UIC," + browser
     * + ",uicObject,NULL",uicObject);
     * 
     * //UIC_Test t = verifyA1_ContinueButtonTest(uicObject);// new UIC_Test();
     * //assertTrue(t.getErrs(),t.getStatus()); }
     */

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

    private void sendTabs(final int numTabs) {
        for (int i = 0; i < numTabs; i++) {
            driver.switchTo().activeElement().sendKeys(Keys.TAB);
        }
    }
}
