---
type: lesson
title: "Writing a file: the promises module variant"
focus: /index.js
---

# Writing a file: the promises module variant

`writeFileSync`, as `readFileSync`, is a quick way to write the contents of a file. It's fine to use it for small files, but for large files, even with this function, you could [block the Event Loop](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop).

To avoid it, there are 2 ways:
- use the `node:fs.writeFile` function, which accepts a callback function as an argument;
- use the `node:fs/promises` module, which has a modern interface by returning a promise.

In this lesson, we'll use that module to accomplish our goal.