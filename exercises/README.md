<!-- BEGIN TITLE -->
# Document and Pass
<!-- END TITLE -->

<!-- BEGIN TOC -->
> 7/2/2020, 4:48:08 PM

- [0-hello-world](#0-hello-world)
- [1-remove-from-array](#1-remove-from-array)
- [1-repeat-string](#1-repeat-string)
- [1-reverse-string](#1-reverse-string)
- [1-sum-all](#1-sum-all)
- [2-fibonacci](#2-fibonacci)
- [2-get-the-titles](#2-get-the-titles)
- [2-leap-years](#2-leap-years)
- [2-palindromes](#2-palindromes)
- [3-caesar](#3-caesar)
- [3-find-the-oldest](#3-find-the-oldest)
- [3-pig-latin](#3-pig-latin)
- [3-snake-case](#3-snake-case)
<!-- END TOC -->

<!-- BEGIN DOCS -->
<<<<<<< HEAD
=======
> 7/2/2020, 12:30:01 PM
>>>>>>> 36809b7b3fb8ad154090362538c3df2eb63e6c9c
---

## [./0-hello-world](./0-hello-world)

<a name="hello"></a>

## hello(thing) ⇒ <code>string</code>
A very simple function, it greets whatever you tell it to


**Returns**: <code>string</code> - a friendly greeting  

| Param | Type | Description |
| --- | --- | --- |
| thing | <code>string</code> | the thing to greet |

**Example**  
```js
const greeting = hello('World');
console.log(greeting); // 'Hello, World!'
```
**Tests**
```
Started
<<<<<<< HEAD
......


2 specs, 0 failures
Finished in 0.023 seconds
=======
...


1 spec, 0 failures
Finished in 0.005 seconds
>>>>>>> 36809b7b3fb8ad154090362538c3df2eb63e6c9c

```

[TOP](#Document-and-Pass)


---

## [./1-remove-from-array](./1-remove-from-array)

<a name="removeFromArray"></a>

## removeFromArray()

**Tests**
```
Started
.F..F..F..F..F..F..F.

Failures:
1) removeFromArray removes a single value
  Message:
<<<<<<< HEAD
.    Expected undefined to equal [ 1, 2, 4 ]..

    Error: Expected undefined to equal [ 1, 2, 4 ].

2) removeFromArray removes multiple values
  Message:
.    Expected undefined to equal [ 1, 4 ]..

    Error: Expected undefined to equal [ 1, 4 ].

3) removeFromArray ignores non present values
  Message:
.    Expected undefined to equal [ 1, 2, 3, 4 ]..

    Error: Expected undefined to equal [ 1, 2, 3, 4 ].

4) removeFromArray ignores non present values, but still works
  Message:
.    Expected undefined to equal [ 1, 3, 4 ]..

    Error: Expected undefined to equal [ 1, 3, 4 ].

5) removeFromArray can remove all values
  Message:
.    Expected undefined to equal [  ]..

    Error: Expected undefined to equal [  ].

6) removeFromArray works with strings
  Message:
.    Expected undefined to equal [ 2, 'ho' ]..

    Error: Expected undefined to equal [ 2, 'ho' ].

7) removeFromArray only removes same type
  Message:
.    Expected undefined to equal [ 1, 2 ]..

    Error: Expected undefined to equal [ 1, 2 ].
=======
.    TypeError: removeFromArray is not a function.
  Stack:
        at <Jasmine>
        at UserContext.<anonymous> ( ... /1-remove-from-array/index.spec.js:5:12)
        at <Jasmine>
        at processImmediate (internal/timers.js:456:21)

2) removeFromArray removes multiple values
  Message:
.    TypeError: removeFromArray is not a function.
  Stack:
        at <Jasmine>
        at UserContext.<anonymous> ( ... /1-remove-from-array/index.spec.js:8:12)
        at <Jasmine>
        at processImmediate (internal/timers.js:456:21)

3) removeFromArray ignores non present values
  Message:
.    TypeError: removeFromArray is not a function.
  Stack:
        at <Jasmine>
        at UserContext.<anonymous> ( ... /1-remove-from-array/index.spec.js:11:12)
        at <Jasmine>
        at processImmediate (internal/timers.js:456:21)

4) removeFromArray ignores non present values, but still works
  Message:
.    TypeError: removeFromArray is not a function.
  Stack:
        at <Jasmine>
        at UserContext.<anonymous> ( ... /1-remove-from-array/index.spec.js:14:12)
        at <Jasmine>
        at processImmediate (internal/timers.js:456:21)

5) removeFromArray can remove all values
  Message:
.    TypeError: removeFromArray is not a function.
  Stack:
        at <Jasmine>
        at UserContext.<anonymous> ( ... /1-remove-from-array/index.spec.js:17:12)
        at <Jasmine>
        at processImmediate (internal/timers.js:456:21)

6) removeFromArray works with strings
  Message:
.    TypeError: removeFromArray is not a function.
  Stack:
        at <Jasmine>
        at UserContext.<anonymous> ( ... /1-remove-from-array/index.spec.js:20:12)
        at <Jasmine>
        at processImmediate (internal/timers.js:456:21)

7) removeFromArray only removes same type
  Message:
.    TypeError: removeFromArray is not a function.
  Stack:
        at <Jasmine>
        at UserContext.<anonymous> ( ... /1-remove-from-array/index.spec.js:23:12)
        at <Jasmine>
        at processImmediate (internal/timers.js:456:21)
>>>>>>> 36809b7b3fb8ad154090362538c3df2eb63e6c9c

7 specs, 7 failures
Finished in 0.03 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-repeat-string](./1-repeat-string)

<a name="repeatString"></a>

## repeatString()

**Tests**
```
Started
.F..F..F..F..F..F..F.

Failures:
1) repeatString repeats the string
  Message:
.    Expected undefined to equal 'heyheyhey'..

    Error: Expected undefined to equal 'heyheyhey'.

2) repeatString repeats the string many times
  Message:
.    Expected undefined to equal 'heyheyheyheyheyheyheyheyheyhey'..

    Error: Expected undefined to equal 'heyheyheyheyheyheyheyheyheyhey'.

3) repeatString repeats the string 1 times
  Message:
.    Expected undefined to equal 'hey'..

    Error: Expected undefined to equal 'hey'.

4) repeatString repeats the string 0 times
  Message:
.    Expected undefined to equal ''..

    Error: Expected undefined to equal ''.

5) repeatString returns ERROR with negative numbers
  Message:
.    Expected undefined to equal 'ERROR'..

    Error: Expected undefined to equal 'ERROR'.

6) repeatString repeats the string a random amount of times
  Message:
.    TypeError: Cannot read property 'match' of undefined.



7) repeatString works with blank strings
  Message:
.    Expected undefined to equal ''..

    Error: Expected undefined to equal ''.

7 specs, 7 failures
Finished in 0.025 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-reverse-string](./1-reverse-string)

<a name="reverseString"></a>

## reverseString()

**Tests**
```
Started
.F..F..F..F.

Failures:
1) reverseString reverses single word
  Message:
.    Expected undefined to equal 'olleh'..

    Error: Expected undefined to equal 'olleh'.

2) reverseString reverses multiple words
  Message:
.    Expected undefined to equal 'ereht olleh'..

    Error: Expected undefined to equal 'ereht olleh'.

3) reverseString works with numbers and punctuation
  Message:
.    Expected undefined to equal '!cba !321'..

    Error: Expected undefined to equal '!cba !321'.

4) reverseString works with blank strings
  Message:
.    Expected undefined to equal ''..

    Error: Expected undefined to equal ''.

4 specs, 4 failures
Finished in 0.006 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-sum-all](./1-sum-all)

<a name="sumAll"></a>

## sumAll()

**Tests**
```
Started
.F..F..F..F..F..F.

Failures:
1) sumAll sums numbers within the range
  Message:
.    Expected undefined to equal 10..

    Error: Expected undefined to equal 10.

2) sumAll works with large numbers
  Message:
.    Expected undefined to equal 8002000..

    Error: Expected undefined to equal 8002000.

3) sumAll works with larger number first
  Message:
.    Expected undefined to equal 7626..

    Error: Expected undefined to equal 7626.

4) sumAll returns ERROR with negative numbers
  Message:
.    Expected undefined to equal 'ERROR'..

    Error: Expected undefined to equal 'ERROR'.

5) sumAll returns ERROR with non-number parameters
  Message:
.    Expected undefined to equal 'ERROR'..

    Error: Expected undefined to equal 'ERROR'.

6) sumAll returns ERROR with non-number parameters
  Message:
