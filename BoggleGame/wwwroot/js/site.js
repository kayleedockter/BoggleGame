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


// -> builds an string array of 16 random letters from the common letters array
function Make16RandomLettersFromCommonLetterArray() {
    // var str = commonLettersArray.toString();

    //-----
    //console.log("TESTING: " + commonLettersArray[200]);
    //-----

    // clears the array of any letters from the previous 16-letter array
    while (!(letters16Array.length === 0)) { 
        letters16Array.pop();
    }

    // build a new array of 16 random letters
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



/////////////////////////////////////////////////
/////////////////////////////////////////////////

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


function CreateNodes() {
    btnNode1 = new ButtonNode("btnNode1", 1);
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

    btnNode1.arrBtnIndices[0] = 0;
    btnNode1.arrBtnIndices[2] = 2;
    btnNode1.arrBtnIndices[5] = 5;
    btnNode1.arrBtnIndices[6] = 6;

    // button2 connects to 1, 3, 5, 6, 7

    btnNode2.arrBtnIndices[0] = 0;//--
    btnNode2.arrBtnIndices[1] = 1;//--
    btnNode2.arrBtnIndices[3] = 3;//--
    btnNode2.arrBtnIndices[5] = 5;//--
    btnNode2.arrBtnIndices[6] = 6;//--
    btnNode2.arrBtnIndices[7] = 7;//--

    // button3 connects to 2, 4, 6, 7, 8

    btnNode3.arrBtnIndices[0] = 0;//--
    btnNode3.arrBtnIndices[2] = 2;//--
    btnNode3.arrBtnIndices[4] = 4;//--
    btnNode3.arrBtnIndices[6] = 6;//--
    btnNode3.arrBtnIndices[7] = 7;//--
    btnNode3.arrBtnIndices[8] = 8;//--

    // button4 connects to 3, 7, 8 

    btnNode4.arrBtnIndices[0] = 0;//--
    btnNode4.arrBtnIndices[3] = 3;//--
    btnNode4.arrBtnIndices[7] = 7;//--
    btnNode4.arrBtnIndices[8] = 8;//--

    // button 5 connects to 1, 2, 6, 8, 9 10

    btnNode5.arrBtnIndices[0] = 0;
    btnNode5.arrBtnIndices[1] = 1;//--
    btnNode5.arrBtnIndices[2] = 2;//--
    btnNode5.arrBtnIndices[6] = 6;//--
    btnNode5.arrBtnIndices[8] = 8;//--
    btnNode5.arrBtnIndices[9] = 9;//--
    btnNode5.arrBtnIndices[10] = 10;//--

    // button 6 connects to 1, 2, 3, 5, 7, 9, 10, 11

    btnNode6.arrBtnIndices[0] = 0;
    btnNode6.arrBtnIndices[1] = 1;//--
    btnNode6.arrBtnIndices[2] = 2;//--
    btnNode6.arrBtnIndices[3] = 3;//--
    btnNode6.arrBtnIndices[5] = 5;//--
    btnNode6.arrBtnIndices[7] = 7;//--
    btnNode6.arrBtnIndices[9] = 9;//--
    btnNode6.arrBtnIndices[10] = 10;//--
    btnNode6.arrBtnIndices[11] = 11;//--

    // button 7 connects to 2, 3, 4, 6, ,8 , 10, 11 , 12

    btnNode7.arrBtnIndices[0] = 0;
    btnNode7.arrBtnIndices[2] = 2;//--
    btnNode7.arrBtnIndices[3] = 3;//--
    btnNode7.arrBtnIndices[4] = 4;//--
    btnNode7.arrBtnIndices[6] = 6;
    btnNode7.arrBtnIndices[8] = 8;//--
    btnNode7.arrBtnIndices[10] = 10;//--
    btnNode7.arrBtnIndices[11] = 11;//--
    btnNode7.arrBtnIndices[12] = 12;//--

    // button 8 connects to 3, 4, 7, 11, 12

    btnNode8.arrBtnIndices[0] = 0;
    btnNode8.arrBtnIndices[3] = 3;//--
    btnNode8.arrBtnIndices[4] = 4;//--
    btnNode8.arrBtnIndices[7] = 7;//--
    btnNode8.arrBtnIndices[11] = 11;//--
    btnNode8.arrBtnIndices[12] = 12;//--

    // button 9 connects to 5, 6, 10, 13, 14

    btnNode9.arrBtnIndices[0] = 0;
    btnNode9.arrBtnIndices[5] = 5;//--
    btnNode9.arrBtnIndices[6] = 6;//--
    btnNode9.arrBtnIndices[10] = 10;//--
    btnNode9.arrBtnIndices[13] = 13;//--
    btnNode9.arrBtnIndices[14] = 14;//--

    // button 10 connects to 5, 6, 7, 9, 11, 13, 14, 15

    btnNode10.arrBtnIndices[0] = 0;
    btnNode10.arrBtnIndices[5] = 5;//--
    btnNode10.arrBtnIndices[6] = 6;//--
    btnNode10.arrBtnIndices[7] = 7;//--
    btnNode10.arrBtnIndices[9] = 9;//--
    btnNode10.arrBtnIndices[11] = 11;//--
    btnNode10.arrBtnIndices[13] = 13;//--
    btnNode10.arrBtnIndices[14] = 14;//--
    btnNode10.arrBtnIndices[15] = 15;//--

    // button 11 connects to 6, 7, 8, 10, 12, 14, 15, 16

    btnNode11.arrBtnIndices[0] = 0;
    btnNode11.arrBtnIndices[6] = 6;//--
    btnNode11.arrBtnIndices[7] = 7;//--
    btnNode11.arrBtnIndices[8] = 8;//--
    btnNode11.arrBtnIndices[10] = 10;//--
    btnNode11.arrBtnIndices[12] = 12;//--
    btnNode11.arrBtnIndices[14] = 14;//--
    btnNode11.arrBtnIndices[15] = 15;//--
    btnNode11.arrBtnIndices[16] = 16;//--

    // button 12 connects to 7, 8, 11, 15, 16

    btnNode12.arrBtnIndices[0] = 0;
    btnNode12.arrBtnIndices[7] = 7;
    btnNode12.arrBtnIndices[8] = 8;
    btnNode12.arrBtnIndices[11] = 11;
    btnNode12.arrBtnIndices[15] = 15;
    btnNode12.arrBtnIndices[16] = 16;

    // button 13 connects to 9, 10, 14

    btnNode13.arrBtnIndices[0] = 0;
    btnNode13.arrBtnIndices[9] = 9;
    btnNode13.arrBtnIndices[10] = 10;
    btnNode13.arrBtnIndices[14] = 14;

    // button 14 connects to 9, 10, 11, 13, 15

    btnNode14.arrBtnIndices[0] = 0;
    btnNode14.arrBtnIndices[9] = 9;
    btnNode14.arrBtnIndices[10] = 10;
    btnNode14.arrBtnIndices[11] = 11;
    btnNode14.arrBtnIndices[13] = 13;
    btnNode14.arrBtnIndices[15] = 15;

    // button 15 conencts to 10, 11, 12, 14, 16

    btnNode15.arrBtnIndices[0] = 0;
    btnNode15.arrBtnIndices[10] = 10;
    btnNode15.arrBtnIndices[11] = 11;
    btnNode15.arrBtnIndices[12] = 12;
    btnNode15.arrBtnIndices[14] = 14;
    btnNode15.arrBtnIndices[16] = 16;

    // button 16 connects to 11, 12, 15

    btnNode16.arrBtnIndices[0] = 0;
    btnNode16.arrBtnIndices[11] = 11;
    btnNode16.arrBtnIndices[12] = 12;
    btnNode16.arrBtnIndices[15] = 15;

    ////

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

// CLICK EVENTS //

btnClicked1.addEventListener('click', function ButtonClicked() {
    // console.log("this is the color of the button " + btnClicked1.style.backgroundColor);

    if (btnClicked1.style.backgroundColor == "lime") {
        btnClicked1.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked1.style.backgroundColor = 'lime';
    }

    // indicate that THIS NODE button has been clicked //


});

btnClicked2.addEventListener('click', function ButtonClicked() {

    if (btnClicked2.style.backgroundColor == "lime") {
        btnClicked2.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked2.style.backgroundColor = 'lime';
    }
});

btnClicked3.addEventListener('click', function ButtonClicked() {

    if (btnClicked3.style.backgroundColor == "lime") {
        btnClicked3.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked3.style.backgroundColor = 'lime';
    }
});

btnClicked4.addEventListener('click', function ButtonClicked() {

    if (btnClicked4.style.backgroundColor == "lime") {
        btnClicked4.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked4.style.backgroundColor = 'lime';
    }
});

btnClicked5.addEventListener('click', function ButtonClicked() {

    if (btnClicked5.style.backgroundColor == "lime") {
        btnClicked5.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked5.style.backgroundColor = 'lime';
    }
});

btnClicked6.addEventListener('click', function ButtonClicked() {

    if (btnClicked6.style.backgroundColor == "lime") {
        btnClicked6.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked6.style.backgroundColor = 'lime';
    }
});

btnClicked7.addEventListener('click', function ButtonClicked() {

    if (btnClicked7.style.backgroundColor == "lime") {
        btnClicked7.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked7.style.backgroundColor = 'lime';
    }
});
btnClicked8.addEventListener('click', function ButtonClicked() {

    if (btnClicked8.style.backgroundColor == "lime") {
        btnClicked8.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked8.style.backgroundColor = 'lime';
    }
});

btnClicked9.addEventListener('click', function ButtonClicked() {

    if (btnClicked9.style.backgroundColor == "lime") {
        btnClicked9.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked9.style.backgroundColor = 'lime';
    }
});

btnClicked10.addEventListener('click', function ButtonClicked() {

    if (btnClicked10.style.backgroundColor == "lime") {
        btnClicked10.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked10.style.backgroundColor = 'lime';
    }
});

btnClicked11.addEventListener('click', function ButtonClicked() {

    if (btnClicked11.style.backgroundColor == "lime") {
        btnClicked11.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked11.style.backgroundColor = 'lime';
    }
});

btnClicked12.addEventListener('click', function ButtonClicked() {

    if (btnClicked12.style.backgroundColor == "lime") {
        btnClicked12.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked12.style.backgroundColor = 'lime';
    }
});
btnClicked13.addEventListener('click', function ButtonClicked() {

    if (btnClicked13.style.backgroundColor == "lime") {
        btnClicked13.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked13.style.backgroundColor = 'lime';
    }
});

btnClicked14.addEventListener('click', function ButtonClicked() {

    if (btnClicked14.style.backgroundColor == "lime") {
        btnClicked14.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked14.style.backgroundColor = 'lime';
    }
});

btnClicked15.addEventListener('click', function ButtonClicked() {

    if (btnClicked15.style.backgroundColor == "lime") {
        btnClicked15.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked15.style.backgroundColor = 'lime';
    }
});

btnClicked16.addEventListener('click', function ButtonClicked() {

    if (btnClicked16.style.backgroundColor == "lime") {
        btnClicked16.style.backgroundColor = "#AB12CD"; // light purple
    } else {
        btnClicked16.style.backgroundColor = 'lime';
    }
});

btnSubmitWord.addEventListener('click', function SubmitWord() {

   

});

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
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

    


});


/*function Clear16LetterFrom16LettersArray() {

    for (let i = 0; i < letters16Array; i++) {
        letters16Array[i] = null;
    }
}*/

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


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

        this.boolIsConnected = false; // if currently connected to another button

        this.intButtonNumberConnectedTo = 0; // all buttons start of being connected to 0 which is not a button at all

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

    getBtnName() {
        return this.strBtnName;
    }

    setBtnName(strBtnName) {
        this.strBtnName = strBtnName;
    }

    getBtnIndex() {
        return this.intBtnIndex;
    }

    setBtnIndex(intBtnName) {
        this.intBtnName = intBtnName;
    }

}

BuildCommonLettersArray();
CreateNodes();
MakeAllValidEdgeConnections();



