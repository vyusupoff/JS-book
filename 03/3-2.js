function isEven (a) {
        if (a < 0)  {return "wrong number"}
        if (a == 0) {return true}
        if (a == 1) {return false}
        a = a - 2;
        return isEven (a);
}
console.log (isEven(0), isEven(1), isEven(6), isEven(7), isEven(-1));