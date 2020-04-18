package com.chalmers.it.demo;

import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
public class TodoController {

    private List<Todo> todos;
    private int count;

    TodoController(){
        todos = new ArrayList<>();
        count = 0;

        Todo todo = new Todo();
        todo.id = count++;
        todo.title = "Hello";
        todo.done = false;
        todos.add(todo);
    }

    @GetMapping("/todos")
    public List<Todo> getTodos(){
        return todos;
    }

    @PostMapping("/todos")
    public void newTodo(@RequestBody Todo todo, HttpServletResponse response){
        todo.id = count++;
        todos.add(todo);
        response.setStatus(HttpServletResponse.SC_CREATED);
    }
}
