package com.tl.performance;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;

public class PerfTestRunner {

    private final File pathToBinary = new File("/Applications/Firefox.app/Contents/MacOS/firefox-bin");
    private FirefoxBinary ffBinary = new FirefoxBinary(pathToBinary);    
    private FirefoxProfile profile = new FirefoxProfile();
    //private WebDriver webDriver = new FirefoxDriver(ffBinary,profile);
    private WebDriver webDriver = new FirefoxDriver();

    private final File dynaTraceFireFoxPlugin = new File(
            "lib/dynatrace/firefoxPlugin.xpi");
    private final int TIMEOUT = 30; // Seconds

    @Before
    public void startup() throws IOException {
        this.profile = new FirefoxProfile();
        if (this.dynaTraceFireFoxPlugin.exists()) {
            this.profile.addExtension(this.dynaTraceFireFoxPlugin);
        }
        //this.webDriver = new FirefoxDriver(this.profile);
        this.webDriver = new FirefoxDriver();
        this.webDriver.manage().timeouts()
                .implicitlyWait(this.TIMEOUT, TimeUnit.SECONDS);
    }

    @After
    public void teardown() {
        this.webDriver.close();
    }

    @Test
    public void loadPages() {
        this.webDriver.get("http://tl-uiclamp.devlab.ibm.com/index.php");
        this.webDriver.get("http://tl-uiclamp.devlab.ibm.com/index.php?route=product/category&amp;path=57");
        this.webDriver.get("http://tl-uiclamp.devlab.ibm.com/index.php?route=account/register");
        this.webDriver.get("http://tl-uiclamp.devlab.ibm.com/index.php?route=product/category&amp;path=57");
        this.webDriver.get("http://tl-uiclamp.devlab.ibm.com/index.php");
    }

}
