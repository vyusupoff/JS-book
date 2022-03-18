let size = 8;
let pattern = ""
for (let j = 1; j <= size; j++) {
    for (let i = 1; i <= size; i++) {
        pattern += (i+j) % 2 ? "#" : " ";
    }
    pattern += "\n";
}
console.log (pattern);