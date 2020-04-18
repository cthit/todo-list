package com.chalmers.it.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TodoController {

    private List<Todo> todos;

    TodoController(){
        todos = new ArrayList<>();
        todos.add(new Todo("Hello", false));
    }

    @GetMapping("/todos")
    public List<Todo> getTodos(){
        return todos;
    }
}