.    Expected undefined to equal 'ERROR'..

    Error: Expected undefined to equal 'ERROR'.

6 specs, 6 failures
Finished in 0.022 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-fibonacci](./2-fibonacci)

<a name="fibonacci"></a>

## fibonacci()

**Tests**
```
Started
.F..F..F..F..F..F..F..F..F.

Failures:
1) fibonacci works
  Message:
.    Expected undefined to equal 3..

    Error: Expected undefined to equal 3.

2) fibonacci works
  Message:
.    Expected undefined to equal 8..

    Error: Expected undefined to equal 8.

3) fibonacci works
  Message:
.    Expected undefined to equal 55..

    Error: Expected undefined to equal 55.

4) fibonacci works
  Message:
.    Expected undefined to equal 610..

    Error: Expected undefined to equal 610.

5) fibonacci works
  Message:
.    Expected undefined to equal 75025..

    Error: Expected undefined to equal 75025.

6) fibonacci doesn't accept negatives
  Message:
.    Expected undefined to equal 'OOPS'..

    Error: Expected undefined to equal 'OOPS'.

7) fibonacci DOES accept strings
  Message:
.    Expected undefined to equal 1..

    Error: Expected undefined to equal 1.

8) fibonacci DOES accept strings
  Message:
.    Expected undefined to equal 1..

    Error: Expected undefined to equal 1.

9) fibonacci DOES accept strings
  Message:
.    Expected undefined to equal 21..

    Error: Expected undefined to equal 21.

9 specs, 9 failures
Finished in 0.015 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-get-the-titles](./2-get-the-titles)

<a name="getTheTitles"></a>

## getTheTitles()

**Tests**
```
Started
.F.

