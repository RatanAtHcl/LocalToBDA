package com.tl;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

@RunWith(Parameterized.class)
public class PrivacyTest extends UICInit {

    private final String browserService = properties
            .getProperty("browserService");
    private final String uicTestDataDir;
    private final String currentDirectory;
    private final String pathSeparator = System.getProperty("file.separator");

    public PrivacyTest(final String browser) {
        super(browser, "PrivacyMasking", "index.html", "abcd", null, false);
        System.out.println(browser);
        this.currentDirectory = System.getProperty("user.dir");
        this.uicTestDataDir = this.currentDirectory + this.pathSeparator
                + "UICTestData" + this.pathSeparator;
    }

    /*
     * @BeforeClass public void setUpConfigFiles() throws Exception {
     * 
     * }
     */

    @Override
    @Before
    public void setUp() {
        super.setUp();
    }

    @Override
    @After
    public void tearDown() throws Exception {
        super.tearDown();
    }

    @Test
    public void testMaskTypeEmptyW3c() throws Exception {

        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_type_empty.js", "Chrome26");
            verifyPrivacyMaskingByCustomAttr(test, "");
            verifyPrivacyMaskingById(test, "");
            verifyPrivacyMaskingByXpath(test, "");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeBasicW3c() throws Exception {

        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_basic", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_type_basic.js", "Chrome26");
            verifyPrivacyMaskingByCustomAttr(test, "XXXXX");
            verifyPrivacyMaskingById(test, "XXXXX");
            System.out.println("Xpath error");
            verifyPrivacyMaskingByXpath(test, "XXXXX");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }

