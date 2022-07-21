// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// an array of common letters
var commonLettersArray = [];
var letters16Array = [];

function AddToArrayOfCommonLetters(limit, letter) {

    for (let i = 0; i < limit; i++) {
        commonLettersArray.push(letter);
    }
}

function BuildCommonLettersArray() {

    for (let i = 0; i < 100; i++) {



        // add each letter to the array //
        AddToArrayOfCommonLetters(16, 'B');
        AddToArrayOfCommonLetters(44, 'D');
        AddToArrayOfCommonLetters(120, 'E');
        AddToArrayOfCommonLetters(17, 'G');
        AddToArrayOfCommonLetters(64, 'H');
        AddToArrayOfCommonLetters(80, 'A');
        AddToArrayOfCommonLetters(40, 'L');
        AddToArrayOfCommonLetters(30, 'C');
        AddToArrayOfCommonLetters(80, 'I');
        AddToArrayOfCommonLetters(8, 'K');
        AddToArrayOfCommonLetters(80, 'O');
        AddToArrayOfCommonLetters(62, 'R');
        AddToArrayOfCommonLetters(80, 'S');
        AddToArrayOfCommonLetters(25, 'F');
        AddToArrayOfCommonLetters(30, 'M');
        AddToArrayOfCommonLetters(4, 'J');
        AddToArrayOfCommonLetters(34, 'U');
        AddToArrayOfCommonLetters(80, 'N');
        AddToArrayOfCommonLetters(90, 'T');
        AddToArrayOfCommonLetters(5, 'Q');
        AddToArrayOfCommonLetters(17, 'P');
        AddToArrayOfCommonLetters(20, 'W');
        AddToArrayOfCommonLetters(12, 'V');
        AddToArrayOfCommonLetters(2, 'Z');
        AddToArrayOfCommonLetters(20, 'Y');
        AddToArrayOfCommonLetters(4, 'X');

    }

}

function PrintCommonLetters() {
    console.log("COMMON LETTERS ARRAY: " + commonLettersArray);
}

function PrintLengthOfCommonLetters() {
    console.log("LENGTH OF COMMON LETTERS ARRAY: " + commonLettersArray.size());
}


// -> returns a string array of 16 random letters from the common letters array
function Make16RandomLettersFromCommonLetterArray() {
    // var str = commonLettersArray.toString();

    //-----
    console.log("TESTING: " + commonLettersArray[200]);
    //-----


    for (let i = 0; i < 16; i++) {

        var random = Math.floor(Math.random() * commonLettersArray.length) + 1;
        var char = commonLettersArray[random]; // commonLettersArray[200].toLocaleString;
        letters16Array.push(char);
    }

}

function Get16RandomLettersFromCommonLettersArray() {
    return letters16Array;
}

function Print16LettersArray() {
    console.log("LETTERS 16 ARRAY: " + letters16Array);
}




