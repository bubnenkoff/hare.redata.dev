> I can't understand why next function always retrun string: 
 // Converts an error into a human-friendly string.

```
 // Invalid shell syntax.
export type syntaxerr = !void;

// Converts an error into a human-friendly string.
export fn strerror(err: syntaxerr) str = "Invalid shell syntax";
 ```

 Suliman001: syntaxerror has only one case, !void
 there is nothing to match over, hence why the function always returns the same string


<ddevault> by convention, most modules export a type called "error", e.g. io::error, which is a tagged union of all of the possible errors that module works with
<ddevault> and, also by convention, they export a function with the signature fn strerror(err: error) str, e.g. io::strerror, which converts that error value into a human-friendly string
<ddevault> shlex conforms to these conventions
<ddevault> but it only has one possible error condition, which is a shell syntax error
<ddevault> so it does not need to use a match expression to handle various different error conditions like most modules do
<ddevault> it can just unconditionally return a string