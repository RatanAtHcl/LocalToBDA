package com.tl;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        PageTest1.class,
        PrivacyTest.class,
        ConfigWizardTest.class,
        HTML5TestPage.class,
        IframeTest.class,
        FramesTest.class,
        APItest1.class
})
public class MainTestRunner {

}
