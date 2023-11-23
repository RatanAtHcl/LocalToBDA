package com.tl;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement()
public class Testcases {

    @XmlElement(name = "testCase")
    public ArrayList<Testcase> Testcases;
}
