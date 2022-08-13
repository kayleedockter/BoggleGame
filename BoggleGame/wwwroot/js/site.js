// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// an array of common letters
var commonLettersArray = [];
var letters16Array = [];
var buttonNodes16Array = []; // an array of the buttons that will get clicked

// function AddButtonNodeToButtonNodeArray(btnNodeGiven){
function AddButtonNodeToButtonNodeArray(btnNode) {
    buttonNodes16Array.push(btnNode);
}

// Removes and returns the most recent node, ( LIFO ), from the STACK [ eg 1,2,3 nodes node 3 gets removed ]
function RemoveButtonNodeFromButtonNodeArray() {
    return buttonNodes16Array.pop();
}

function RemoveAllButtonNodesFromButtonNodesArray() {
    while (!(buttonNodes16Array.length === 0)) {
        RemoveButtonNodeFromButtonNodeArray();
    }
}

function SetButtonNodeIsClicked(btnNode) {
    btnNode.setBtnIsClicked(btnNode);
}

function PrintButtonNodesArray() {

    if (!(buttonNodes16Array === 0)) {

        var limitOfNodes = buttonNodes16Array.length; // nodes are equal to the current size of the butttonNodesArray. 

        for (let i = 0; i < limitOfNodes; i++) {
            console.log("output as name: " + buttonNodes16Array[i].getBtnName);
            console.log("output as index: " + buttonNodes16Array[i].getBtnIndex);
            console.log("output as letter: " + buttonNodes16Array[i].getLetterValue);
        }

    }

}

function DisplayCurrentGuessWord() {

    var strArray = [];

    if (!(buttonNodes16Array === 0)) {

        var limitOfNodes = buttonNodes16Array.length; // nodes are equal to the current size of the butttonNodesArray. 

        for (let i = 0; i < limitOfNodes; i++) {
            strArray[i] = buttonNodes16Array[i].getLetterValue;
        }
    }
    document.getElementById("guessWord").innerHTML = strArray.toString().replaceAll(',', '');
}

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


// -> builds an string array of 16 random letters from the common letters array
function Make16RandomLettersFromCommonLetterArray() {
    //console.log("TESTING: " + commonLettersArray[200]);

    // clears the array of any letters from the previous 16-letter array
    while (!(letters16Array.length === 0)) {
        letters16Array.pop();
    }

    // builds a new array of 16 random letters
    for (let i = 0; i < 16; i++) {
        var random = Math.floor(Math.random() * commonLettersArray.length) + 1;
        var char = commonLettersArray[random]; // commonLettersArray[200].toLocaleString;
        letters16Array.push(char);
    }

}

function Get16RandomLetters() {
    return letters16Array;
}


function Get16RandomLettersFromCommonLettersArray() {
    return letters16Array;
}

function Print16LettersArray() {
    console.log("LETTERS 16 ARRAY: " + letters16Array);
}

// FUNCTIONS TO CALL UP NODES ETC //
var btnNode1;
var btnNode2;
var btnNode3;
var btnNode4;
var btnNode5;
var btnNode6;
var btnNode7;
var btnNode8;
var btnNode9;
var btnNode10;
var btnNode11;
var btnNode12;
var btnNode13;
var btnNode14;
var btnNode15;
var btnNode16;

var btnClicked1 = document.getElementById('btnClick1');
var btnClicked2 = document.getElementById('btnClick2');
var btnClicked3 = document.getElementById('btnClick3');
var btnClicked4 = document.getElementById('btnClick4');
var btnClicked5 = document.getElementById('btnClick5');
var btnClicked6 = document.getElementById('btnClick6');
var btnClicked7 = document.getElementById('btnClick7');
var btnClicked8 = document.getElementById('btnClick8');
var btnClicked9 = document.getElementById('btnClick9');
var btnClicked10 = document.getElementById('btnClick10');
var btnClicked11 = document.getElementById('btnClick11');
var btnClicked12 = document.getElementById('btnClick12');
var btnClicked13 = document.getElementById('btnClick13');
var btnClicked14 = document.getElementById('btnClick14');
var btnClicked15 = document.getElementById('btnClick15');
var btnClicked16 = document.getElementById('btnClick16');

var btnSubmitWord = document.getElementById('btnSubmitWord');

var btnPlayGame = document.getElementById('btnPlayGame');

// preset all of the background colors to the light purple:  "#AB12CD";
ResetAllButtonColorsToPurple();

