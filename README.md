<div align="center"><ins>

[Русский](https://github.com/IPcorps/gulp-del-lines/blob/main/README_RU.md)

</ins></div>

A simple Gulp plugin whose only task is to delete lines ending in **-DEL** in the file processing stream. It is written mainly for the cognitive purpose of the process of creating npm packages, but it may be useful if a simple solution to this problem is needed, without the desire to delve into the process of its implementation.

# Example
A web application in html connects external scripts to the library, which, at the same time, is used in the process of writing the application code in **TypeScript**.

```html
...
<script src="libs/babylon.js" defer></script>
<script src="libs/loaders.js" defer></script>
<script src="libs/gui.js" defer></script>

<!-- A script that is written and compiled from TypeScript using theabove libraries. -->
<script src="index.js" defer></script>
...
```

>---
>**Note**
>
>There are also installed npm packages of this library, written in **TypeScript**
>
>---

After launching and executing the plug-in scripts, the library modules will be available in the global scope. At the same time, in the process of writing an application, for resolving names and types, as an option, we have the opportunity to use import, or other necessary functionality, ending these lines with **-DEL**.

```javascript
import * as iBABYLON from "@babylonjs/core"; // -DEL
import * as iGUI from "@babylonjs/gui"; // -DEL

const BABYLON = iBABYLON as typeof iBABYLON & { GUI: typeof iGUI }; // -DEL

const canvas = document.getElementsByTagName("canvas")[0] as HTMLCanvasElement;
const engine = new BABYLON.Engine(canvas);
...
```
During subsequent compilation, the marked lines will be cut by the plugin, allowing you to compile and run the application without errors.

# Applying

## Installation:
>___
>npm i gulp-del-lines -save-dev
>___

## Using:

```javascript
...
import gulpdel from "gulp-del-lines";
// const gulpdel = require("gulp-del-lines");
...
gulp.src(pathFrom)
    .pipe(gulpdel)
    .pipe(pathTo);
...
```
