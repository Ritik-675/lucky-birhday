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

const outputBox = document.querySelector("#output-box") ;

function checkBirthdayLucky(){
    const dateNum =dateOfBirth.value ;
    const sum = calculateSum(dateNum) ;
    if(sum && dateNum)
    {
        if(sum%luckyNumber.value===0){
            outputBox.innerText = "Yessssss !! your birthdayy is luckyy 😊" ;
        }
        else{
            outputBox.innerText = "Sorry !! Your birthdayy is not that Luckky 🥺" ;
        }
    }
    else{
        outputBox.innerText= "Please enter both the fields😡😠😡" ;

        
    }
}
checkButton.addEventListener("click",checkBirthdayLucky) ;