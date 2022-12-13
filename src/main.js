const display = document.getElementById("display")
const searchButton = document.getElementById("search")
const inputField = document.getElementById("inputarea")

searchButton.addEventListener("click", ()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {

        let input = inputField.value;
        let arr = [];
        for(let i=0; i<data.length; i++){
            arr.push((data[i].name.common));

            if(input==data[i].name.common){
                
                // input=data[i].name.common
                        display.innerHTML = data[i].name.common 
                        // = input
                        
            }
        }
        inputField.value = ""
           
    })
    .catch(error => console.log(error))
})