Failures:
1) getTheTitles gets titles
  Message:
.    Expected undefined to equal [ 'Book', 'Book2' ]..

    Error: Expected undefined to equal [ 'Book', 'Book2' ].

1 spec, 1 failure
Finished in 0.004 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-leap-years](./2-leap-years)

<a name="leapYears"></a>

## leapYears()

**Tests**
```
Started
.F..F..F..F..F..F.

Failures:
1) leapYears works with non century years
  Message:
.    Expected undefined to equal true..

    Error: Expected undefined to equal true.

2) leapYears works with non century years
  Message:
.    Expected undefined to equal false..

    Error: Expected undefined to equal false.

3) leapYears works with ridiculously futuristic non century years
  Message:
.    Expected undefined to equal true..

    Error: Expected undefined to equal true.

4) leapYears works with century years
  Message:
.    Expected undefined to equal false..

    Error: Expected undefined to equal false.

5) leapYears works with century years
  Message:
.    Expected undefined to equal true..

    Error: Expected undefined to equal true.

6) leapYears works with century years
  Message:
.    Expected undefined to equal false..

    Error: Expected undefined to equal false.

6 specs, 6 failures
Finished in 0.014 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-palindromes](./2-palindromes)

<a name="palindromes"></a>

## palindromes()

**Tests**
```
Started
.F..F..F..F..F.

Failures:
1) palindromes works with single words
  Message:
.    Expected undefined to equal true..

    Error: Expected undefined to equal true.

2) palindromes works with punctuation
  Message:
.    Expected undefined to equal true..

    Error: Expected undefined to equal true.

3) palindromes works with multiple words
  Message:
.    Expected undefined to equal true..

    Error: Expected undefined to equal true.

4) palindromes works with multiple words
  Message:
.    Expected undefined to equal true..

    Error: Expected undefined to equal true.

5) palindromes doesn't just always return true
  Message:
.    Expected undefined to equal false..

    Error: Expected undefined to equal false.

5 specs, 5 failures
Finished in 0.009 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-caesar](./3-caesar)

<a name="caesar"></a>

## caesar()

