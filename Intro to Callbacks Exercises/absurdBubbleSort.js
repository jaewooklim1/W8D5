const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`is ${el1} greater than ${el2} ? `, function(ans) {
        if (ans === "yes") {
            callback(true);
        } else {
            callback(false);
        }
    });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i === arr.length - 1) {
        return outerBubbleSortLoop(madeAnySwaps);
    }
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
        if (isGreaterThan) {
            const element = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = element;
            madeAnySwaps = true;
        }
        return innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
}

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    }
    outerBubbleSortLoop(true);
}


absurdBubbleSort([6,10, "a", [2,3], 9], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });


