package com.chalmers.it.demo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Todo {
    private static int count = 0;

    @JsonProperty("id")
    int id;
    @JsonProperty("title")
    String title;
    @JsonProperty("done")
    boolean done;
}
