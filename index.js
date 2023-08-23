const subs = document.getElementById("subs")
const dismiss = document.getElementById("dismiss")
const text = document.getElementById("text")
const thanks = document.querySelector(".thankyouContainer")
const main = document.querySelector(".maincontainer")
const mail = document.getElementById("mail")
const email = document.getElementById("email");
// subs.addEventListener("click", () =>{
//     thanks.classList.remove("hidden")
//     main.classList.add("hidden")
   
// })
dismiss.addEventListener("click", () =>{
    thanks.classList.add("hidden")
    main.classList.remove("hidden")
    text.classList.add("hidden")
    email.classList.remove("invalid")
})

function  getVal(){
    // email.value = mail.innerHTML
    mail.innerHTML = email.value
}


function validate() {
    var mail = document.getElementById("email").value
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(mail.match(reg)) {
            thanks.classList.remove("hidden")
            main.classList.add("hidden")    
        }
    else {
        thanks.classList.add("hidden")
        main.classList.remove("hidden")
        text.classList.remove("hidden")
        email.classList.add("invalid")   
        }
    }
    
