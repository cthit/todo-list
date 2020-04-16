package main

import (
	"errors"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

//Observe: the variable names in the struct starts with capital letter
//if it starts with a lower case letter, it will not be converted to json
type Todo struct {
	Id    int    `json:"id"`
	Title string `json:"title"`
	Done  bool   `json:"done"`
}

var todos []Todo
var count = 1

func main() {
	fmt.Println("Starting application")

	todos = []Todo{{0, "Hello", false}}

	router := gin.Default()

	router.GET("/todos", HandleGet)
	router.POST("/todos", HandleNew)
	router.DELETE("/todo/:id", HandleDelete)
	router.PUT("/todo", HandleChange)

	router.Run(":8080")
}

func HandleGet(c *gin.Context) {
	c.JSON(http.StatusOK, todos)
}

func HandleNew(c *gin.Context) {
	todo := Todo{}
	if err := c.ShouldBindJSON(&todo); err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
	}

	todo.Id = count
	count++

	todos = append(todos, todo)
	c.Status(http.StatusCreated)
}

func HandleDelete(c *gin.Context) {
	param, _ := c.Params.Get("id")
	id, err := strconv.Atoi(param)

	if err != nil {
		c.AbortWithStatus(http.StatusBadRequest)
		return
	}

	newTodos, err := delete(todos, id)
	if err != nil {
		c.AbortWithError(http.StatusNotFound, err)
		return
	}

	todos = newTodos
	c.Status(http.StatusNoContent)
}

func HandleChange(c *gin.Context) {
	todo := Todo{}
	if err := c.BindJSON(&todo); err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}

	if err := change(todos, todo); err != nil {
		c.AbortWithError(http.StatusNotFound, err)
		return
	}

	c.Status(http.StatusOK)
}

func change(ts []Todo, t Todo) error {
	for k, v := range ts {
		if v.Id == t.Id {
			ts[k] = t
			return nil
		}
	}

	return errors.New(fmt.Sprintf("Element not found with id: %d", t.Id))
}

func delete(ts []Todo, id int) ([]Todo, error) {
	newTodos := make([]Todo, 0, len(ts))
	for _, v := range ts {
		if v.Id != id {
			newTodos = append(newTodos, v)
		}
	}

	if len(newTodos) == len(ts) {
		return nil, errors.New(fmt.Sprintf("Element with id: %d not found", id))
	}

	return newTodos, nil
}
