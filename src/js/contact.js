var message = document.querySelector('#message');

const websiteRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g;

// const myForm = document.querySelector('#form1');

// myForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(e.target[4].value == '')
//     if (e.target[0].value == '') {
//         message.textContent = "Please fill in your name!";
//         return false
//     }
//     if (e.target[1].value === "") {
//         message.textContent = "Please fill in your age!"
//         return false;
//     }
//     if (isNaN(e.target[1].value)) {
//         message.textContent = "Please fill in your age with a number!"
//         return false;
//     }
//     if (e.target[1].value < 18) {
//         message.textContent = "Must be 18 or over!"
//         return false;
//     }
//     if (e.target[3].value != e.target[2].value) {
//         message.textContent = "E-mail should match in both inputs!"
//         return false;
//     }
//     var atPos = e.target[2].value.indexOf("@");
//     var dotPos = e.target[2].value.lastIndexOf(".")
//     if (dotPos < atPos + 2) {
//         message.textContent = "The email_addresses must have a '@' and minimum 1 character before the dot!"
//         e.target[3].focus();
//         return false;
//     }
//     if (atPos < 1 || dotPos < atPos + 2 || e.target[2].value.length <= dotPos + 2) {
//         message.textContent = "Please enter a valid email address!"
//         e.target[2].focus();
//         return false;
//     }



//     if (e.target[2].value === "" || e.target[3].value !== e.target[2].value) {
//         e.target[3].focus();
//         message.textContent = "E-mail should match!";
//         return false;
//     }
//     if (!websiteRegex.test(e.target[4].value)) {
//         message.textContent = "Hjemmeside url følger ikke blah.."
//         return false;
//     }
//     else {
//         message.textContent = 'Completed'
//         return false
//     }

// })

function validate(f) {

    console.log('submited!!!')
    // f.preventDefault()

    if (f.name.value == "") {
        message.textContent = "Please fill in your name!";
        return false
    }

    if (f.age.value === "") {
        message.textContent = "Please fill in your age!"
        return false;
    }

    if (isNaN(f.age.value)) {
        message.textContent = "Please fill in your age with a number!"
        return false;
    }


    if (f.age.value < 18) {
        message.textContent = "Must be 18 or over!"
        return false;
    }


    if (f.email2.value != f.email1.value) {
        message.textContent = "E-mail should match in both inputs!"
        return false;
    }

    if (!websiteRegex.test(f.site.value)) {
        message.textContent = "Hjemmeside url følger ikke blah.."
        return false;
    }

    var atPos = f.email1.value.indexOf("@");
    var dotPos = f.email1.value.lastIndexOf(".");
    console.log(atPos);
    console.log(dotPos);
    console.log("f.email1.value.length is: " + f.email1.value.length)

    if (dotPos < atPos + 2) {
        message.textContent = "The email_addresses must have a '@' and minimum 1 character before the dot!"
        f.email2.focus();
        return false;
    }

    if (atPos < 1 || dotPos < atPos + 2 || f.email1.value.length <= dotPos + 2) {
        message.textContent = "Please enter a valid email address!"
        f.email1.focus();
        return false;
    }



    if (f.email1.value === "" || f.email2.value !== f.email1.value) {
        f.email2.focus();
        message.textContent = "E-mail should match!";
        return false;
    }


}