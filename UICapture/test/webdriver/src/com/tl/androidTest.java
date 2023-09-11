package com.tl;

import java.net.URL;

import io.selendroid.SelendroidCapabilities;
import io.selendroid.SelendroidDriver;
import io.selendroid.SelendroidLauncher;
import io.selendroid.device.DeviceTargetPlatform;
import io.selendroid.server.model.SelendroidStandaloneDriver;
import io.selendroid.SelendroidConfiguration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.json.JSONObject;
import org.junit.*;
import org.junit.runners.Parameterized;
import org.junit.runner.RunWith;
import static org.junit.Assert.*;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.touch.TouchActions;

//import io.selendroid.selendroidCapabilities;

public class androidTest {
	 private SelendroidLauncher selendroidServer = null;
	  private WebDriver driver = null;

	  @Test
	  public void shouldSearchWithEbay() {
	    // And now use this to visit ebay
	    //driver.get("http://9.19.145.86:8080/gestureSampleApp/index.html");
		  driver.get("http://192.168.2.10/testWebSite_current/APITesting/index.html");
	    // Find the text input element by its id
	    WebElement element1 = driver.findElement(By.id("textInput"));
	    WebElement element2 = driver.findElement(By.id("textareaInput"));
	    WebElement element3 = driver.findElement(By.id("buttonInput"));

	    // Enter something to search for
	    //element.sendKeys("Nexus 5");

	    // Now submit the form. WebDriver will find the form for us from the element
	    //element.submit();
	    
	    //test Tap
	    TouchActions  tap = new TouchActions (driver).doubleTap(element2);
	    tap.perform();
	    
	    String expected2 = "/tap";
	    assert(element2.getText().equals(expected2));
	    
	  //test Double tap
	    TouchActions  dpubleTap = new TouchActions (driver).singleTap(element1);
	    dpubleTap.perform();
	    
	    String expected1 = "/doubletap/";
	    assert(element1.getText().contains(expected1));
	    
	  //test Tap and Hold
	    TouchActions  tapAndHold = new TouchActions (driver).singleTap(element2).longPress(element2);
	    tapAndHold.perform();
	    
	    String expected3 = "/hold";
	    assert(element2.getText().equals(expected3));
	    
	    //test Swipe
	    TouchActions  swipe = new TouchActions (driver).flick(element3, -200, 0, 20);
	    swipe.perform();
	    
	   
	

	    // Check the title of the page
	    System.out.println("Page title is: " + driver.getTitle());
	    driver.quit();
	  }

	  @Before
	  public void startSelendroidServer() throws Exception {
	    if (selendroidServer != null) {
	      selendroidServer.stopSelendroid();
	    }
	    SelendroidConfiguration config = new SelendroidConfiguration();

	    selendroidServer = new SelendroidLauncher(config);
	    selendroidServer.launchSelendroid();

	    DesiredCapabilities caps = SelendroidCapabilities.android();

	    driver = new SelendroidDriver(caps);
	    
	  }

	  @After
	  public void stopSelendroidServer() {
	    if (driver != null) {
	      driver.quit();
	    }
	    if (selendroidServer != null) {
	      selendroidServer.stopSelendroid();
	    }
	  }

}
