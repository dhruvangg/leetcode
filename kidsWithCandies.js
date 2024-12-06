var kidsWithCandies = function (candies, extraCandies) {
    let newCandies = []
    for (let i = 0; i < candies.length; i++) {
        const element = candies[i];
        const newICandies = element + extraCandies;
        let flag = true;
        for (let j = 0; j < candies.length; j++) {
            if(newICandies < candies[j]){
                flag = false;
            }
        }
        newCandies.push(flag)
    }
    return newCandies
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));


