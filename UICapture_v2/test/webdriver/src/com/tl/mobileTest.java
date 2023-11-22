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

//import io.selendroid.selendroidCapabilities;

public class mobileTest {
	private SelendroidLauncher selendroidServer = null;
	private static WebDriver driver = null;

	public static void main(String[] args) {
		// WebDriver driver = null;
		try {
			System.out.println("Hello World!");

			DesiredCapabilities caps = SelendroidCapabilities.android();
			System.out.println(caps.getBrowserName());

			WebDriver driver = new RemoteWebDriver(DesiredCapabilities.android());
			// SelendroidCapabilities capa = new
			// SelendroidCapabilities("io.selendroid.testapp:0.10.0");
			// capa.setPlatformVersion(DeviceTargetPlatform.ANDROID19);
			// URL url = new URL("http://localhost:4444/wd/hub");
			// driver = new SelendroidDriver(url,caps);
			driver.get("http://m.ebay.de");
			WebElement element = driver.findElement(By.id("kw"));
			element.sendKeys("Nexus 5");
			element.submit();
			System.out.println("Page title is: " + driver.getTitle());
			driver.quit();
			
			//WebElement inputField = driver.findElement(By.id("my_text_field"));
			//Assert.assertEquals("true", inputField.getAttribute("enabled"));
			//inputField.sendKeys("Selendroid");
			//Assert.assertEquals("Selendroid", inputField.getText());

		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			if (driver != null)
				driver.quit();
		}
	}

}
