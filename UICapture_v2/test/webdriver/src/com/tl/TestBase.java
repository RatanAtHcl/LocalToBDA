package com.tl;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;
import io.appium.java_client.remote.MobileCapabilityType;
import io.selendroid.SelendroidConfiguration;
import io.selendroid.SelendroidDriver;
import io.selendroid.SelendroidLauncher;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.json.JSONObject;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assume;
import org.junit.Before;
import org.junit.Rule;
import org.junit.rules.TestName;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;

import com.google.common.base.Function;

@RunWith(Parameterized.class)
public class TestBase {
    private Integer fillQueueTries = 0;
    protected String currBrowser = null;
    protected boolean getPageCalled = false;
    protected static WebDriver driver;
    private static volatile SelendroidLauncher selendroidServer = null;
    private static Process appium;
    protected String platformVersion;
    protected String browserName;
    protected String deviceName;
    protected String deviceOS;
    protected String testBaseUrl;
    protected String testUrl;
    protected String testWebsite;
    protected String testPage;
    protected Boolean jsCoverEnabled;
    protected String jsCoverEnabledBuild;
    protected StringBuffer verificationErrors = new StringBuffer();
    protected static String browser;
    protected static String browserVersion;
    protected Integer DWELL_TIME = 3000;
    protected static Properties properties;
    protected String testBrowser;
    protected String force32BitMode;
    protected boolean quirksMode;
    protected boolean legacy;
    static final Integer ie11 = 11;
    static final Integer ie10 = 10;
    static final Integer ie9 = 9;
    static final Integer ie8 = 8;
    static final Integer ie7 = 7;
    static final Integer ieQuirksMode = 5;
    static final Integer TIMEOUT = 20;
    static final long timeOutBrowserLoad = 5;
    protected static String _initialId;
    protected static String _browsersToIgnore;
    private static File myProperties = new File(
            "../../tools/config/my.properties");
    private static final long timeoutBrowserLoad = 15;

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
    public TestBase(final String browser, final String website,
            final String testPage, final String initialId,
            final String browsersToIgnore, final Boolean jsCoverEnabled) {
        super();
        this.jsCoverEnabledBuild = properties.getProperty("jscoverEnabled");
        this.jsCoverEnabled = jsCoverEnabled;
        this.testBrowser = browser;
        this.testPage = testPage;
        this.testBaseUrl = properties.getProperty("testUrl");
        this.testUrl = this.testBaseUrl + "/" + website + "/" + this.testPage;
        this.testWebsite = this.testBaseUrl.replace(":80", "") + "/" + website;

        if (this.jsCoverEnabled && this.jsCoverEnabledBuild.equals("true")) {
            this.testWebsite = properties.getProperty("hostJSCover") + "/"
                    + website;
            this.testUrl = properties.getProperty("hostJSCover") + "/"
                    + website + "/" + this.testPage;
        }

        _initialId = initialId;
        _browsersToIgnore = browsersToIgnore;

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
    }

    /**
     * Loads driver based on browser.
     * 
     * @return Whether it was able to load the driver.
     */
    public final Boolean loadBrowser() {
        Boolean hasLoaded = false;
        driver = null;
        final String path = getDriverPath();

        if (this.testBrowser.equals("firefox")) {

        	boolean is64bit = false;
        	try {
                String firefoxDriverName = "geckodriver";
                if (("WIN").equals(getOS())) {
                	firefoxDriverName += ".exe";
                }
                
                this.force32BitMode = properties.getProperty("force32BitMode");
                if (this.force32BitMode == null || this.force32BitMode.isEmpty()) {
                    this.force32BitMode = "false";
                }
                if (System.getProperty("os.name").contains("Windows")) {
                    is64bit = (System.getenv("ProgramFiles(x86)") != null);
                    if (is64bit && !this.force32BitMode.equals("true")) {
                    	firefoxDriverName = "x64\\"+firefoxDriverName;
                    } else {
                    	firefoxDriverName = "x86\\"+firefoxDriverName;
                    }
                } else {
                    is64bit = (System.getProperty("os.arch").indexOf("64") != -1);
                    if (is64bit && !this.force32BitMode.equals("true")) {
                    	firefoxDriverName = "x64/"+firefoxDriverName;
                    } else {
                    	firefoxDriverName = "x86/"+firefoxDriverName;
                    }
                }
                
                /*if (is64bit && !this.force32BitMode.equals("true")) {
                	firefoxDriverName = "x64\\"+firefoxDriverName;
                } else {
                	firefoxDriverName = "x86\\"+firefoxDriverName;
                }*/

                System.setProperty("webdriver.gecko.driver", path + firefoxDriverName);
                System.out.println("Set driver from :" + path + firefoxDriverName);
            	driver = new FirefoxDriver();

                hasLoaded = true;
                driver.manage().timeouts()
                        .pageLoadTimeout(timeoutBrowserLoad, TimeUnit.SECONDS);
            } catch (final Exception e) {
                System.out.println("Load browser " + this.testBrowser + " :\n"
                        + e);
            }
        } else if (this.testBrowser.contains("ie")) {
            boolean is64bit = false;
            this.force32BitMode = properties.getProperty("force32BitMode");
            if (this.force32BitMode == null || this.force32BitMode.isEmpty()) {
                this.force32BitMode = "false";
            }
            if (System.getProperty("os.name").contains("Windows")) {
                is64bit = (System.getenv("ProgramFiles(x86)") != null);
            } else {
                is64bit = (System.getProperty("os.arch").indexOf("64") != -1);
            }
            if (is64bit && !this.force32BitMode.equals("true")) {
                System.setProperty("webdriver.ie.driver", path
                        + "x64\\IEDriverServer.exe");
            } else {
                System.setProperty("webdriver.ie.driver", path
                        + "x86\\IEDriverServer.exe");
            }
            try {
                final DesiredCapabilities dc = DesiredCapabilities.internetExplorer();
                dc.setCapability("logLevel", "TRACE");
                driver = new InternetExplorerDriver(dc);
                hasLoaded = true;
                driver.manage().timeouts()
                        .pageLoadTimeout(timeoutBrowserLoad, TimeUnit.SECONDS);
            } catch (final Exception e) {
                System.out.println("Load browser " + this.testBrowser + " :\n"
                        + e);
            }
        } else if (this.testBrowser.equals("chrome")) {
            String chromeDriverName = "chromedriver";
            if (("WIN").equals(getOS())) {
                chromeDriverName += ".exe";
            }
            System.setProperty("webdriver.chrome.driver", path
                    + chromeDriverName);
            System.out.println("Set driver from :" + path + chromeDriverName);

            final DesiredCapabilities capabilities = DesiredCapabilities
                    .chrome();
            capabilities.setCapability("chrome.switches",
                    Arrays.asList("--start-maximized"));

            final ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.addArguments("test-type");
            capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
            try {
                driver = new ChromeDriver(capabilities);
                hasLoaded = true;
            } catch (final Exception e) {
                System.out.println("Load browser " + this.testBrowser + " :\n"
                        + e);
            }
        } else if (this.testBrowser.equals("safari")) {
        	Platform current = Platform.getCurrent();
            if (Platform.MAC.is(current) || Platform.WINDOWS.is(current))
            {
            
            try {
            	driver = new SafariDriver();
                hasLoaded = true;
            } catch (final Exception e) {
                System.out.println("Load browser " + this.testBrowser + " :\n"
                        + e);
            }
        }
        } else if (this.testBrowser.equals("android")) {
            /*if (selendroidServer == null) {
                synchronized (path) {
                    final SelendroidConfiguration config = new SelendroidConfiguration();
                    selendroidServer = new SelendroidLauncher(config);
                }
            }
            selendroidServer.launchSelendroid();
            try {
                final DesiredCapabilities caps = DesiredCapabilities.android();

                driver = new SelendroidDriver(caps);
                hasLoaded = true;

            } catch (final Exception e) {
                System.out.println("Load browser " + this.testBrowser + " :\n"
                        + e);
            }*/
        	try {
				appium = Runtime.getRuntime().exec("/usr/local/bin/appium");
            Thread.sleep(1000); // wait for appium to start up, not sure how to check the status
            } catch (InterruptedException e) {
				// TODO Auto-generated catch block
				System.out.println("Exception while starting up the Appium Server" + e);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
            try {
            	System.out.println("##########################");
                final DesiredCapabilities capabilities = new DesiredCapabilities();
                capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, properties.getProperty("platformName"));
        	    capabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, properties.getProperty("platformVersion"));
        	    capabilities.setCapability(MobileCapabilityType.BROWSER_NAME, properties.getProperty("browserName"));
        	    capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, properties.getProperty("deviceName"));
        	    capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, properties.getProperty("automationName"));
        	    
