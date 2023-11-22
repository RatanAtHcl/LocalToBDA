package com.tl;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

//import org.openqa.selenium.html5;

/**
 * @author manimu
 *
 */
/**
 * @author manimu
 * 
 */
@RunWith(Parameterized.class)
public class HTML5TestPage extends UICInit {
    public HTML5TestPage(final String browser) {
        super(browser, "h5", "index.html", "about", "ie", true);
    }

    @Override
    @Before
    public void setUp() {
        super.setUp();
    }

    // @Test
    public void html5Elements() throws Exception {
        // assertTrue(isElementPresent(By.id("br")));
        WebElement element = driver.findElement(By.id("cl"));
        final JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.getElementById('cl').value='#ff8040'");
        // Birthday
        element = driver.findElement(By.id("br"));
        element.sendKeys("08/02/2001");
        driver.findElement(By.id("bt")).sendKeys("Test");
        // JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.getElementById('bd').value='2011-10-18T09:00:00.00'");
        // Month and Year -- pass 2013-07
        // range document.getElementById('rg').value = 9
        // Time document.getElementById('st').value = 13:03
        // bd bdayandTime = 2013-07-11T05:04
        // Week "2014-W02"
        // String p = "A";
        // 2011-10-18T00:00:00.00
    }

    /**
     * The attr1_BirthdaySelectboxTest() currently verifies that the Event type
     * returned is {"dcEvent":"click","type":"click"} instead of
     * {"dcEvent":"Change","type":"Change"} as we use java script to set the
     * value for this HTML5 element.
     */
    @Test
    public void attr1BirthdaySelectboxTest() throws Exception {
        /*//if (browser.toLowerCase().contains("firefox") || browser.toLowerCase().contains("safari")) {
    	if (browser.toLowerCase().contains("safari")) {
            System.out
                    .println("###########################################################################");
            System.out
                    .println("attr1_BirthdaySelectboxTest() has been ignored on " + browser + " as the HTML5 Select Time element is not supported on it");
            driver.quit();
            return;
        }
        // System.out.println(driver.getEval("navigator.appVersion;"));*/

        assertTrue(isElementPresent(By.id("br")));
        final WebElement element = driver.findElement(By.id("br"));

        final JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.getElementById('br').value='2013-08-02'");

        element.click();
        Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("bt")).sendKeys("Test");

