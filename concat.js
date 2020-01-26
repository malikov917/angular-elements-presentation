var concat = require('concat');

const js = [
    './dist/angular-elements-nine/runtime-es2015.js',
    './dist/angular-elements-nine/polyfills-es2015.js',
    './dist/angular-elements-nine/main-es2015.js'
]

const index = [
    './dist/angular-elements-nine/index.html'
]

const styles = [
    './dist/angular-elements-nine/styles.css'
]

concat(js, './dist/my-element.js')
concat(index, './dist/index.html');
concat(styles, './dist/styles.css');
console.info('Custom elements created successfully!')