// // mainPage();




// // function mainPage() {
// //     document.getElementById('mainPage').innerHTML = `

// //         <button id="startBtn" type="button" > Start! </button>
// //     `;

// // }






next();
function next() {
    document.getElementById('next').innerHTML =  /*html*/`
    <div id="amigo1"></div>
    <div id="amigo2"></div>

    <button id="resetBtn" onclick="window.location.reload();"><h3>RESET</h3></button>
    <button class="next" onclick="nextPage()"><h3>Next</h3></button>
    <div id="frosk2" class="rotateimg90" ></div>


    <div id="frosk3" class="rotateimg120"></div>
    <div id="froskB" class="rotateimg270"></div>
    <div id="frosk4"></div>

    <div id="story1">
    
        <div id="frosk1"

            <div class="box box2">
            <div class="evenboxinner">

                <div class="txt1"> Det var en gang 3 ${word1} frosker, </br>
                                    som vandret på en ${word2} sti. </br>
                                    Plutselig kom det en ${word3} buorm. </br>
                                    Buormer er veldig ${word4} for froskene.
                </div>

        </div>
            
            </div>
        <div id="answerBtns">

        <button id="btn1" class="button-three" ${isDisabled1} type="button" onclick="click1(this);word(this)">gigantisk</button> <br />
        <button id="btn2" class="button-three" ${isDisabled2} type="button" onclick="click2(this);word(this)">legendariske</button><br />
        <button id="btn3" class="button-three" ${isDisabled3} type="button" onclick="click3(this);word(this)">farlige</button><br />
        <button id="btn4" class="button-three" ${isDisabled4} type="button" onclick="click4(this);word(this)">ufyselig</button>

        </div>

    </div>
    </div>


    `;

}

// getView();
// function getView(text){

//     return `

//     <div id="story2">

//         <div id="frosk1">
//             <div class="box box2">
//             <div class="evenboxinner">

//             <div id="txt1">
//             ${text}
//             </div>

//             <button class="next1" onclick="next2()"><h3>Next2</h3></button>
//                 </div>
//                 </div>
//                 </div>

//                 <div id="answerBtns">

//                 <button id="btn5" class="button-three" ${isDisabled5} type="button" onclick="click5(this);wordTwo(this)">forbanna</button> <br />
//                 <button id="btn6" class="button-three" ${isDisabled6} type="button" onclick="click6(this);wordTwo(this)">Nisse</button><br />
//                 <button id="btn7" class="button-three" ${isDisabled7} type="button" onclick="click7(this);wordTwo(this)">Gape</button><br />
//                 <button id="btn8" class="button-three" ${isDisabled8} type="button" onclick="click8(this);wordTwo(this)">Huff</button>

//         </div>
//     </div>
//     `;

// }


function next1() {
    document.getElementById('next1').innerHTML =

     /*html*/`

    <div id="story2">

        <div id="slange">
            <div class="box box2">
            
            <div class="evenboxinner">
            <div class="txt1">

            Plutselig kom den ${word5} buormen snikende </br>
            ut fra en ${word6} busk. </br>
            Den ${word7} buormen var ${word8}.</br>
            </div>

            
                </div>
                </div>
                </div>

                <div id="answerBtns">

                <button id="btn5" class="button-three" ${isDisabled5} type="button" onclick="click5(this);wordTwo(this)">svææær</button> <br />
                <button id="btn6" class="button-three" ${isDisabled6} type="button" onclick="click6(this);wordTwo(this)">køddete</button><br />
                <button id="btn7" class="button-three" ${isDisabled7} type="button" onclick="click7(this);wordTwo(this)">stor</button><br />
                <button id="btn8" class="button-three" ${isDisabled8} type="button" onclick="click8(this);wordTwo(this)">sleip</button>

        </div>
    </div>

        `;

}
{/* <button class="next1" onclick="next2()"><h3>Next2</h3></button> */}



