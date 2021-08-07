<div align="center"><ins>

[English](/../../)

</ins></div>

Простой Gulp плагин, единственная задача которого - удаление в потоке обработки файла строк, заканчивающихся на **-DEL**. Написан, в основном, с познавательной целью процесса создания npm пакетов, но, возможно, будет полезен, если необходимо простое решение данной задачи, без желания углубляться в процесс ее реализации.

# Пример
Веб приложение в html подключает внешние скрипты библиотеку, которая, при этом, используется в процессе написания кода приложения на **TypeScript**.

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
>**Примечание**
>
>Так же есть и установлены npm пакеты данной библиотеки, написанной на **TypeScript**.
>
>---

После запуска и выполнения подключаемых скриптов, модули библиотеки будут доступны в глобальной области видимости. При этом, в процессе написания приложения, для разрешения имен и типов, как вариант, у нас есть возможность использовать import, либо иную необходимую функциональность, при этом завершая эти строки **-DEL**.

```javascript
import * as iBABYLON from "@babylonjs/core"; // -DEL
import * as iGUI from "@babylonjs/gui"; // -DEL

const BABYLON = iBABYLON as typeof iBABYLON & { GUI: typeof iGUI }; // -DEL

const canvas = document.getElementsByTagName("canvas")[0] as HTMLCanvasElement;
const engine = new BABYLON.Engine(canvas);
...
```
При последующей компиляции помеченные строки будут вырезаны плагином, позволяя без ошибок скомпилировать и запустить приложение.

# Применение

## Установка:
>___
>npm i gulp-del-lines -save-dev
>___

## Использование:

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
