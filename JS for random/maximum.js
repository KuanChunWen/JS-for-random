function findBiggest(arr) {
    if(arr.length == 0){
        return undefined;
    }
    let biggestNumber = -1000000;

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > biggestNumber){
            biggestNumber = arr[i];
        }
    }

    return biggestNumber;
  }

  console.log(findBiggest([1,2,3,4,5,999]));




//   findBiggest([15,20,22,16,7]);
//   findBiggest([1,2,3,4,5,999]);
//   findBiggest([-11,0,-3,-4,-5,-999]);
//   findBiggest([]);
  