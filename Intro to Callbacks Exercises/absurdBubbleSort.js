const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {
    function askIfGreaterThan(el1, el2, callback) {
        reader.question(`is ${el1} greater than ${el2} ?`, function(ans) {
            if (ans === "yes") {
                callback(true);
            } else {
                callback(false);
            }
        })
    }
}