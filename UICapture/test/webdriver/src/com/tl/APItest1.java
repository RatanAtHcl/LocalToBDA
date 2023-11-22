package com.tl;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.util.Arrays;

import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.logging.Logs;

@RunWith(Parameterized.class)
public class APItest1 extends UICInit {
	public APItest1(final String browser) {
		super(browser, "APITesting", "index.html",
				"registerBridgeCallbacks_addRequestHeaders_enable_duplicate",
				null, true);
	}

	@Override
	@Before
	public void setUp() {
		super.setUp();
	}

	// DCX.logExceptionEvent test cases

	@Test
	public void logExceptionEventAPIWithAllParametersTest() throws Exception {

		assertTrue(isElementPresent(By.id("logExceptionEvent1")));
		final WebElement element = driver.findElement(By
				.id("logExceptionEvent1"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final JSONObject uicObject = getUICObjectbymsgType("6");
		assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

		final UICTest t = verifyLogExceptionEventAPIWithAllParametersTest(uicObject);
		assertTrue(t.getErrs(), t.getStatus());
	}

	public UICTest verifyLogExceptionEventAPIWithAllParametersTest(
			final JSONObject uicObject) throws Exception {
		final UICTest t = new UICTest("LogExceptionEventAPITest", browser);

		if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}

		final Integer type = uicObject.getInt("type");
		if (6 != type) {
			t.addMsg("type", "6", type.toString());
		}

		final JSONObject exception = (JSONObject) uicObject.get("exception");
		assertTrue(("This is to test the DCX.logExceptionEvent()")
				.equals(exception.getString("description")));
		assertTrue(("/APITesting/testRebind.html").equals(exception
				.getString("url")));
		assertTrue(("101").equals(exception.getString("line")));

		return t;
	}

	@Test
	public void logExceptionEventAPIWithMsgParametersOnly() throws Exception {

		assertTrue(isElementPresent(By.id("logExceptionEvent4")));
		final WebElement element = driver.findElement(By
				.id("logExceptionEvent4"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final JSONObject uicObject = getUICObjectbymsgType("6");
		assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

		final UICTest t = verifyLogExceptionEventAPIWithMsgParametersOnly(uicObject);
		assertTrue(t.getErrs(), t.getStatus());
	}

	public UICTest verifyLogExceptionEventAPIWithMsgParametersOnly(
			final JSONObject uicObject) throws Exception {
		final UICTest t = new UICTest("LogExceptionEventAPITest", browser);

		if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}

		final Integer type = uicObject.getInt("type");
		if (6 != type) {
			t.addMsg("type", "6", type.toString());
		}

		final JSONObject exception = (JSONObject) uicObject.get("exception");
		assertTrue(("This is to test the DCX.logExceptionEvent()")
				.equals(exception.getString("description")));

		return t;
	}

	@Test
	public void logExceptionEventAPIWithMsgandURLParameters() throws Exception {

		assertTrue(isElementPresent(By.id("logExceptionEvent2")));
		final WebElement element = driver.findElement(By
				.id("logExceptionEvent2"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final JSONObject uicObject = getUICObjectbymsgType("6");
		assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

		final UICTest t = verifyLogExceptionEventAPIWithMsgandURLParameters(uicObject);
		assertTrue(t.getErrs(), t.getStatus());
	}

	public UICTest verifyLogExceptionEventAPIWithMsgandURLParameters(
			final JSONObject uicObject) throws Exception {
		final UICTest t = new UICTest("LogExceptionEventAPITest", browser);

		if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}

		final Integer type = uicObject.getInt("type");
		if (6 != type) {
			t.addMsg("type", "6", type.toString());
		}

		final JSONObject exception = (JSONObject) uicObject.get("exception");
		assertTrue(("This is to test the DCX.logExceptionEvent()")
				.equals(exception.getString("description")));
		assertTrue(("/APITesting/testRebind.html").equals(exception
				.getString("url")));

		return t;
	}

	@Test
	public void logExceptionEventAPIWithMsgandLineParameters() throws Exception {

		assertTrue(isElementPresent(By.id("logExceptionEvent3")));
		final WebElement element = driver.findElement(By
				.id("logExceptionEvent3"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final JSONObject uicObject = getUICObjectbymsgType("6");
		assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

		final UICTest t = verifyLogExceptionEventAPIWithMsgandLineParameters(uicObject);
		assertTrue(t.getErrs(), t.getStatus());
	}

	public UICTest verifyLogExceptionEventAPIWithMsgandLineParameters(
			final JSONObject uicObject) throws Exception {
		final UICTest t = new UICTest("LogExceptionEventAPITest", browser);

		if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}

		final Integer type = uicObject.getInt("type");
		if (6 != type) {
			t.addMsg("type", "6", type.toString());
		}

		final JSONObject exception = (JSONObject) uicObject.get("exception");
		assertTrue(("This is to test the DCX.logExceptionEvent()")
				.equals(exception.getString("description")));
		assertTrue(("101").equals(exception.getString("line")));

		return t;
	}

	// DCX.logScreenviewLoad test cases

	@Test
	public void logScreenviewLoadEventAPIWithAllParametersTest()
			throws Exception {

		assertTrue(isElementPresent(By.id("logScreenviewLoad1")));
		final WebElement element = driver.findElement(By
				.id("logScreenviewLoad1"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final JSONObject uicObject = getUICObject("logScreenviewLoadTest");
		assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

		final UICTest t = verifyLogScreenviewLoadEventAPIWithAllParametersTest(uicObject);
		assertTrue(t.getErrs(), t.getStatus());
	}

	public UICTest verifyLogScreenviewLoadEventAPIWithAllParametersTest(
			final JSONObject uicObject) throws Exception {
		final UICTest t = new UICTest("LogScreenviewLoadEventAPITest", browser);

		if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}

		final Integer type = uicObject.getInt("type");
		if (2 != type) {
			t.addMsg("type", "2", type.toString());
		}

		final JSONObject screenview = (JSONObject) uicObject.get("screenview");
		assertTrue(("logScreenviewLoadTest").equals(screenview
				.getString("name")));
		assertTrue(("This is to test referrerName for logScreenviewLoad")
				.equals(screenview.getString("referrer")));

		return t;
	}

	@Test
	public void logScreenviewLoadEventAPIWithNameParametersOnly()
			throws Exception {

		assertTrue(isElementPresent(By.id("logScreenviewLoad2")));
		final WebElement element = driver.findElement(By
				.id("logScreenviewLoad2"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final JSONObject uicObject = getUICObject("logScreenviewLoadTest");
		assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

		final UICTest t = verifyLogScreenviewLoadEventAPIWithNameParametersOnly(uicObject);
		assertTrue(t.getErrs(), t.getStatus());
	}

	public UICTest verifyLogScreenviewLoadEventAPIWithNameParametersOnly(
			final JSONObject uicObject) throws Exception {
		final UICTest t = new UICTest("LogScreenviewLoadEventAPITest", browser);

		if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}

		final Integer type = uicObject.getInt("type");
		if (2 != type) {
			t.addMsg("type", "2", type.toString());
		}

		final JSONObject screenview = (JSONObject) uicObject.get("screenview");
		assertTrue(("logScreenviewLoadTest").equals(screenview
				.getString("name")));

		return t;
	}

	@Test
	public void logScreenviewLoadAPIWithNameandReferrerNameParameters()
			throws Exception {

		assertTrue(isElementPresent(By.id("logScreenviewLoad3")));
		final WebElement element = driver.findElement(By
				.id("logScreenviewLoad3"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final JSONObject uicObject = getUICObject("logScreenviewLoadTest");
		assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

		final UICTest t = verifylogScreenviewLoadEventAPIWithNameandReferrerNameParameters(uicObject);
		assertTrue(t.getErrs(), t.getStatus());
	}

	public UICTest verifylogScreenviewLoadEventAPIWithNameandReferrerNameParameters(
			final JSONObject uicObject) throws Exception {
		final UICTest t = new UICTest("LogScreenviewLoadEventAPITest", browser);

		if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}

		final Integer type = uicObject.getInt("type");
		if (2 != type) {
			t.addMsg("type", "2", type.toString());
		}

		final JSONObject screenview = (JSONObject) uicObject.get("screenview");
		assertTrue(("logScreenviewLoadTest").equals(screenview
				.getString("name")));
		assertTrue(("This is to test referrerName for logScreenviewLoad")
				.equals(screenview.getString("referrer")));

		return t;
	}

	@Test
	public void logScreenviewLoadEventAPIWithNameandRootParameters()
			throws Exception {

		assertTrue(isElementPresent(By.id("logScreenviewLoad4")));
		final WebElement element = driver.findElement(By
				.id("logScreenviewLoad4"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final JSONObject uicObject = getUICObject("logScreenviewLoadTest");
		assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

		final UICTest t = verifyLogScreenviewLoadEventAPIWithNameandRootParameters(uicObject);
		assertTrue(t.getErrs(), t.getStatus());
	}

	public UICTest verifyLogScreenviewLoadEventAPIWithNameandRootParameters(
			final JSONObject uicObject) throws Exception {
		final UICTest t = new UICTest("LogScreenviewLoadEventAPITest", browser);

		if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}

		final Integer type = uicObject.getInt("type");
		if (2 != type) {
			t.addMsg("type", "2", type.toString());
		}

		final JSONObject screenview = (JSONObject) uicObject.get("screenview");
		assertTrue(("logScreenviewLoadTest").equals(screenview
				.getString("name")));

		return t;
	}

	// DCX.logScreenviewUnload API test
	@Test
	public void logScreenviewUnloadEventAPI() throws Exception {

		assertTrue(isElementPresent(By.id("logScreenviewUnload1")));
		final WebElement element = driver.findElement(By
				.id("logScreenviewUnload1"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final JSONObject uicObject = getUICObject("logScreenviewUnloadTest");
		assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

		final UICTest t = verifyLogScreenviewUnloadEventAPI(uicObject);
		assertTrue(t.getErrs(), t.getStatus());
	}

	public UICTest verifyLogScreenviewUnloadEventAPI(final JSONObject uicObject)
			throws Exception {
		final UICTest t = new UICTest("LogScreenviewUnloadEventAPITest",
				browser);

		if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}

		final Integer type = uicObject.getInt("type");
		if (2 != type) {
			t.addMsg("type", "2", type.toString());
		}

		final JSONObject screenview = (JSONObject) uicObject.get("screenview");
		assertTrue(("logScreenviewUnloadTest").equals(screenview
				.getString("name")));

		return t;
	}

	// DCX.logCustomEvent API test
	@Test
	public void logCustomEventAPI() throws Exception {

		assertTrue(isElementPresent(By.id("logCustomEvent1")));
		final WebElement element = driver.findElement(By.id("logCustomEvent1"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final JSONObject uicObject = getUICObject("logCustomEventTest");
		assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

		final UICTest t = verifylogCustomEventAPI(uicObject);
		assertTrue(t.getErrs(), t.getStatus());
	}

	public UICTest verifylogCustomEventAPI(final JSONObject uicObject)
			throws Exception {
		final UICTest t = new UICTest("LogCustomEventAPITest", browser);

		if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}

		final Integer type = uicObject.getInt("type");
		if (5 != type) {
			t.addMsg("type", "5", type.toString());
		}

		final JSONObject screenview = (JSONObject) uicObject.get("customEvent");
		assertTrue(("logCustomEventTest").equals(screenview.getString("name")));
		assertTrue(("This is to test the logCustomEvent API").equals(screenview
				.getString("data")));

		return t;
	}

	// DCX.processDOMEvent API test
	@Test
	public void processDOMEventAPI() throws Exception {

		assertTrue(isElementPresent(By.id("processDOMEvent1")));
		final WebElement element = driver
				.findElement(By.id("processDOMEvent1"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final JSONObject uicObject = getUICObject("processDOMEvent1");
		assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

		final UICTest t = verifyprocessDOMEventAPI(uicObject);
		assertTrue(t.getErrs(), t.getStatus());
	}

	public UICTest verifyprocessDOMEventAPI(final JSONObject uicObject)
			throws Exception {
		final UICTest t = new UICTest("ProcessDOMEventAPITest", browser);

		if (!uicObject.getBoolean("fromWeb")) {
			t.addMsg("fromWeb", "true", "false");
		}

		final Integer type = uicObject.getInt("type");
		if (4 != type) {
			t.addMsg("type", "4", type.toString());
		}

		final JSONObject event = (JSONObject) uicObject.get("event");
		verifyEventType(event, t, "click");
		verifyTLEvent(event, t, "click");

		final JSONObject target = (JSONObject) uicObject.get("target");

		verifyTargetID(target, t, "processDOMEvent1");

		final String targetType = target.getString("type");
		if (!("input").equals(targetType)) {
			t.addMsg("targetType", "input", targetType);
		}
		final String dcType = target.getString("dcType");
		if (!("button").equals(dcType)) {
			t.addMsg("targetType", "button", dcType);
		}

		verifySubType(target, t, "button");

		verifyTargetName(target, t, "");

		final JSONObject position = (JSONObject) target.get("position");
		/*
		 * if(quirksMode){ verifyPosHeight(position, t, 23);
		 * verifyPosWidth(position, t, 154); } else{
		 */
		verifyPosHeight(position, t, 20);
		verifyPosWidth(position, t, 80);
		// }
		verifyRelXY(position, t, "0.5,0.5");

		verifyCurrState(target, t, "Call DCX.processDOM");

		verifyDwell(target, t, 1);

		if (target.getBoolean("isParentLink")) {
			t.addMsg("isParentLink", "false", "true");
		}

		verifyVisitedCount(target, t, 1);

		verifyFocusInOffset(uicObject, t, 1);
		verifyOffset(uicObject, t, 1);

		return t;
	}

	// DCX.rebind API test
	@Test
	public void rebindAPI() throws Exception {

		if (browserVersion.contains("ie7")) {

			assertTrue(isElementPresent(By.id("addDynamicElements")));
			driver.findElement(By.id("rebind1")).click();

			final WebElement element1 = driver.findElement(By
					.id("addDynamicElements"));
			element1.click();
			driver.findElement(By.id("textbox1")).sendKeys("Dynamic element 1");
			final WebElement element2 = driver.findElement(By
					.id("addDynamicElements"));
			element2.click();
			driver.findElement(By.id("textbox2")).sendKeys("Dynamic element 2");

			final JSONObject uicObject = getUICObject("textbox1");
			assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

			final UICTest t = verifyrebindAPI(uicObject);
			assertTrue(t.getErrs(), t.getStatus());

		}
	}

	public UICTest verifyrebindAPI(final JSONObject uicObject) throws Exception {
		final UICTest t = new UICTest("rebindAPITest", browser);

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

		verifyTargetID(target, t, "textbox1");

		final String targetType = target.getString("type");
		if (!("input").equals(targetType)) {
			t.addMsg("targetType", "input", targetType);
		}
		final String dcType = target.getString("dcType");
		if (!("textBox").equals(dcType)) {
			t.addMsg("targetType", "textBox", dcType);
		}

		verifySubType(target, t, "text");

		verifyTargetName(target, t, "textbox1");

		final JSONObject position = (JSONObject) target.get("position");

		verifyPosHeight(position, t, 21);
		verifyPosWidth(position, t, 145);

		verifyRelXY(position, t, "0.5,0.5");

		verifyCurrState(target, t, "Dynamic element 1");

		verifyPrevState(target, t, "Dynamic element 1");

		verifyVisitedCount(target, t, 1);

		return t;
	}

	@Test
	public void rebindAPIWithelementParameter1() throws Exception {

		if (browserVersion.contains("ie7")) {

			assertTrue(isElementPresent(By.id("addDynamicElements")));
			driver.findElement(By.id("rebind2")).click();

			final WebElement element1 = driver.findElement(By
					.id("addDynamicElements"));
			element1.click();
			driver.findElement(By.id("textbox1")).sendKeys("Dynamic element 1");
			final WebElement element2 = driver.findElement(By
					.id("addDynamicElements"));
			element2.click();
			driver.findElement(By.id("textbox2")).sendKeys("Dynamic element 2");

			final JSONObject uicObject = getUICObject("textbox1");
			assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

			final UICTest t = verifyrebindAPIWithelementParameter1(uicObject);
			assertTrue(t.getErrs(), t.getStatus());

		}
	}

	public UICTest verifyrebindAPIWithelementParameter1(
			final JSONObject uicObject) throws Exception {
		final UICTest t = new UICTest("rebindAPIWithelementParameterTest",
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
		verifyEventType(event, t, "change");

		final JSONObject target = (JSONObject) uicObject.get("target");

		verifyTargetID(target, t, "textbox1");

		final String targetType = target.getString("type");
		if (!("input").equals(targetType)) {
			t.addMsg("targetType", "input", targetType);
		}
		final String dcType = target.getString("dcType");
		if (!("textBox").equals(dcType)) {
			t.addMsg("targetType", "textBox", dcType);
		}

		verifySubType(target, t, "text");

		verifyTargetName(target, t, "textbox1");

		final JSONObject position = (JSONObject) target.get("position");

		verifyPosHeight(position, t, 21);
		verifyPosWidth(position, t, 145);

		verifyRelXY(position, t, "0.5,0.5");

		verifyCurrState(target, t, "Dynamic element 1");

		verifyPrevState(target, t, "Dynamic element 1");

		verifyVisitedCount(target, t, 1);

		return t;
	}

	// DCX.flushAll API test
	@Test
	public void flushAllAPI() throws Exception {

		assertTrue(isElementPresent(By.id("abcd")));

		driver.findElement(By.id("abcd")).clear();
		driver.findElement(By.id("abcd")).sendKeys(
				"Text entered before DCX.flushAll ");

		final WebElement element = driver.findElement(By.id("flushAll"));
		element.click();

		driver.findElement(By.id("abcd")).sendKeys(
				"& Text entered after DCX.flushAll");
		final WebElement continuebutton = driver.findElement(By.id("bi"));
		continuebutton.click();

		final JSONObject uicObject = getUICObject("abcd");
		assertNotNull("UIC," + browser + ",uicObject,NULL", uicObject);

		final UICTest t = verifyflushAllAPI(uicObject);
		assertTrue(t.getErrs(), t.getStatus());

	}

	public UICTest verifyflushAllAPI(final JSONObject uicObject)
			throws Exception {
		final UICTest t = new UICTest("flushAllAPITest", browser);

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

		verifyTargetID(target, t, "abcd");

		final String targetType = target.getString("type");
		if (!("input").equals(targetType)) {
			t.addMsg("targetType", "input", targetType);
		}
		final String dcType = target.getString("dcType");
		if (!("textBox").equals(dcType)) {
			t.addMsg("targetType", "textBox", dcType);
		}

		verifySubType(target, t, "text");

		verifyTargetName(target, t, "");

		final JSONObject position = (JSONObject) target.get("position");

		verifyPosHeight(position, t, 18);
		verifyPosWidth(position, t, 153);

		verifyCurrState(target, t,
				"Text entered before DCX.flushAll & Text entered after DCX.flushAll");

		verifyPrevState(target, t, "Text entered before DCX.flushAll ");

		verifyVisitedCount(target, t, 1);

		return t;
	}

	// DCX.registerBridgeCallbacks and DCX.logScreenCapture API test
	@Test
	public void enableLogScreenCaptureAPI() throws Exception {

		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_screenshot_enable")));

		final WebElement enablescreenshot = driver.findElement(By
				.id("registerBridgeCallbacks_screenshot_enable"));
		enablescreenshot.click();

		final WebElement logscreenshot = driver.findElement(By
				.id("log_screenshot"));
		logscreenshot.click();

		// Validate the value "Bridge is working"
		final String expectedValue = "Bridge is working";
		final String actualValue = driver.findElement(By.id("message"))
				.getAttribute("value");
		System.out.println(actualValue);

		final UICTest t = new UICTest("EnableLogScreenCaptureAPI", browser);
		verifyActualValueEqualsExpected(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void disableLogScreenCaptureAPI() throws Exception {

		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_screenshot_disable")));

		final WebElement enablescreenshot = driver.findElement(By
				.id("registerBridgeCallbacks_screenshot_disable"));
		enablescreenshot.click();

		final WebElement logscreenshot = driver.findElement(By
				.id("log_screenshot"));
		logscreenshot.click();

		// Validate the value "Bridge is working"
		final String expectedValue = "";
		final String actualValue = driver.findElement(By.id("message"))
				.getText();
		System.out.println(actualValue);

		final UICTest t = new UICTest("DisableLogScreenCaptureAPI", browser);
		verifyExpectedValue(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void enableRegisterBridgeCallbacksAPI() throws Exception {

		assertTrue(isElementPresent(By.id("registerBridgeCallbacks_enable")));

		final WebElement enablescreenshot = driver.findElement(By
				.id("registerBridgeCallbacks_enable"));
		enablescreenshot.click();

		final WebElement logscreenshot = driver.findElement(By
				.id("log_screenshot"));
		logscreenshot.click();

		// Validate the value "Bridge is working"
		final String expectedValue = "Bridge is working";
		final String actualValue = driver.findElement(By.id("message"))
				.getAttribute("value");
		System.out.println(actualValue);

		final UICTest t = new UICTest("EnableLogScreenCaptureAPI", browser);
		verifyActualValueEqualsExpected(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void disableRegisterBridgeCallbacksAPI() throws Exception {

		assertTrue(isElementPresent(By.id("registerBridgeCallbacks_disable")));

		final WebElement enablescreenshot = driver.findElement(By
				.id("registerBridgeCallbacks_disable"));
		enablescreenshot.click();

		final WebElement logscreenshot = driver.findElement(By
				.id("log_screenshot"));
		logscreenshot.click();

		// Validate the value "Bridge is working"
		final String expectedValue = "";
		final String actualValue = driver.findElement(By.id("message"))
				.getText();
		System.out.println(actualValue);

		final UICTest t = new UICTest("DisableLogScreenCaptureAPI", browser);
		verifyExpectedValue(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void enableRegisterBridgeCallbacksandScreenshotAPI1()
			throws Exception {

		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_messageredir_screenshot_enable")));

		final WebElement enablescreenshot = driver.findElement(By
				.id("registerBridgeCallbacks_messageredir_screenshot_enable"));
		enablescreenshot.click();

		final WebElement logscreenshot = driver.findElement(By
				.id("log_screenshot"));
		logscreenshot.click();

		// Validate logscreenshot APLI is working"
		final String expectedValue = "Bridge is working";
		final String actualValue = driver.findElement(By.id("message"))
				.getAttribute("value");
		System.out.println(actualValue);

		final UICTest t = new UICTest("EnableLogScreenCaptureAPI", browser);
		verifyActualValueEqualsExpected(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void enableRegisterBridgeCallbacksandScreenshotAPI2()
			throws Exception {

		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_messageredir_screenshot_enable")));

		final WebElement enablescreenshot = driver.findElement(By
				.id("registerBridgeCallbacks_messageredir_screenshot_enable"));
		enablescreenshot.click();

		final WebElement anyElement = driver.findElement(By
				.id("processDOMEvent1"));
		anyElement.click();

		// Validate the value "Bridge is working"
		final String expectedValue = "Bridge is working";
		final String actualValue = driver.findElement(By.id("message"))
				.getAttribute("value");
		System.out.println(actualValue);

		final UICTest t = new UICTest("EnableLogScreenCaptureAPI", browser);
		verifyActualValueEqualsExpected(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void disableRegisterBridgeCallbacksandScreenshotAPI1()
			throws Exception {

		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_messageredir_screenshot_disable")));

		final WebElement enablescreenshot = driver.findElement(By
				.id("registerBridgeCallbacks_messageredir_screenshot_disable"));
		enablescreenshot.click();

		final WebElement logscreenshot = driver.findElement(By
				.id("log_screenshot"));
		logscreenshot.click();

		// Validate the value "Bridge is working"
		final String expectedValue = "";
		final String actualValue = driver.findElement(By.id("message"))
				.getAttribute("value");
		System.out.println(actualValue);

		final UICTest t = new UICTest("DisableLogScreenCaptureAPI", browser);
		verifyExpectedValue(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void disableRegisterBridgeCallbacksandScreenshotAPI2()
			throws Exception {

		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_messageredir_screenshot_disable")));

		final WebElement enablescreenshot = driver.findElement(By
				.id("registerBridgeCallbacks_messageredir_screenshot_disable"));
		enablescreenshot.click();

		final WebElement anyElement = driver.findElement(By
				.id("processDOMEvent1"));
		anyElement.click();

		// Validate the value "Bridge is working"
		final String expectedValue = "";
		final String actualValue = driver.findElement(By.id("message"))
				.getAttribute("value");
		System.out.println(actualValue);

		final UICTest t = new UICTest("DisableLogScreenCaptureAPI", browser);
		verifyExpectedValue(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	// DCX.registerBridgeCallbacks for addRequestHeaders API
	@Test
	public void addRequestHeaders() throws Exception {

		String actualValue = "";
		final String expectedValue = "X-Discover-counter -> Discover";
		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_addRequestHeaders_enable")));

		final WebElement element = driver.findElement(By
				.id("registerBridgeCallbacks_addRequestHeaders_enable"));
		element.click();

		final String readHeaderValue = driver.findElement(
				By.id("requestheaders")).getText();
		final String[] array = readHeaderValue.split("\n");

		boolean found0 = false;
		int len = array.length;
		int k = 0;
		
			
			while ((k < len) && ! (array[k].contains("X-Discover-counter -> Discover"))) {
				System.out.println(array[k].toString());
				found0 = false;
				k++;

			}

			found0 = true;

		
		if (found0) {
			actualValue = "X-Discover-counter -> Discover";
			System.out.println("actual value found :" + actualValue);

		} else {
			actualValue = "Headers Not Found";
			System.out.println("actual value found :" + actualValue);
		}

		final UICTest t = new UICTest("addRequestHeaders", browser);
		verifyRequestHeader(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void addSpecialCharectersInRequestHeaders() throws Exception {

		String actualValue = "";
		final String expectedValue = "X-Special-Char -> $'***";
		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_addRequestHeaders_enable_specialchar")));

		final WebElement element = driver
				.findElement(By
						.id("registerBridgeCallbacks_addRequestHeaders_enable_specialchar"));
		element.click();

		final String readHeaderValue = driver.findElement(
				By.id("requestheaders")).getText();
		final String[] array = readHeaderValue.split("\n");

		
		boolean found0 = false;
		int len = array.length;
		int k = 0;
		
			
			while ((k < len) && ! (array[k].contains("X-Special-Char -> $'***"))) {
				System.out.println(array[k].toString());
				found0 = false;
				k++;

			}

			found0 = true;
		
		
		if (found0) {
			actualValue = "X-Special-Char -> $'***";
			System.out.println("actual value found :" + actualValue);

		} else {
			actualValue = "Headers Not Found";
			System.out.println("actual value found :" + actualValue);
		}

		final UICTest t = new UICTest("addSpecialCharectersInRequestHeaders",
				browser);
		verifyRequestHeader(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void addEmptyRequestHeaders() throws Exception {

		String actualValue = "";
		final String expectedValue = "Headers Not Found";
		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_addRequestHeaders_enable_empty")));

		final WebElement element = driver.findElement(By
				.id("registerBridgeCallbacks_addRequestHeaders_enable_empty"));
		element.click();

		final String readHeaderValue = driver.findElement(
				By.id("requestheaders")).getText();
		final String[] array = readHeaderValue.split("\n");
		
		
		boolean found0 = false;
		int len = array.length;
		int k = 0;
		
			
			while ((k < len) && (array[k].contains("x-tealleaf1 -> value1")
					&& array[k].contains("x-tealleaf2 -> value2")
					&& array[k].contains("duplicate -> value2")
					&& array[k].contains("X-Discover-counter -> Discover"))) {
				System.out.println(array[k].toString());
				found0 = true;
				k++;

			}

			found0 = false;
		
		
		if (found0) {
			actualValue = "Headers Found";

		} else {
			actualValue = "Headers Not Found";
		}

		final UICTest t = new UICTest("addEmptyRequestHeaders", browser);
		verifyRequestHeader(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void addDuplicateRequestHeaders() throws Exception {

		String actualValue = "";
		final String expectedValue = "duplicate -> value2";
		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_addRequestHeaders_enable_duplicate")));

		final WebElement element = driver
				.findElement(By
						.id("registerBridgeCallbacks_addRequestHeaders_enable_duplicate"));
		element.click();

		final String readHeaderValue = driver.findElement(
				By.id("requestheaders")).getText();
		final String[] array = readHeaderValue.split("\n");

		
		boolean found0 = false;
		int len = array.length;
		int k = 0;
		
			
			while ((k < len) && ! (array[k].contains("duplicate -> value2"))) {
				System.out.println(array[k].toString());
				found0 = false;
				k++;

			}

			found0 = true;
		
		
		if (found0) {
			actualValue = "duplicate -> value2";
			System.out.println("actual value found :" + actualValue);

		} else {
			actualValue = "Headers Not Found";
			System.out.println("actual value found :" + actualValue);
		}

		final UICTest t = new UICTest("addDuplicateRequestHeaders", browser);
		verifyRequestHeader(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void addDisableRequestHeaders() throws Exception {

		String actualValue = "";
		final String expectedValue = "Header Not Found";
		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_addRequestHeaders_disable")));

		final WebElement element = driver.findElement(By
				.id("registerBridgeCallbacks_addRequestHeaders_disable"));
		element.click();

		final String readHeaderValue = driver.findElement(
				By.id("requestheaders")).getText();
		final String[] array = readHeaderValue.split("\n");

		boolean found0 = false;
		int len = array.length;
		int k = 0;
		
			
			while ((k < len) && (array[k].contains("x-tealleaf1 -> value1")
					&& array[k].contains("x-tealleaf2 -> value2")
					&& array[k].contains("duplicate -> value2")
					&& array[k].contains("X-Discover-counter -> Discover"))) {
				System.out.println(array[k].toString());
				found0 = true;
				k++;

			}

			found0 = false;	
		
		if (found0) {
			actualValue = "Headers Found";

		} else {
			actualValue = "Header Not Found";
		}

		final UICTest t = new UICTest("addDisableRequestHeaders", browser);
		verifyRequestHeader(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void addMultipleRequestHeaders() throws Exception {

		String actualValue = "";
		final String expectedValue = "x-tealleaf1 -> value1x-tealleaf2 -> value2";
		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_addRequestHeaders_enable_multiple")));

		final WebElement element = driver
				.findElement(By
						.id("registerBridgeCallbacks_addRequestHeaders_enable_multiple"));
		element.click();

		final String readHeaderValue = driver.findElement(
				By.id("requestheaders")).getText();
		final String[] array = readHeaderValue.split("\n");
		boolean found0 = false;
		int len = array.length;
		for (int k = 0; k < len; k++) {
			if (array[k].contains("x-tealleaf1 -> value1")
					&& array[k].contains("x-tealleaf2 -> value2")) {
				found0 = true;

			}

			else {
				found0 = false;
			}

		}
		if (found0) {
			actualValue = "Header Not Found";
		} else {
			actualValue = "x-tealleaf1 -> value1x-tealleaf2 -> value2";
		}
		final UICTest t = new UICTest("addMultipleRequestHeaders", browser);
		verifyRequestHeader(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

	// DCX.logDOMCapture API
	@Test
	public void log_DOMCapture_With_Only_RemoveScript_Option_True()
			throws Exception {

		assertTrue(isElementPresent(By.id("only_removeScriptOptionAsParameter")));
		final WebElement element = driver.findElement(By
				.id("only_removeScriptOptionAsParameter"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final String dcid = driver.findElement(By.id("uniqueID")).getAttribute(
				"value");

		final UICTest t = new UICTest(
				"DOMcapture_with_only_removeScriptOptionAsParameter", browser);
		verifygenerationOfdcid(t, dcid);
		assertTrue(t.getErrs(), t.getStatus());

	}

	@Test
	public void log_DOMCapture_With_Only_CaptureFrames_Option_True()
			throws Exception {

		assertTrue(isElementPresent(By
				.id("only_captureFramestOptionAsParameter")));
		final WebElement element = driver.findElement(By
				.id("only_captureFramestOptionAsParameter"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final String dcid = driver.findElement(By.id("uniqueID")).getAttribute(
				"value");

		final UICTest t = new UICTest(
				"DOMcapture_with_only_CaptureFramesAsParameter", browser);
		verifygenerationOfdcid(t, dcid);
		assertTrue(t.getErrs(), t.getStatus());

	}

	@Test
	public void log_DOMCapture_With_No_Parameters() throws Exception {

		assertTrue(isElementPresent(By.id("withNoParameter")));
		final WebElement element = driver.findElement(By.id("withNoParameter"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final String dcid = driver.findElement(By.id("uniqueID")).getAttribute(
				"value");

		final UICTest t = new UICTest("DOMcapture_with_only_NoParameter",
				browser);
		verifygenerationOfdcid(t, dcid);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void log_DOMCapture_With_DOM_element_and_RemoveScript_Option()
			throws Exception {

		assertTrue(isElementPresent(By
				.id("dom_element_removeScriptOptionAsParameter")));
		final WebElement element = driver.findElement(By
				.id("dom_element_removeScriptOptionAsParameter"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final String dcid = driver.findElement(By.id("uniqueID")).getAttribute(
				"value");

		final UICTest t = new UICTest(
				"DOMcapture_with_DOM_element_and_RemoveScript_Option", browser);
		verifygenerationOfdcid(t, dcid);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void log_DOMCapture_With_DOM_element_and_CaptureFrames_Option()
			throws Exception {

		assertTrue(isElementPresent(By
				.id("dom_element_captureFramesOptionAsParameter")));
		final WebElement element = driver.findElement(By
				.id("dom_element_captureFramesOptionAsParameter"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final String dcid = driver.findElement(By.id("uniqueID")).getAttribute(
				"value");

		final UICTest t = new UICTest(
				"DOMcapture_with_DOM_element_and_CaptureFrames_Option", browser);
		verifygenerationOfdcid(t, dcid);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void log_DOMCapture_With_default_DOM_element_and_CaptureFrames_Option()
			throws Exception {

		assertTrue(isElementPresent(By
				.id("root_element_captureFramesOptionAsParameter")));
		final WebElement element = driver.findElement(By
				.id("root_element_captureFramesOptionAsParameter"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final String dcid = driver.findElement(By.id("uniqueID")).getAttribute(
				"value");

		final UICTest t = new UICTest(
				"DOMcapture_with_root_element_captureFramesOptionAsParameter",
				browser);
		verifygenerationOfdcid(t, dcid);
		assertTrue(t.getErrs(), t.getStatus());
	}

	@Test
	public void log_DOMCapture_With_default_DOM_element_and_RemoveScript_Option()
			throws Exception {

		assertTrue(isElementPresent(By
				.id("root_element_removeScriptOptionAsParameter")));
		final WebElement element = driver.findElement(By
				.id("root_element_removeScriptOptionAsParameter"));
		element.click();
		driver.findElement(By.id("bi")).click();

		final String dcid = driver.findElement(By.id("uniqueID")).getAttribute(
				"value");

		final UICTest t = new UICTest(
				"DOMcapture_with_root_element_removeScriptOptionAsParameter",
				browser);
		verifygenerationOfdcid(t, dcid);
		assertTrue(t.getErrs(), t.getStatus());
	}

	// Request headers for SAAS
	@Test
	public void addSAASRequestHeaders() throws Exception {

		String actualValue = "";
		final String expectedValue = "X-Discover-MessageTypes -> 1,2,4,5,6";
		assertTrue(isElementPresent(By
				.id("registerBridgeCallbacks_addRequestHeaders_enable_specialchar")));

		final WebElement element1 = driver.findElement(By
				.id("logExceptionEvent2"));
		element1.click();

		final WebElement element2 = driver
				.findElement(By.id("logCustomEvent1"));
		element2.click();

		final WebElement element3 = driver.findElement(By
				.id("registerBridgeCallbacks_addRequestHeaders_enable"));
		element3.click();

		driver.findElement(By.id("bi")).click();

		final String readHeaderValue = driver.findElement(
				By.id("requestheaders")).getText();
		final String[] array = readHeaderValue.split("\n");

		boolean found0 = false;
		int len = array.length;
		for (int k = 0; k < len; k++) {
			if (array[k].contains("X-Discover-MessageTypes -> 1,2,4,5,6")) {
				found0 = true;

			}

			else {
				found0 = false;
			}

		}
		if (found0) {
			actualValue = "SAAS Header Not Found";

		} else {

			actualValue = "X-Discover-MessageTypes -> 1,2,4,5,6";
		}

		final UICTest t = new UICTest("addSpecialCharectersInRequestHeaders",
				browser);
		verifyRequestHeader(t, actualValue, expectedValue);
		assertTrue(t.getErrs(), t.getStatus());
	}

}
