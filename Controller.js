function start() {
    return next();
}


function nextPage() {
    
    if ( page == 1 ) {
        page = 2;
        return next1();
        
    } if ( page == 2 ) {
        page = 3;
        return next2();
        
    } if ( page == 3 ) {
        page = 4;
        return next3();
       
    }    
    if ( page == 4 ) {
        page = 0;
        return next4();
        
    } 


}

function word(clicked) {
    if (word1 == '___'){ word1 = clicked.innerHTML; }
    else if (word2 == '___'){ word2 = clicked.innerHTML; }
    else if (word3 == '___'){ word3 = clicked.innerHTML; }
    else if (word4 == '___'){ word4 = clicked.innerHTML; }
    next();
}  

function wordTwo(clicked) {
    if (word5 == '___'){ word5 = clicked.innerHTML; }
    else if (word6 == '___'){ word6 = clicked.innerHTML; }
    else if (word7 == '___'){ word7 = clicked.innerHTML; }
    else if (word8 == '___'){ word8 = clicked.innerHTML; }
    next1();
}  

function wordThree(clicked) {
    if (word9 == '___'){ word9 = clicked.innerHTML; }
    else if (word10 == '___'){ word10 = clicked.innerHTML; }
    else if (word11 == '___'){ word11 = clicked.innerHTML; }
    else if (word12 == '___'){ word12 = clicked.innerHTML; }
    next2();
}  
function wordFour(clicked) {
    if (word13 == '___'){ word13 = clicked.innerHTML; }
    else if (word14 == '___'){ word14 = clicked.innerHTML; }
    else if (word15 == '___'){ word15 = clicked.innerHTML; }
    else if (word16 == '___'){ word16 = clicked.innerHTML; }
    next3();
}  


function click1(press1) {
    return isDisabled1 = 'disabled';
}
function click2(press2) {
    return isDisabled2 = 'disabled'
}
function click3(press3) {
    return isDisabled3 = 'disabled'
}
function click4(press4) {
    return isDisabled4 = 'disabled'
}
function click5(press5) {
    return isDisabled5 = 'disabled';
}
function click6(press6) {
    return isDisabled6 = 'disabled'
}
function click7(press7) {
    return isDisabled7 = 'disabled'
}
function click8(press8) {
    return isDisabled8 = 'disabled'
}
function click9(press9) {
    return isDisabled9 = 'disabled';
}
function click10(press10) {
    return isDisabled10 = 'disabled'
}
function click11(press11) {
    return isDisabled11 = 'disabled'
}
function click12(press12) {
    return isDisabled12 = 'disabled'
}
function click13(press13) {
    return isDisabled13 = 'disabled';
}
function click14(press14) {
    return isDisabled14 = 'disabled'
}
function click15(press15) {
    return isDisabled15 = 'disabled'
}
function click16(press16) {
    return isDisabled16 = 'disabled'
}
function click17(press17) {
    return isDisabled17 = 'disabled'
}