function next2() {
    document.getElementById('next2').innerHTML =

     /*html*/`
     <div id="story3">

     <div id="ninja">
         <div class="box box2">
         <div class="evenboxinner">

         <div class="txt1">

         Buormen ville spise alle de 3 ${word9} froskene. </br>
         Men froskene var sterke og de var ${word10} raske. </br>
         De kunne også karate på et ${word11} høyt nivå. </br>
         De var ekte froske ninjaer!</br> De var helt ${word12}.


         </div>
         
         </div>
         </div>
         </div>
         <div id="answerBtns">



             <button id="btn9" class="button-three" ${isDisabled9} type="button" onclick="click9(this);wordThree(this)">legendariske</button> <br />
             <button id="btn10" class="button-three" ${isDisabled10} type="button" onclick="click10(this);wordThree(this)">veldig</button><br />
             <button id="btn11" class="button-three" ${isDisabled11} type="button" onclick="click11(this);wordThree(this)">meget</button><br />
             <button id="btn12" class="button-three" ${isDisabled12} type="button" onclick="click12(this);wordThree(this)">rå</button>



     </div>
 </div>
     `;

}
{/* <button class="next3" onclick="next3()"><h3>Next3</h3></button> */}

function next3() {
    document.getElementById('next3').innerHTML =

     /*html*/`
     <div id="story3">
     <div id="flykick"
     <div class="box box2">
     <div class="evenboxinner">
     <div class="txt1">
        Da den ${word13} buormen skulle til å ta et ${word14} jafs av Frosken Stigh, </br>
        hoppet de 2 andre opp og flykicka den ${word15} buormen til ${word16} ut av skogen. 
</div>
        </div>

        </div>
        <div id="answerBtns">

        <button id="btn13" class="button-three" ${isDisabled13} type="button" onclick="click13(this);wordFour(this)">skumle</button> <br />
        <button id="btn14" class="button-three" ${isDisabled14} type="button" onclick="click14(this);wordFour(this)">stort</button><br />
        <button id="btn15" class="button-three" ${isDisabled15} type="button" onclick="click15(this);wordFour(this)">ufyslige</button><br />
        <button id="btn16" class="button-three" ${isDisabled16} type="button" onclick="click16(this);wordFour(this)">hælvette</button>
        </div>
        </div>

        `;
}
function next4() {
    document.getElementById('next4').innerHTML =

     /*html*/`
     
     <div id="story4">
     <h1>The End!</h1>
            
     
            <div class="box box2">
                
                <div class="evenboxinner2">
                    
                    <div class="txt1">
        
            
                    <div class="txtEnd"> Det var en gang 3 ${word1} frosker, </br>
                    som vandret på en ${word2} sti. </br>
                    Plutselig kom det en ${word3} buorm. </br>
                    Buormer er veldig ${word4} for froskene.
                    Plutselig kom den ${word5} buormen snikende </br>
                    ut fra en ${word6} busk. </br>
                    Den ${word7} buormen var ${word8}.</br>
                    Buormen ville spise alle de 3 ${word9} froskene. </br>
                    Men froskene var sterke og de var ${word10} raske. </br>
                    De kunne også karate på et ${word11} høyt nivå. </br>
                    De var ekte froske ninjaer!</br> De var helt ${word12}.
                    Da den ${word13} buormen skulle til å ta et ${word14} jafs av Frosken Stigh, </br>
                    hoppet de 2 andre opp og flykicka den ${word15} buormen til ${word16} ut av skogen. 
                    
                    </div>
                </div>
            </div>
            
        </div>

        `;
        
}

















        {/* /* <div id="story5">
        Ingen har siden sett den ${} buormen,
        og de 3 ${} froskene kan leve lykkelige i alle sine dager i den ${} skogen.

        <button class="btn" type="button" onclick="word(this)">Blah</button>
        <button class="btn" type="button" onclick="word(this)">Blah</button>
        <button class="btn" type="button" onclick="word(this)">Blah</button>
        <button class="btn" type="button" onclick="word(this)">Blah</button>
          */}