// CREATES ALL THE BUTTON NODES FOR THE GAME BOARD //
function CreateNodes() {
    btnNode1 = new ButtonNode("btnNode1", 1); // new Button(Name, Index);
    btnNode2 = new ButtonNode("btnNode2", 2);
    btnNode3 = new ButtonNode("btnNode3", 3);
    btnNode4 = new ButtonNode("btnNode4", 4);
    btnNode5 = new ButtonNode("btnNode5", 5);
    btnNode6 = new ButtonNode("btnNode6", 6);
    btnNode7 = new ButtonNode("btnNode7", 7);
    btnNode8 = new ButtonNode("btnNode8", 8);
    btnNode9 = new ButtonNode("btnNode9", 9);
    btnNode10 = new ButtonNode("btnNode10", 10);
    btnNode11 = new ButtonNode("btnNode11", 11);
    btnNode12 = new ButtonNode("btnNode12", 12);
    btnNode13 = new ButtonNode("btnNode13", 13);
    btnNode14 = new ButtonNode("btnNode14", 14);
    btnNode15 = new ButtonNode("btnNode15", 15);
    btnNode16 = new ButtonNode("btnNode16", 16);
}

// appears to be coorect values
function MakeAllValidEdgeConnections() {
    // button1 connects to 2, 5, and 6

    btnNode1.arrBtnIndices[0] = 2;
    btnNode1.arrBtnIndices[1] = 5;
    btnNode1.arrBtnIndices[2] = 6;

    // button2 connects to 1, 3, 5, 6, 7

    btnNode2.arrBtnIndices[0] = 0;
    btnNode2.arrBtnIndices[1] = 1;
    btnNode2.arrBtnIndices[2] = 3;
    btnNode2.arrBtnIndices[3] = 5;
    btnNode2.arrBtnIndices[4] = 6;
    btnNode2.arrBtnIndices[5] = 7;

    // button3 connects to 2, 4, 6, 7, 8

    btnNode3.arrBtnIndices[0] = 0;//--
    btnNode3.arrBtnIndices[1] = 2;//--
    btnNode3.arrBtnIndices[2] = 4;//--
    btnNode3.arrBtnIndices[3] = 6;//--
    btnNode3.arrBtnIndices[4] = 7;//--
    btnNode3.arrBtnIndices[5] = 8;//--

    // button4 connects to 3, 7, 8 

    btnNode4.arrBtnIndices[0] = 0;//--
    btnNode4.arrBtnIndices[1] = 3;//--
    btnNode4.arrBtnIndices[2] = 7;//--
    btnNode4.arrBtnIndices[3] = 8;//--

    // button 5 connects to 1, 2, 6, 8, 9 10

    btnNode5.arrBtnIndices[0] = 0;
    btnNode5.arrBtnIndices[1] = 1;//--
    btnNode5.arrBtnIndices[2] = 2;//--
    btnNode5.arrBtnIndices[3] = 6;//--
    btnNode5.arrBtnIndices[4] = 8;//--
    btnNode5.arrBtnIndices[5] = 9;//--
    btnNode5.arrBtnIndices[6] = 10;//--

    // button 6 connects to 1, 2, 3, 5, 7, 9, 10, 11

    btnNode6.arrBtnIndices[0] = 0;
    btnNode6.arrBtnIndices[1] = 1;//--
    btnNode6.arrBtnIndices[2] = 2;//--
    btnNode6.arrBtnIndices[3] = 3;//--
    btnNode6.arrBtnIndices[4] = 5;//--
    btnNode6.arrBtnIndices[5] = 7;//--
    btnNode6.arrBtnIndices[6] = 9;//--
    btnNode6.arrBtnIndices[7] = 10;//--
    btnNode6.arrBtnIndices[8] = 11;//--

    // button 7 connects to 2, 3, 4, 6, ,8 , 10, 11 , 12

    btnNode7.arrBtnIndices[0] = 0;
    btnNode7.arrBtnIndices[1] = 2;//--
    btnNode7.arrBtnIndices[2] = 3;//--
    btnNode7.arrBtnIndices[3] = 4;//--
    btnNode7.arrBtnIndices[4] = 6;
    btnNode7.arrBtnIndices[5] = 8;//--
    btnNode7.arrBtnIndices[6] = 10;//--
    btnNode7.arrBtnIndices[7] = 11;//--
    btnNode7.arrBtnIndices[8] = 12;//--

    // button 8 connects to 3, 4, 7, 11, 12

    btnNode8.arrBtnIndices[0] = 0;
    btnNode8.arrBtnIndices[1] = 3;//--
    btnNode8.arrBtnIndices[2] = 4;//--
    btnNode8.arrBtnIndices[3] = 7;//--
    btnNode8.arrBtnIndices[4] = 11;//--
    btnNode8.arrBtnIndices[5] = 12;//--

    // button 9 connects to 5, 6, 10, 13, 14

    btnNode9.arrBtnIndices[0] = 0;
    btnNode9.arrBtnIndices[1] = 5;//--
    btnNode9.arrBtnIndices[2] = 6;//--
    btnNode9.arrBtnIndices[3] = 10;//--
    btnNode9.arrBtnIndices[4] = 13;//--
    btnNode9.arrBtnIndices[5] = 14;//--

    // button 10 connects to 5, 6, 7, 9, 11, 13, 14, 15

    btnNode10.arrBtnIndices[0] = 0;
    btnNode10.arrBtnIndices[1] = 5;//--
    btnNode10.arrBtnIndices[2] = 6;//--
    btnNode10.arrBtnIndices[3] = 7;//--
    btnNode10.arrBtnIndices[4] = 9;//--
    btnNode10.arrBtnIndices[5] = 11;//--
    btnNode10.arrBtnIndices[6] = 13;//--
    btnNode10.arrBtnIndices[7] = 14;//--
    btnNode10.arrBtnIndices[8] = 15;//--

    // button 11 connects to 6, 7, 8, 10, 12, 14, 15, 16

    btnNode11.arrBtnIndices[0] = 0;
    btnNode11.arrBtnIndices[1] = 6;//--
    btnNode11.arrBtnIndices[2] = 7;//--
    btnNode11.arrBtnIndices[3] = 8;//--
    btnNode11.arrBtnIndices[4] = 10;//--
    btnNode11.arrBtnIndices[5] = 12;//--
    btnNode11.arrBtnIndices[6] = 14;//--
    btnNode11.arrBtnIndices[7] = 15;//--
    btnNode11.arrBtnIndices[8] = 16;//--

    // button 12 connects to 7, 8, 11, 15, 16

    btnNode12.arrBtnIndices[0] = 0;
    btnNode12.arrBtnIndices[1] = 7;
    btnNode12.arrBtnIndices[2] = 8;
    btnNode12.arrBtnIndices[3] = 11;
    btnNode12.arrBtnIndices[4] = 15;
    btnNode12.arrBtnIndices[5] = 16;

    // button 13 connects to 9, 10, 14

    btnNode13.arrBtnIndices[0] = 0;
    btnNode13.arrBtnIndices[1] = 9;
    btnNode13.arrBtnIndices[2] = 10;
    btnNode13.arrBtnIndices[3] = 14;

    // button 14 connects to 9, 10, 11, 13, 15

    btnNode14.arrBtnIndices[0] = 0;
    btnNode14.arrBtnIndices[1] = 9;
    btnNode14.arrBtnIndices[2] = 10;
    btnNode14.arrBtnIndices[3] = 11;
    btnNode14.arrBtnIndices[4] = 13;
    btnNode14.arrBtnIndices[5] = 15;

    // button 15 conencts to 10, 11, 12, 14, 16

    btnNode15.arrBtnIndices[0] = 0;
    btnNode15.arrBtnIndices[1] = 10;
    btnNode15.arrBtnIndices[2] = 11;
    btnNode15.arrBtnIndices[3] = 12;
    btnNode15.arrBtnIndices[4] = 14;
    btnNode15.arrBtnIndices[5] = 16;

    // button 16 connects to 11, 12, 15

    btnNode16.arrBtnIndices[0] = 0;
    btnNode16.arrBtnIndices[1] = 11;
    btnNode16.arrBtnIndices[2] = 12;
    btnNode16.arrBtnIndices[3] = 15;
    ///
}

