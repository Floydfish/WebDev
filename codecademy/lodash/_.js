const _ = {
    clamp(num, lowerBound, upperBound){
      return Math.min(Math.max(num, lowerBound), upperBound);
    },
    inRange(num, startValue, endValue){
      if (typeof endValue === 'undefined') {
        endValue = startValue;
        startValue = 0;
      } else if (startValue > endValue) {
        startValue = startValue + endValue;
        endValue = startValue - endValue;
        startValue = startValue - endValue;
      }
      return (num >= startValue && num < endValue);
    },
    words(string){
      return string.split(" ");
    },
    pad(string,length){
      if (string.length < length) {
        let leftSpace = Math.floor((length - string.length)/2)
        let leftPad = ' '.repeat(leftSpace);
        let rightPad = ' '.repeat((length - leftSpace - string.length));
        return leftPad + string + rightPad;
      } else {
        return string;
      }
    },
    has(object,key){
      return (typeof object[key] !== 'undefined');
    },
    invert(object){
      let invertedObject = {};
      for (let x in object) { // property && object[property]
        const originalValue = object[x];
        invertedObject = {originalValue : x}; // {object[x] : x} ?
      };
      return invertedObject;
    },
    findKey(object, predicate) {
      let check = 0;
      for (let x in object) {
        if (predicate(object[x])) {
          check++;
          return x;
        };
      };
      if (check) {
        return undefined;
      };
    },
  //}; // <- Never forget
    
  //   findKey(object, predicate) {
  //     for (let key in object) {
  //       let value = object[key];
  //       let predicateReturnValue = predicate(value)
  //       if (predicateReturnValue) {
  //         return key;
  //       };
  //     };
  //     undefined
  //     return undefined;
  //   },
  // };
    drop(array, number=1) {
      // return an array excluding the number quantity of items, number default = 1;
      return array.slice(number, (array.length));
    },
    dropWhile(array, predicate){
      const cb = (element, index) => {
        return !predicate(element, index, array);
      };
      let dropNumber = array.findIndex(cb);
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray
    },
    chunk(array, size=1){
      let newArr = [];
      for (let i = 0; i < array.length; i+=size) {
        let chunkArr = array.slice(i, i+size);
        newArr.push(chunkArr);
      };
      return newArr
    },
    
    
  };
  
  // Do not write or modify code below this line.
  module.exports = _;