package com.tl;

import java.util.Iterator;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

@RunWith(Parameterized.class)
public class UICInit extends TestBase {

    private final JavascriptExecutor js;
    private Integer browserVersionIE = null;
    private String changeTarget = null;
    private final String fcnStrPre = "(function () {\r\n var changeTarget;\r\n"
            + "\"use strict\";\r\n" + "window.DCX.init(";
    private final String fcnStrPost = ");\r\n" + "}());";
    private String defaultInitStr = null;
    private String completeDefaultInit = null;
    private Boolean uicInitCalled = false;
    static final Integer jsCoverTimeout = 20;
    final String coverageStoredText = "Coverage data stored at intermediate\\testresults\\jscoverresults";

    /**
     * Test base for Selenium tests.
     * 
     * @param browser Browser that will perform test.
     * @param website Site that will be used for testing.
     * @param testPage Page on site that will be used for testing.
     * @param initialId Element id to check that page loaded properly.
     * @param browsersToIgnore Comma delimited list of browsers to ignore for
     *            tests.
     */
    public UICInit(final String browser, final String website,
            final String testPage, final String initialId,
            final String browsersToIgnore, final Boolean jsCoverEnabled) {
        super(browser, website, testPage, initialId, browsersToIgnore,
                jsCoverEnabled);
        this.js = (JavascriptExecutor) driver;
    }

    @Override
    @Before
    public void setUp() {
        super.setUp();
        uicInit();
    }

    @Override
    @After
    public void tearDown() throws Exception {
        if (this.jsCoverEnabled && this.jsCoverEnabledBuild.equals("true")) {
            this.js.executeScript("jscoverage_report()");
            super.tearDown();
        } else {
            super.tearDown();
        }
    }

    /**
     * Sets the changeTarget variable for certain IE users.
     * 
     * @param driver The current webDriver in use
     * @return string value of changeTarget
     */
    public final String setChangeTarget(final WebDriver driver) {
        if (browser.contains("IE")) {
            this.browserVersionIE = Integer.parseInt(browser.replace("IE", ""));
            if (this.browserVersionIE < 9) {
                this.changeTarget = "\"input, select, textarea, button\"";
            } else {
                this.changeTarget = "changeTarget";
            }
        } else {
            this.changeTarget = "changeTarget";
        }
        return this.changeTarget;
    }

