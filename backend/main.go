package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("Starting application")
	router := gin.Default()

	router.GET("/todos", func(c *gin.Context) {
		c.JSON(http.StatusOK, "Hello World")
	})

	router.Run(":8080")
}
