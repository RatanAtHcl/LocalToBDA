package com.tl;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Step {

    public String Name;
    @XmlElementWrapper(name = "Fields")
    @XmlElement(name = "HtmlField")
    public ArrayList<HtmlField> Fields;

}
