var largestAltitude = function(gain) {
    let max = 0, start = 0;
    for (let i = 0; i < gain.length; i++) {
        start += gain[i]
        if(start > max) {
            max = start
        }
    }

    console.log(max);
    
};


largestAltitude([-5,1,5,0,-7])
largestAltitude([-4,-3,-2,-1,4,3,2])