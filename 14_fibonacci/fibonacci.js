const fibonacci = function(arg) {
    let count;
    if (typeof arg !== 'number') {
        count = parseInt(arg);
    } else {
        count = arg;
    }

    if (count < 0) {
        return "OOPS";
    }
    if (count == 0) return 0;

    let a = 1;
    let b = 0;
    for (let i = 2; i<=count; i++) {
        let current = a + b;
        b = a;
        a = current;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
