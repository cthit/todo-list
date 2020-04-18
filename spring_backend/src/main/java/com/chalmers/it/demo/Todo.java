package com.chalmers.it.demo;

public class Todo {
    private static int count = 0;

    public final int id;
    public String tile;
    public boolean done;

    public Todo(String title, boolean done){
        id = count++;
        this.tile = title;
        this.done = done;
    }
}
