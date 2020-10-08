function fizzBuzzDirect() {
    //Step 1 Get Data
    let fizz = Number(document.getElementById("txtFizzBuzzIn1").value);
    let buzz = Number(document.getElementById("txtFizzBuzzIn2").value);
    //Step 2 Run data thru function
    let output = [];
    for (let loop = 1; loop <= 100; loop++) {     
        if (loop % fizz == 0 && loop % buzz == 0) {
            output[loop - 1]="FizzBuzz";
        } else if (loop % fizz == 0) {
            output[loop - 1]="Fizz";
        } else if (loop % buzz == 0) {
            output[loop - 1]="Buzz";
        } else {
            output[loop - 1] = loop;
        }
        }   
    //Loop over the output array but skip every 10
    let finalOutput = "";
    for (let i = 0; i <= output.length - 1; i += 10) {        
        finalOutput += renderTemplate(i, output);
    }
        
    //Step 3 My result output
    document.getElementById("pFizzBuzzOut").innerHTML = finalOutput;
}  

function renderTemplate(num, output) {
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
