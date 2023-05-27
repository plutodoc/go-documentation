# Functions

A function can take zero or more arguments.

In this example, `add` takes two parameters of type `int`.

Notice that the type comes _after_ the variable name.

(For more about why types look the way they do,
see the [article on Go's declaration syntax.](https://blog.golang.org/gos-declaration-syntax))

```go title="functions.go"
package main

import "fmt"

func add(x int, y int) int {
	return x + y
}

func main() {
	fmt.Println(add(42, 13))
}
```

```text title="Output"
55
```
