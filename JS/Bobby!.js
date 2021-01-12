//main Function
function fizzBuzzDirect() {
    //Step 1 Get Data
    let fizz = Number(document.getElementById("txtFizzBuzzIn1").value);//Value of text box 1
    let buzz = Number(document.getElementById("txtFizzBuzzIn2").value);//Value of text box 2
    //Step 2 Run data thru function
    let output = [];
    for (let loop = 1; loop <= 100; loop++) {               //Start at 1; loop 100 times; add 1 each time
        if (loop % fizz == 0 && loop % buzz == 0) {         //checking for divisible by both 3 & 5 
            output[loop - 1]="FizzBuzz";
        } else if (loop % fizz == 0) {                      //checking for divisible by 3
            output[loop - 1]="Fizz";
        } else if (loop % buzz == 0) {                      //checking for divisible by 5
            output[loop - 1]="Buzz";
        } else {
            output[loop - 1] = loop;                        //If neither, it stay a number
        }
        }   
    //Loop over the output array but skip every 10          //For loop for  arry output
    let finalOutput = "";
    for (let i = 0; i <= output.length - 1; i += 10) {        
        finalOutput += renderTemplate(i, output);
    }
        
    //Step 3 My result output
    document.getElementById("pFizzBuzzOut").innerHTML = finalOutput;
}  

function renderTemplate(num, output) {              //Function for adding to a table
    let template = `<tr>
        <td>${output[num]}</td>
        <td>${output[num + 1]}</td>
        <td>${output[num + 2]}</td>
        <td>${output[num + 3]}</td>
        <td>${output[num + 4]}</td>
        <td>${output[num + 5]}</td>
        <td>${output[num + 6]}</td>
        <td>${output[num + 7]}</td>
        <td>${output[num + 8]}</td>
        <td>${output[num + 9]}</td>
    </tr>`            
    return template; 

}

// function prevents input of all letters into input field
function isNumber(evt) {                                     //parameter of event
    evt = (evt) ? evt : window.event;                        //evt variable = event of the key press
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
};
