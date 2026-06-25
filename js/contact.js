document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name")
.value.trim();

const email =
document.getElementById("email")
.value.trim();

const phone =
document.getElementById("phone")
.value.trim();

const message =
document.getElementById("message")
.value.trim();

if(
    name === "" ||
    email === "" ||
    phone === "" ||
    message === ""
){
    alert("Please fill all fields.");
    return;
}

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
    alert("Invalid email format.");
    return;
}

const phonePattern =
/^[0-9]+$/;

if(!phonePattern.test(phone)){
    alert("Phone number must contain digits only.");
    return;
}

alert("Form submitted successfully!");

document
.getElementById("contactForm")
.reset();

});
