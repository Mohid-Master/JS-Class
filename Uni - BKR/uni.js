var userName = "Jamez";
var passWord = "123";
var userNameInput = prompt("Type your name");
var userNamePW= prompt("Type your password");
var availableBalance =50000;


if (userName !== userNameInput && passWord !== userNamePW) {
    console.log("Please check your username and password and reenter it");
}


    var selectYouroption = +prompt("1 - Check Balance 2- Withdraw Cash 3- PayBills 4- Change Password");
    

if (selectYouroption ===1){

   
    availableBalance = availableBalance-2.5;
    console.log("availableBalance = ",availableBalance);
}

if(selectYouroption===2){
    var withdrawCash = prompt("Type your cash");
    availableBalance = availableBalance-withdrawCash-18.50;
    console.log("availableBalance = ", availableBalance);
}


if (selectYouroption===3){
    var refBill = prompt("Type reference # of bill");
    var paidAmount = prompt("Type amount of bill");
    availableBalance = availableBalance-paidAmount;
    alert("Transaction successful");
    availableBalance = availableBalance + paidAmount*25/100;
    console.log(availableBalance);
}

var requiredReceipt = prompt("Do you want receipt, Press Y for Yes Or N for No").toLocaleLowerCase();

if ( requiredReceipt === 'y') {
    availableBalance = availableBalance-2.5;
    console.log("availableBalance", availableBalance);}else{
    console.log("availableBalance = ", availableBalance);
}