function PrintSpecifiedButtonIndeces(btnNode) {

    btnNode.arrBtnIndices.forEach(function callback(value, index) {
        console.log(`${index}: ${value}`);
    });
    console.log("--------------------");
}

function PrintButtonName(btnNode) {
    console.log("Button: " + btnNode.getBtnName());
    console.log("--------------------");
}

function PrintButtonEdges() {

}


function PrintLettersFromNodes() {
    console.log("letter for node 1:  " + btnNode1.getLetterValue);
    console.log("letter for node 2:  " + btnNode2.getLetterValue);
    console.log("letter for node 3:  " + btnNode3.getLetterValue);
    console.log("letter for node 4:  " + btnNode4.getLetterValue);
    console.log("letter for node 5:  " + btnNode5.getLetterValue);
    console.log("letter for node 6:  " + btnNode6.getLetterValue);
    console.log("letter for node 7:  " + btnNode7.getLetterValue);
    console.log("letter for node 8:  " + btnNode8.getLetterValue);
    console.log("letter for node 9:  " + btnNode9.getLetterValue);
    console.log("letter for node 10:  " + btnNode10.getLetterValue);
    console.log("letter for node 11:  " + btnNode11.getLetterValue);
    console.log("letter for node 12:  " + btnNode12.getLetterValue);
    console.log("letter for node 13:  " + btnNode13.getLetterValue);
    console.log("letter for node 14:  " + btnNode14.getLetterValue);
    console.log("letter for node 15:  " + btnNode15.getLetterValue);
    console.log("letter for node 16:  " + btnNode16.getLetterValue);
}

