package com.tl;

import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runners.Parameterized;
import org.junit.runner.RunWith;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

@RunWith(Parameterized.class)
public class PageTest1 extends UICInit {
    public PageTest1(final String browser) {
        super(browser, "h4", "index.html", "ai", null, true);
    }

    @Override
    @Before
    public void setUp() {
        super.setUp();
    }
   
    @Test
    public void a1ContinueButtonTest() throws Exception {
        // Select item
        // JSONObject expObject = new
        // JSONObject("{\"screenviewOffset\":399,\"count\":3,\"fromWeb\":true,\"event\":{\"dcEvent\":\"click\",\"type\":\"click\"},\"target\":{\"position\":{\"height\":20,\"relXY\":\"0.5,0.5\",\"width\":80},\"id\":\"bi\",\"idType\":-1,\"dwell\":116,\"currState\":{\"value\":\"Continue\"},\"subType\":\"button\",\"name\":\"buttonInput\",\"isParentLink\":false,\"visitedCount\":1,\"type\":\"INPUT\",\"dcType\":\"button\"},\"focusInOffset\":280,\"offset\":417,\"type\":4}");
        assertTrue(isElementPresent(By.id("bi")));
        final WebElement element = driver.findElement(By.id("bi"));
        element.click();
        //driver.findElement(By.id("ii")).click();

        final JSONObject uicObject = getUICObject("bi");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);
        // assertTrue(jsonObjsAreEqual(uicObject,expObject));

