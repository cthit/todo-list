package main

import (
	"fmt"
	"net/http"

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

	router.Run(":8080")
}

func HandleGet(c *gin.Context) {
	c.JSON(http.StatusOK, todos)
}
