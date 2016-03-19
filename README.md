# ooxml-type
Module to get type of ooxml file

## Install

```
npm install ooxml-type
```

## Usage

```js
var fs = require('fs');
var ooxmlType = require('.');

var file = fs.readFileSync('./docx.docx');
console.log(ooxmlType(file));
// > docx

file = fs.readFileSync('./xlsx.xlsx');
console.log(ooxmlType(file));
// > xlsx

file = fs.readFileSync('./pptx.pptx');
console.log(ooxmlType(file));
// > pptx

file = fs.readFileSync('./pdf.pdf');
console.log(ooxmlType(file));
// > null
```