    /**
     * Builds the default initiation JSON object from the default initiation
     * string.
     * 
     * @throws JSONException
     * @return default initiation JSON object
     */
    public final JSONObject buildDefaultInit() throws JSONException {
        this.defaultInitStr = "{\r\n"
                + "        core: {\r\n"
                + "            moduleBase: 'intermediate/modules/',\r\n"
                + "            modules: {\r\n"
                + "                // WARNING: For advanced users only. Modifying this section may lead to unexpected behavior and or performance issues.\r\n"
                + "                performance: {\r\n"
                + "                    events: [\r\n"
                + "                        { name: \"load\", target: window },\r\n"
                + "                        { name: \"unload\", target: window }\r\n"
                + "                    ]\r\n" + "                },\r\n"
                + "                replay: {\r\n"
                + "                    events: [\r\n"
                + "                        { name: \"change\", target: "
                + setChangeTarget(driver)
                + ", recurseFrames: true },\r\n"
                + "                        { name: \"click\", recurseFrames: true },\r\n"
                + "                        { name: \"hashchange\", target: window },\r\n"
                + "                        { name: \"focus\", target: \"input, select, textarea, button\", recurseFrames: true },\r\n"
                //+ "                        { name: \"blur\", target: \"input, select, textarea, button\", recurseFrames: true },\r\n"
                + "                        { name: \"load\", target: window},\r\n"
                + "                        { name: \"unload\", target: window},\r\n"
                + "                        { name: \"resize\", target: window},\r\n"
                + "                        { name: \"scroll\", target: window},\r\n"
                + "                        { name: \"orientationchange\", target: window},\r\n"
                + "                        { name: \"touchstart\" },\r\n"
                + "                        { name: \"touchmove\" },\r\n"
                + "                        { name: \"touchend\" }\r\n"
                + "                    ]\r\n"
                + "                }\r\n"
                + "            },\r\n"
                + "            // Set the sessionDataEnabled flag to true only if it's OK to expose Discover session data to 3rd party scripts.\r\n"
                + "            sessionDataEnabled: false,\r\n"
                + "            sessionData: {\r\n"
                + "                // Set this flag if the session value needs to be hashed to derive the Discover session ID\r\n"
                + "                sessionValueNeedsHashing: true,\r\n"
                + "\r\n"
                + "                // Specify sessionQueryName only if the session id is derived from a query parameter.\r\n"
                + "                sessionQueryName: \"sessionID\",\r\n"
                + "                sessionQueryDelim: \";\",\r\n"
                + "\r\n"
                + "                // sessionQueryName, if specified, takes precedence over sessionCookieName.\r\n"
                + "                sessionCookieName: \"jsessionid\"\r\n"
                + "            },\r\n"
                + "            // list of ignored frames pointed by css selector (top level only)\r\n"
                + "            framesBlacklist: [\r\n"
                + "                \"#iframe1\"\r\n"
                + "            ]\r\n"
                + "        },\r\n"
                + "        services: {\r\n"
                + "            queue: {\r\n"
                + "            // WARNING: Enabling asynchronous request on unload may result in incomplete or missing data\r\n"
                + "                    asyncReqOnUnload: false,\r\n"
                + "                    queues: [\r\n"
                + "                       {\r\n"
                + "                    qid: \"DEFAULT\",\r\n"
                + "                    endpoint: \"/DiscoverUIPost.php\",\r\n"
                + "                    maxEvents: 50,\r\n"
                + "                    serializer: \"json\"\r\n"
                + "                       }\r\n"
                + "                    ]\r\n"
                + "            },\r\n"
                + "            message: {\r\n"
                + "                privacy: [\r\n"
                + "                    {\r\n"
                + "                        targets: [\r\n"
                + "                            // CSS Selector: All password input fields\r\n"
                + "                            \"input[type=password]\"\r\n"
                + "                        ],\r\n"
                + "                        \"maskType\": 3\r\n"
                + "                    }\r\n"
                + "                ]\r\n"
                + "            },\r\n"
                + "            serializer: {\r\n"
                + "                json: {\r\n"
                + "                    defaultToBuiltin: true,\r\n"
                + "                    parsers: [ \"JSON.parse\" ],\r\n"
                + "                    stringifiers: [ \"JSON.stringify\" ]\r\n"
                + "                }\r\n"
                + "            },\r\n"
                + "            browser: {\r\n"
                + "                sizzleObject: \"window.Sizzle\",\r\n"
                + "                jQueryObject: \"window.jQuery\",\r\n"
				+ "                blacklist: [\"blacklisted\",{\"regex\": \"Test*\"}]\r\n"
                + "            }\r\n"
                + "        },\r\n"
                + "        modules: {\r\n"
                + "            performance: {\r\n"
                + "                calculateRenderTime: true,\r\n"
                + "                filter: {\r\n"
                + "                    navigationStart: true,\r\n"
                + "                    unloadEventStart: true,\r\n"
                + "                    unloadEventEnd: true,\r\n"
                + "                    redirectStart: true,\r\n"
                + "                    redirectEnd: true,\r\n"
                + "                    fetchStart: true,\r\n"
                + "                    domainLookupStart: true,\r\n"
                + "                    domainLookupEnd: true,\r\n"
                + "                    connectStart: true,\r\n"
                + "                    connectEnd: true,\r\n"
                + "                    secureConnectionStart: true,\r\n"
                + "                    requestStart: true,\r\n"
                + "                    responseStart: true,\r\n"
                + "                    responseEnd: true,\r\n"
                + "                    domLoading: true,\r\n"
                + "                    domInteractive: true,\r\n"
                + "                    domContentLoadedEventStart: true,\r\n"
                + "                    domContentLoadedEventEnd: true,\r\n"
                + "                    domComplete: true,\r\n"
                + "                    loadEventStart: true,\r\n"
                + "                    loadEventEnd: true\r\n"
                + "                }\r\n"
                + "            }\r\n"
                + "        }\r\n" + "    }";
        final JSONObject defaultInit = new JSONObject(this.defaultInitStr);
        return defaultInit;
    }

