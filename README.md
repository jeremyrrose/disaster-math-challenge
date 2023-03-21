# Disaster Math

**OH NO!!!** 

Due to a rupture in spacetime, the very nature of reality has shifted, and there are entirely new rules for simple arithmetic operations like "add", "subtract", etc.

You thought `2 + 2` equals `4`? Well, OK... it still does, actually. But `3 + 3` equals `9`, and `3 + 4` equals `13`. This is terrible, and we don't have time to learn these rules.

Fortunately, some forward-thinking programmers anticipated the spacetime disaster, and created an NPM package called `disaster-math` that exports four functions -- `add`, `subtract`, `multiply`, and `divide` -- that we can use to sort out this mess.

## Your task

In `index.js` in this directory, the `doArithmetic` function currently returns an object with the results of old-fashioned arithmetic performed on `number1` and `number2`. Provided `3` and `4` as arguments, the function returns:

```js
{ add: 7, subtract: -1, multiply: 12, divide: 0.75 }
```

Unfortunately, this is no longer correct. In the current universe, the function should return:

```js
{ add: 13, subtract: 0, multiply: 28, divide: 3 }
```

It doesn't matter if this makes sense, and you don't have to understand the new crazy math. The Node developer community has you covered!

First, install `disaster-math`:
```bash
npm i disaster-math
```

Then import the pre-built functions from `disaster-math` into `index.js` and use them to return the "correct" answers!

## Test

Run `node index.js` for feedback!

## Hints

Look at the `disaster-math` documentation: https://www.npmjs.com/package/disaster-math

First just try importing `disaster-math`:

```js
import DisasterMath from 'disaster-math'
```

Can you `console.log(DisasterMath)`?

Are there some functions in there? Look at the documentation again for usage. :)
