
function oddNumber(arr){
    for (let i = 0; i < arr.length; i++) {
    uneven = arr[i];
    if (uneven % 2 != 0) {
        return true;
    }
}
return false;
}

function hasAZero(num){
    return num.toString().split('').some(function(val){
      return val === '0';
    })
  }

  function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
      return val % 2 !== 0;
    })
  }
  
  function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
  }

  let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ];

  function hasCertainKey(arr, key){
    return arr.every(function(val){
      return key in val
    })
  }
  let arr2 = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]
  function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
      return val[key] === searchValue;
    })
  }