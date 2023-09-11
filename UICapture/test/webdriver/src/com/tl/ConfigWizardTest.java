package com.tl;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

/**
 * @author manimu
 * 
 */
@RunWith(Parameterized.class)
public class ConfigWizardTest extends TestBase {

    static String handle_MainWindow;
    static String handle_ChildWindow;
    static int testCaseCounter;
    private String _suffix = "";
    private String uicTestDataDir = "";
    private String expectedResultsDataBaseDir = "";
    private String currentDirectory = "";
    private final String pathSeparator = System.getProperty("file.separator");
    private String dcxInit = "";
    private String ffVersionString = "";
    private float ffVersion = 0;
    JavascriptExecutor js = (JavascriptExecutor) driver;
    String alertText = null;

    public ConfigWizardTest(final String browser) {
        super(browser, "configwizard", "configwizard.html", "btn-regextester",
                "ie, selendroid", false);
        this.currentDirectory = System.getProperty("user.dir");
        this.uicTestDataDir = this.currentDirectory + this.pathSeparator
                + "UICTestData" + this.pathSeparator;
        this.expectedResultsDataBaseDir = this.uicTestDataDir
                + "ConfigWizardExpectedResults" + this.pathSeparator;
    }

    
    @Override
    @Before
    public void setUp() {
        super.setUp();
        this.ffVersionString = (String) ((JavascriptExecutor) driver)
                .executeScript("return navigator.userAgent;");
        if (this.ffVersionString.contains("Firefox/")) {
            this.ffVersionString = this.ffVersionString.split("Firefox/")[1];
            this.ffVersion = Float.parseFloat(this.ffVersionString);
            if (this.ffVersion < 17) {
                System.out
                        .println("Configuration Wizard does not support Firefox version "
                                + this.ffVersion
                                + ". Skipping ConfigWizardTest");
                org.junit.Assume.assumeTrue(false);
            }
        }
        try {
            deleteFilesFromDownLoadFolder();
        } catch (final IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    @Test
    public void testMaskTypeEmptyJQuery() throws Exception {

        final UICTest test = new UICTest("_mask_type_empty_jquery", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_mask_type_empty_jquery.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_empty_jquery");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_mask_type_empty_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_type_empty.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);
        /*The String are essential identical besides a couple of blocks, for example
         * expected does not have "useCapture":true. Check if this is needed.
         */

    }

    @Test
    public void testMaskTypeBasicJQuery() throws Exception {

        final UICTest test = new UICTest("_mask_type_basic_jquery", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_mask_type_basic_jquery.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_basic_jquery");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_mask_type_basic_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_type_basic.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testMaskTypeTypeJQuery() throws Exception {

        final UICTest test = new UICTest("_mask_type_type_jquery", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_mask_type_type_jquery.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_type_jquery");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_mask_type_type_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_type_type.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testMaskTypeCustomJQuery() throws Exception {

        final UICTest test = new UICTest("_mask_type_custom_jquery", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_mask_type_custom_jquery.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_jquery");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_mask_type_custom_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_type_custom.js";
        System.out.println(expectedResultFileName);
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testMaskTypeEmptyW3C() throws Exception {

        final UICTest test = new UICTest("_mask_type_empty_w3c", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_mask_type_empty_w3c.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_empty_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_mask_type_empty_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_type_empty.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testMaskTypeBasicW3C() throws Exception {

        final UICTest test = new UICTest("_mask_type_basic_w3c", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_mask_type_basic_w3c.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_basic_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_mask_type_basic_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_type_basic.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testMaskTypeTypeW3C() throws Exception {

        final UICTest test = new UICTest("_mask_type_type_w3c", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_mask_type_type_w3c.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_type_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_mask_type_type_w3c");
        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_type_type.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testMaskTypeCustomW3C() throws Exception {

        final UICTest test = new UICTest("_mask_type_custom_w3c", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_mask_type_custom_w3c.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_mask_type_custom_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_type_custom.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testInternetExplorerExcludedLinksW3C() throws Exception {

        final UICTest test = new UICTest(
                "_internetExplorerExcludedLinks_w3c", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_internetExplorerExcludedLinks_w3c.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0),
                "_internetExplorerExcludedLinks_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_InternetExplorerExcludedLinks.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testInternetExplorerExcludedLinksJQuery() throws Exception {

        final UICTest test = new UICTest(
                "_internetExplorerExcludedLinks_jquery", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_internetExplorerExcludedLinks_jquery.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0),
                "_internetExplorerExcludedLinks_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_InternetExplorerExcludedLinks.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testCrossDomainAndAsyncReqEnabledJQuery() throws Exception {

        final UICTest test = new UICTest(
                "_crossDomainAndAsyncReqEnabled_jquery", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_crossDomainAndAsyncReqEnabled_jquery.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0),
                "_crossDomainAndAsyncReqEnabled_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_crossDomainAndAsyncReqEnabled.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testCrossDomainAndAsyncReqEnabledW3C() throws Exception {

        final UICTest test = new UICTest(
                "_crossDomainAndAsyncReqEnabled_w3c", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_crossDomainAndAsyncReqEnabled_w3c.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0),
                "_crossDomainAndAsyncReqEnabled_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_crossDomainAndAsyncReqEnabled.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testDefaultToBuiltinFalseJQuery() throws Exception {

        final UICTest test = new UICTest("_defaultToBuiltinFalse_jquery",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_defaultToBuiltinFalse_jquery.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0),
                "_defaultToBuiltinFalse_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_defaultToBuiltinFalse.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testDefaultToBuiltinFalseW3C() throws Exception {

        final UICTest test = new UICTest("_defaultToBuiltinFalse_w3c",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_defaultToBuiltinFalse_w3c.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_defaultToBuiltinFalse_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_defaultToBuiltinFalse.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testDefaultToBuiltinTrueJQuery() throws Exception {

        final UICTest test = new UICTest("_defaultToBuiltinTrue_jquery",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_defaultToBuiltinTrue_jquery.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0),
                "_defaultToBuiltinTrue_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_defaultToBuiltinTrue.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testDefaultToBuiltinTrueW3C() throws Exception {

        final UICTest test = new UICTest("_defaultToBuiltinTrue_w3c", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_defaultToBuiltinTrue_w3c.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_defaultToBuiltinTrue_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_defaultToBuiltinTrue.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testEnableUsabilityModuleJquery() throws Exception {

        final UICTest test = new UICTest("_EnableUsabilityModule_jquery",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_EnableUsabilityModule_jquery.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0),
                "_EnableUsabilityModule_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_EnableUsabilityModule.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testEnableUsabilityModuleW3C() throws Exception {

        final UICTest test = new UICTest("_EnableUsabilityModule_w3c", browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_EnableUsabilityModule_w3c.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_EnableUsabilityModule_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_EnableUsabilityModule.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testAddCustomReplayEventsJquery() throws Exception {

        final UICTest test = new UICTest("_AddCustomReplayEvents_jquery",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_addCustomReplayEvents_jquery.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0),
                "_AddCustomReplayEvents_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_addCustomReplayEvents.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }

    @Test
    public void testAddCustomReplayEventsW3C() throws Exception {

        final UICTest test = new UICTest("_AddCustomReplayEvents_w3c",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_addCustomReplayEvents_w3c.xml";
        // String downloadedFileName = DownLoadConfigFile(testCaseFileName,
        // "_mask_type_custom_w3c");
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_AddCustomReplayEvents_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_addCustomReplayEvents.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    @Test
    public void test_DOMcapture_Defaults_jquery() throws Exception {

        final UICTest test = new UICTest("_DOMcapture_Defaults_jquery",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_DOMcapture_Defaults_jquery.xml";
       
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_DOMcapture_Defaults_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_DOMcaptureDefaults.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    @Test
    public void test_DOMcapture_Defaults_w3c() throws Exception {

        final UICTest test = new UICTest("_DOMcapture_Defaults_w3c",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_DOMcapture_Defaults_w3c.xml";
     
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_DOMcapture_Defaults_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_DOMcaptureDefaults.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    
    @Test
    public void test_DOMcapture_Advance_Configuration_jquery() throws Exception {

        final UICTest test = new UICTest("_DOMcapture_Advance_Configuration_jquery",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_DOMcapture_Advance_Configuration_jquery.xml";
       
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_DOMcapture_Advance_Configuration_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_DOMcaptureAdvanceConfiguration.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    @Test
    public void test_DOMcapture_Advance_Configuration_w3c() throws Exception {

        final UICTest test = new UICTest("_DOMcapture_Advance_Configuration_w3c",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_DOMcapture_Advance_Configuration_w3c.xml";
     
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_DOMcapture_Advance_Configuration_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_DOMcaptureAdvanceConfiguration.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    @Test
    public void test_DOMcapture_Advance_Configuration2_jquery() throws Exception {

        final UICTest test = new UICTest("_DOMcapture_Advance_Configuration2_jquery",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_DOMcapture_Advance_Configuration2_jquery.xml";
       
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_DOMcapture_Advance_Configuration2_jquery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_DOMcaptureAdvanceConfiguration2.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    @Test
    public void test_DOMcapture_Advance_Configuration2_w3c() throws Exception {

        final UICTest test = new UICTest("_DOMcapture_Advance_Configuration2_w3c",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_DOMcapture_Advance_Configuration2_w3c.xml";
     
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_DOMcapture_Advance_Configuration2_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_DOMcaptureAdvanceConfiguration2.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    
    // geoLocation configuration test
    
    @Test
    public void test_GeoLocationConfiguration1_w3c() throws Exception {

        final UICTest test = new UICTest("_GeoLocationConfiguration1_w3c",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_GeoLocationConfiguration1_w3c.xml";
     
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_GeoLocationConfiguration1_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_GeoLocationConfiguration1.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    
    
    @Test
    public void test_GeoLocationConfiguration2_w3c() throws Exception {

        final UICTest test = new UICTest("_GeoLocationConfiguration2_w3c",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_GeoLocationConfiguration2_w3c.xml";
     
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_GeoLocationConfiguration2_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_GeoLocationConfiguration2.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    
    @Test
    public void test_GeoLocationConfiguration1_JQuery() throws Exception {

        final UICTest test = new UICTest("_GeoLocationConfiguration1_JQuery",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_GeoLocationConfiguration1_JQuery.xml";
     
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_GeoLocationConfiguration1_JQuery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_GeoLocationConfiguration1.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    
    
    @Test
    public void test_GeoLocationConfiguration2_JQuery() throws Exception {

        final UICTest test = new UICTest("_GeoLocationConfiguration2_JQuery",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_GeoLocationConfiguration2_JQuery.xml";
     
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_GeoLocationConfiguration2_JQuery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_GeoLocationConfiguration2.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    
    // DOM capture Custom event
    
    @Test
    public void test_DOMCapture_CustomEvents_w3c() throws Exception {

        final UICTest test = new UICTest("_DOMCapture_CustomEvents_w3c",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_DOMCapture_CustomEvents_w3c.xml";
     
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_DOMCapture_CustomEvents_w3c");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_w3c_DOMCapture_CustomEvents.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    
    @Test
    public void test_DOMcapture_CustomEvents_JQuery() throws Exception {

        final UICTest test = new UICTest("_DOMCapture_CustomEvents_JQuery",
                browser);
        final String testCaseFileName = this.uicTestDataDir
                + "Testcase_DOMCapture_CustomEvents_JQuery.xml";
     
        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), "_DOMCapture_CustomEvents_JQuery");

        setDcxInit();

        if (null == this.dcxInit) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(this.dcxInit);
        final String expectedResultFileName = this.expectedResultsDataBaseDir
                + "ExpectedResults_jquery_DOMcapture_CustomEvents.js";
        final String expectedResult = readFile(expectedResultFileName)
                .replaceAll("\\s", "");
        final boolean areEqual = this.dcxInit.equalsIgnoreCase(expectedResult);
        System.out.println(this.dcxInit);
        System.out.println("######################################");
        System.out.println(expectedResult);
        assertTrue(areEqual);

    }
    
    
    
    
    
    
    
    
    
    
    
    

    /**
     * @param testCaseFileName is the test case file name
     * @param suffix is added to the down-loaded .js file
     * @return the down-loaded file name
     */
    public String downLoadConfigFile(final String testCaseFileName,
            final String suffix) {
        getBrowserVersion(driver);
        final String changeDefaultChromeDownLoadBehavior = properties
                .getProperty("changeDefaultChromeDownLoadBehavior");
        if (browser.toLowerCase().contains("chrome")
                && ("true").equals(changeDefaultChromeDownLoadBehavior)) {
            changeChromeDownloadBehavior();
        }
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        // driver.get(configWizard);

        final Testcases tests = readTestCases(testCaseFileName);

        generateConfigFile(tests.Testcases.get(0), suffix);
        driver.quit();
        return getDownLoadedFileName();

    }

    /*
     * private String extractInitFromDownloadedFile(String fileName) { Scanner
     * scanner = null; try { scanner = new Scanner(new File(fileName)); String
     * content = scanner.useDelimiter("\\Z").next(); int startIndex =
     * content.indexOf("DCX.init({"); String init =
     * content.substring(startIndex); return init; } catch
     * (FileNotFoundException e) {
     * 
     * e.printStackTrace(); } finally { if (scanner != null) { scanner.close();
     * } }
     * 
     * return null;
     * 
     * }
     */
    private void generateConfigFile(final Testcase testcase, final String suffix) {
        this._suffix = suffix;
        // loadProperties();
        System.out.println("Testing the step " + testCaseCounter);
        testCaseCounter++;
        // driver.get(wizardUrl);
        driver.get(this.testUrl);
        // driver.manage().window().maximize();
        // driver.switchTo().defaultContent();
        // driver.switchTo().frame("myframe");
        ConfigWizardTest.handle_MainWindow = driver.getWindowHandle();
        for (final Step steps : testcase.Steps) {
            System.out.println("Testing the step " + steps.Name);
            final ArrayList<HtmlField> fields = steps.Fields;
            setFields(fields);
            try {
                Thread.sleep(3000);
            } catch (final InterruptedException e) {

                e.printStackTrace();
            }
        }

        // Now compare the generated files with expected files.
        try {
            Thread.sleep(500);

            // compareFileContent(testCaseCounter);
            // Thread.sleep(500);

            // deleteFilesFromDownLoadFolder();
        } catch (final InterruptedException e) {
            e.printStackTrace();
        }

    }

    private Testcases readTestCases(final String fileName) {
        try {
            System.out.println("Reading Test cases");
            final File file = new File(fileName);

            final JAXBContext jaxbContext = JAXBContext
                    .newInstance(Testcases.class);
            final Unmarshaller jaxbUnmarshaller = jaxbContext
                    .createUnmarshaller();
            final Testcases tests = (Testcases) jaxbUnmarshaller
                    .unmarshal(file);
            return tests;
        } catch (final JAXBException e) {
            e.printStackTrace();
            return null;
        }
    }

    // Method to lookup fields via diff lookup methods
    private WebElement findElement(final HtmlField field) throws Exception {

        if (field.LookUpType.equalsIgnoreCase("id")) {
            return driver.findElement(By.id(field.LookUpValue));
        }
        if (field.LookUpType.equalsIgnoreCase("name")) {
            return driver.findElement(By.name(field.LookUpValue));
        }
        if (field.LookUpType.equalsIgnoreCase("xpath")) {
            return driver.findElement(By.xpath(field.LookUpValue));
        }
        if (field.LookUpType.equalsIgnoreCase("linktext")) {
            return driver.findElement(By.linkText(field.LookUpValue));
        }

        throw new Exception("Element not found - LookUpType: "
                + field.LookUpType + " LookUpValue:" + field.LookUpValue);
    }

    /**
     * 
     * @param fields : contains a list of html fields that the browser will
     *            interact with.
     */
    private void setFields(final ArrayList<HtmlField> fields) {
        try {
            for (final HtmlField field : fields) {
                System.out.println("\t" + field.toString());

                switch (field.ElementType.toLowerCase()) {
                    case "textbox":
                        final WebElement textbox = findElement(field);
                        textbox.clear();
                        textbox.sendKeys(field.Value);
                        break;
                    case "checkbox":
                        final WebElement checkbox = findElement(field);
                        checkbox.click();
                        break;
                    case "button":
                        final WebElement button = findElement(field);
                        button.click();
                        break;
                    case "link":
                        findElement(field).click();
                        break;
                    case "detail":
                        final WebElement e = findElement(field);
                        // driver.findElement(By.tagName("details"));
                        e.click();
                        break;
                    case "select":
                        final WebElement select = findElement(field);
                        final Select dropDown = new Select(select);
                        dropDown.selectByValue(field.Value);
                        break;
                    case "radio":
                        final WebElement radio = findElement(field);
                        radio.click();
                        break;
                /*
                 * case "download": {
                 * 
                 * WebElement download = FindElement(field); download.click();
                 * // boolean downloadSuccess = false; if
                 * (browser.toLowerCase().contains("firefox")) { // Switch to
                 * new window opened downloadFileInFireFox(); // downloadSuccess
                 * = true; } else if (browser.toLowerCase().contains("chrome"))
                 * { downloadFileInChrome(); // downloadSuccess = true; } File
                 * downloadedFile = newestFileInDownLoadFolder(); File newFile =
                 * new File(getDownLoadedFileName());
                 * downloadedFile.renameTo(newFile);
                 * 
                 * }
                 */
                    default:
                        break;

                }
            }
        } catch (final Exception e1) {

            e1.printStackTrace();
        }
    }

    private String getDownLoadedFileName() {
        return properties.getProperty("downloadLocation") + "\\testcase"
                + this._suffix + ".js";
    }

    private void changeChromeDownloadBehavior() {

        driver.get("chrome://settings-frame/settings");
        driver.switchTo().defaultContent();
        driver.findElement(By.id("advanced-settings-expander")).click();
        try {
            Thread.sleep(1500);
        } catch (final InterruptedException e) {

            e.printStackTrace();
        }
        driver.findElement(By.id("prompt-for-download")).click();
    }

    /*
     * private void downloadFileInChrome() throws IOException,
     * InterruptedException { driver.get("chrome://downloads"); WebElement
     * holder = driver.findElement(By
     * .xpath(".//div[@id='downloads-display']"));
     * 
     * List<WebElement> downloads = holder.findElements(By
     * .xpath(".//div[@class='download']")); if (downloads.size() == 0) //
     * ExtendedAssert.fail("No downloads listed in chrome's downloads page");
     * for (int i = 0; i < downloads.size(); i++) { WebElement download1 =
     * (WebElement) downloads.get(i); if (download1.findElement(
     * By.xpath("./div[@class='show-dangerous']")) .isDisplayed()) {
     * JavascriptExecutor js = (JavascriptExecutor) driver;
     * js.executeScript(String.format( "chrome.send(\"saveDangerous\", [%d])",
     * i)); }
     * 
     * } String saveAshandler = getSaveAsHandler(browser);
     * Runtime.getRuntime().exec(saveAshandler); Thread.sleep(1000);
     * Thread.sleep(2500); // compareFileContent(testCaseCounter);
     * 
     * }
     */
    /*
     * private String getSaveAsHandler(String browser) {
     * 
     * if (browser.toLowerCase().contains("chrome")) { return currentDirectory +
     * "\\AutoItScripts\\ChromeSaveAsHandler.exe"; } return ""; }
     */
    /*
     * private void downloadFileInFireFox() throws IOException { for (String
     * winHandle : driver.getWindowHandles()) {
     * driver.switchTo().window(winHandle); } // Read the contents from the new
     * window String FileContent =
     * driver.findElement(By.tagName("body")).getText();
     * WriteToFile(FileContent, testCaseCounter); //
     * compareFileContent(testCaseCounter); driver.close(); // close the .js
     * file window // Switch back to original browser (first window)
     * driver.switchTo().window(configWizardTest.handle_MainWindow); }
     */
    // Method to write to a file (used only when browser = Firefox
    public void writeToFile(final String content, final int testCaseCount) throws IOException {

        final String saveFile = properties.getProperty("downloadLocation")
                + "\\FileContent" + String.valueOf(testCaseCount) + ".js";
        final File file = new File(saveFile);

        // if file doesn't exists, then create it
        if (!file.exists()) {
            file.createNewFile();
        }
        final FileWriter fw = new FileWriter(file.getAbsoluteFile());
        final BufferedWriter bw = new BufferedWriter(fw);
        bw.write(content);
        bw.close();

        System.out.println("FileComplete");
    }

    /* This method not currently not being used */
    static void compareFileContent(final int testCaseCount) throws IOException {
        final String compareTo = "C:\\ExpectedResults" + testCaseCount + ".js";
        final File actual = new File(getDownloadedFileName());
        final File expected = new File(compareTo);
        assertTrue("The files differ!",
                FileUtils.contentEquals(actual, expected));
    }

    private String readFile(final String fileName) throws Exception {

        final FileInputStream inputStream = new FileInputStream(fileName);
        String fileContents = "";
        try {
            fileContents = IOUtils.toString(inputStream);
        } finally {
            inputStream.close();
        }
        return fileContents;
    }

    /*
     * private File newestFileInDownLoadFolder() { File dir = new
     * File(properties.getProperty("downloadLocation")); FileFilter fileFilter =
     * new WildcardFileFilter("*.js"); File[] files = dir.listFiles(fileFilter);
     * /** The newest file comes first ** Arrays.sort(files,
     * LastModifiedFileComparator.LASTMODIFIED_REVERSE); return files[0]; }
     */
    private static String getDownloadedFileName() throws IOException {
        String fileName = "";
        final File[] files = new File(
                properties.getProperty("downloadLocation")).listFiles();
        for (final File file : files) {
            if (file.isFile()) {
                fileName = file.getName();
            }
        }
        return fileName;
    }

    static void deleteFilesFromDownLoadFolder() throws IOException {

        final File file = new File(properties.getProperty("downloadLocation"));
        String[] myFiles;
        if (file.isDirectory()) {
            myFiles = file.list();
            for (int i = 0; i < myFiles.length; i++) {
                final File myFile = new File(file, myFiles[i]);
                myFile.delete();
            }
        }
    }

    void setDcxInit() {
        this.dcxInit = (String) this.js
                .executeScript("return configText.call()");
        this.dcxInit = this.dcxInit.replaceAll("\\s", "");
    }
}