**Tests**
```
Started
.F..F..F..F..F..F..F.

Failures:
1) caesar works with single letters
  Message:
.    Expected undefined to equal 'B'..

    Error: Expected undefined to equal 'B'.

2) caesar works with words
  Message:
.    Expected undefined to equal 'Bbb'..

    Error: Expected undefined to equal 'Bbb'.

3) caesar works with phrases
  Message:
.    Expected undefined to equal 'Mjqqt, Btwqi!'..

    Error: Expected undefined to equal 'Mjqqt, Btwqi!'.

4) caesar works with negative shift
  Message:
.    Expected undefined to equal 'Hello, World!'..

    Error: Expected undefined to equal 'Hello, World!'.

5) caesar wraps
  Message:
.    Expected undefined to equal 'A'..

    Error: Expected undefined to equal 'A'.

6) caesar works with large shift factors
  Message:
.    Expected undefined to equal 'Ebiil, Tloia!'..

    Error: Expected undefined to equal 'Ebiil, Tloia!'.

7) caesar works with large negative shift factors
  Message:
.    Expected undefined to equal 'Ebiil, Tloia!'..

    Error: Expected undefined to equal 'Ebiil, Tloia!'.

7 specs, 7 failures
Finished in 0.015 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-find-the-oldest](./3-find-the-oldest)

<a name="findTheOldest"></a>

## findTheOldest()

**Tests**
```
Started
.F..F..F.

Failures:
1) findTheOldest finds the oldest person!
  Message:
.    TypeError: Cannot read property 'name' of undefined.



2) findTheOldest finds the oldest person if someone is still living
  Message:
.    TypeError: Cannot read property 'name' of undefined.



3) findTheOldest finds the oldest person if the OLDEST is still living
  Message:
.    TypeError: Cannot read property 'name' of undefined.



3 specs, 3 failures
Finished in 0.006 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-pig-latin](./3-pig-latin)

<a name="translate"></a>

## translate()

**Tests**
```
Started
.F..F..F..F..F..F..F..F..F.

Failures:
1) #translate translates a word beginning with a vowel
  Message:
.    Expected undefined to equal 'appleay'..

    Error: Expected undefined to equal 'appleay'.

2) #translate translates a word beginning with a consonant
  Message:
.    Expected undefined to equal 'ananabay'..

    Error: Expected undefined to equal 'ananabay'.

3) #translate translates a word beginning with two consonants
  Message:
.    Expected undefined to equal 'errychay'..

    Error: Expected undefined to equal 'errychay'.

4) #translate translates two words
  Message:
.    Expected undefined to equal 'eatay iepay'..

    Error: Expected undefined to equal 'eatay iepay'.

5) #translate translates a word beginning with three consonants
  Message:
.    Expected undefined to equal 'eethray'..

    Error: Expected undefined to equal 'eethray'.

6) #translate counts "sch" as a single phoneme
  Message:
.    Expected undefined to equal 'oolschay'..

    Error: Expected undefined to equal 'oolschay'.

7) #translate counts "qu" as a single phoneme
  Message:
.    Expected undefined to equal 'ietquay'..

    Error: Expected undefined to equal 'ietquay'.

8) #translate counts "qu" as a consonant even when its preceded by a consonant
  Message:
.    Expected undefined to equal 'aresquay'..

    Error: Expected undefined to equal 'aresquay'.

9) #translate translates many words
  Message:
.    Expected undefined to equal 'ethay ickquay ownbray oxfay'..

    Error: Expected undefined to equal 'ethay ickquay ownbray oxfay'.

9 specs, 9 failures
Finished in 0.031 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-snake-case](./3-snake-case)

<a name="snakeCase"></a>

## snakeCase()

**Tests**
```
Started
.F..F..F..F..F..F.

Failures:
1) snakeCase works with simple lowercased phrases
  Message:
.    Expected undefined to equal 'hello_world'..

    Error: Expected undefined to equal 'hello_world'.

2) snakeCase works with Caps and punctuation
  Message:
.    Expected undefined to equal 'hello_world'..

    Error: Expected undefined to equal 'hello_world'.

3) snakeCase works with longer phrases
  Message:
.    Expected undefined to equal 'this_is_the_song_that_never_ends'..

    Error: Expected undefined to equal 'this_is_the_song_that_never_ends'.

4) snakeCase works with camel case
  Message:
.    Expected undefined to equal 'snake_case'..

    Error: Expected undefined to equal 'snake_case'.

5) snakeCase works with kebab case
  Message:
.    Expected undefined to equal 'snake_case'..

    Error: Expected undefined to equal 'snake_case'.

6) snakeCase works with WTF case
  Message:
.    Expected undefined to equal 'snake_case_is_awesome'..

    Error: Expected undefined to equal 'snake_case_is_awesome'.

6 specs, 6 failures
Finished in 0.016 seconds

```

[TOP](#Document-and-Pass)

<!-- END DOCS -->
