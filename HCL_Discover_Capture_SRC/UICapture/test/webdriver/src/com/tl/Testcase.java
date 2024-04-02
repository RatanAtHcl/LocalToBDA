package com.tl;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "testCase")
public class Testcase {

    @XmlElement(name = "MaskingType")
    public String MaskingType;

    @XmlElementWrapper(name = "Steps")
    @XmlElement(name = "Step")
    public ArrayList<Step> Steps;

}