        	    driver = new RemoteWebDriver(new URL("http://127.0.0.1:4723/wd/hub/"), capabilities);
                hasLoaded = true;

            } catch (final Exception e) {
                System.out.println("Load browser " + this.testBrowser + " :\n"
                        + e);
            }
        }else if (this.testBrowser.equals("safariDriver")) {
            try {
				appium = Runtime.getRuntime().exec("/usr/local/bin/appium");
            Thread.sleep(1000); // wait for appium to start up, not sure how to check the status
            } catch (InterruptedException e) {
				// TODO Auto-generated catch block
				System.out.println("Exception while starting up the Appium Server" + e);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
            try {
            	System.out.println("##########################");
                final DesiredCapabilities capabilities = new DesiredCapabilities();
                capabilities.setCapability("deviceName", "iPhone 7 Plus");
                capabilities.setCapability("platformName", "iOS");
                capabilities.setCapability("browserName", "safari");
                capabilities.setCapability("automationName", "XCUITest");
                capabilities.setCapability("platformVersion", "10.3");
                capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, properties.getProperty("platformName"));
        	    capabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, properties.getProperty("platformVersion"));
        	    capabilities.setCapability(MobileCapabilityType.BROWSER_NAME, properties.getProperty("browserName"));
        	    capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, properties.getProperty("deviceName"));
        	    capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, properties.getProperty("automationName"));
        	    
        	    driver = new RemoteWebDriver(new URL("http://127.0.0.1:4723/wd/hub/"), capabilities);
        	    
                hasLoaded = true;

            } catch (final Exception e) {
                System.out.println("Load browser " + this.testBrowser + " :\n"
                        + e);
            }
        }

        return hasLoaded;
    }

    /**
     * Load keys and values from config.properties file.
     */
    public static void loadProperties() {
        properties = new Properties();
        try {
            properties.load(new FileInputStream("config.properties"));
        } catch (final Exception e) {
            System.out.println("Exception:\n" + e);
        }
        if (myProperties != null && myProperties.exists()) {
            try {
                properties.load(new FileInputStream(myProperties));
            } catch (final Exception e) {
                System.out.println("Exception:\n" + e);
            }
        } else {
            if (myProperties != null) {
                System.out.println("my.properties not found at location " + myProperties.toString());
            } else {
                System.out.println("my.properties not found at location ");
            }
        }
    }

    /**
     * Get path of Fire Bug.
     * 
     * @return Path of Fire Bug.
     */
    public final String getFireBugPath() {
        final String os = getOS();
        final File directory = new File(".");
        String path = directory.getAbsolutePath();

        if (("WIN").equals(os)) {
            path += "\\lib\\firebug\\";
        } else if (("MAC").equals(os) || ("LINUX").equals(os)) {
            path += "//lib//firebug//";
        }

        return path;
    }

    /**
     * Get driver path.
     * 
     * @return Driver path.
     */
    public final String getDriverPath() {
        final File directory = new File(".");
        String path = "";
        try {
            path = directory.getCanonicalPath();
            final String os = getOS();

            if (("WIN").equals(os)) {
                path += "\\lib\\selenium-drivers\\windows7\\";
            } else if (("MAC").equals(os)) {
                path += "/lib/selenium-drivers/mac/";
            } else if (("LINUX").equals(os)) {
                path += "//lib//selenium-drivers//linux//";
            }
        } catch (final Exception e) {
            e.printStackTrace();
        }

        return path;
    }

    /**
     * Get current operating system.
     * 
     * @return Current operating system.
     */
    public static String getOS() {
        final String os = System.getProperty("os.name").toLowerCase();

        if (os.indexOf("win") >= 0) {
            return "WIN";
        } else if (os.indexOf("mac") >= 0) {
            return "MAC";
        } else if (os.indexOf("nix") >= 0 || os.indexOf("nux") >= 0) {
            return "UNIX";
        }
        return "NONE";
    }

    /**
     * Get browser version that driver is using.
     * 
     * @param driver Browser version that driver is using.
     */
    public static String getBrowserVersion(final WebDriver driver) {
        String userAgent = "";
        String browserVersionFull = "";

        try {
            userAgent = (String) ((JavascriptExecutor) driver)
                    .executeScript("return navigator.userAgent");
        } catch (final Exception exception) {
            System.out.println("exception getting user agent "
                    + exception.getMessage());
        }
        assertNotNull("userAgent is null", userAgent);

        if (userAgent.contains("MSIE")) {
            browserVersionFull = userAgent.split(";")[1].trim().split(" ")[1];
            browserVersion = browserVersionFull.split("\\.")[0];
            browser = "IE" + browserVersion;
        } else if (userAgent.contains("Android")) {
            browser = "Selendroid";
        }  else if (userAgent.contains("iOS")) {
            browser = "safariDriver";
        }else if (userAgent.contains("Safari")) {
            final String[] arrBVersion = userAgent.split(" ");
            browserVersionFull = arrBVersion[arrBVersion.length - 1].split("/")[1];
            browserVersion = browserVersionFull.split("\\.")[0];
            browser = "Safari" + browserVersion;
        } else if (userAgent.contains("rv:11.0")) {
            browserVersionFull = userAgent.split("rv:")[1].trim();
            browserVersion = browserVersionFull.split("\\.")[0];
            browser = "IE" + browserVersion;
        } else if (userAgent.contains("Firefox")) {
            final String[] arrBVersion = userAgent.split(" ");
            browserVersionFull = arrBVersion[arrBVersion.length - 1].split("/")[1];
            browserVersion = browserVersionFull.split("\\.")[0];
            browser = "Firefox" + browserVersion;
        } else if (userAgent.contains("Chrome")) {
            final String[] arrBVersion = userAgent.split(" ");
            final String brVer = arrBVersion[arrBVersion.length - 2].split("/")[1];
            final String[] bVer = brVer.split("\\.");
            browserVersion = bVer[0];
            browser = "Chrome" + browserVersion;
        } else {
            final boolean unhandledBrowser = true;
            assertFalse("cannot handle this browser... yet", unhandledBrowser);
            browser = "Other";
            // TODO: need to add for other browsers
        }
        return browser;
    }

    /**
     * Creates the unit tests based on browsers being tested.
     * 
     * @return LinkedList of unit tests based on browsers being tested.
     */
    @Parameters(name = "{0}")
    public static LinkedList<String[]> data() {
        loadProperties();
        final LinkedList<String[]> params = new LinkedList<String[]>();
        final String browsers = properties.getProperty("browsers");
        final Integer ieVersion = Integer.parseInt(properties
                .getProperty("ieVersion"));
        final String[] tempBrowsers = browsers.split(",");
        for (int i = 0; i < tempBrowsers.length; i++) {
            if (("ie").equals(tempBrowsers[i])) {
                if (ie11.equals(ieVersion)) {
                    params.add(new String[] {"ie11"});
                }
                if (ie10.equals(ieVersion)) {
                    params.add(new String[] {"ie10"});
                }
                if (ie9.equals(ieVersion) || ie10.equals(ieVersion)) {
                    params.add(new String[] {"ie9"});
                }
                if (ie8.equals(ieVersion) || ie9.equals(ieVersion) || ie10.equals(ieVersion)) {
                    params.add(new String[] {"ie8"});
                }
                if (ie7.equals(ieVersion) || ie8.equals(ieVersion) || ie9.equals(ieVersion)
                        || ie10.equals(ieVersion)) {
                    params.add(new String[] {"ie7"});
                }
                if (ieQuirksMode.equals(ieVersion) || ie7.equals(ieVersion)
                        || ie8.equals(ieVersion) || ie9.equals(ieVersion)
                        || ie10.equals(ieVersion)) {
                    params.add(new String[] {"ieQuirksMode"});
                }
            } else {
                params.add(new String[] {tempBrowsers[i]});
            }
        }
        return params;
    }

    /**
     * Load the page on the driver.
     */
    public void getPage() {
        if (this.testBrowser.contains("ie") && !this.getPageCalled) {
            this.getPageCalled = true;
            this.testUrl = this.testUrl
                    .replace(".ht", this.testBrowser + ".ht");
        }
        System.out.println(this.testUrl);
        driver.get(this.testUrl);
    }

    @Rule
    public TestName name = new TestName();

    /**
     * Base setup which loads driver, start page and looks for default element
     * to verify it loaded correctly.
     * 
     * @throws Exception
     */
    @Before
    public void setUp() {
        this.currBrowser = this.name.getMethodName();
        this.currBrowser = this.currBrowser.substring(
                this.currBrowser.indexOf("[") + 1,
                this.currBrowser.lastIndexOf("]"));
        if (this.currBrowser.contains("ie")) {
            this.currBrowser = "ie";
        }
        if (_browsersToIgnore != null
                && _browsersToIgnore.contains(this.currBrowser)) {
            System.out
                    .println(this.name.getMethodName()
                            + " was ignored because the browser is on the ignore list.");
            Assume.assumeTrue(false);
        }
        getPage();
        getBrowserVersion(driver);
        this.quirksMode = this.testUrl.toUpperCase().contains(
                "INDEXIEQUIRKSMODE");
        this.legacy = this.testUrl.toUpperCase().contains("INDEXIE7");
        if (!(this.jsCoverEnabled && this.jsCoverEnabledBuild.equals("true"))) {
            // Waiting 300 seconds for an element to be present on the page,
            // checking
            // for its presence once every 2 seconds.
            final Wait<WebDriver> wait = new FluentWait<WebDriver>(driver)
                    .withTimeout(TIMEOUT, TimeUnit.SECONDS)
                    .pollingEvery(2, TimeUnit.SECONDS)
                    .ignoring(NoSuchElementException.class);
            try {
                final WebElement foo = wait
                        .until(new Function<WebDriver, WebElement>() {
                            @Override
                            public WebElement apply(final WebDriver driver) {
                                return driver.findElement(By.id(_initialId));
                            }
                        });
                assertNotNull(foo);
            } catch (final Exception e) {
                System.out.print(e.toString());
            }
        }
    }

    public void verifyScreenviewOffset(final JSONObject uic,
            final UICTest test, final Integer exp) throws Exception {
        final Integer screenviewOffset = uic.getInt("screenviewOffset");
        if (screenviewOffset.compareTo(exp) < 0) {
            test.addMsg("screenviewOffset", exp.toString(),
                    screenviewOffset.toString());
        }
    }

    public void verifyCount(final JSONObject uic, final UICTest test,
            final Integer exp) throws Exception {
        final Integer count = uic.getInt("count");
        if (count.compareTo(exp) < 0) {
            test.addMsg("count", exp.toString(), count.toString());
        }
    }

    public void verifyEventType(final JSONObject event, final UICTest test,
            final String exp) throws Exception {
        final String eventType = event.getString("type");
        // String expected = "";
        boolean pass = false;

        if (("click").equals(exp)) {
            if (("click").equals(eventType) || ("change").equals(eventType)) {
                pass = true;
            }
        } else {
            if (eventType.equals(exp)) {
                pass = true;
            }
        }
        if (!pass) {
            test.addMsg("eventType", exp, eventType);
        }
    }

    public void verifyTLEvent(final JSONObject event, final UICTest test,
            final String exp) throws Exception {
        final String dcEvent = event.getString("dcEvent");
        // String expected = "";
        boolean pass = false;

        if (("click").equals(exp)) {
            if (("click").equals(dcEvent) || ("change").equals(dcEvent)) {
                pass = true;
            }
        } else {
            if (dcEvent.equals(exp)) {
                pass = true;
            }
        }
        if (!pass) {
            test.addMsg("dcEventType", exp, dcEvent);
        }
    }

    public void verifyTargetID(final JSONObject target, final UICTest test,
            final String exp) throws Exception {
        String targetId = "";

        targetId = target.getString("id");
        if (!targetId.equals(exp)) {
            test.addMsg("targetId", exp, targetId);
        }
    }

    public void verifyTargetName(final JSONObject target, final UICTest test,
            final String exp) throws Exception {
        String targetName = "";

        targetName = target.getString("name");
        if (!targetName.equals(exp)) {
            test.addMsg("targetId", exp, targetName);
        }
    }

    public void verifySubType(final JSONObject target, final UICTest test,
            final String exp) throws Exception {
        String subType = "";

        subType = target.getString("subType");
        if (!subType.equals(exp)) {
            test.addMsg("subType", exp, subType);
        }
    }

    public void verifyDwell(final JSONObject target, final UICTest test,
            final Integer exp) throws Exception {
        Integer dwell = 0;

        if (!target.has("dwell")) {
            test.addMsg("dwell", "exists", "missing");
        } else {
            dwell = target.getInt("dwell");
            if (dwell < exp) {
                test.addMsg("dwell", "greater than " + exp.toString(),
                        dwell.toString());
            }
        }
    }

    public void verifyVisitedCount(final JSONObject target,
            final UICTest test, final Integer exp) throws Exception {
        Integer visCount = 0;
        if (!target.has("visitedCount")) {
            test.addMsg("visitedCount", "exists", "missing");
        } else {
            final Object value = target.get("visitedCount");
            if (value != null && value instanceof Integer) {
                visCount = (Integer) value;
            }
            if (visCount < exp) {
                test.addMsg("visitedCount", exp.toString(), visCount.toString());
            }
        }
    }

    public void verifyPosHeight(final JSONObject position, final UICTest test,
            final Integer exp) throws Exception {
        Integer height = 0;

        height = position.getInt("height");
        if (!height.equals(exp)) {
            test.addMsg("posHeight", exp.toString(), height.toString());
        }
    }

    public void verifyPosWidth(final JSONObject position, final UICTest test,
            final Integer exp) throws Exception {
        Integer width = 0;

        width = position.getInt("width");
        if (!width.equals(exp)) {
            test.addMsg("posWidth", exp.toString(), width.toString());
        }
    }

    public void verifyRelXY(final JSONObject position, final UICTest test,
            final String exp) throws Exception {
        String relXY = "";
        /*
         * Iterator itr = position.keys(); while(itr.hasNext()) { Object element
         * = itr.next(); System.out.print(element + " \n"); }
         */
        // verifyRelXY(position,t,"0.5,0.5");
        if (!position.has("relXY")) {
            test.addMsg("relXY", exp, "missing");
        } else {
            relXY = position.getString("relXY");
            if (!relXY.equals(exp)) {
                final String[] xy = relXY.split(",");
                if (!testXYRange(xy[0]) && !testXYRange(xy[1])) {
                    test.addMsg("relXY", exp, relXY);
                }
            }
        }
    }

    public Boolean testXYRange(final String xy) {
        Boolean isInRange = false;

        if (Double.parseDouble(xy) >= 0 && Double.parseDouble(xy) <= 1) {
            isInRange = true;
        }

        return isInRange;
    }

    public void verifyPrevState(final JSONObject target, final UICTest test,
            final String exp) throws Exception {
        String prevStateValue = "";

        if (!target.has("prevState")) {
            test.addMsg("prevState", exp, "missing");
        } else {
            final JSONObject prevState = (JSONObject) target.get("prevState");
            prevStateValue = prevState.getString("value");
            if (!prevStateValue.equals(exp)) {
                test.addMsg("prevState", exp, prevStateValue);
            }
        }
    }

    public void verifyCurrState(final JSONObject target, final UICTest test,
            final String exp) throws Exception {
        String currStateValue = "";
        final String expected = exp.trim();

        if (!target.has("currState")) {
            test.addMsg("currState", exp, "missing");
        } else {
            final JSONObject currState = (JSONObject) target.get("currState");
            currStateValue = currState.getString("value");
            if (!currStateValue.equalsIgnoreCase(expected)) {
                test.addMsg("currState", exp, currStateValue);
            }
        }
    }

    public void verifyCurrStateSrc(final JSONObject target,
            final UICTest test, final String exp) throws Exception {
        String currStateValue = "";

        if (!target.has("currState")) {
            test.addMsg("currState", exp, "missing");
        } else {
            final JSONObject currState = (JSONObject) target.get("currState");
            currStateValue = currState.getString("src");
            if (!currStateValue.equals(exp)) {
                test.addMsg("currState", exp, currStateValue);
            }
        }
    }

    public void verifyCurrState(final JSONObject target, final UICTest test,
            final String attName, final String exp) throws Exception {
        String currStateValue = "";

        if (!target.has("currState")) {
            test.addMsg("currState", exp, "missing");
        } else {
            final JSONObject currState = (JSONObject) target.get("currState");
            currStateValue = currState.getString(attName);
            if (!currStateValue.equals(exp)) {
                test.addMsg("currState", exp, currStateValue);
            }
        }
    }

    public void verifyFocusInOffset(final JSONObject uic, final UICTest test,
            final Integer exp) throws Exception {
        final Integer focusInOffset = uic.getInt("focusInOffset");
        if (focusInOffset.compareTo(exp) < 0) {
            test.addMsg("focusInOffset", exp.toString(),
                    focusInOffset.toString());
        }
    }

    public void verifyOffset(final JSONObject uic, final UICTest test,
            final Integer exp) throws Exception {
        final Integer offset = uic.getInt("offset");
        if (offset.compareTo(exp) < 0) {
            test.addMsg("offset", exp.toString(), offset.toString());
        }
    }

    // This is to validate the value that is sent by the registercallback and
    // logscreensshot API
    public void verifyExpectedValue(final UICTest test,
            final String actualValue, final String expectedValue) {

        if (!(expectedValue.isEmpty() && actualValue.isEmpty())) {
            test.addMsg("Bridge", expectedValue, actualValue);
        }

    }

    public void verifyActualValueEqualsExpected(final UICTest test,
            final String actualValue, final String expectedValue) {

        if (actualValue.isEmpty()) {

            test.addMsg("Bridge", expectedValue, actualValue);
        } else if (!actualValue.equals(expectedValue)) {
            test.addMsg("Bridge", expectedValue, actualValue);
        }

    }

    // DCX.registerBridgeCallbacks for addRequestHeaders API
    public void verifyRequestHeader(final UICTest test,
            final String actualValue, final String expectedValue) {

        if (!(actualValue.equals(expectedValue))) {

            test.addMsg("RequestHeaderEnabled", expectedValue, actualValue);
        }

    }
    
    // DCX.logDOMCapture API
    public void verifygenerationOfdcid(final UICTest test,
            final String uniqueID) {
    	
    	String val = uniqueID.substring(0, Math.min(uniqueID.length(), 6));

        if (!(val.equals("dcid-1"))) {
        	

            test.addMsg("DOMcapture", val, uniqueID);
        }

    }

    @SuppressWarnings("unchecked")
    public JSONObject getTargetUICObject(final String id) throws Exception {
        System.out.println("Search for json with id/name: " + id);
        final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        final ArrayList<Object> currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");
        assertNotNull(currentQueue);
        for (final Object queueItem : currentQueue) {
            assertNotNull(queueItem);
            final HashMap<Object, Object> jsonMap = new HashMap<Object, Object>();
            jsonMap.putAll((Map<? extends Object, ? extends Object>) queueItem);
            JSONObject jsonObject = new JSONObject(jsonMap);
            jsonObject = new JSONObject(jsonObject.toString());
            assertNotNull(jsonObject);
            System.out.println(jsonObject.toString());
            if (jsonObject.has("target")) {
                final JSONObject target = (JSONObject) jsonObject.get("target");
                assertNotNull(target);
                if (target.getString("id").equals(id)
                        || target.getString("name").equals(id)) {
                    System.out.println(jsonObject.toString());
                    return target;
                }
            }
        }
        return null;
    }

    @SuppressWarnings("unchecked")
    public JSONObject getUICObject(final String id) throws Exception {
        // Check if item is in queue
        System.out.println("Search for json with id/name: " + id);

        final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        ArrayList<Object> currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");

        fillQueue(currentQueue, id, javascriptExecutor);

        currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");

       // if (this.fillQueueTries >= 5) {
       // if (this.fillQueueTries >= 10) {
        if (this.fillQueueTries >= 15) {
            this.fillQueueTries = 0;
            fail("Search for json with id/name: " + id
                    + " not found in queue within 5 tries. Current Queue is: "
                    + " not found in queue within 10 tries. Current Queue is: "
                    + " not found in queue within 15 tries. Current Queue is: "
                    + currentQueue);
        }

        for (final Object queueItem : currentQueue) {
            assertNotNull(queueItem);
            final HashMap<Object, Object> jsonMap = new HashMap<Object, Object>();
            jsonMap.putAll((Map<? extends Object, ? extends Object>) queueItem);
            JSONObject jsonObject = new JSONObject(jsonMap);
            jsonObject = new JSONObject(jsonObject.toString());
            assertNotNull(jsonObject);
            System.out.println(jsonObject.toString());
            if (jsonObject.has("target")) {
                final JSONObject target = (JSONObject) jsonObject.get("target");
                assertNotNull(target);
                if (target.getString("id").equals(id)
                        || (target.has("name") && target.getString("name")
                                .equals(id))) {
                    return jsonObject;
                }
            } else if (jsonObject.has("screenview")) {
                final JSONObject screenview = (JSONObject) jsonObject
                        .get("screenview");
                assertNotNull(screenview);
                if (screenview.getString("name").equals(id)) {
                    return jsonObject;
                }
            } else if (jsonObject.has("exception")) {
                final JSONObject screenview = (JSONObject) jsonObject
                        .get("exception");
                assertNotNull(screenview);
                if (screenview.getString("description").equals(id)
                        || screenview.getString("url").equals(id)
                        || screenview.getString("line").equals(id)) {
                    return jsonObject;
                }
            } else if (jsonObject.has("customEvent")) {
                final JSONObject customEvent = (JSONObject) jsonObject
                        .get("customEvent");
                assertNotNull(customEvent);
                if (customEvent.getString("name").equals(id)) {
                    return jsonObject;
                }
                
            } 
           
        }
       return null;
    }

    @SuppressWarnings("unchecked")
    public JSONObject getUICObject(final String id, final String msgType) throws Exception {
        // Check if item is in queue
        System.out.println("Search for json with id/name: " + id);
        final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        final ArrayList<Object> currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");
        assertNotNull(currentQueue);
        for (final Object queueItem : currentQueue) {
            assertNotNull(queueItem);
            final HashMap<Object, Object> jsonMap = new HashMap<Object, Object>();
            jsonMap.putAll((Map<? extends Object, ? extends Object>) queueItem);
            JSONObject jsonObject = new JSONObject(jsonMap);
            jsonObject = new JSONObject(jsonObject.toString());
            assertNotNull(jsonObject);
            System.out.println(jsonObject.toString());
            if (jsonObject.has("target")) {
                final JSONObject target = (JSONObject) jsonObject.get("target");
                assertNotNull(target);
                if (target.getString("id").equals(id)
                        || target.getString("name").equals(id)) {
                    return jsonObject;
                }
            } else if (jsonObject.has("screenview")) {
                final JSONObject screenview = (JSONObject) jsonObject
                        .get("screenview");
                assertNotNull(screenview);
                if (("This is to test referrerName for logScreenviewLoad").equals(screenview.getString("referrerName"))) {
                    return jsonObject;
                }
            } else if (("exception").equals(msgType)) {
                if (jsonObject.has("exception")) {
                    final JSONObject screenview = (JSONObject) jsonObject
                            .get("exception");
                    assertNotNull(screenview);
                    if (screenview.getString("description").equals(id)
                            || screenview.getString("url").equals(id)
                            || screenview.getString("line").equals(id)) {
                        return jsonObject;
                    }
                }
            } else if (jsonObject.has("customEvent")) {
                final JSONObject customEvent = (JSONObject) jsonObject
                        .get("customEvent");
                assertNotNull(customEvent);
                if (customEvent.getString("name").equals(id)) {
                    return jsonObject;
                }
            }
        }
        return null;
    }
    
    @SuppressWarnings("unchecked")
    public JSONObject getUICObjectByEventType(final String id, final String eventType) throws Exception {
        // Check if item is in queue
        System.out.println("Search for json with id/name: " + id + " and eventType:"+ eventType);

        final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        ArrayList<Object> currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");

        fillQueue(currentQueue, id, javascriptExecutor);

        currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");

        if (this.fillQueueTries >= 10) {
            this.fillQueueTries = 0;
            fail("Search for json with id/name: " + id
                    + " not found in queue within 10 tries. Current Queue is: "
                    + currentQueue);
        }

        for (final Object queueItem : currentQueue) {
            assertNotNull(queueItem);
            final HashMap<Object, Object> jsonMap = new HashMap<Object, Object>();
            jsonMap.putAll((Map<? extends Object, ? extends Object>) queueItem);
            JSONObject jsonObject = new JSONObject(jsonMap);
            jsonObject = new JSONObject(jsonObject.toString());
            assertNotNull(jsonObject);
            System.out.println(jsonObject.toString());
            
            String eventString = "";
            
            if(jsonObject.has("event")){
                final JSONObject event = (JSONObject) jsonObject.get("event");
                if(event.has("type")){
                    eventString = event.getString("type");                	
                }
            }
            
            if(!eventType.equals(eventString) ){
            	continue;
            }
            
            if (jsonObject.has("target")) {
                final JSONObject target = (JSONObject) jsonObject.get("target");
                assertNotNull(target);
                if (target.getString("id").equals(id)
                        || (target.has("name") && target.getString("name")
                                .equals(id))) {
                    return jsonObject;
                }
            } else if (jsonObject.has("screenview")) {
                final JSONObject screenview = (JSONObject) jsonObject
                        .get("screenview");
                assertNotNull(screenview);
                if (screenview.getString("name").equals(id)) {
                    return jsonObject;
                }
            } else if (jsonObject.has("exception")) {
                final JSONObject screenview = (JSONObject) jsonObject
                        .get("exception");
                assertNotNull(screenview);
                if (screenview.getString("description").equals(id)
                        || screenview.getString("url").equals(id)
                        || screenview.getString("line").equals(id)) {
                    return jsonObject;
                }
            } else if (jsonObject.has("customEvent")) {
                final JSONObject customEvent = (JSONObject) jsonObject
                        .get("customEvent");
                assertNotNull(customEvent);
                if (customEvent.getString("name").equals(id)) {
                    return jsonObject;
                }
            }

        }
        return null;
    }
    @SuppressWarnings("unchecked")
    public JSONObject getUICObjectbymsgType(final String msgType) throws Exception {
        // Check if item is in queue
        System.out.println("Search for json with msgType: " + msgType);
        final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        ArrayList<Object> currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");
        System.out.println(currentQueue);
        fillQueuebymsgType(currentQueue, msgType, javascriptExecutor);

        currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");

        if (this.fillQueueTries >= 5) {
            this.fillQueueTries = 0;
            fail("Search for json with msgType: " + msgType
                    + " not found in queue within 5 tries. Current Queue is: "
                    + currentQueue);
        }
//        if (this.fillQueueTries >= 15) {
//            this.fillQueueTries = 0;
//            fail("Search for json with msgType: " + msgType
//                    + " not found in queue within 15 tries. Current Queue is: "
//                    + currentQueue);
//        }
        if (this.fillQueueTries >= 15) {
            this.fillQueueTries = 0;
            fail("Search for json with msgType: " + msgType
                    + " not found in queue within 15 tries. Current Queue is: "
                    + currentQueue);
        }

        assertNotNull(currentQueue);
        for (final Object queueItem : currentQueue) {
            assertNotNull(queueItem);
            final HashMap<Object, Object> jsonMap = new HashMap<Object, Object>();
            jsonMap.putAll((Map<? extends Object, ? extends Object>) queueItem);
            JSONObject jsonObject = new JSONObject(jsonMap);
            jsonObject = new JSONObject(jsonObject.toString());
            assertNotNull(jsonObject);
            System.out.println(jsonObject.toString());
            
            final String jsonObjectType = jsonObject.getString("type");
            assertFalse(jsonObjectType.isEmpty());
            
            if (jsonObjectType.equals(msgType)) {
            	System.out.println("Found msg of type " + msgType);
            	if (("6").equals(msgType) && jsonObject.has("exception")) {
                    final JSONObject exception = (JSONObject) jsonObject
                                .get("exception");
                    assertNotNull(exception);
                }
            	return jsonObject;
            }            
        }
        return null;
    }

    @SuppressWarnings("unchecked")
    public JSONObject getUICObjectbyDcid(final String dcid, final String msgType) throws Exception {
    	// Check if item is in queue
        System.out.println("Search for json with dcid: " + dcid + " and msgType " + msgType);
        final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        ArrayList<Object> currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");
        System.out.println(currentQueue);
        fillQueuebymsgType(currentQueue, dcid, javascriptExecutor);

        currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");

//        if (this.fillQueueTries >= 15) {
//            this.fillQueueTries = 0;
//            fail("Search for json with dcid: " + dcid
//            		+ " and msgType: " + msgType
//                    + " not found in queue within 15 tries. Current Queue is: "
//                    + currentQueue);
//        }

        assertNotNull(currentQueue);
        for (final Object queueItem : currentQueue) {
            assertNotNull(queueItem);
            final HashMap<Object, Object> jsonMap = new HashMap<Object, Object>();
            jsonMap.putAll((Map<? extends Object, ? extends Object>) queueItem);
            JSONObject jsonObject = new JSONObject(jsonMap);
            jsonObject = new JSONObject(jsonObject.toString());
            assertNotNull(jsonObject);
            System.out.println(jsonObject.toString());
            
            String jsonObjectDcid = "";
            if (jsonObject.has("dcid")) {
                jsonObjectDcid = jsonObject.getString("dcid");
            }
            else if (jsonObject.has("domCapture")) {
            	final JSONObject domCapture = (JSONObject) jsonObject.get("domCapture");
                jsonObjectDcid = domCapture.getString("dcid");
            }
                        
            final String jsonObjectType = jsonObject.getString("type");
            assertFalse(jsonObjectType.isEmpty());
                
            if (jsonObjectDcid.startsWith(dcid) && jsonObjectType.equals(msgType)) {
            	System.out.println("Found msg with dcid " + dcid + " and type " + msgType);
            	if (("6").equals(msgType) && jsonObject.has("exception")) {
                    final JSONObject exception = (JSONObject) jsonObject
                                .get("exception");
                    assertNotNull(exception);
                }
            	return jsonObject;
            }       
        }
        return null;
    }
    
    @SuppressWarnings("unchecked")
    public JSONObject[] getUICObjectArray(final String msgType,final int length) throws Exception
    {
    	
    	JSONObject arr[] = new JSONObject[length];
    	
    	System.out.println("Search for json with msgType: " + msgType);
        final JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        
        /*ArrayList<Object> currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService(\"queue\").getQueueManager().get(\"DEFAULT\").data");
        System.out.println(currentQueue);
        currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService(\"queue\").getQueueManager().get(\"DEFAULT\").data");*/
        
        ArrayList<Object> currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");
        System.out.println(currentQueue);
        currentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");
        
        int i =0;
        assertNotNull(currentQueue);
        for (final Object queueItem : currentQueue) {
            assertNotNull(queueItem);
            final HashMap<Object, Object> jsonMap = new HashMap<Object, Object>();
            jsonMap.putAll((Map<? extends Object, ? extends Object>) queueItem);
            JSONObject jsonObject = new JSONObject(jsonMap);
            jsonObject = new JSONObject(jsonObject.toString());
            assertNotNull(jsonObject);
            System.out.println(jsonObject.toString());
            String jsonObjectType = jsonObject.getString("type");
            if(jsonObjectType.equals(msgType)) {
            	if (("14").equals(msgType)) {
                    if (jsonObject.has("cookies")) {                    
                    	arr[i] = jsonObject;
                    	i =i +1;
                    }

                }
            	arr[i] = jsonObject;
            	i++;
            }
        }
    	return arr;
    }
    @After
    public void tearDown() throws Exception {
        driver.quit();
        final String verificationErrorString = this.verificationErrors
                .toString();
        if (!"".equals(verificationErrorString)) {
            fail(verificationErrorString);
        }
    }

    @AfterClass
    public static void shutDownSelendroid() {
        if (selendroidServer != null) {
            selendroidServer.stopSelendroid();
            System.out.println("Selendroid Server Stopped");
        }
        if (appium != null) {
        	appium.destroy();
        	System.out.println("Appium Server Stopped");
        }
        
    }

    protected boolean isElementPresent(final By by) {
        try {
            driver.findElement(by);
            return true;
        } catch (final NoSuchElementException e) {
            return false;
        }
    }

    /*
     * private Boolean isNotNull(JSONObject jsonObject, String key) { try {
     * 
     * @SuppressWarnings("unused") JSONObject jsonObject2 = (JSONObject)
     * jsonObject.get(key); } catch (Exception e) {
     * System.out.println("Exception isNotNull :\n" + e.getMessage()); return
     * false; }
     * 
     * return true; }
     */
    protected void focusOnElement(final WebElement webElement) {
        if ("input".equals(webElement.getTagName())) {
            webElement.sendKeys("");
        } else {
            new Actions(driver).moveToElement(webElement).perform();
        }
    }

    @SuppressWarnings("unchecked")
    public void fillQueue(final ArrayList<Object> currentQueue, final String id,
            final JavascriptExecutor javascriptExecutor) throws Exception {
        System.out.println("filling queue: " + currentQueue);
        for (final Object queueItem : currentQueue) {
            final HashMap<Object, Object> jsonMap = new HashMap<Object, Object>();
            jsonMap.putAll((Map<? extends Object, ? extends Object>) queueItem);
            JSONObject jsonObject = new JSONObject(jsonMap);
            jsonObject = new JSONObject(jsonObject.toString());
            // System.out.println(jsonObject.toString());
            if (jsonObject.has("target")) {
                final JSONObject target = (JSONObject) jsonObject.get("target");
                if (target.getString("id").equals(id)
                        || (target.has("name") && target.getString("name")
                                .equals(id))) {
                    this.fillQueueTries = 0;
                    return;
                }
            } else if (jsonObject.has("screenview")) {
                final JSONObject screenview = (JSONObject) jsonObject
                        .get("screenview");
                if (screenview.getString("name").equals(id)
                        || screenview.getString("type").equals(id)) {
                    this.fillQueueTries = 0;
                    return;
                }
            } else if (jsonObject.has("exception")) {
                final JSONObject screenview = (JSONObject) jsonObject
                        .get("exception");
                if (screenview.getString("description").equals(id)
                        || screenview.getString("url").equals(id)
                        || screenview.getString("line").equals(id)) {
                    this.fillQueueTries = 0;
                    return;
                }
            } else if (jsonObject.has("customEvent")) {
                final JSONObject customEvent = (JSONObject) jsonObject
                        .get("customEvent");
                assertNotNull(customEvent);
                if (customEvent.getString("name").equals(id)) {
                    return;
                }
            }
        }

        Thread.sleep(2000);
        final ArrayList<Object> newCurrentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");
        if (this.fillQueueTries >= 10) {
            return;
        }
        this.fillQueueTries++;
        fillQueue(newCurrentQueue, id, javascriptExecutor);

    }

    @SuppressWarnings("unchecked")
    public void fillQueuebymsgType(final ArrayList<Object> currentQueue, final String msgType, final JavascriptExecutor javascriptExecutor) throws Exception {
//        System.out.println("filling queue: " + currentQueue);
        for (final Object queueItem : currentQueue) {
            final HashMap<Object, Object> jsonMap = new HashMap<Object, Object>();
            jsonMap.putAll((Map<? extends Object, ? extends Object>) queueItem);
            JSONObject jsonObject = new JSONObject(jsonMap);
            jsonObject = new JSONObject(jsonObject.toString());
            // System.out.println(jsonObject.toString());
            if (jsonObject.has("exception")) {
                // JSONObject exception = (JSONObject)
                // jsonObject.get("exception");
                this.fillQueueTries = 0;
                return;
                // if( screenview.getString("description").equals(msgType) ||
                // screenview.getString("url").equals(msgType)||
                // screenview.getString("line").equals(msgType)){
                // fillQueueTries = 0;
                // return;
                // }
            }

        }

        Thread.sleep(2000);
        final ArrayList<Object> newCurrentQueue = (ArrayList<Object>) javascriptExecutor
                .executeScript("return DCX.getService('queue')._getQueue('DEFAULT')");
        if (this.fillQueueTries >= 10) {
            return;
        }
        this.fillQueueTries++;
        fillQueuebymsgType(newCurrentQueue, msgType, javascriptExecutor);

    }

    // protected static boolean jsonObjsAreEqual (JSONObject js1, JSONObject
    // js2) throws JSONException {
    // if (js1 == null) {
    // return (js2 == null);
    // }
    // ArrayList<String> l1 = new
    // ArrayList(Arrays.asList(JSONObject.getNames(js1)));
    // Collections.sort(l1);
    // ArrayList<String> l2 = new
    // ArrayList(Arrays.asList(JSONObject.getNames(js2)));
    // Collections.sort(l2);
    // if (!l1.equals(l2)) {
    // return false;
    // }
    // for (String key : l1) {
    // Object val1 = js1.get(key);
    // Object val2 = js2.get(key);
    // if (val1 instanceof JSONObject) {
    // if (!(val2 instanceof JSONObject)) {
    // return false;
    // }
    // if (!jsonObjsAreEqual((JSONObject)val1, (JSONObject)val2)) {
    // return false;
    // }
    // }
    //
    // if (val1 == null) {
    // if (val2 != null) {
    // return false;
    // }
    // } else if (!val1.equals(val2)) {
    // return false;
    // }
    // }
    // return true;
    // }

}
