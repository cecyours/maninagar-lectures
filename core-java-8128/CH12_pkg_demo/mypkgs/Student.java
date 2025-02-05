package com.mypkgs;


public class Student implements MetaInfo {
    String name;
    String text;

    public Student(String name) {
        this.name = name;
    }

    public void read(String text) {
        this.text = text;
    }

    public String write() {
        return this.text;
    }

    @Override
    public String toString() {
        return this.name;
    }
}