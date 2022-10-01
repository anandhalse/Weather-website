console.log("js file works");

const weatherForm = document.querySelector('form');
const search = document.querySelector('input')
const messageOne= document.querySelector('#message-1')
const messageTwo= document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const locaton = search.value

    messageOne.textContent="loading...";
    messageTwo.textContent="";

    const fetch = require('node-fetch');
fetch("https://localhost:3000/weather?address=!").then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.error=data.error
            // console.log(data.error);
        }else{
                messageOne.textContent=data.location;
                messageTwoe.textContent=data.forcast;

            // console.log(data.locaton);

        }
    })
})

})