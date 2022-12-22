const display = document.getElementById("display")
const searchButton = document.getElementById("search")
const inputField = document.getElementById("inputarea")

searchButton.addEventListener("click", ()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        //REGEX TEST
        let input = inputField.value;
        let reg = new RegExp(input+"$","i").test(input)
        //

        let arr = [];
        for(let i=0; i<data.length; i++){
            arr.push((data[i].name.common));

            if(input===data[i].name.common || reg === true){ 
                let newInput = input.toUpperCase()
                display.innerHTML = `\nThe country you selected is: ${newInput}`  
            }
            // else{
            //     console.log("2 "+input)
            //     display.innerHTML = phrase
            // }
            // else if(input!=data[i].name.common){
            //     display.innerHTML = "Error"
            // }
        }
        inputField.value = ""
           
    })
    .catch(error => console.log(error))
})