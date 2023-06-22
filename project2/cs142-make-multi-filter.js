"use strict";

function cs142MakeMultiFilter(originalArray) {
    let currentArray = originalArray.slice(); // makes a copy of the original array
  
    function arrayFilterer(filterCriteria, callback) {
      if (typeof filterCriteria !== 'function') {
        return currentArray;
      }
      currentArray = currentArray.filter(filterCriteria);
  
      if (typeof callback === 'function') {
        callback.call(originalArray, currentArray);
      }
      return arrayFilterer;
    }
    return arrayFilterer;
  }