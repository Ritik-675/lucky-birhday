const dateOfBirth = document.querySelector("#dob") ;
const luckyNumber = document.querySelector("#lucky-number") ;
const checkButton = document.querySelector(".check-button") ;


function calculateSum(dateNum){
    dateNum=dateNum.replaceAll("-","") ;
    let sum=0 ;
    for (let index = 0; index < dateNum.length; index++) {
        sum += Number(dateNum.charAt(index)); 
    }
    return sum ;
}

function checkBirthdayLucky(){
    const dateNum =dateOfBirth.value ;
    const sum = calculateSum(dateNum) ;
    if(sum%luckyNumber.value===0){
        console.log("Yessssss !! your birthdayy is luckyy 😊") ;
    }
    else{
        console.log("Sorry !! Your birthdayy is not that Luckky 🥺")
    }
}
checkButton.addEventListener("click",checkBirthdayLucky) ;