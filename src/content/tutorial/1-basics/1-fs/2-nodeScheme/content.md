---
type: lesson
title: The 'node:' scheme
focus: /index.js
---

# The 'node:' scheme

The `fs` module is a built-in module in Node.js.

Node.js provides other built-in modules, like: `path`, `http`, `stream`...and many more.

Even if you can import those modules just by their names, instead of doing so it's recommended to use the `node:` scheme.

The `node:` scheme can be used to import Node.js built-in modules.

In this exercise, insert it before the `fs` module name.

## Note

The new built-in modules created after Node.js version 16, like `sqlite` in Node.js version 22.5, are available only using the `node:` scheme.