        final JSONObject uicObject = getUICObject("br");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr1BirthdaySelectboxTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr1BirthdaySelectboxTest(final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest("attr1_BirthdaySelectboxTest",
                browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, testResult, "blur");
        verifyTLEvent(event, testResult, "focusout");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "br");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            testResult.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("datepicker").equals(dcType)) {
            testResult.addMsg("dcType", "datepicker", dcType);
        }

        verifySubType(target, testResult, "date");
        verifyTargetName(target, testResult, "bday");

        // TODO: width/height and relXY values are not consistent across
        // browsers.
        // JSONObject position = (JSONObject) target.get("position");
        // verifyPosHeight(position, testResult, 23);
        // verifyPosWidth(position, testResult, 158);
        // verifyRelXY(position, testResult, "0.5,0.5");

        verifyCurrState(target, testResult, "2013-08-02");

        verifyDwell(target, testResult, this.DWELL_TIME);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }

    /**
     * The HTML5 Element Birthdate and time zone is not supported by Chrome
     * browser so far
     */
    // @Test
    public void attr2BirthdateAndTimeZoneTest() throws Exception {

        assertTrue(isElementPresent(By.id("bt")));

        // WebElement element = driver.findElement(By.id("bt"));
        // element.click();
        // element.sendKeys("2013-07-11T02:32");
        final JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.getElementById('cl').value='2013-07-11T02:32'");
        driver.findElement(By.id("em")).click();

        final JSONObject uicObject = getUICObject("bd");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr2BirthdateAndTimeZoneTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr2BirthdateAndTimeZoneTest(
            final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest(
                "attr2_BirthdateAndTimeZoneTestTest", browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        // JSONObject event = (JSONObject) uicObject.get("event");
        // verifyEventType(event,testResult,"change");
        // verifyTLEvent(event,testResult,"change");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "bd");

        final String targetType = target.getString("type");
        if (!("INPUT").equals(targetType)) {
            testResult.addMsg("targetType", "INPUT", targetType);
        }
        final String dcType = target.getString("dcType");
        if (!("datetime-local").equals(dcType)) {
            testResult.addMsg("targetType", "datetime-local", dcType);
        }

        verifySubType(target, testResult, "datetime-local");
        verifyTargetName(target, testResult, "bdaytime");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, testResult, 23);
        verifyPosWidth(position, testResult, 236);

        verifyRelXY(position, testResult, "0.5,0.5");
        // verifyCurrState(target,testResult,"2013-07-11T02:32"); //not working
        verifyDwell(target, testResult, 1);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }

    /**
     * The attr3_ColorPickerTest() currently verifies that the Event type
     * returned is {"dcEvent":"click","type":"click"} instead of
     * {"dcEvent":"Change","type":"Change"} as we use java script to set the
     * value for this HTML5 element.
     */
    @Test
    public void attr3ColorPickerTest() throws Exception {

        //if (browser.toLowerCase().contains("firefox") || browser.toLowerCase().contains("safari")) {
    	if (browser.toLowerCase().contains("safari")) {
            System.out
                    .println("###########################################################################");
            System.out
                    .println("attr3_ColorPickerTest() has been ignored on " + browser + " as the HTML5 Select Time element is not supported on it");
            driver.quit();
            return;
        }

        assertTrue(isElementPresent(By.id("cl")));
        final WebElement element = driver.findElement(By.id("cl"));
        // element.click();
        final JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.getElementById('cl').value='#ff8040'");
        element.click();
        driver.findElement(By.id("bt")).click();

        final JSONObject uicObject = getUICObject("cl");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr3ColorPickerTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr3ColorPickerTest(final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest("attr3_ColorPickerTest()",
                browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, testResult, "blur");
        verifyTLEvent(event, testResult, "focusout");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "cl");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            testResult.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("colorpicker").equals(dcType)) {
            testResult.addMsg("dcType", "colorpicker", dcType);
        }

        verifySubType(target, testResult, "color");
        verifyTargetName(target, testResult, "favcolor");

        final JSONObject position = (JSONObject) target.get("position");
        if(browser.toLowerCase().contains("firefox")) {
        	verifyPosHeight(position, testResult, 25);
            verifyPosWidth(position, testResult, 42);
            verifyRelXY(position, testResult, "05,05");
        }
        else {
        	verifyPosHeight(position, testResult, 29);
            verifyPosWidth(position, testResult, 48);
            verifyRelXY(position, testResult, "05,05");
        }

        verifyCurrState(target, testResult, "#ff8040");
        verifyDwell(target, testResult, 1);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }

    /**
     * Currently the attr4_EmailboxTest() test does not return the RelXY
     * coordinates this is a Webdriver bug as Webdriver does not fully support
     * all HTML5 elements. Hence this test does not verify the RelXY coordinates
     * for the element. Also the {"position":{"height":22,"width":155} for this
     * element is different on different browsers as each browser implements
     * HTML5 elements differently.
     */
    @Test
    public void attr4EmailboxTest() throws Exception {
        assertTrue(isElementPresent(By.id("em")));
        final WebElement element = driver.findElement(By.id("em"));
        element.sendKeys("DiscoverQA@us.ibm.com");
		Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("bt")).click();

        final JSONObject uicObject = getUICObject("em");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr4EmailboxTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr4EmailboxTest(final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest("attr4_EmailboxTest()",
                browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, testResult, "change");
        verifyTLEvent(event, testResult, "valueChange");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "em");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            testResult.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("emailinput").equals(dcType)) {
            testResult.addMsg("dcType", "emailinput", dcType);
        }

        verifySubType(target, testResult, "email");
        verifyTargetName(target, testResult, "usremail");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, testResult, 22);
        verifyPosWidth(position, testResult, 153);
        // verifyRelXY(position,testResult,"");

        verifyCurrState(target, testResult, "DiscoverQA@us.ibm.com");
        verifyDwell(target, testResult, this.DWELL_TIME);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }

    /**
     * Currently the attr5_SearchboxTest() test does not return the RelXY
     * coordinates this is a Webdriver bug as Webdriver does not fully support
     * all HTML5 elements. Hence this test does not verify the RelXY coordinates
     * for the element. Also the {"position":{"height":22,"width":155} for this
     * element is different on different browsers as each browser implements
     * HTML5 elements differently.
     */
    @Test
    public void attr5SearchboxTest() throws Exception {
        assertTrue(isElementPresent(By.id("sr")));
        final WebElement element = driver.findElement(By.id("sr"));
        element.sendKeys("Discover");
		Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("bt")).click();

        final JSONObject uicObject = getUICObject("sr");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr5SearchboxTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr5SearchboxTest(final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest("attr5_SearchboxTest", browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, testResult, "change");
        verifyTLEvent(event, testResult, "valueChange");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "sr");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            testResult.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("searchbox").equals(dcType)) {
            testResult.addMsg("dcType", "searchbox", dcType);
        }

        verifySubType(target, testResult, "search");
        verifyTargetName(target, testResult, "googlesearch");

        final JSONObject position = (JSONObject) target.get("position");
        
        verifyPosHeight(position, testResult, 22);
        verifyPosWidth(position, testResult, 155);
        // verifyRelXY(position,testResult,"");

        verifyCurrState(target, testResult, "Discover");
        verifyDwell(target, testResult, this.DWELL_TIME);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }

    /**
     * Currently the attr6_HomePageTest() test does not return the RelXY
     * coordinates this is a Webdriver bug as Webdriver does not fully support
     * all HTML5 elements. Hence this test does not verify the RelXY coordinates
     * for the element. Also the {"position":{"height":22,"width":155} for this
     * element is different on different browsers as each browser implements
     * HTML5 elements differently.
     */
    @Test
    public void attr6HomePageTest() throws Exception {
        assertTrue(isElementPresent(By.id("hm")));
        final WebElement element = driver.findElement(By.id("hm"));
        element.sendKeys("http://www.discover.com");
        driver.findElement(By.id("bt")).click();

        final JSONObject uicObject = getUICObject("hm");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr6HomePageTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr6HomePageTest(final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest("attr6_HomePageTest()",
                browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, testResult, "change");
        verifyTLEvent(event, testResult, "valueChange");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "hm");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            testResult.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("urlbox").equals(dcType)) {
            testResult.addMsg("dcType", "urlbox", dcType);
        }

        verifySubType(target, testResult, "url");
        verifyTargetName(target, testResult, "homepage");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, testResult, 22);
        verifyPosWidth(position, testResult, 153);
        // verifyRelXY(position,testResult,"");

        verifyCurrState(target, testResult, "http://www.discover.com");
        verifyDwell(target, testResult, 1);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }

    /**
     * Currently the attr7_QuantityTest() test does not return the RelXY
     * coordinates this is a Webdriver bug as Webdriver does not fully support
     * all HTML5 elements. Hence this test does not verify the RelXY coordinates
     * for the element.
     */
    @Test
    public void attr7QuantityTest() throws Exception {
        //if (browser.toLowerCase().contains("firefox")) {
    	if (browser.toLowerCase().contains("safari")) {
            System.out
                    .println("###########################################################################");
            System.out
                    .println("attr7_QuantityTest() has been ignored on FireFox as the HTML5 Select Time element is not supported on it");
            driver.quit();
            return;
        }
        assertTrue(isElementPresent(By.id("qt")));
        final WebElement element = driver.findElement(By.id("qt"));
        element.sendKeys("4");
		Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("bt")).click();

        final JSONObject uicObject = getUICObject("qt");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr7QuantityTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr7QuantityTest(final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest("attr7_QuantityTest", browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, testResult, "change");
        verifyTLEvent(event, testResult, "valueChange");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "qt");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            testResult.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("numberpicker").equals(dcType)) {
            testResult.addMsg("targetType", "numberpicker", dcType);
        }

        verifySubType(target, testResult, "number");
        verifyTargetName(target, testResult, "quantity");

        // TODO: width/height and relXY values are not consistent across
        // browsers.
        // JSONObject position = (JSONObject) target.get("position");
        // verifyPosHeight(position, testResult, 22);
        // verifyPosWidth(position, testResult, 60);
        // verifyRelXY(position,testResult,"");

        verifyCurrState(target, testResult, "4");
        verifyDwell(target, testResult, this.DWELL_TIME);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }

    /**
     * The attr8_RangeFieldTest() currently verifies for a different value than
     * the one used to set the element value as the value is being set using
     * javascript its not being identified by UIC and so a click event is
     * required to trigger type 4 event and the click causes the change event
     * and the value for that element is changed.
     * 
     */
    @Test
    public void attr8RangeFieldTest() throws Exception {
        //if (browser.toLowerCase().contains("firefox")) {
    	if (browser.toLowerCase().contains("safari")) {
            System.out
                    .println("###########################################################################");
            System.out
                    .println("attr8_RangeFieldTest() has been ignored on FireFox as the HTML5 Select Time element is not supported on it");
            driver.quit();
            return;
        }
        assertTrue(isElementPresent(By.id("rg")));

        // WebElement element = driver.findElement(By.id("rg"));
        // element.click();

        // JavascriptExecutor js = (JavascriptExecutor) driver;
        // js.executeScript("document.getElementById('rg').value = '9'");
        // new Actions(driver).dragAndDropBy(element, 10, 0).click().perform();
        final WebElement slider = driver.findElement(By.id("rg"));
        final Actions move = new Actions(driver);
        move.moveToElement(slider, 10, 0).click().build().perform();

        driver.findElement(By.id("bt")).click();

        final JSONObject uicObject = getUICObject("rg");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr8RangeFieldTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr8RangeFieldTest(final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest("attr8_RangeFieldTest",
                browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, testResult, "change");
        verifyTLEvent(event, testResult, "valueChange");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "rg");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            testResult.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("slider").equals(dcType)) {
            testResult.addMsg("dcType", "slider", dcType);
        }

        verifySubType(target, testResult, "range");
        verifyTargetName(target, testResult, "points");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, testResult, 21);
        /*Why would this be 21 not 15?^ I changed it to 15 because I'm not sure where
        the 21 comes from.
        I realized it is different for each browsers, so maybe we should make a 
        subtest for each type of browser.*/
        //verifyPosHeight(position, testResult, 15);
        
        verifyPosWidth(position, testResult, 129);
        verifyRelXY(position, testResult, "0.5,0.5");

        verifyCurrState(target, testResult, "1");
        verifyDwell(target, testResult, 1);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }

    /**
     * The attr9_BirthdateAndTimeTest() currently verifies that the Event type
     * returned is {"dcEvent":"click","type":"click"} instead of
     * {"dcEvent":"Change","type":"Change"} as we use java script to set the
     * value for this HTML5 element.
     */
    @Test
    public void attr9BirthdateAndTimeTest() throws Exception {
        /*if (browser.toLowerCase().contains("firefox") || browser.toLowerCase().contains("safari")) {
    	//if (browser.toLowerCase().contains("safari")) {
            System.out
                    .println("###########################################################################");
            System.out
                    .println("9_BirthdateAndTimeTest has been ignored on " + browser + " as the HTML5 Select Time element is not supported on it");
            driver.quit();
            return;
        }*/
        assertTrue(isElementPresent(By.id("bd")));
        final WebElement element = driver.findElement(By.id("bd"));

        // java script to set the value for this HTML5 element
        final JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.getElementById('bd').value='2013-07-11T05:04'");

        element.click();
        Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("bt")).click();

        final JSONObject uicObject = getUICObject("bd");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr9BirthdateAndTimeTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr9BirthdateAndTimeTest(final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest("attr9_BirthdateAndTimeTest",
                browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, testResult, "blur");
        verifyTLEvent(event, testResult, "focusout");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "bd");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            testResult.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("datetime-local").equals(dcType)) {
            testResult.addMsg("targetType", "datetime-local", dcType);
        }

        verifySubType(target, testResult, "datetime-local");
        verifyTargetName(target, testResult, "bdaytime");

        // TODO: width/height and relXY values are not consistent across
        // browsers.
        // JSONObject position = (JSONObject) target.get("position");
        // verifyPosHeight(position, testResult, 23);
        // verifyPosWidth(position, testResult, 236);
        // verifyRelXY(position, testResult, "0.5,0.5");

        verifyCurrState(target, testResult, "2013-07-11T05:04");

        verifyDwell(target, testResult, this.DWELL_TIME);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }

    /**
     * The attr10_MonthAndYearTest() currently verifies that the Event type
     * returned is {"dcEvent":"focusout","type":"blur"} instead of
     * {"dcEvent":"Change","type":"Change"} as we use java script to set the
     * value for this HTML5 element.
     */
    @Test
    public void attr10MonthAndYearTest() throws Exception {
        /*if (browser.toLowerCase().contains("firefox") || browser.toLowerCase().contains("safari")) {
    	//if (browser.toLowerCase().contains("safari")) {
            System.out
                    .println("###########################################################################");
            System.out
                    .println("attr10_MonthAndYearTest() has been ignored on " + browser + " as the HTML5 Select Time element is not supported on it");
            driver.quit();
            return;
        }*/
        assertTrue(isElementPresent(By.id("bm")));
        final WebElement element = driver.findElement(By.id("bm"));

        // java script to set the value for this HTML5 element
        final JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.getElementById('bm').value='2013-07'");

        element.click();
        driver.findElement(By.id("bt")).click();

        final JSONObject uicObject = getUICObject("bm");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr10MonthAndYearTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr10MonthAndYearTest(final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest("attr10_MonthAndYearTest",
                browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, testResult, "blur");
        verifyTLEvent(event, testResult, "focusout");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "bm");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            testResult.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("month").equals(dcType)) {
            testResult.addMsg("targetType", "month", dcType);
        }

        verifySubType(target, testResult, "month");
        verifyTargetName(target, testResult, "bdaymonth");

        // TODO: width/height and relXY values are not consistent across
        // browsers.
        // JSONObject position = (JSONObject) target.get("position");
        // verifyPosHeight(position, testResult, 23);
        // verifyPosWidth(position, testResult, 196);
        // verifyRelXY(position, testResult, "0.5,0.5");

        verifyCurrState(target, testResult, "2013-07");

        verifyDwell(target, testResult, 1);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }

    /**
     * The attr11_SelectTimeTest() currently verifies that the Event type
     * returned is {"dcEvent":"focusout","type":"blur"} instead of
     * {"dcEvent":"Change","type":"Change"} as we use java script to set the
     * value for this HTML5 element.
     */
    @Test
    public void attr11SelectTimeTest() throws Exception {
        /*//if (browser.toLowerCase().contains("firefox") || browser.toLowerCase().contains("safari")) {
    	if (browser.toLowerCase().contains("safari")) {
            System.out
                    .println("###########################################################################");
            System.out
                    .println("attr11_SelectTimeTest() has been ignored on " + browser + " as the HTML5 Select Time element is not supported on it");
            driver.quit();
            return;
        }*/

        assertTrue(isElementPresent(By.id("st")));
        final WebElement element = driver.findElement(By.id("st"));

        // java script to set the value for this HTML5 element
        final JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.getElementById('st').value='13:03'");

        element.click();
        driver.findElement(By.id("bt")).click();

        final JSONObject uicObject = getUICObject("st");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr11SelectTimeTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr11SelectTimeTest(final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest("attr11_SelectTimeTest",
                browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, testResult, "blur");
        verifyTLEvent(event, testResult, "focusout");


        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "st");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            testResult.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("timepicker").equals(dcType)) {
            testResult.addMsg("dcType", "timepicker", dcType);
        }

        verifySubType(target, testResult, "time");
        verifyTargetName(target, testResult, "usr_time");

        // TODO: width/height and relXY values are not consistent across
        // browsers.
        // JSONObject position = (JSONObject) target.get("position");
        // verifyPosHeight(position, testResult, 23);
        // verifyPosWidth(position, testResult, 109);
        // verifyRelXY(position, testResult, "0.5,0.5");

        verifyCurrState(target, testResult, "13:03");

        verifyDwell(target, testResult, 1);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }

    /**
     * The attr12_SelectWeekTest() currently verifies that the Event type
     * returned is {"dcEvent":"focusout","type":"blur"} instead of
     * {"dcEvent":"Change","type":"Change"} as we use java script to set the
     * value for this HTML5 element.
     */
    @Test
    public void attr12SelectWeekTest() throws Exception {
    	/*if (browser.toLowerCase().contains("firefox") || browser.toLowerCase().contains("safari")) {
    	//if (browser.toLowerCase().contains("safari")) {
            System.out
                    .println("###########################################################################");
            System.out
                    .println("attr12_SelectWeekTest() has been ignored on " + browser + " as the HTML5 Select Time element is not supported on it");
            driver.quit();
            return;
        }*/
        assertTrue(isElementPresent(By.id("sw")));
        final WebElement element = driver.findElement(By.id("sw"));

        // java script to set the value for this HTML5 element
        final JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("document.getElementById('sw').value='2014-W02'");

        element.click();
        driver.findElement(By.id("bt")).click();

        final JSONObject uicObject = getUICObject("sw");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr12SelectWeekTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr12SelectWeekTest(final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest("attr12_SelectWeekTest",
                browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, testResult, "blur");
        verifyTLEvent(event, testResult, "focusout");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "sw");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            testResult.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("week").equals(dcType)) {
            testResult.addMsg("targetType", "week", dcType);
        }

        verifySubType(target, testResult, "week");
        verifyTargetName(target, testResult, "week_year");

        // TODO: width/height and relXY values are not consistent across
        // browsers.
        // JSONObject position = (JSONObject) target.get("position");
        // verifyPosHeight(position, testResult, 23);
        // verifyPosWidth(position, testResult, 180);
        // verifyRelXY(position, testResult, "0.5,0.5");

        verifyCurrState(target, testResult, "2014-W02");

        verifyDwell(target, testResult, 1);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }

    /**
     * Currently the attr13_TelephoneTest()) test does not return the RelXY
     * coordinates this is a Webdriver bug as Webdriver does not fully support
     * all HTML5 elements. Hence this test does not verify the RelXY coordinates
     * for the element. Also the {"position":{"height":22,"width":155} for this
     * element is different on different browsers as each browser implements
     * HTML5 elements differently.
     */
    @Test
    public void attr13TelephoneTest() throws Exception {
        assertTrue(isElementPresent(By.id("te")));

        driver.findElement(By.id("te")).sendKeys("4159321234");
		Thread.sleep(this.DWELL_TIME);
        driver.findElement(By.id("bt")).click();

        final JSONObject uicObject = getUICObject("te");
        assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

        final UICTest t = verifyAttr13TelephoneTest(uicObject);
        assertTrue(t.getErrs(), t.getStatus());
    }

    public UICTest verifyAttr13TelephoneTest(final JSONObject uicObject) throws Exception {
        final UICTest testResult = new UICTest("attr13_TelephoneTest",
                browser);

        verifyScreenviewOffset(uicObject, testResult, 1);

        if (!uicObject.getBoolean("fromWeb")) {
            testResult.addMsg("fromWeb", "true", "false");
        }

        verifyCount(uicObject, testResult, 1);

        final Integer type = uicObject.getInt("type");
        if (4 != type) {
            testResult.addMsg("type", "4", type.toString());
        }

        final JSONObject event = (JSONObject) uicObject.get("event");
        verifyEventType(event, testResult, "change");
        verifyTLEvent(event, testResult, "valueChange");

        final JSONObject target = (JSONObject) uicObject.get("target");
        verifyTargetID(target, testResult, "te");

        final String targetType = target.getString("type").toLowerCase();
        if (!("input").equals(targetType)) {
            testResult.addMsg("targetType", "input", targetType);
        }
        final String dcType = target.getString("dcType").toLowerCase();
        if (!("tel").equals(dcType)) {
            testResult.addMsg("targetType", "tel", dcType);
        }

        verifySubType(target, testResult, "tel");
        verifyTargetName(target, testResult, "usrtel");

        final JSONObject position = (JSONObject) target.get("position");
        verifyPosHeight(position, testResult, 22);
        verifyPosWidth(position, testResult, 153);
        // verifyRelXY(position, testResult, "0.7,0.5");

        verifyCurrState(target, testResult, "4159321234");
        verifyDwell(target, testResult, this.DWELL_TIME);

        if (target.getBoolean("isParentLink")) {
            testResult.addMsg("isParentLink", "false", "true");
        }
        verifyVisitedCount(target, testResult, 1);

        verifyFocusInOffset(uicObject, testResult, 1);
        verifyOffset(uicObject, testResult, 1);

        return testResult;
    }
    
    @Test
   	public void attr14BlacklistTest() throws Exception {
    	final WebElement element = driver.findElement(By.id("blacklisted"));
		element.click();
		element.sendKeys("Test Blacklist");
		driver.findElement(By.id("bt")).click();
		final JSONObject uicObject = getUICObject("[[\"featured2\"],[\"article\",0],[\"form\",0],[\"fieldset\",1],[\"table\",0],[\"tbody\",0],[\"tr\",6],[\"td\",0],[\"input\",0]]");
		final UICTest t = verifyAttr14BlacklistTest(uicObject);	
		assertTrue(t.getErrs(),t.getStatus());		
	}	

	public UICTest verifyAttr14BlacklistTest(final JSONObject uicObject) throws Exception {
	
		final UICTest t = new UICTest("attr14BlacklistTest", browser);
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
                "[[\"featured2\"],[\"article\",0],[\"form\",0],[\"fieldset\",1],[\"table\",0],[\"tbody\",0],[\"tr\",6],[\"td\",0],[\"input\",0]]");
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
   	public void attr15BlacklistTestRegEx() throws Exception {
    	final WebElement element = driver.findElement(By.id("TestForBlacklistElement"));
		element.click();
		element.sendKeys("Test Blacklist RegEx");
		driver.findElement(By.id("bt")).click();
		final JSONObject uicObject = getUICObject("[[\"featured2\"],[\"article\",0],[\"form\",0],[\"fieldset\",1],[\"table\",0],[\"tbody\",0],[\"tr\",7],[\"td\",0],[\"input\",0]]");
		final UICTest t = verifyAttr15BlacklistTestRegEx(uicObject);	
		assertTrue(t.getErrs(),t.getStatus());		
	}	

	public UICTest verifyAttr15BlacklistTestRegEx(final JSONObject uicObject) throws Exception {
	
		final UICTest t = new UICTest("attr15BlacklistTestRegEx", browser);
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
                "[[\"featured2\"],[\"article\",0],[\"form\",0],[\"fieldset\",1],[\"table\",0],[\"tbody\",0],[\"tr\",7],[\"td\",0],[\"input\",0]]");
        
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
