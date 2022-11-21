const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".s-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener("click", () => {
  modal.style.display = 'none';
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


//error validation


const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

//error message

function showError(input, message){
  const formValidation = input.parentElement;
  formValidation.className = 'formValidation error';

  const errorMessage = formValidation.querySelector('p');
  errorMessage.innerText = message;
}

// valid message

function showValid(input){
  const formValidation = input.parentElement;
  formValidation.className = 'formValidation valid';
}

//get field name

function getFieldName(input){
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// check req feild
function checkRequired(inputErr){
  inputErr.forEach(function(input) {
    if(input.value.trim()=== ''){
      showError(input, `${getFieldName(input)} is required.`);
    } else{
      showValid(input);
    }
  });
}



//check input length
function checkLength(input, min, max){
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} characters.`);
  }else if(input.value.length > max){
    showError(input, `${getFieldName(input)} must be at least ${max} characters.`); 
  } else {
    showValid(input);
  }
}

//check password match

function passwordMatch(input1, input2){
  if (input1.value != input2.value){
    showError(input2, 'Password do not match');
  }
}




//event listner
form.addEventListener('submit', (e) =>{
  e.preventDefault();

  checkRequired([name, email, password,  passwordConfirm]);
  checkLength(name, 3, 30);
  checkLength(password, 8, 25);
  checkLength(passwordConfirm, 8, 25);
  passwordMatch(password, passwordConfirm);
});


