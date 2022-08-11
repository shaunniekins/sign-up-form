const pass = document.querySelector("input[name='password']")
const confirmPass = document.querySelector("input[name='confirmPass']")

function validatePassword(){
  if(pass.value != confirmPass.value) {
    confirmPass.setCustomValidity("Passwords Don't Match");
  } else {
    confirmPass.setCustomValidity('');
  }
}

pass.onchange = validatePassword;
confirmPass.onkeyup = validatePassword;