        final UICTest t = verifyA1ContinueButtonTest(uicObject); // new UIC_Test();
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
        verifyEventType(event, t, "click");
        verifyTLEvent(event, t, "click");
        /*
         * String eventType = event.getString("type"); if(!eventType.equals("click"))
         * t.addMsg("eventType","click",eventType);
         */

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "bi");

        final String targetType = target.getString("type");
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
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
        verifyRelXY(position, t, "0.5,0.5");

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
    public void a2ImageTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("ii")));
        driver.findElement(By.id("ii")).click();
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("ii");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);
        final UICTest t = verifyA2ImageTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyA2ImageTest(final JSONObject uicObject) throws Exception {

        //final UICTest t = new UICTest("a1_continueButtonTest", browser);
        final UICTest t = new UICTest("a2ImageTest", browser);

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
        verifyTargetID(target, t, "ii");

        final String targetType = target.getString("type");
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("button").equals(dcType)) {
            t.addMsg("targetType", "button", dcType);
        }
        //if (!("image").equals(dcType)) {
        //    t.addMsg("targetType", "image", dcType);
        //}
        //Error is here^ - image is a button instead of an image dcType
        
        verifySubType(target, t, "image");

        verifyTargetName(target, t, "imageInput");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 194);
        verifyPosWidth(position, t, 259);

        verifyRelXY(position, t, "4,4");

        verifyCurrStateSrc(target, t, this.testWebsite + "/image/image.gif");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a3RedCheckBoxTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("cb1")));
        driver.findElement(By.id("cb1")).click();
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
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, t, "cb1");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();;
        if (!("checkbox").equals(dcType)) {
            t.addMsg("dcType", "checkbox", dcType);
        }

        verifySubType(target, t, "checkbox");

        verifyTargetName(target, t, "redBox");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 13);
        verifyPosWidth(position, t, 13);

        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "red");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a4GreenCheckBoxTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("cb2")));
        driver.findElement(By.id("cb2")).click();
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
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, t, "cb2");

        final String targetType = target.getString("type").toLowerCase();;
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();;
        if (!("checkbox").equals(dcType)) {
            t.addMsg("dcType", "checkbox", dcType);
        }

        verifySubType(target, t, "checkbox");

        verifyTargetName(target, t, "greenBox");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 13);
        verifyPosWidth(position, t, 13);
        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "green");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a5BlueCheckBoxTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("cb3")));
        driver.findElement(By.id("cb3")).click();
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
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, t, "cb3");

        final String targetType = target.getString("type").toLowerCase();;
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();;
        if (!("checkbox").equals(dcType)) {
            t.addMsg("targetType", "checkbox", dcType);
        }

        verifySubType(target, t, "checkbox");

        verifyTargetName(target, t, "blueBox");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 13);
        verifyPosWidth(position, t, 13);
        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "blue");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a6RedRadioButtonTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("rb1")));
        driver.findElement(By.id("rb1")).click();
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("rb1");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA6RedRadioButtonTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyA6RedRadioButtonTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a6_redRadioButtonTest", browser);

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

        verifyTargetID(target, t, "rb1");

        final String targetType = target.getString("type").toLowerCase();;
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();;
        if (!("radiobutton").equals(dcType)) {
            t.addMsg("targetType", "radiobutton", dcType);
        }

        verifySubType(target, t, "radio");

        verifyTargetName(target, t, "radioButton");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 13);
        verifyPosWidth(position, t, 13);
        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "red");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a7GreenRadioButtonTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("rb2")));
        driver.findElement(By.id("rb1")).click();
        /*Error was that that rb2 was already selected in the initial state of the website 
        causing problems when clicked again, thus I added a selection to a different button first
        SP */
        driver.findElement(By.id("rb2")).click();
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
        verifyEventType(event, t, "click");
        //Error is here^
        

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "rb2");

        final String targetType = target.getString("type").toLowerCase();;
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();;
        if (!("radiobutton").equals(dcType)) {
            t.addMsg("targetType", "radiobutton", dcType);
        }

        verifySubType(target, t, "radio");

        verifyTargetName(target, t, "radioButton");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 13);
        verifyPosWidth(position, t, 13);
        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "green");

        // verifyPrevState(target,t,"red");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a8BlueRadioButtonTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("rb3")));
        driver.findElement(By.id("rb3")).click();
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("rb3");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA8BlueRadioButtonTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyA8BlueRadioButtonTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a8_blueRadioButtonTest", browser);

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

        verifyTargetID(target, t, "rb3");

        final String targetType = target.getString("type").toLowerCase();;
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();;
        if (!("radiobutton").equals(dcType)) {
            t.addMsg("targetType", "radiobutton", dcType);
        }

        verifySubType(target, t, "radio");

        verifyTargetName(target, t, "radioButton");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 13);
        verifyPosWidth(position, t, 13);
        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "blue");

        // verifyPrevState(target,t,"red");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a9GreenSelectListTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.name("selectList")));
        if (("ie").equals(browser) || ("IE9").equals(browser)) {
            focusOnElement(driver.findElement(By.name("selectList")));
            driver.findElement(By.name("selectList")).click();
        }
        new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("GREEN");
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
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t,
                "[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",14],[\"td\",0],[\"select\",0]]");

        final String targetType = target.getString("type").toLowerCase();;
        if (!("select").equals(targetType)) {
            t.addMsg("targetType", "select", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();;
        if (!("selectlist").equals(dcType)) {
            t.addMsg("targetType", "selectlist", dcType);
        }

        verifySubType(target, t, "select-one");

        verifyTargetName(target, t, "selectList");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 19);
        verifyPosWidth(position, t, 82);

        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "green");

        if (("IE9").equals(browser)) {
            verifyPrevState(target, t, "red");
        }

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t; // failCount.equals(0);
    }

    @Test
    public void a10BlueSelectListTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.name("selectList")));
        if (("ie").equals(browser) || ("IE9").equals(browser)) {
            focusOnElement(driver.findElement(By.name("selectList")));
            driver.findElement(By.name("selectList")).click();
        }
        new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("BLUE");
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("selectList");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA10BlueSelectListTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyA10BlueSelectListTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a10_blueSelectListTest", browser);

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

        verifyTargetID(target, t,
                "[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",14],[\"td\",0],[\"select\",0]]");

        final String targetType = target.getString("type").toLowerCase();;
        if (!("select").equals(targetType)) {
            t.addMsg("targetType", "select", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();;
        if (!("selectlist").equals(dcType)) {
            t.addMsg("targetType", "selectlist", dcType);
        }

        verifySubType(target, t, "select-one");

        verifyTargetName(target, t, "selectList");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 19);
        verifyPosWidth(position, t, 82);

        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "blue");

        if (("IE9").equals(browser)) {
            verifyPrevState(target, t, "red");
        }

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a11MonSelectListTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.name("selectList")));
        if (("ie").equals(browser) || ("IE9").equals(browser)) {
            focusOnElement(driver.findElement(By.name("selectList")));
            driver.findElement(By.name("selectList")).click();
        }
        new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("Mon");
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("selectList");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA11MonSelectListTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyA11MonSelectListTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a11_monSelectListTest", browser);

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

        verifyTargetID(target, t,
                "[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",14],[\"td\",0],[\"select\",0]]");

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

        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "Mon");

        if (("IE9").equals(browser)) {
            verifyPrevState(target, t, "red");
        }

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a12TueSelectListTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.name("selectList")));
        if (("ie").equals(browser) || ("IE9").equals(browser)) {
            focusOnElement(driver.findElement(By.name("selectList")));
            driver.findElement(By.name("selectList")).click();
        }
        new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("Tue");
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("selectList");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA12TueSelectListTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyA12TueSelectListTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a12_tueSelectListTest", browser);

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
        verifyTargetID(target, t,
                "[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",14],[\"td\",0],[\"select\",0]]");

        final String targetType = target.getString("type").toLowerCase();;
        if (!("select").equals(targetType)) {
            t.addMsg("targetType", "select", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();;
        if (!("selectlist").equals(dcType)) {
            t.addMsg("targetType", "selectlist", dcType);
        }

        verifySubType(target, t, "select-one");

        verifyTargetName(target, t, "selectList");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 19);
        verifyPosWidth(position, t, 82);

        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "Tue");

        if (("IE9").equals(browser)) {
            verifyPrevState(target, t, "red");
        }

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a13WedSelectListTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.name("selectList")));
        if (("ie").equals(browser) || ("IE9").equals(browser)) {
            focusOnElement(driver.findElement(By.name("selectList")));
            driver.findElement(By.name("selectList")).click();
        }
        new Select(driver.findElement(By.name("selectList"))).selectByVisibleText("Wed");
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("selectList");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA13WedSelectListTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());

    }

    public UICTest verifyA13WedSelectListTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a13_wedSelectListTest", browser);

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

        verifyTargetID(target, t,
                "[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",14],[\"td\",0],[\"select\",0]]");

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

        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "Wed");

        if (("IE9").equals(browser)) {
            verifyPrevState(target, t, "red");
        }

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a14TextBoxTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("ti")));
        // You need to click onto the input control to get relXY or it will act
        // like you tabbed into the control
        WebElement wb = driver.findElement(By.id("ti"));
        wb.click();
        wb.clear();
        wb.sendKeys("test text");
        Thread.sleep(this.DWELL_TIME);
        wb.sendKeys("test text");
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
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "ti");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("textbox").equals(dcType)) {
            t.addMsg("targetType", "textbox", dcType);
        }

        verifySubType(target, t, "text");

        verifyTargetName(target, t, "textInput");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 18);
        verifyPosWidth(position, t, 153);
        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "test texttest text");

        verifyPrevState(target, t, "");

        verifyDwell(target, t, this.DWELL_TIME);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a15PasswordTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("pi")));
        driver.findElement(By.id("pi")).click();
        driver.findElement(By.id("pi")).clear();
        Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("pi")).sendKeys("TEST!test1 test");
		Thread.sleep(this.DWELL_TIME);
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
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "pi");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            t.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("textbox").equals(dcType)) {
            t.addMsg("targetType", "textbox", dcType);
        }

        verifySubType(target, t, "password");

        verifyTargetName(target, t, "passwordInput");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 18);
        verifyPosWidth(position, t, 153);
        verifyRelXY(position, t, "0.5,0.5");

        // Default configuration masks password input fields.
        verifyCurrState(target, t, "XXXX@xxxx99xxxx");

        verifyPrevState(target, t, "");

        verifyDwell(target, t, this.DWELL_TIME);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a16TextareaTest() throws Exception {
        // Select item
        assertTrue(isElementPresent(By.id("ai")));
        // You need to click onto the input control to get relXY or it will act
        // like you tabbed into the control
        driver.findElement(By.id("ai")).click();
        driver.findElement(By.id("ai")).clear();
        driver.findElement(By.id("ai")).sendKeys("test text");
        Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("ai")).sendKeys("test text");
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
        verifyEventType(event, t, "change");

        final JSONObject target = (JSONObject) uicObject.get("target");

        verifyTargetID(target, t, "ai");

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
        verifyRelXY(position, t, "5,3");

        verifyCurrState(target, t, "test texttest text");

        verifyPrevState(target, t, "");

        verifyDwell(target, t, this.DWELL_TIME);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    @Test
    public void a17UTF8textBoxTest() throws Exception {

        assertTrue(isElementPresent(By.id("utf")));

        driver.findElement(By.id("utf")).click();
        driver.findElement(By.id("utf")).clear();
        driver.findElement(By.id("utf")).sendKeys("¶ ® ¿");
        Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("utf")).sendKeys("¥ § ¢");
        driver.findElement(By.id("bi")).click();

        final JSONObject uicObject = getUICObject("utf");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA17UTF8TextBoxTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA17UTF8TextBoxTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a17_UTF8textBoxTest", browser);

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

        verifyTargetID(target, t, "utf");

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
        verifyRelXY(position, t, "0.5,0.5");

        verifyCurrState(target, t, "¶ ® ¿¥ § ¢");

        verifyPrevState(target, t, "");

        verifyDwell(target, t, this.DWELL_TIME);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    // RTC #5822
    // @Test -- test hangs on IE defect in RTC
    public void a18HashTest() throws Exception {
        assertTrue(isElementPresent(By.id("lorem")));
        driver.findElement(By.linkText("Go to Description")).click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");

        final JSONObject uicObject = getUICObject("#lorem");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA18HashTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA18HashTest(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("verifyA18_hashTest", browser);

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
    public void a19CaptureHREFLink() throws Exception {
        assertTrue(isElementPresent(By.id("google_logo")));
        final WebElement image = driver.findElement(By.id("google_logo"));
        image.click();
        final WebElement button = driver.findElement(By.id("bi"));
        button.click();
        final JSONObject uicObject = getUICObject("google_logo");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA19CaptureHREFLink(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA19CaptureHREFLink(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a19_captureHREFLink", browser);

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

        verifyTargetID(target, t, "google_logo");

        final String targetType = target.getString("type").toLowerCase();
        if (!("img").equals(targetType)) {
            t.addMsg("targetType", "img", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("img").equals(dcType)) {
            t.addMsg("targetType", "img", dcType);
        }

        verifyCurrState(target, t, "href", this.testUrl + "#google_image_in_link");

        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    // RTC #26476
    // @Test
    public void a20ButtonIsParentLink() throws Exception {
        assertTrue(isElementPresent(By.xpath("/html/body/table/tbody/tr[27]/td/button/span/span")));
        final WebElement button = driver.findElement(By.xpath("/html/body/table/tbody/tr[27]/td/button/span/span"));
        button.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");
        final JSONObject uicObject = getUICObject("[[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",26],[\"TD\",0],[\"BUTTON\",0],[\"SPAN\",0],[\"SPAN\",0]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA20ButtonIsParentLink(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA20ButtonIsParentLink(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a20_buttonIsParentLink", browser);

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
                "[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",26],[\"td\",0],[\"button\",0],[\"span\",0],[\"span\",0]]");

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

    // RTC #26484
    // @Test
    public void a21AnchorTagIsParentLink() throws Exception {
        assertTrue(isElementPresent(By.xpath("/html/body/table/tbody/tr[28]/td/a/span")));
        final WebElement link = driver.findElement(By.xpath("/html/body/table/tbody/tr[28]/td/a/span"));
        link.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");
        final JSONObject uicObject = getUICObject("[[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",27],[\"TD\",0],[\"A\",0],[\"SPAN\",0]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA21AnchorTagIsParentLink(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA21AnchorTagIsParentLink(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a21_anchorTagIsParentLink", browser);

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

        verifyTargetID(target, t,"[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",27],[\"td\",0],[\"a\",0],[\"span\",0]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("SPAN").equals(targetType)) {
            t.addMsg("targetType", "SPAN", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("SPAN").equals(dcType)) {
            t.addMsg("targetType", "SPAN", dcType);
        }

        verifyCurrState(target, t, "href", this.testUrl + "#Discover");
        verifyCurrState(target, t, "innerText", "Link");
        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

    // RTC #26484
    @Test
    public void a22ButtonIsNotParentLink() throws Exception {
        assertTrue(isElementPresent(By.xpath("/html/body/table/tbody/tr[27]/td/button")));
        final WebElement button = driver.findElement(By.xpath("/html/body/table/tbody/tr[27]/td/button"));
        button.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");
        final JSONObject uicObject = getUICObject("[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",26],[\"td\",0],[\"button\",0]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA22ButtonIsNotParentLink(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA22ButtonIsNotParentLink(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a22_buttonIsNotParentLink", browser);

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

        verifyTargetID(target, t,
                "[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",26],[\"td\",0],[\"button\",0]]");

        final String targetType = target.getString("type").toLowerCase();
        if (!("button").equals(targetType)) {
            t.addMsg("targetType", "button", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("button").equals(dcType)) {
            t.addMsg("dcType", "button", dcType);
        }

        verifyCurrState(target, t, "innerText", "Click Me");
        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }
    
    @Test
    public void a22ButtonIsNotParentLinkID() throws Exception {
    	//Is able to find rawButton here below
        assertTrue(isElementPresent(By.id("rawButton")));
        final WebElement button = driver.findElement(By.id("rawButton"));
        button.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");
        //But not able to find rawButton here. Safari Driver issue?
        final JSONObject uicObject = getUICObject("rawButton");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA22ButtonIsNotParentLinkID(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA22ButtonIsNotParentLinkID(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a22_buttonIsNotParentLink", browser);

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

        verifyTargetID(target, t,"rawButton");

        final String targetType = target.getString("type").toLowerCase();
        if (!("button").equals(targetType)) {
            t.addMsg("targetType", "button", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("button").equals(dcType)) {
            t.addMsg("dcType", "button", dcType);
        }

        verifyCurrState(target, t, "innerText", "Click Me");
        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }
    
    @Test
    public void a22ButtonIsNotParentLinkSpanID() throws Exception {
    	//Is able to find rawButton here below
        assertTrue(isElementPresent(By.id("attButton")));
        final WebElement button = driver.findElement(By.id("attButton"));
        button.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");
        //But not able to find rawButton here. Safari Driver issue?
        final JSONObject uicObject = getUICObject("attButton");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA22ButtonIsNotParentLinkSpanID(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA22ButtonIsNotParentLinkSpanID(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a22_buttonIsNotParentLink", browser);

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

        verifyTargetID(target, t,"attButton");

        final String targetType = target.getString("type").toLowerCase();
        if (!("button").equals(targetType)) {
            t.addMsg("targetType", "button", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("button").equals(dcType)) {
            t.addMsg("dcType", "button", dcType);
        }

        verifyCurrState(target, t, "innerText", "Click Me");
        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }

/* After running in all the browsers, this only happens in a Chrome browser.    
    @Test
    public void a22ButtonIsNotParentLinkSpan() throws Exception {
        assertTrue(isElementPresent(By.xpath("/html/body/table/tbody/tr[27]/td/button/span/span")));
        final WebElement button = driver.findElement(By.xpath("/html/body/table/tbody/tr[27]/td/button"));
        button.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");
        final JSONObject uicObject = getUICObject("[[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",26],[\"TD\",0],[\"BUTTON\",0],[\"SPAN\",0],[\"SPAN\",0]]");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA22ButtonIsNotParentLinkSpan(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA22ButtonIsNotParentLinkSpan(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a22_buttonIsNotParentLink", browser);

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

        verifyTargetID(target, t,
                "[[\"HTML\",0],[\"BODY\",0],[\"TABLE\",0],[\"TBODY\",0],[\"TR\",26],[\"TD\",0],[\"BUTTON\",0],[\"SPAN\",0],[\"SPAN\",0]]");

        final String targetType = target.getString("type");
        if (!("SPAN").equals(targetType)) {
            t.addMsg("targetType", "SPAN", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("SPAN").equals(dcType)) {
            t.addMsg("dcType", "SPAN", dcType);
        }

        verifyCurrState(target, t, "innerText", "Click Me");
        verifyDwell(target, t, 0);

        verifyVisitedCount(target, t, 0);

        return t;
    }
*/
    @Test
    public void a23AnchorTagIsParentLink() throws Exception {
        assertTrue(isElementPresent(By.id("TL")));
        final WebElement link = driver.findElement(By.id("google"));
        link.click();
        final WebElement textbox = driver.findElement(By.id("utf"));
        textbox.sendKeys("testing");
        final JSONObject uicObject = getUICObject("google");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyA23AnchorTagIsParentLink(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyA23AnchorTagIsParentLink(final JSONObject uicObject) throws Exception {

        final UICTest t = new UICTest("a23_anchorTagIsParentLink", browser);

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

        verifyTargetID(target, t, "google");

        final String targetType = target.getString("type").toLowerCase();
        if (!("img").equals(targetType)) {
            t.addMsg("targetType", "img", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("img").equals(dcType)) {
            t.addMsg("targetType", "img", dcType);
        }

        verifyCurrState(target, t, "href", this.testUrl + "#Discover");
        verifyCurrState(target, t, "innerText", "Link");
        verifyDwell(target, t, 1);

        verifyVisitedCount(target, t, 1);

        return t;
    }
    

	@Test
	public void a25blacklistTest() throws Exception {
		final WebElement element = driver.findElement(By.id("blacklisted"));
		element.click();
		element.sendKeys("Test Blacklist");
		driver.findElement(By.id("bi")).click();
		final JSONObject uicObject = getUICObject("[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",30],[\"td\",0],[\"input\",0]]");
		final UICTest t = verifyA25blacklistTest(uicObject);
		assertTrue(t.getErrs(),t.getStatus());		
	}	

	public UICTest verifyA25blacklistTest(final JSONObject uicObject) throws Exception {
	
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
                "[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",30],[\"td\",0],[\"input\",0]]");
        
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
        
        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 18);
        verifyPosWidth(position, t, 153);
        verifyRelXY(position, t, "0.5,0.5");
        verifyDwell(target, t, 1);
        verifyVisitedCount(target, t, 1);
        
        return t;
	}
	
	@Test
	public void a26blacklistTestRegEx() throws Exception {
		final WebElement element = driver.findElement(By.id("TestForBlacklistElement"));
		element.click();
		element.sendKeys("Test Blacklist RegEx");
		driver.findElement(By.id("bi")).click();
		final JSONObject uicObject = getUICObject("[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",31],[\"td\",0],[\"input\",0]]");
		final UICTest t = verifyA26blacklistTestRegEx(uicObject);	
		assertTrue(t.getErrs(),t.getStatus());		
	}	

	public UICTest verifyA26blacklistTestRegEx(final JSONObject uicObject) throws Exception {
	
		final UICTest t = new UICTest("a26blackListTestRegEx", browser);
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
                "[[\"html\",0],[\"body\",0],[\"table\",0],[\"tbody\",0],[\"tr\",31],[\"td\",0],[\"input\",0]]");
        
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
        
        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, t, 18);
        verifyPosWidth(position, t, 153);
        verifyRelXY(position, t, "0.5,0.5");
        verifyDwell(target, t, 1);
        verifyVisitedCount(target, t, 1);
        
        return t;
	}
    /*
     * @Test public void a17_scrollTest() throws Exception { // Select item assertTrue(isElementPresent(By.id("ai")));
     * WebElement element = driver.findElement(By.id("ai")); element.click(); //driver.findElement(By.id("ii")).click();
     * 
     * Locatable hoverItem = (Locatable) driver.findElement(By.id("ai")); int y =
     * hoverItem.getCoordinates().getLocationOnScreen().getY();
     * 
     * ((JavascriptExecutor)driver).executeScript("window.scrollBy(0,"+y+");"); Thread.sleep(30000); y *= -1; JSONObject
     * uicObject = getUICObject("ai"); ((JavascriptExecutor)driver).executeScript("window.scrollBy(0,"+y+");");
     * driver.findElement(By.id("bi")).click();
     * 
     * JSONObject uicObject = getUICObject("ai"); assertNotNull("UIC," + browser + ",uicObject,NULL",uicObject);
     * 
     * //UIC_Test t = verifyA1_ContinueButtonTest(uicObject);// new UIC_Test(); //assertTrue(t.getErrs(),t.getStatus());
     * }
     */

    // public void verifyScreenviewOffset(JSONObject uic,UIC_Test test,Integer
    // exp) throws Exception{
    // Integer screenviewOffset = uic.getInt("screenviewOffset");
    // if(screenviewOffset.compareTo(exp) < 0 ){
    // test.addMsg("screenviewOffset",exp.toString(),screenviewOffset.toString());
    // }
    // }
    //
    // public void verifyCount(JSONObject uic,UIC_Test test,Integer exp) throws
    // Exception{
    // Integer count = uic.getInt("count");
    // if(count.compareTo(exp) < 0){
    // test.addMsg("count",exp.toString(),count.toString());
    // }
    // }
    // public void verifyEventType(JSONObject event,UIC_Test test,String exp)
    // throws Exception{
    // String eventType = event.getString("type");
    // //String expected = "";
    // boolean pass = false;
    //
    // if(exp.equals("click")){
    // if(eventType.equals("click") || eventType.equals("change"))
    // pass = true;
    // }
    // else{
    // if(eventType.equals(exp))
    // pass = true;
    // }
    // if(!pass)
    // test.addMsg("eventType",exp,eventType);
    // }
    //
    // public void verifyTLEvent(JSONObject event,UIC_Test test,String exp)
    // throws Exception{
    // String dcEvent = event.getString("dcEvent");
    // //String expected = "";
    // boolean pass = false;
    //
    // if(exp.equals("click")){
    // if(dcEvent.equals("click") || dcEvent.equals("change"))
    // pass = true;
    // }
    // else{
    // if(dcEvent.equals(exp))
    // pass = true;
    // }
    // if(!pass)
    // test.addMsg("dcEventType",exp,dcEvent);
    // }
    //
    // public void verifyTargetID(JSONObject target,UIC_Test test,String exp)
    // throws Exception{
    // String targetId = "";
    //
    // targetId = target.getString("id");
    // if(!targetId.equals(exp))
    // test.addMsg("targetId",exp,targetId);
    // }
    //
    // public void verifyTargetName(JSONObject target,UIC_Test test,String exp)
    // throws Exception{
    // String targetName = "";
    //
    // targetName = target.getString("name");
    // if(!targetName.equals(exp))
    // test.addMsg("targetId",exp,targetName);
    // }
    //
    // public void verifySubType(JSONObject target,UIC_Test test,String exp)
    // throws Exception{
    // String subType = "";
    //
    // subType = target.getString("subType");
    // if(!subType.equals(exp))
    // test.addMsg("subType",exp,subType);
    // }
    //
    // public void verifyDwell(JSONObject target,UIC_Test test,Integer exp)
    // throws Exception{
    // Integer dwell = 0;
    //
    // if(!target.has("dwell")){
    // test.addMsg("dwell","exists","missing");
    // }
    // else
    // {
    // dwell = target.getInt("dwell");
    // if(dwell < exp)
    // test.addMsg("dwell","greater than " + exp.toString(),dwell.toString());
    // }
    // }
    //
    // public void verifyVisitedCount(JSONObject target,UIC_Test test,Integer
    // exp) throws Exception{
    // Integer visCount = 0;
    // if(!target.has("visitedCount")){
    // test.addMsg("visitedCount","exists","missing");
    // }
    // else
    // {
    // visCount = target.getInt("visitedCount");
    // if(visCount < exp)
    // test.addMsg("visitedCount",exp.toString(),visCount.toString());
    // }
    // }
    //
    // public void verifyPosHeight(JSONObject position,UIC_Test test,Integer
    // exp) throws Exception{
    // Integer height = 0;
    //
    // height = position.getInt("height");
    // if(!height.equals(exp))
    // test.addMsg("posHeight",exp.toString(),height.toString());
    // }
    //
    // public void verifyPosWidth(JSONObject position,UIC_Test test,Integer exp)
    // throws Exception{
    // Integer width = 0;
    //
    // width = position.getInt("width");
    // if(!width.equals(exp))
    // test.addMsg("posWidth",exp.toString(),width.toString());
    // }
    //
    // public void verifyRelXY(JSONObject position,UIC_Test test,String exp)
    // throws Exception{
    // String relXY = "";
    // /* Iterator itr = position.keys();
    // while(itr.hasNext()) {
    // Object element = itr.next();
    // System.out.print(element + " \n");
    // }*/
    // //verifyRelXY(position,t,"0.5,0.5");
    // if(!position.has("relXY")){
    // test.addMsg("relXY",exp,"missing");
    // }
    // else
    // {
    // relXY = position.getString("relXY");
    // if(!relXY.equals(exp)) {
    // String[] xy = relXY.split(",");
    // if (!testXYRange(xy[0]) &&
    // !testXYRange(xy[1])) {
    // test.addMsg("relXY",exp,relXY);
    // }
    // }
    // }
    // }
    //
    // public Boolean testXYRange(String xy) {
    // Boolean isInRange = false;
    //
    // if (Double.parseDouble(xy) >= 0 &&
    // Double.parseDouble(xy) <= 1) {
    // isInRange = true;
    // }
    //
    // return isInRange;
    // }
    //
    // public void verifyPrevState(JSONObject target,UIC_Test test,String exp)
    // throws Exception{
    // String prevStateValue = "";
    //
    // if(!target.has("prevState")){
    // test.addMsg("prevState",exp,"missing");
    // }
    // else
    // {
    // JSONObject prevState = (JSONObject) target.get("prevState");
    // prevStateValue = prevState.getString("value");
    // if(!prevStateValue.equals(exp))
    // test.addMsg("prevState",exp,prevStateValue);
    // }
    // }
    //
    // public void verifyCurrState(JSONObject target,UIC_Test test,String exp)
    // throws Exception{
    // String currStateValue = "";
    //
    // if(!target.has("currState")){
    // test.addMsg("currState",exp,"missing");
    // }
    // else
    // {
    // JSONObject currState = (JSONObject) target.get("currState");
    // currStateValue = currState.getString("value");
    // if(!currStateValue.equals(exp))
    // test.addMsg("currState",exp,currStateValue);
    // }
    // }
    //
    // public void verifyCurrStateSrc(JSONObject target,UIC_Test test,String
    // exp) throws Exception{
    // String currStateValue = "";
    //
    // if(!target.has("currState")){
    // test.addMsg("currState",exp,"missing");
    // }
    // else
    // {
    // JSONObject currState = (JSONObject) target.get("currState");
    // currStateValue = currState.getString("src");
    // if(!currStateValue.equals(exp))
    // test.addMsg("currState",exp,currStateValue);
    // }
    // }
    //
    // public void verifyFocusInOffset(JSONObject uic,UIC_Test test,Integer
    // exp)throws Exception{
    // Integer focusInOffset = uic.getInt("focusInOffset");
    // if(focusInOffset.compareTo(exp) < 0 ){
    // test.addMsg("focusInOffset",exp.toString(),focusInOffset.toString());
    // }
    // }
    // public void verifyOffset(JSONObject uic,UIC_Test test,Integer exp)throws
    // Exception{
    // Integer offset = uic.getInt("offset");
    // if(offset.compareTo(exp) < 0 ){
    // test.addMsg("offset",exp.toString(),offset.toString());
    // }
    // }
    //
    //
    // @SuppressWarnings("unchecked")
    // public JSONObject getUICObject(String id) throws Exception {
    // // Check if item is in queue
    // System.out.println("Search for json with id/name: " + id);
    // JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
    // ArrayList<Object> currentQueue =
    // (ArrayList<Object>)javascriptExecutor.executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");
    // assertNotNull(currentQueue);
    // for (Object queueItem : currentQueue) {
    // assertNotNull(queueItem);
    // HashMap<Object, Object> jsonMap = new HashMap<Object, Object>();
    // jsonMap.putAll((Map<? extends Object, ? extends Object>) queueItem);
    // JSONObject jsonObject = new JSONObject(jsonMap);
    // jsonObject = new JSONObject(jsonObject.toString());
    // assertNotNull(jsonObject);
    // System.out.println(jsonObject.toString());
    // if (jsonObject.has("target")) {
    // JSONObject target = (JSONObject) jsonObject.get("target");
    // assertNotNull(target);
    // if (target.getString("id").equals(id) ||
    // target.getString("name").equals(id)) {
    // return jsonObject;
    // }
    // }
    // }
    // return null;
    // }

    @Override
    @After
    public void tearDown() throws Exception {
        super.tearDown();
    }

    // protected boolean isElementPresent(By by) {
    // try {
    // driver.findElement(by);
    // return true;
    // } catch (NoSuchElementException e) {
    // return false;
    // }
    // }
    //
    // private Boolean isNotNull(JSONObject jsonObject, String key) {
    // try {
    // @SuppressWarnings("unused")
    // JSONObject jsonObject2 = (JSONObject)jsonObject.get(key);
    // } catch (Exception e) {
    // System.out.println("Exception isNotNull :\n" + e.getMessage());
    // return false;
    // }
    //
    // return true;
    // }
    //
    // private void focusOnElement(WebElement webElement) {
    // if("input".equals(webElement.getTagName())){
    // webElement.sendKeys("");
    // }
    // else{
    // new Actions(driver).moveToElement(webElement).perform();
    // }
    // }
}