    /**
     * Initializes current test window by calling the default JSON object.
     * 
     * 
     * @throws JSONException
     */
    public final void uicInit() {
        if (!this.uicInitCalled) {
            try {
                final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
                this.completeDefaultInit = this.fcnStrPre
                        + buildDefaultInit().toString() + this.fcnStrPost;
                this.completeDefaultInit = this.completeDefaultInit.replaceAll(
                        "\"(?=changeTarget)|(?<=changeTarget)\"", "");
                javascriptExecutor.executeScript(this.completeDefaultInit);
                //javascriptExecutor.executeScript("alert('test')");
                this.uicInitCalled = true;
            } catch (final Exception e) {
                System.out.println(e.getMessage());
            }
        } else {
            driver.quit();
            this.uicInitCalled = false;

            int hasLoadTries = 0;
            final int numOfTries = Integer.parseInt(properties
                    .getProperty("numOfTries"));
            while (hasLoadTries < numOfTries) {
                if (loadBrowser()) {
                    hasLoadTries = numOfTries;
                } else {
                    hasLoadTries++;
                }
            }

            try {
                this.setUp();
            } catch (final Exception e) {
                System.out.print(e.toString());
            }
        }
    }

    /**
     * Initializes the current test window by merging the supplied JSON object
     * with the default JSON object if merge is true Otherwise initializes the
     * current test window with the supplied JSON object.
     * 
     * @param json JSON object to be merged or used as the initialization object
     *            based on the value of merge
     * @param merge <code>true</code> supplied json object to be merged and
     *            resultant object used for initialization <code>false</code>
     *            supplied json object to be used as initialization object
     * 
     */
    public final void uicInit(final JSONObject json, final Boolean merge) {
        if (!this.uicInitCalled) {
            if (!merge) {
                final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
                javascriptExecutor.executeScript(this.fcnStrPre + json
                        + this.fcnStrPost);
            } else {
                final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
                try {
                    this.completeDefaultInit = this.fcnStrPre
                            + buildDefaultInit().toString() + this.fcnStrPost;
                    this.completeDefaultInit = this.completeDefaultInit
                            .replaceAll(
                                    "\"(?=changeTarget)|(?<=changeTarget)\"",
                                    "");
                    javascriptExecutor.executeScript(this.completeDefaultInit);
                } catch (final JSONException e) {
                    System.out.print(e.toString());
                }
            }
            this.uicInitCalled = true;
        } else {
            driver.quit();
            this.uicInitCalled = false;
            int hasLoadTries = 0;
            final int numOfTries = Integer.parseInt(properties
                    .getProperty("numOfTries"));
            while (hasLoadTries < numOfTries) {
                if (loadBrowser()) {
                    hasLoadTries = numOfTries;
                } else {
                    hasLoadTries++;
                }
            }

            try {
                super.setUp();
            } catch (final Exception e) {
                System.out.print(e.toString());
            }
            uicInit(json, merge);
        }
    }
    
    /**
     * Initializes current test window by executing the command string.
     @param jCommand  string of config to complete the initialization function
     * 
     */
    public final void uicInit(final String jCommand) {
        if (!this.uicInitCalled) {
            try {
                final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
                javascriptExecutor.executeScript(this.fcnStrPre + jCommand + this.fcnStrPost);
                this.uicInitCalled = true;
            } catch (final Exception e) {
                System.out.println(e.getMessage());
            }
        } else {
            driver.quit();
            this.uicInitCalled = false;

            int hasLoadTries = 0;
            final int numOfTries = Integer.parseInt(properties
                    .getProperty("numOfTries"));
            while (hasLoadTries < numOfTries) {
                if (loadBrowser()) {
                    hasLoadTries = numOfTries;
                } else {
                    hasLoadTries++;
                }
            }

            try {
                this.setUp();
            } catch (final Exception e) {
                System.out.print(e.toString());
            }
        }
    }

    /**
     * merges json into defaultJson by recursively using the JSONObject get
     * function and using the JSONObject put function when a string or JSONArray
     * is reached.
     * 
     * @param <E>
     * 
     * @param json JSONObject to be merged
     * @param defaultJson JSONObject that json will merge to
     * @return merged JSONObject
     * @throws JSONException
     */
    public static <E> JSONObject merge(final JSONObject json,
            final JSONObject defaultJson) throws JSONException {
        @SuppressWarnings("unchecked")
        final Iterator<E> keys = json.keys();
        while (keys.hasNext()) {
            final String currentKey = keys.next().toString();
            if (json.get(currentKey) instanceof JSONObject) {
                merge((JSONObject) json.get(currentKey),
                        (JSONObject) defaultJson.get(currentKey));
            } else {
                defaultJson.put(currentKey, json.get(currentKey));
            }
        }
        return defaultJson;
    }
}
