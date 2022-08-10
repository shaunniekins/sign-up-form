const firstName = document.querySelector("input[name='firstName']")
const lastName = document.querySelector("input[name='lastName']")
const email = document.querySelector("input[name='userEmail']")
const phoneNum = document.querySelector("input[name='phoneNumber']")
const pass = document.querySelector("input[name='password']")
const confirmPass = document.querySelector("input[name='confirmPass']")
const submitBtn = document.querySelector("button[type='submit']")
const passError = document.querySelector(".passError")


submitBtn.addEventListener('click', isBlank())


function isBlank() {
    if(firstName.value.length !== 0 && 
        lastName.value.length !== 0 && 
        email.value.length !== 0 && 
        phoneNum.value.length !== 0 && 
        pass.value.length !== 0 && 
        confirmPass.value.length !== 0) 
    {
        enableBtn()
        console.log("enabled")
    } else {
        disableBtn()
        console.log("disabled")
    }
}

function disableBtn() {
    submitBtn.disabled = true;
}

function enableBtn() {
    submitBtn.disabled = false;
        if(pass.value === confirmPass.value) {
            console.log(pass.value) 
            return
        }
            passError.style.visibility = "visible"
}