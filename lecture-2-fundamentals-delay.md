# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
// Example
setTimeout(function(){
    console.log('Hello')
} 1000)
```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
// Example
const myTimer = setInterval(function(){
    console.log('here')
}1000)
clearInterval(myTimer) // to stop the interval
```
Like setTimeout(), but repeats on an interval indefinitely.
---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
// Example

```

---


