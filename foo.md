## for loop h444hh test144444444444444444-----

First, when iterating over the elements of a slice or an array:
```h
let items = [1, 2, 3, 4, 5];
for (let item .. items) {
	fmt::println(item)!;
};
```
You can additionally iterate using pointers to each member, like so:
```h
// for-each value
// Prints 2 3 4 5 6
for (let item .. items) { // The type of item is int here
	fmt::println(item)!;
};

// for-each reference
let items = [1, 2, 3, 4, 5];
for (let item &.. items) {  // The type of item is *int here
	*item += 1;
};
```

In second example instead of assigning the value itself, we assign a pointer to the value. This is useful when you want to manipulate values in the slice/array itself or your values are too big for copying and it’s unlikely that an optimizer would catch this.

Example of reading from file:
```h
for (let line => bufio::read_line(file)!) {
	fmt::printfln("{}", strings::fromutf8(line)!)!;
};
```

This "for-each iterator" loop executes its binding initializer, `bufio::read_line(file)!`, at every start of the loop. This initializer returns a tagged union with a done type. "done" type implements a simple approach to first-class iterators. In this case, the initializer returns `([]u8 | io::EOF)`. This is a tagged union, which is a type that can contain one of `[]u8` or `io::EOF`. Unlike a union in C, it also indicates what type it currently holds, using a tag.


# Functions
## Optional function parameters

Functions can now define default values for optional function parameters using the following syntax:
```h
fn example(x: int, y: int = 34) void = {
	// ...
};

example(12);	// Equivalent to example(12, 34);
```

## STD
### regex 

`regex:: module` support for multiple alternation – patterns like `(ha|py|sh)` – which completes our implementation of POSIX Extended Regular Expressions.

