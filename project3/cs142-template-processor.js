"use strict";

function Cs142TemplateProcessor(template) {
    this.template = template;
  }
  
  Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
    var filledTemplate = this.template;
  
    // Replace each {{property}} with dictionary[property]
    for (var key in dictionary) {
        if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
            var regExp = new RegExp("{{" + key + "}}", 'g');
            filledTemplate = filledTemplate.replace(regExp, dictionary[key]);
        }
    }
    // removes any remaining {{property}} patterns from filledTemplate string 
    filledTemplate = filledTemplate.replace(/{{\s*([\w]*)\s*}}/g, '');
    return filledTemplate;
  };