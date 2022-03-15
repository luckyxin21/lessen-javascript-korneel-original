/**
 * Given an array, return the same array but make sure no value occurs more than once
 * @param {array} anArray
 * @return {array}
 */
function removeDoubles(anArray) {
    let noDoubleArray = [];

    for (let i = 0; i < anArray.length; i++) {
        // if (noDoubleArray.indexOf(anArray[i]) === -1) {
        if (!noDoubleArray.includes(anArray[i])) {
            noDoubleArray.push(anArray[i]);
        }
    }

    return noDoubleArray;
}

// function removeDoubles(anArray) {
//     for (let i = 0; i <= anArray.length - 1; i++) {
//         for (let j = i + 1; j <= anArray.length - 1; j++) {
//             if (anArray[i] === anArray[j]) {
//                 anArray.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return anArray;
// }

/**
 * Given an array of numbers, return the s
 * ame array containing only even numbers
 * @param {number[]} anArray
 * @return {number[]}
 */
function onlyEven(anArray) {
    let evenArray = [];

    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] % 2 === 0) {
            evenArray.push(anArray[i]);
        }
    }

    return evenArray;
}

// function onlyEven(anArray) {
//     for (let i = 0; i < anArray.length; i++) {
//         if (anArray[i] % 2 > 0) {
//             anArray.splice(i, 1);
//             i--;
//         }
//     }
//
//     return anArray;
// }

/**
 * Sort an array from low to high, write the logic yourself
 * @param {number[]} anArray
 * @return {number[]}
 */
function sort(anArray) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < anArray.length; i++) {
            if (i < anArray.length - 1) {
                let curItem = anArray[i];
                let nextItem = anArray[i + 1];

                if (curItem > nextItem) {
                    anArray[i] = nextItem;
                    anArray[i + 1] = curItem;

                    sorted = false;
                }
            }
        }
    }

    return anArray;
}

/**
 * Reverse the string
 * Try to keep the same casing (if first letter is
 * uppercase, make sure it is still uppercase in the reversed word
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    let strArray = str.split('');
    let reversedArray = [];

    for (let i = strArray.length - 1; i >= 0; i--) {
        reversedArray.push(strArray[i]);
    }

    for (let i = 0; i < reversedArray.length; i++) {
        if (strArray[i] === strArray[i].toUpperCase()) {
            reversedArray[i] = reversedArray[i].toUpperCase();
        } else {
            reversedArray[i] = reversedArray[i].toLowerCase();
        }
    }

    return reversedArray.join('');
}

/**
 * Given two arrays of values, return an array with only the values that occur in both arrays
 * @param {array} anArray
 * @param {array} otherArray
 * @return {array}
 */
function findSimilars(anArray, otherArray) {
    let similars = [];

    for (let i = 0; i < anArray.length; i++) {
        let foundIndex = otherArray.indexOf(anArray[i]);

        if (foundIndex > -1) {
            similars.push(anArray[i]);
            otherArray.splice(foundIndex, 1);
        }
    }

    return similars;
}

// function findSimilars(anArray, otherArray) {
//     let similarsArray = [];
//
//     for (let i = 0; i < anArray.length; i++) {
//         for (let j = 0; j < otherArray.length; j++) {
//             if (anArray[i] === otherArray[j]) {
//                 similarsArray.push(anArray[i]);
//                 otherArray[j] = null;
//                 anArray[i] = null;
//             }
//         }
//     }
//     return similarsArray;
// }

/**
 * Given an array return an array with the same values but in a random order
 * @param {array} anArray
 * @return {array}
 */
function scramble(anArray) {
    let scrambleArray = [];

    while (anArray.length > 0) {
        let randomIndex = Math.floor(Math.random() * anArray.length);
        let removedItem = anArray.splice(randomIndex, 1);

        scrambleArray.push(removedItem[0]);
    }

    return scrambleArray;
}

// function scramble(anArray) {
//     for (let i = 0; i < anArray.length; i++) {
//         let randomIndex = Math.floor(Math.random() * anArray.length);
//         let randomVal = anArray[randomIndex];
//
//         anArray[randomIndex] = anArray[i];
//         anArray[i] = randomVal;
//     }
//
//     return anArray;
// }

/**
 * Given two arrays, check if the second array (subArray) is a sublist of the first (bigArray)
 * @param {array} bigArray
 * @param {array} subArray
 * @return {boolean}
 */
// function isSublist(bigArray, subArray) {
//     let isSubArray = true;
//     let prevIndex = bigArray.indexOf(subArray[0]);
//
//     if (prevIndex === -1) {
//         return false;
//     }
//
//     for (let i = 1; i < subArray.length; i++) {
//         let foundIndex = bigArray.indexOf(subArray[i]);
//
//         if (foundIndex !== prevIndex + 1) {
//             isSubArray = false;
//             break;
//         }
//
//         prevIndex = foundIndex;
//     }
//
//     return isSubArray;
// }

// function isSublist(bigArray, subArray) {
//     for (let i = 0; i < bigArray.length; i++) {
//         let temp = bigArray.slice(i, subArray.length + i);
//
//         if (temp.join() === subArray.join()) {
//             return true;
//         }
//     }
//     return false;
// }

// function isSublist(bigArray, subArray) {
//     let startIndex = bigArray.indexOf(subArray[0]);
//
//     if (startIndex === -1) {
//         return false;
//     }
//
//     let temp = bigArray.slice(startIndex, startIndex + subArray.length);
//
//     if (temp.join() === subArray.join()) {
//         return true;
//     }
//
//     return false;
// }

function isSublist(bigArray, subArray) {
    let subStr = subArray.join('');
    let bigStr = bigArray.join('');

    // bigStr.includes(subStr, 0) > true / false
    // if (bigStr.includes(subStr, 0)) {
    //     return true;
    // } else {
    //     return false;
    // }
    
    return bigStr.includes(subStr);
}
