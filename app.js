let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let cnic = document.getElementById('cnic');
let username = document.getElementById('username');
let city = document.getElementById('city');
let zip = document.getElementById('zip');
let termsConditions = document.getElementById('termsConditions');


firstName.addEventListener('input', e => validateName(e.target));
lastName.addEventListener('input', e => validateName(e.target));
email.addEventListener('input', e => validateEmail(e.target));
phone.addEventListener('input', e => validatePhone(e.target));
cnic.addEventListener('input', e => validateCnic(e.target));
username.addEventListener('input', e => validateUsername(e.target));
city.addEventListener('input', e => validateCity(e.target));
zip.addEventListener('input', e => validateZip(e.target));
termsConditions.addEventListener('input', e => validateTermsConditions(e.target));

// validate name function, it accepts the input element as argument 
function validateName(elem){
    let regex = /^[a-zA-Z]{2,10}$/g;
    let test = regex.test(elem.value);
    if(elem.value.length !== 0){
        if(test){
            elem.classList.remove('is-invalid');
            elem.classList.add('is-valid');
        }else{
            elem.classList.remove('is-valid');
            elem.classList.add('is-invalid');
        }
    }else{
        elem.classList.remove('is-invalid');
        elem.classList.remove('is-valid');
    }
    
}

// validate email function, it accepts the input element as argument 
function validateEmail(elem){
    let regex = /^[a-zA-Z0-9\._]{4,20}@[a-zA-Z0-9]{2,15}\.[a-zA-Z0-9]{2,15}$/g;
    let test = regex.test(elem.value);
    if(elem.value.length !== 0){
        if(test){
            elem.classList.remove('is-invalid');
            elem.classList.add('is-valid');
        }else{
            elem.classList.remove('is-valid');
            elem.classList.add('is-invalid');
        }
    }else{
        elem.classList.remove('is-invalid');
        elem.classList.remove('is-valid');
    }
    
}

// validate phone number function, it accepts the input element as argument 
function validatePhone(elem){
    let regex = /^03[0-9]{9}$/g;
    let test = regex.test(elem.value);
    if(elem.value.length !== 0){
        if(test){
            elem.classList.remove('is-invalid');
            elem.classList.add('is-valid');
        }else{
            elem.classList.remove('is-valid');
            elem.classList.add('is-invalid');
        }
    }else{
        elem.classList.remove('is-invalid');
        elem.classList.remove('is-valid');
    }
    
}
// validate cnic number function, it accepts the input element as argument 
function validateCnic(elem){
    let regex = /^[^0][0-9]{4}-[0-9]{7}-[0-9]{1}$/g;
    let test = regex.test(elem.value);
    if(elem.value.length !== 0){
        if(test){
            elem.classList.remove('is-invalid');
            elem.classList.add('is-valid');
        }else{
            elem.classList.remove('is-valid');
            elem.classList.add('is-invalid');
        }
    }else{
        elem.classList.remove('is-invalid');
        elem.classList.remove('is-valid');
    }
    
}

// validate username function, it accepts the input element as argument 
function validateUsername(elem){
    let regex = /\w{3,}/g;
    let regex2 = /[a-z]/gi;
    let test = regex.test(elem.value);
    let test2 = regex2.test(elem.value);
    if(elem.value.length !== 0){
        if(test && test2){
            elem.classList.remove('is-invalid');
            elem.classList.add('is-valid');
        }else{
            elem.classList.remove('is-valid');
            elem.classList.add('is-invalid');
        }
    }else{
        elem.classList.remove('is-invalid');
        elem.classList.remove('is-valid');
    }
    
}
// validate city function, it accepts the input element as argument 
function validateCity(elem){
    let regex = /^[a-zA-Z\s]+$/g;
    let test = regex.test(elem.value);
    if(elem.value.length !== 0){
        if(test){
            elem.classList.remove('is-invalid');
            elem.classList.add('is-valid');
        }else{
            elem.classList.remove('is-valid');
            elem.classList.add('is-invalid');
        }
    }else{
        elem.classList.remove('is-invalid');
        elem.classList.remove('is-valid');
    }
    
}
// validate state function, it accepts the input element as argument 
function validateState(elem){
    let regex = /^03[0-9]{9}$/g;
    let test = regex.test(elem.value);
    if(elem.value.length !== 0){
        if(test){
            elem.classList.remove('is-invalid');
            elem.classList.add('is-valid');
        }else{
            elem.classList.remove('is-valid');
            elem.classList.add('is-invalid');
        }
    }else{
        elem.classList.remove('is-invalid');
        elem.classList.remove('is-valid');
    }
    
}
// validate zip function, it accepts the input element as argument 
function validateZip(elem){
    let regex = /^[0-9]{5}$/g;
    let test = regex.test(elem.value);
    if(elem.value.length !== 0){
        if(test){
            elem.classList.remove('is-invalid');
            elem.classList.add('is-valid');
        }else{
            elem.classList.remove('is-valid');
            elem.classList.add('is-invalid');
        }
    }else{
        elem.classList.remove('is-invalid');
        elem.classList.remove('is-valid');
    }
    
}
// terms and condition validation
function validateTermsConditions(elem){
    
    let test = elem.checked;
    if(test){
        elem.classList.remove('is-invalid');
        elem.classList.add('is-valid');
    }else{
        elem.classList.remove('is-valid');
        elem.classList.add('is-invalid');
    }

}