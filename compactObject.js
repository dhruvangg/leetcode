var compactObject = function (obj) {
    if (!obj && obj.constructor === Object) {
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                const element = object[key];
                
            }
        }
    } else if (!obj && obj.constructor === Array) {
        return obj.filter(el => {
            if(typeof el === 'object' && !el) {
                return compactObject(el)
            }
            return Boolean(el)
        });
    }
};


// console.log(compactObject([null, 0, false, 1]));

// compactObject({"a": null, "b": [false, 1]})
console.log(compactObject([null, 0, 5, [0], [false, 16]]));
