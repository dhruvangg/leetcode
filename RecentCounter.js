
class RecentCounter {
    constructor() {
        this.reqTime = [];
    }
    /**
     * @param {number} t
     * @return {number}
     */
    ping(t) {
        this.reqTime.push(t)
        const limit = t - 3000;

        this.reqTime.forEach(el => {
            if(!(el >= limit && el <= t)) {
                this.reqTime.shift()
            }
        })
        return this.reqTime.length
    }
}


var obj = new RecentCounter()
console.log(obj.ping(1));
console.log(obj.ping(642));
console.log(obj.ping(1849));
console.log(obj.ping(4921));
console.log(obj.ping(5936));
console.log(obj.ping(5957));