function IsEmptyButtonNodes16Array() {
    if (buttonNodes16Array.length === 0) return true; // is empty
    else return false; // NOT empty
}

function AddLettersToNodes() {
    btnNode1.setLetterValue = document.getElementById("btnClick1").innerHTML;
    btnNode2.setLetterValue = document.getElementById("btnClick2").innerHTML;
    btnNode3.setLetterValue = document.getElementById("btnClick3").innerHTML;
    btnNode4.setLetterValue = document.getElementById("btnClick4").innerHTML;
    btnNode5.setLetterValue = document.getElementById("btnClick5").innerHTML;
    btnNode6.setLetterValue = document.getElementById("btnClick6").innerHTML;
    btnNode7.setLetterValue = document.getElementById("btnClick7").innerHTML;
    btnNode8.setLetterValue = document.getElementById("btnClick8").innerHTML;
    btnNode9.setLetterValue = document.getElementById("btnClick9").innerHTML;
    btnNode10.setLetterValue = document.getElementById("btnClick10").innerHTML;
    btnNode11.setLetterValue = document.getElementById("btnClick11").innerHTML;
    btnNode12.setLetterValue = document.getElementById("btnClick12").innerHTML;
    btnNode13.setLetterValue = document.getElementById("btnClick13").innerHTML;
    btnNode14.setLetterValue = document.getElementById("btnClick14").innerHTML;
    btnNode15.setLetterValue = document.getElementById("btnClick15").innerHTML;
    btnNode16.setLetterValue = document.getElementById("btnClick16").innerHTML;
}

