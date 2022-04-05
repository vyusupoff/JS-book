function min(a,b) {
    if (a < b) {
        return a;
    }
    if (b < a) {
        return b;
    } else {
        return "eqal";
    }
}
console.log (min (1,2), min (3,2), min (4,4));