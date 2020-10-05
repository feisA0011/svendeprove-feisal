const message = document.querySelector('#message');
console.log(message)
const submit = document.querySelector('#submit')
const form = document.querySelector('#form1')

function validate(f) {
    // f.preventDefault()
    // console.log(f)
    if (f.name.value == "") {
        message.textContent = "Please fill in your name!";
        return false
    }
    const atPos = f.email1.value.indexOf("@");
    const dotPos = f.email1.value.lastIndexOf(".");

    if (atPos < 1 || dotPos < atPos + 2 || f.email1.value.length <= dotPos + 2) {
        message.textContent = "Please enter a valid email address!"
        f.email1.focus();
        return false;
    }

}