function ValidateProximity(nameOfLastNode, indexCurrentNode) {
    var bool = false;

    var arryOfValidIndicies; // delcare

    console.log("at the switch statement");

    // grabs the correct indices from the name of the popped node //
    // transfers any and all of the values from the arr of buttin indeces
    switch (nameOfLastNode) {
        case "btnNode1": arryOfValidIndicies = [...btnNode1.arrBtnIndices]; break;
        case "btnNode2": arryOfValidIndicies = [...btnNode2.arrBtnIndices]; break;
        case "btnNode3": arryOfValidIndicies = [...btnNode3.arrBtnIndices]; break;
        case "btnNode4": arryOfValidIndicies = [...btnNode4.arrBtnIndices]; break;
        case "btnNode5": arryOfValidIndicies = [...btnNode5.arrBtnIndices]; break;
        case "btnNode6": arryOfValidIndicies = [...btnNode6.arrBtnIndices]; break;
        case "btnNode7": arryOfValidIndicies = [...btnNode7.arrBtnIndices]; break;
        case "btnNode8": arryOfValidIndicies = [...btnNode8.arrBtnIndices]; break;
        case "btnNode9": arryOfValidIndicies = [...btnNode9.arrBtnIndices]; break;
        case "btnNode10": arryOfValidIndicies = [...btnNode10.arrBtnIndices]; break;
        case "btnNode11": arryOfValidIndicies = [...btnNode11.arrBtnIndices]; break;
        case "btnNode12": arryOfValidIndicies = [...btnNode12.arrBtnIndices]; break;
        case "btnNode13": arryOfValidIndicies = [...btnNode13.arrBtnIndices]; break;
        case "btnNode14": arryOfValidIndicies = [...btnNode14.arrBtnIndices]; break;
        case "btnNode15": arryOfValidIndicies = [...btnNode15.arrBtnIndices]; break;
        case "btnNode16": arryOfValidIndicies = [...btnNode16.arrBtnIndices]; break;
    }

    // iterate through the array of indices. 
    for (let i = 0; i < arryOfValidIndicies.length; i++) {
        if (parseInt(arryOfValidIndicies[i]) != 0) {
            if (arryOfValidIndicies[i] === undefined) {
                // console.log(" * UNDEFINED * "); RESTRICTS SHOWING THE UNDEFINED ELEMENTS
            } else {
                // console.log("ITERATION: arryOfValidIndicies[i] parsed int: " + parseInt(arryOfValidIndicies[i])); 

                var intIndex = parseInt(arryOfValidIndicies[i]);
                console.log("ITERATION: arryOfValidIndicies[i] parsed int: " + intIndex);
                console.log("current nodevalue: " + indexCurrentNode);
                var intCurrNode = parseInt(indexCurrentNode);

                if (intIndex == intCurrNode) // indexCurrentNode.. should be an int
                {
                    bool = true;
                    console.log("FOUND MATCH");
                    PrintButtonNodesArray();

                    // CONNECT THE CURR NODE TO THE PREVIOUS NODE
                    // index of the current node [indexcurrentnode] will connect back to the previuos node
                    // switch(parseInt(intCurrNode)){
                    //     case 1:  console.log("letter for node 1:  " +  btnNode1.getLetterValue); break; 
                    //     case 2:  break;
                    //     case 3:  break;
                    //     case 4:  break;
                    //     case 5:  break;
                    //     case 6:  break;
                    //     case 7:  break;
                    //     case 8:  break;
                    //     case 9:  break;
                    //     case 10: break;
                    //     case 11: break;
                    //     case 12: break;
                    //     case 13: break;
                    //     case 14: break;
                    //     case 15: break;
                    //     case 16: break;
                    // }
                }
            }
        }
    }
    return bool;
    ///
}



// CLICK EVENTS //
btnClicked1.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        // get the name of the last btnNode
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;
        // var nameOfPoppedNode = buttonNodes16Array.pop().getBtnName; 

        if ("btnNode1" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode1.getBtnIndex) == true) {
                console.log("hit the truth of the proximity");
                // adds the new node [THIS NODE]
                AddButtonNodeToButtonNodeArray(btnNode1); // ADDS THIS NODE TO THE STACK
                // now change the color of THIS NODE TO LIME
                PrintButtonNodesArray();

                btnClicked1.style.backgroundColor = "lime";
            }

        } else {
            // pop the node were not using it at the moment
            buttonNodes16Array.pop();

            console.log("clicked the same last [ button node [1] ]");
            // set the color back to default = light purple
            btnClicked1.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode1); // purple to green first button press
        // sets the node to unavailable //
        // btnNode1.setBtnIsClicked = true;
        // changed the color to lime
        btnClicked1.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();

});

