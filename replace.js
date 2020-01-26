var replace = require("replace");

replace({
    regex: `<script src="runtime-es2015.js" type="module"></script><script src="runtime-es5.js" nomodule defer></script><script src="polyfills-es5.js" nomodule defer></script><script src="polyfills-es2015.js" type="module"></script><script src="main-es2015.js" type="module"></script><script src="main-es5.js" nomodule defer></script>`,
    replacement: `<script src="my-element.js" type="module"></script>`,
    paths: ['./dist/index.html'],
    recursive: true,
    silent: true,
});