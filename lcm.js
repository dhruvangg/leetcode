function findLCM(arr) {
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res = (res * arr[i]) / gcd(res, arr[i]);
    }
    return res;
}

var fractionAddition = function (expression) {
    const fractions = expression.match(/-?\d+\/\d+/g);

    let arr = []
    for (let i = 0; i < fractions.length; i++) {
        let lower = Number(fractions[i].split('/')[1])
        if (arr.indexOf(lower) === -1) {
            arr.push(lower)
        }
    }


    if (arr.length === 1) {
        let upperAdd = 0
        for (let i = 0; i < fractions.length; i++) {
            let upper = Number(fractions[i].split('/')[0])
            upperAdd += upper
        }
        return upperAdd + '/' +arr;
    }



};

console.log(fractionAddition("-1/2+1/2"));


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


console.log('GCD', gcd(100,150));