btnClicked2.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        // get the name of the last btnNode
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;
        // var nameOfPoppedNode = buttonNodes16Array.pop().getBtnName; 

        if ("btnNode2" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode2.getBtnIndex) == true) { ////TODO FOCUS ON THE DETAILS OF ValidateProximity 2022.09.04 - 2.24.AM
                console.log("hit the truth of the proximity");
                // adds the new node [THIS NODE]
                AddButtonNodeToButtonNodeArray(btnNode2); // ADDS THIS NODE TO THE STACK
                // now change the color of THIS NODE TO LIME
                PrintButtonNodesArray();

                btnClicked2.style.backgroundColor = "lime";
            }

        } else {
            // pop the node were not using it
            buttonNodes16Array.pop();

            console.log("clicked the same last [ button node [2] ]");
            // set the color back to default = light purple
            btnClicked2.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode2); // empty array first button pressed
        btnNode1.setBtnIsClicked = true; // button two has been clicked
        btnClicked2.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked3.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode3" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode3.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode3);
                PrintButtonNodesArray();
                btnClicked3.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked3.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode3);
        btnClicked3.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked4.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode4" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode4.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode4);
                PrintButtonNodesArray();
                btnClicked4.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked4.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode4);
        btnClicked4.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked5.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode5" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode5.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode5);
                PrintButtonNodesArray();
                btnClicked5.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked5.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode5);
        btnClicked5.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked6.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode6" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode6.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode6);
                PrintButtonNodesArray();
                btnClicked6.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked6.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode6);
        btnClicked6.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked7.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode7" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode7.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode7);
                PrintButtonNodesArray();
                btnClicked7.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked7.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode7);
        btnClicked7.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked8.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode8" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode8.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode8);
                PrintButtonNodesArray();
                btnClicked8.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked8.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode8);
        btnClicked8.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked9.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode9" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode9.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode9);
                PrintButtonNodesArray();
                btnClicked9.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked9.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode9);
        btnClicked9.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked10.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode10" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode10.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode10);
                PrintButtonNodesArray();
                btnClicked10.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked10.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode10);
        btnClicked10.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked11.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode11" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode11.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode11);
                PrintButtonNodesArray();
                btnClicked11.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked11.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode11);
        btnClicked11.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked12.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode12" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode12.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode12);
                PrintButtonNodesArray();
                btnClicked12.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked12.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode12);
        btnClicked12.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});
btnClicked13.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode13" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode13.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode13);
                PrintButtonNodesArray();
                btnClicked13.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked13.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode13);
        btnClicked13.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked14.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode14" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode14.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode14);
                PrintButtonNodesArray();
                btnClicked14.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked14.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode14);
        btnClicked14.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked15.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode15" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode15.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode15);
                PrintButtonNodesArray();
                btnClicked15.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked15.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode15);
        btnClicked15.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});

btnClicked16.addEventListener('click', function ButtonClicked() {

    if (!(IsEmptyButtonNodes16Array())) {
        var nameOfLastNode = buttonNodes16Array[buttonNodes16Array.length - 1].getBtnName;

        if ("btnNode16" != nameOfLastNode) {

            if (ValidateProximity(nameOfLastNode, btnNode16.getBtnIndex) == true) {
                // console.log("hit the truth of the proximity");
                AddButtonNodeToButtonNodeArray(btnNode16);
                PrintButtonNodesArray();
                btnClicked16.style.backgroundColor = "lime";
            }

        } else {
            buttonNodes16Array.pop();
            // console.log("clicked the same last [ button node [3] ]");
            btnClicked16.style.backgroundColor = "#AB12CD";
        }

    } else {
        AddButtonNodeToButtonNodeArray(btnNode16);
        btnClicked16.style.backgroundColor = 'lime';
    }

    DisplayCurrentGuessWord();
});



btnSubmitWord.addEventListener('click', function SubmitWord() {
    // grabs the guess word from the screen 
    var sendGuessWord = document.getElementById("guessWord").innerHTML;

    // sends the guess word from the screen
    
   

    // clears the letters to all be light purple
    ResetAllButtonColorsToPurple();

    // resets the array of button nodes to empty
    RemoveAllButtonNodesFromButtonNodesArray();

    // CONVICE MYSELF THE BUTTON NODES ARRAY IS EMPTY
    PrintButtonNodesArray();

    

});

function ResetAllButtonColorsToPurple() {
    btnClicked1.style.backgroundColor = "#AB12CD";
    btnClicked2.style.backgroundColor = "#AB12CD";
    btnClicked3.style.backgroundColor = "#AB12CD";
    btnClicked4.style.backgroundColor = "#AB12CD";
    btnClicked5.style.backgroundColor = "#AB12CD";
    btnClicked6.style.backgroundColor = "#AB12CD";
    btnClicked7.style.backgroundColor = "#AB12CD";
    btnClicked8.style.backgroundColor = "#AB12CD";
    btnClicked9.style.backgroundColor = "#AB12CD";
    btnClicked10.style.backgroundColor = "#AB12CD";
    btnClicked11.style.backgroundColor = "#AB12CD";
    btnClicked12.style.backgroundColor = "#AB12CD";
    btnClicked13.style.backgroundColor = "#AB12CD";
    btnClicked14.style.backgroundColor = "#AB12CD";
    btnClicked15.style.backgroundColor = "#AB12CD";
    btnClicked16.style.backgroundColor = "#AB12CD";
}