    @Test
    public void testMaskTypeTypeW3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_type", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_type_type.js", "Chrome26");
            verifyPrivacyMaskingByCustomAttr(test, "@XX@@xxxx99");
            verifyPrivacyMaskingById(test, "@XX@@xxxx99");
            verifyPrivacyMaskingByXpath(test, "@XX@@xxxx99");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }

    @Test
    public void testMaskTypeCustomW3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_custom_w3c", browser);
            // JavascriptExecutor javascriptExecutor = (JavascriptExecutor)
            // driver;
            // javascriptExecutor.executeScript()
            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_type_Custom.js", "Chrome26");

            verifyPrivacyMaskingByCustomAttr(test, "!@#$%*");
            verifyPrivacyMaskingById(test, "!@#$%*");
            System.out.println("Xpath error");
            verifyPrivacyMaskingByXpath(test, "!@#$%*");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }

    @Test
    public void testMaskTypeEmptyWithCSSRegExW3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_CSS_RegEx_type_empty.js", "Chrome26");
            verifyPrivacyMaskingByCSS(test, "");
            verifyPrivacyMaskingByRegExp(test, "");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }

    @Test
    public void testMaskTypeBasicWithCSSRegExW3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_basic", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_CSS_RegEx_type_basic.js", "Chrome26");
            verifyPrivacyMaskingByCSS(test, "XXXXX");
            verifyPrivacyMaskingByRegExp(test, "XXXXX");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }

    @Test
    public void testMaskTypeTypeWithCSSRegExW3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_type", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_CSS_RegEx_type_type.js", "Chrome26");
            verifyPrivacyMaskingByCSS(test, "@XX@@xxxx99");
            verifyPrivacyMaskingByRegExp(test, "@XX@@xxxx99");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeCustomWithCSSRegExW3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_custom", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_CSS_RegEx_type_custom.js", "Chrome26");
            verifyPrivacyMaskingByCSS(test, "!@#$%*");
            verifyPrivacyMaskingByRegExp(test, "!@#$%*");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeEmptyWithInvalidSelectorsCSSW3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_empty_with_invalid_selectors.js", "Chrome26");
            verifyPrivacyMaskingForInvalidSelectorsByCSS(test, "");
            // verifyPrivacyMaskingForInvalidSelectorsByID(test, "");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeBasicWithInvalidSelectorsCSSW3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_basic", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_basic_with_invalid_selectors.js", "Chrome26");
            verifyPrivacyMaskingForInvalidSelectorsByCSS(test, "XXXXX");
            // verifyPrivacyMaskingForInvalidSelectorsByID(test, "XXXXX");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeTypeWithInvalidSelectorsCSSW3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_type", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_type_with_invalid_selectors.js", "Chrome26");
            verifyPrivacyMaskingForInvalidSelectorsByCSS(test, "@XX@@xxxx99");
            // verifyPrivacyMaskingForInvalidSelectorsByID(test, "@XX@@xxxx99");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeCustomWithInvalidSelectorsCSSW3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_custom", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_custom_with_invalid_selectors.js", "Chrome26");
            verifyPrivacyMaskingForInvalidSelectorsByCSS(test, "!@#$%*");
            // verifyPrivacyMaskingForInvalidSelectorsByID(test, "!@#$%*");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeEmptyJq() throws Exception {

        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_type_empty.js", "Chrome26");
            verifyPrivacyMaskingByCustomAttr(test, "");
            verifyPrivacyMaskingById(test, "");
            verifyPrivacyMaskingByXpath(test, "");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeBasicJq() throws Exception {

        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_basic", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_type_basic.js", "Chrome26");
            verifyPrivacyMaskingByCustomAttr(test, "XXXXX");
            verifyPrivacyMaskingById(test, "XXXXX");
            verifyPrivacyMaskingByXpath(test, "XXXXX");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }

    @Test
    public void testMaskTypeTypeJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_type", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_type_type.js", "Chrome26");
            verifyPrivacyMaskingByCustomAttr(test, "@XX@@xxxx99");
            verifyPrivacyMaskingById(test, "@XX@@xxxx99");
            verifyPrivacyMaskingByXpath(test, "@XX@@xxxx99");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }

    @Test
    public void testMaskTypeCustomJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_custom_w3c", browser);
            // JavascriptExecutor javascriptExecutor = (JavascriptExecutor)
            // driver;
            // javascriptExecutor.executeScript()
            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_type_Custom.js", "Chrome26");

            verifyPrivacyMaskingByCustomAttr(test, "!@#$%*");
            verifyPrivacyMaskingById(test, "!@#$%*");
            verifyPrivacyMaskingByXpath(test, "!@#$%*");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }

    @Test
    public void testMaskTypeEmptyWithCSSRegExJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_CSS_RegEx_type_empty.js", "Chrome26");
            verifyPrivacyMaskingByCSS(test, "");
            verifyPrivacyMaskingByRegExp(test, "");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }

    @Test
    public void testMaskTypeBasicWithCSSRegExJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_basic", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_CSS_RegEx_type_basic.js", "Chrome26");
            verifyPrivacyMaskingByCSS(test, "XXXXX");
            verifyPrivacyMaskingByRegExp(test, "XXXXX");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }

    @Test
    public void testMaskTypeTypeWithCSSRegExJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_type", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_CSS_RegEx_type_type.js", "Chrome26");
            verifyPrivacyMaskingByCSS(test, "@XX@@xxxx99");
            verifyPrivacyMaskingByRegExp(test, "@XX@@xxxx99");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeCustomWithCSSRegExJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_custom", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_CSS_RegEx_type_custom.js", "Chrome26");
            verifyPrivacyMaskingByCSS(test, "!@#$%*");
            verifyPrivacyMaskingByRegExp(test, "!@#$%*");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeEmptyWithInvalidSelectorsCSSJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_empty_with_invalid_selectors.js", "Chrome26");
            verifyPrivacyMaskingForInvalidSelectorsByCSS(test, "");
            // verifyPrivacyMaskingForInvalidSelectorsByID(test, "");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeBasicWithInvalidSelectorsCSSJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_basic", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_basic_with_invalid_selectors.js", "Chrome26");
            verifyPrivacyMaskingForInvalidSelectorsByCSS(test, "XXXXX");
            // verifyPrivacyMaskingForInvalidSelectorsByID(test, "XXXXX");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeTypeWithInvalidSelectorsCSSJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_type", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_type_with_invalid_selectors.js", "Chrome26");
            verifyPrivacyMaskingForInvalidSelectorsByCSS(test, "@XX@@xxxx99");
            // verifyPrivacyMaskingForInvalidSelectorsByID(test, "@XXxxxx99");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }

    @Test
    public void testMaskTypeCustomWithInvalidSelectorsCSSJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_custom", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_custom_with_invalid_selectors.js", "Chrome26");
            verifyPrivacyMaskingForInvalidSelectorsByCSS(test, "!@#$%*");
            // verifyPrivacyMaskingForInvalidSelectorsByID(test, "!@#$%*");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }

    }
    
    // Privacy within iframe
    
    @Test
    public void testMaskTypeEmptyWithCSSiframeJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_CSS_RegEx_type_empty.js", "Chrome26");
            verifyPrivacyMaskingByCSSWithinIframe(test, "");
            //verifyPrivacyMaskingByXpathWithinIframe(test, "");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }
    
    @Test
    public void testMaskTypeEmptyWithCSSiframew3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_CSS_RegEx_type_empty.js", "Chrome26");
            verifyPrivacyMaskingByCSSWithinIframe(test, "");
            //verifyPrivacyMaskingByXpathWithinIframe(test, "");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }
    
    @Test
    public void testMaskTypeBasicWithCSSiframeJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_CSS_RegEx_type_basic.js", "Chrome26");
            verifyPrivacyMaskingByCSSWithinIframe(test, "XXXXX");
            //verifyPrivacyMaskingByXpathWithinIframe(test, "XXXXX");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }
    
    @Test
    public void testMaskTypeBasicWithCSSiframew3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_CSS_RegEx_type_basic.js", "Chrome26");
            verifyPrivacyMaskingByCSSWithinIframe(test, "XXXXX");
            verifyPrivacyMaskingByXpathWithinIframe(test, "XXXXX");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }
    
    
    @Test
    public void testMaskTypeTypeWithCSSiframeJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_CSS_RegEx_type_type.js", "Chrome26");
            verifyPrivacyMaskingByCSSWithinIframe(test, "@XX@@xxxx99");
            verifyPrivacyMaskingByXpathWithinIframe(test, "@XX@@xxxx99");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }
    
    @Test
    public void testMaskTypeTypeWithCSSiframew3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_CSS_RegEx_type_type.js", "Chrome26");
            verifyPrivacyMaskingByCSSWithinIframe(test, "@XX@@xxxx99");
            verifyPrivacyMaskingByXpathWithinIframe(test, "@XX@@xxxx99");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }
    
    @Test
    public void testMaskTypeCustomWithCSSiframeJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_CSS_RegEx_type_custom.js", "Chrome26");
            verifyPrivacyMaskingByCSSWithinIframe(test, "!@#$%*");
            verifyPrivacyMaskingByXpathWithinIframe(test, "!@#$%*");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }
    
    @Test
    public void testMaskTypeCustomWithCSSiframew3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_w3c_CSS_RegEx_type_custom.js", "Chrome26");
            verifyPrivacyMaskingByCSSWithinIframe(test, "!@#$%*");
            verifyPrivacyMaskingByXpathWithinIframe(test, "!@#$%*");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }
    
    @Test
    public void testMaskTypeEmptyWithXpathIframeJq() throws Exception {
        if (this.browserService.toLowerCase().contains("jq")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_CSS_RegEx_type_empty.js", "Chrome26");
            verifyPrivacyMaskingByCSSWithinIframe(test, "");
            verifyPrivacyMaskingByXpathWithinIframe(test, "");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }
    
    @Test
    public void testMaskTypeEmptyWithXpathIframew3c() throws Exception {
        if (this.browserService.toLowerCase().contains("w3c")) {
            final UICTest test = new UICTest("_mask_type_empty", browser);

            executeDCXInitJavaScript(test, this.uicTestDataDir
                    + "PrivacyMaskingInitFiles" + this.pathSeparator
                    + "init_jq_CSS_RegEx_type_empty.js", "Chrome26");
            verifyPrivacyMaskingByCSSWithinIframe(test, "");
            verifyPrivacyMaskingByXpathWithinIframe(test, "");
            System.out.println(test.getStatus());
            assertTrue(test.getErrs(), test.getStatus());
        }
    }
    
    
    //Validations

    private void verifyPrivacyMaskingByXpath(final UICTest test,
            final String expectedValue) throws Exception {
        driver.findElement(By.xpath("//*[@id=\"TestForm\"]/ul/li[7]/input"))
                .sendKeys("!QA  test01");
        driver.findElement(By.id("foo_private")).sendKeys("ManishaTest");
        JSONObject jsonCustomAttributeObject;
        jsonCustomAttributeObject = getUICObject("[[\"TestForm\"],[\"ul\",0],[\"li\",6],[\"input\",0]]");
        final String jsonMessageType = jsonCustomAttributeObject.getString(
                "type").toString();
        assertEquals("4", jsonMessageType);
        final JSONObject target = getTargetUICObject("[[\"TestForm\"],[\"ul\",0],[\"li\",6],[\"input\",0]]");
        verifyCurrState(target, test, expectedValue);
    }

    private void verifyPrivacyMaskingById(final UICTest test,
            final String expectedValue) throws Exception {
        driver.findElement(By.id("abcd")).sendKeys("!QA  test01");
        driver.findElement(By.id("foo_private")).sendKeys("ManishaTest");
        // driver.manage().timeouts().implicitlyWait(200, TimeUnit.SECONDS);
        final JSONObject jsonObject = getUICObject("abcd");
        final String jsonMessageType = jsonObject.getString("type").toString();
        assertEquals("4", jsonMessageType);
        final JSONObject target = getTargetUICObject("abcd");
        verifyCurrState(target, test, expectedValue);
    }

    private void verifyPrivacyMaskingByCustomAttr(final UICTest test,
            final String expectedValue) throws Exception {

        // Identifying the element by Xpath.
        // but masking will be checked using custom attribute

        driver.findElement(By.xpath("//*[@id=\"TestForm\"]/ul/li[8]/input"))
                .sendKeys("!QA  test01");
        driver.findElement(By.id("foo_private")).sendKeys("ManishaTest");
        JSONObject jsonCustomAttributeObject;
        jsonCustomAttributeObject = getUICObject("myattr=secret");
        final String jsonMessageType = jsonCustomAttributeObject.getString(
                "type").toString();
        assertEquals("4", jsonMessageType);
        final JSONObject target = getTargetUICObject("myattr=secret");
        verifyCurrState(target, test, expectedValue);

    }

    private void verifyPrivacyMaskingByCSS(final UICTest test,
            final String expectedValue) throws Exception {
        driver.findElement(By.xpath("//*[@id=\"TestForm\"]/ul/li[5]/input")) 
                .sendKeys("!QA  test01");
        driver.findElement(By.id("bar_private")).sendKeys("ManishaTest");
        //driver.manage().timeouts().implicitlyWait(200, TimeUnit.SECONDS);
        final JSONObject jsonObject = getUICObject("[[\"TestForm\"],[\"ul\",0],[\"li\",4],[\"input\",0]]");
        final String jsonMessageType = jsonObject.getString("type").toString();
        assertEquals("4", jsonMessageType);
        final JSONObject target = getTargetUICObject("[[\"TestForm\"],[\"ul\",0],[\"li\",4],[\"input\",0]]");
        verifyCurrState(target, test, expectedValue);
    }

    private void verifyPrivacyMaskingByRegExp(final UICTest test,
            final String expectedValue) throws Exception {
        driver.findElement(By.id("foo_private")).sendKeys("!QA  test01");
        driver.findElement(By.id("abcd")).sendKeys("ManishaTest");
        //driver.manage().timeouts().implicitlyWait(200, TimeUnit.SECONDS);
        final JSONObject jsonObject = getUICObject("foo_private");
        final String jsonMessageType = jsonObject.getString("type").toString();
        assertEquals("4", jsonMessageType);
        final JSONObject target = getTargetUICObject("foo_private");
        verifyCurrState(target, test, expectedValue);
    }

    private void verifyPrivacyMaskingForInvalidSelectorsByCSS(
            final UICTest test, final String expectedValue) throws Exception {
        driver.findElement(By.id("invalidSeclector1")).sendKeys("!QA  test01");
        driver.findElement(By.id("foo_private")).sendKeys("ManishaTest");
        // driver.manage().timeouts().implicitlyWait(200, TimeUnit.SECONDS);
        final JSONObject jsonObject = getUICObject("login$password");
        final String jsonMessageType = jsonObject.getString("type").toString();
        assertEquals("4", jsonMessageType);
        final JSONObject target = getTargetUICObject("login$password");
        verifyCurrState(target, test, expectedValue);
    }
    
    private void verifyPrivacyMaskingByCSSWithinIframe(final UICTest test,
            final String expectedValue) throws Exception {
    	final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("selectwithOptions")));
        driver.switchTo().frame(driver.findElement(By.id("testInsideIframe")));
       
        driver.findElement(By.xpath("/html/body/ul/li[2]/input")).sendKeys("!QA  test01");
        driver.findElement(By.id("insideIframeB1")).click();        
        driver.switchTo().window(mainWindow);        
        
        final JSONObject jsonObject = getUICObject("");
        final String jsonMessageType = jsonObject.getString("type").toString();
        assertEquals("4", jsonMessageType);
        final JSONObject target = getTargetUICObject("[[\"testInsideIframe\"],[\"html\",0],[\"body\",0],[\"ul\",0],[\"li\",1],[\"input\",0]]");
        verifyCurrState(target, test, expectedValue);
    }
    
    private void verifyPrivacyMaskingByXpathWithinIframe(final UICTest test,
            final String expectedValue) throws Exception {
    	final String mainWindow = driver.getWindowHandles().iterator().next();
        assertTrue(isElementPresent(By.id("selectwithOptions")));
        driver.switchTo().frame(driver.findElement(By.id("testInsideIframe")));
       
        driver.findElement(By.xpath("/html/body/ul/li[3]/input")).sendKeys("!QA  test01");
        driver.findElement(By.id("insideIframeB1")).click();        
        driver.switchTo().window(mainWindow);        
        
        final JSONObject jsonObject = getUICObject("");
        final String jsonMessageType = jsonObject.getString("type").toString();
        assertEquals("4", jsonMessageType);
        final JSONObject target = getTargetUICObject("[[\"testInsideIframe\"],[\"html\",0],[\"body\",0],[\"ul\",0],[\"li\",2],[\"input\",0]]");
        verifyCurrState(target, test, expectedValue);
    }
    

    /*
     * private void verifyPrivacyMaskingForInvalidSelectorsByID(UIC_Test test,
     * String expectedValue) throws Exception {
     * driver.findElement(By.name("invalidSeclector2")) .sendKeys("!QAtest01");
     * driver.findElement(By.id("abcd")).sendKeys("ManishaTest"); //
     * driver.manage().timeouts().implicitlyWait(200, TimeUnit.SECONDS);
     * JSONObject jsonObject = getUICObject("super#field"); String
     * jsonMessageType = jsonObject.getString("type").toString();
     * assertEquals("4", jsonMessageType); JSONObject target =
     * getTargetUICObject("super#field"); verifyCurrState(target, test,
     * expectedValue); }
     */

    public final void executeDCXInitJavaScript(final UICTest test,
            final String testcaseFileName, final String browserName) {

        final String jsCommand = getDCXInitJavaScriptFromFile(testcaseFileName);
        /*
         * The code below is when reading the init file via configuration wizard
         * String jsCommand = getDCXInitJavaScript(testcaseFileName,
         * browserName, test.getName(), test);
         */
        // JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        // javascriptExecutor.executeScript("DCX.destroy();");
        // jsCommand = "(function () {var changeTarget;" + jsCommand;
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
        // javascriptExecutor.executeScript(jsCommand);
        // ((JavascriptExecutor)driver).executeAsyncScript("arguments[0](); alert('Hello')");
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
        final String jsCommand = extractInitFromDownloadedFile(dcxInitTestCaseName);
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

        // String jsCommand =
        // extractInitFromDownloadedFile(properties.getProperty("downloadLocation")+
        // "\\testcase" + suffix +".js");
        final String jsCommand = extractInitFromDownloadedFile(downloadedFileName);
        System.out.println(jsCommand);

        if (null == jsCommand) {
            test.addMsg("Downloading File",
                    "Expected to download discoverui.concat.js", "");
        }
        assertNotNull(jsCommand);
        return jsCommand;

        // return "alert('Manisha')";//jsCommand;
    }

    static void deleteFilesFromDownLoadFolder() throws IOException {

        final File file = new File("C:\\Users\\Administrator\\Downloads");
        String[] myFiles;
        if (file.isDirectory()) {
            myFiles = file.list();
            for (int i = 0; i < myFiles.length; i++) {
                final File myFile = new File(file, myFiles[i]);
                myFile.delete();
            }
        }
    }

    public final String extractInitFromDownloadedFile(final String fileName) {
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
