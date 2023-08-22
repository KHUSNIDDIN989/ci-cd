const arr = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4]

console.log(arr.join("").split("").filter(e => +e != 4));