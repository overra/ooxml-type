'use strict';

var Zip = require('adm-zip');
var isOoxml = require('is-ooxml');

var XLSX = /PartName\=\"\/xl/;
var DOCX = /PartName\=\"\/word/;
var PPTX = /PartName\=\"\/ppt/;

module.exports = function(buffer) {
  if (!isOoxml(buffer)) {
    return null;
  }
  
  var zip = new Zip(buffer);
  var entries = zip.getEntries();
  var type;

  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (entry.name === '[Content_Types].xml') {
      var data = entry.getData().toString();

      if (XLSX.test(data)) {
        return 'xlsx';
      } else if (DOCX.test(data)) {
        return 'docx';
      } else if (PPTX.test(data)) {
        return 'pptx';
      }
    }
  }
}