btnPlayGame.addEventListener('click', function PlayGame() {
    // TO SOMEHOW ASSOCIATE THE SIGNAL R TO THIS PLAY GAME EVENT
    // TODO MAKE SURE THAT THERE ARE TWO PLAYERS
    // TODO CHECK THEIR IDS
    // DON'T ACTUALLLY START THE GAME UNTIL THERE ARE TWO PLAYERS
    /*Clear16LetterFrom16LettersArray();*/
    var commonLettersArray = [];
    Make16RandomLettersFromCommonLetterArray();
    var v = Get16RandomLetters();
    console.log("letters are: " + v);
    LoadLettersToBoard();
    AddLettersToNodes();
    PrintLettersFromNodes();




});

/*function Clear16LetterFrom16LettersArray() {

    for (let i = 0; i < letters16Array; i++) {
        letters16Array[i] = null;
    }
}*/

function LoadLettersToBoard() {

    btnClick1.innerHTML = letters16Array

    btnClick1.innerHTML = letters16Array[0];
    btnClick2.innerHTML = letters16Array[1];
    btnClick3.innerHTML = letters16Array[2];
    btnClick4.innerHTML = letters16Array[3];
    btnClick5.innerHTML = letters16Array[4];
    btnClick6.innerHTML = letters16Array[5];
    btnClick7.innerHTML = letters16Array[6];
    btnClick8.innerHTML = letters16Array[7];
    btnClick9.innerHTML = letters16Array[8];
    btnClick10.innerHTML = letters16Array[9];
    btnClick11.innerHTML = letters16Array[10];
    btnClick12.innerHTML = letters16Array[11];
    btnClick13.innerHTML = letters16Array[12];
    btnClick14.innerHTML = letters16Array[13];
    btnClick15.innerHTML = letters16Array[14];
    btnClick16.innerHTML = letters16Array[15];

}


// this class allows the user to create a button node that will be able
// to set the nearby nodes of the same type.
// by adding to the list of available other nodes via their id
// your first button node will be index number 1 for simplicity
// // easier to match the number of the button by it name
class ButtonNode {

    // name the button that you just crated ::: btn1, or btn 2 ... etc
    // always start w
    constructor(strBtnName, intBtnIndex) {
        this.strBtnName = strBtnName;   // the NAME of THIS BUTTON
        this.intBtnIndex = intBtnIndex; // the NUMBER of THIS BUTTON

        // array of button connections via indices //
        this.arrBtnIndices = [9]; // skip 0 // can only be connected up to eight buttons

        this.isClicked = false;

        this.boolIsConnected = false; // if currently connected to another button

        this.intButtonNumberConnectedTo = 0; // all buttons start of being connected to 0 which is not a button at all

        this.letterValue = "";

    }

    // add one of the available EDGEs to the btn
    // such as btn1 will be this btn and then 
    // // btn2 is one that would connect
    // // btn5, and btn 6 would connect
    // NOTE: use the above struture type to initialize all the btns.
    // NOTE: THIS METHOD IS USED TO CREATE THE INITIAL LINKS TO THE OTHER NODES BY
    // // REF. ONLY 
    linkToOtherNode(strBtnNameNewConnection, btnIndex) {

    }

    // used to add a connection from one node to another one. 
    // checks to see if the connection requested is valid or not
    // rtns true when valid and false otherwise
    addConnection() {

    }

    // used to remove an existing connection
    // 
    removeConnection(strBtnToRemove, btnIndex) {

    }

    // connection is made true of false
    // identify what that connection is
    // 

    // GETTERS AND SETTERS //
    /////////////////////////

    set setBtnName(strBtnName) {
        this.strBtnName = strBtnName;
    }

    get getBtnName() {
        return this.strBtnName;
    }

    set setBtnIndex(intBtnName) {
        this.intBtnName = intBtnName;
    }

    get getBtnIndex() {
        return this.intBtnIndex;
    }

    set setBtnIsClicked(tf) {
        this.isClicked = tf; // true or false
    }

    get getBtnIsClicked() {
        return this.isClicked;
    }

    get getButtonArrayOfIndices() {
        return this.arrBtnIndices;
    }

    set setLetterValue(v) {
        this.letterValue = v;
    }

    get getLetterValue() {
        return this.letterValue;
    }

}

BuildCommonLettersArray();
CreateNodes();
MakeAllValidEdgeConnections();
AddLettersToNodes();



