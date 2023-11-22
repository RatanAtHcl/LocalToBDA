package com.tl;

import java.util.ArrayList;

public class UICTest {

    private final ArrayList<String> errs = new ArrayList<String>();
    private boolean pass = false;
    private String name = "";
    private String browser_name = "";

    public UICTest(final String inName, final String inBrowserName) {
        this.name = inName;
        this.browser_name = inBrowserName;
    }

    public void setName(final String s) {
        this.name = s;
    }

    public String getName() {
        return this.name;
    }

    public void setStatus(final boolean st) {
        this.pass = st;
    }

    public boolean getStatus() {
        if (this.errs.isEmpty()) {
            this.pass = true;
        }
        return this.pass;
    }

    public void addMsg(final String step, final String exp, final String act) {
        final String msg = "UIC," + this.browser_name + "," + this.name + ","
                + step + ",expected[" + exp + "],actual[" + act + "]";
        this.errs.add(msg);
    }

    public void addMsgs(final ArrayList<String> msgs) {
        for (final String s : msgs) {
            this.errs.add(s);
        }
    }

    public String getErrs() {
        final StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append('\n');
        for (final String s : this.errs) {
            stringBuilder.append(s);
            stringBuilder.append("\n");
        }
        return stringBuilder.toString();
    }

    public Integer getMsgCount() {
        return this.errs.size();
    }
}
