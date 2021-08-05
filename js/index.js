const billAmount = document.querySelector("#bill-amount");
const givenAmount = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")
const returnAmount = document.querySelector("#return-Amount")
const changeTable = document.querySelector(".change-table")
const cashSection = document.querySelector("#cash-section")
const nextButton = document.querySelector("#next-button")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
hideChangeTable();
cashSection.style.display = "none";

// check if bill amount are empty or not
nextButton.addEventListener("click", function showCashSection(){
    if(billAmount.value !== ""){
        nextButton.style.display = "none";
        cashSection.style.display = "";
        hideMessage();
    }else{
        showMessage(":--**Enter Some Amount**--:")
        
    }

})

checkButton.addEventListener("click", function  validBillandCashAmount(){
    hideMessage();
    
    if(parseInt(billAmount.value) > 0){
        if( parseInt(givenAmount.value) >= parseInt(billAmount.value) ){
            const amountToBeReturned = givenAmount.value - billAmount.value;
            calculateChange(amountToBeReturned);
            returnAmount.innerText = amountToBeReturned;
            showChangetable();
        }else{
            showMessage("**The cash provided should atleast be equal to the bill amount")
            hideChangeTable();
            
        }
    }else{
        showMessage("**Invalid Bill Amount**")
        hideChangeTable();
    }
});


function calculateChange(amountToBeReturned){
    for (let i = 0; i < availableNotes.length; i++ ){
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned =amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}


// Error message hide display
function hideMessage(){
    message.style.display = "none";
}


// Error message show display
function showMessage(msg){
    message.style.display = "block"
    message.innerText = msg;
}


// change-Table hide display function
function hideChangeTable(){
    changeTable.style.display = "none";
}


// change-table show display function
function showChangetable(){
    changeTable.style.display = ""
}