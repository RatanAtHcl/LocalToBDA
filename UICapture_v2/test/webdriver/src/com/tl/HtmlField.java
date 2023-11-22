package com.tl;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class HtmlField {

    /**
     * Element type represents the type of the element that the webdriver will
     * interact with.
     */
    @XmlElement
    public String ElementType;

    /**
     * LookupType is used to determine how to identify an element. LookUpType =
     * id, then the element is identified by it's Id LookUpType = XPath, then
     * the element is identified by it's XPath
     */
    @XmlElement
    public String LookUpType;

    /**
     * LookupValue is used by the Find.By() to identify the element. If
     * LookUpType is Id and LookUpValue = submit, then the webdriver locates an
     * element whose id =submit
     */

    @XmlElement
    public String LookUpValue;

    /**
     * Value is used to set the element's new value.
     */
    @XmlElement
    public String Value;

    public HtmlField() {
    };

    @Override
    public final String toString() {
        String toReturn = "Type=" + this.ElementType + "\t";

        if (this.Value != null && !this.Value.isEmpty()) {
            toReturn = toReturn + "Value=" + this.Value + "\t";
        }

        if (this.LookUpValue != null && !this.LookUpValue.isEmpty()) {
            toReturn = toReturn + "LookUpValue=" + this.LookUpValue + "\t";
        }
        if (this.LookUpType != null && !this.LookUpType.isEmpty()) {
            toReturn = toReturn + "LookUpType=" + this.LookUpType + "\t";
        }
        return toReturn;

    }

}
