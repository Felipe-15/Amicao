let list = ["cachorro", "rato", "gato", "carvalho", "garra", "ramo"];
let search = "rat";

let possibleWords = [];
let test = true;

list.forEach((_, word) => {
    search.split("").forEach((_, letter) => {
        if (list[word][letter] !== search[letter]) {
            test = false;
        }
    });
    if (test) {
        possibleWords.push(list[word]);
    } else {
        test = true;
    }
});

console.log(possibleWords);
