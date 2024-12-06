const flatArray = (arr) => {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].constructor === Array) {
            result.push(...flatArray(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result;
}


console.log(flatArray([1, 2, 3, 4, [5, 6, 6, 7], 8, 9, [0, 78, [6, 56], 4, 4], 34, 4]));

