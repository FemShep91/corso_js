'use strict';

var arr = [], arr1 = [];
var x = 0;
var z = 0;
var y = 1;

while(x < 2){

    arr1=[];
    z = 0;
    while(z < 3){
        arr1[z] = y;
        z++;
        y++;
    }

    arr[x] = arr1
    x++;
}

console.log(arr);