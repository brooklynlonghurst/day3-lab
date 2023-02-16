let backpack = []
backpack.push('tent', 'sandals', 'hat') //add element at end of array

backpack.unshift('beef jerky') //adds element at beginning of array

backpack.pop('hat') //removes last element in array

backpack.splice(1, 1,) //removes. takes up to 3 agruements (index, how many removed (what added))

let sunglasses = ('sunglasses')
backpack.push(sunglasses) //adds variable 

backpack.push('knife', 'toothbrush', 'blanket', 'flashlight', 'food')

let backpack2 = backpack.splice(4, 4,)


console.log("backpack:" ,backpack) 
//console.log("Item count:", backpack.length)
console.log("backpack2:", backpack2)

for(let i = 0; i < backpack.length; i++){ // 3 laws of 'for loops': iterator, conditions, increment
    console.log(backpack[i])
}

console.log('--------------')

for(let i = 0; i < 2; i++){  // print first 2 items in backpack2
    console.log(backpack2[i])
}

console.log('--------------')

for(let i = backpack.length - 3; i < backpack.length; i++){ // print the last 3 items in backpack
    console.log(backpack[i])
}   

let backpack22 = backpack2.slice(0, 2)

console.log("backpack22:", backpack22)