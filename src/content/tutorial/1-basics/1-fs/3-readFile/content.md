---
type: lesson
title: "Reading a file: the promises module variant"
focus: /index.js
---

# Reading a file: the promises module variant

`readFileSync` is a quick way to read the contents of a file. It's fine to use it for small files, but for large files you could [block the Event Loop](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop).

To avoid it, there are 2 ways:
- use the `node:fs.readFile` function, which accepts a callback function as an argument;
- use the `node:fs/promises` module, which has a modern interface by returning a promise.

In this lesson, we'll use that module to accomplish our goal.

## Top level await

In the proposed solution, we use the `await` keyword at the top level. It means that you can use the `await` keyword from any part of the code, even outside of an async function.

It implies that modules with child modules that use `await` will wait for the child modules to execute before they themselves run, all while not blocking other child modules from loading.

Node.js supports this feature since [v14.8.0](https://nodejs.org/en/blog/release/v14.8.0).