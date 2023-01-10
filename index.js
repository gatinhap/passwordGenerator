const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passwordEl = document.getElementById('password-one')
let passwordOneCopyInfo = document.getElementById('password-one-copy-text')

//boolean used to show "copied" pop-up only after password was generated
let isActive = false

//this function generates 2 passwords
function generatePassword(passwordLength = 15) {
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0] % characters.length
        let randomLetter = characters[randomNumber]
        password += randomLetter
    }
    passwordEl.textContent += password
    isActive = true
    copyPassword()
}

//this function triggers generatePassword() function
//and resets the previous passwords if there were any
function getPassword() {
    passwordEl.textContent = ""
    isActive = false
    generatePassword()
}

//this function copies clicked password to clipboard
function copyPassword() {
    passwordEl.onclick = function () {
            document.execCommand("copy")
        }

    passwordEl.addEventListener("copy", function (event) {
            event.preventDefault();
            if (event.clipboardData) {
                event.clipboardData.setData("text/plain", passwordEl.textContent);
                console.log(event.clipboardData.getData("text"))
            }
        })

}

//this function shows pop-up text that the password was copied
function showPasswordCopyInfo() {
    if (isActive === true) {
        passwordOneCopyInfo.classList.remove('run-animation')
        //the line below triggers reflow
        void passwordOneCopyInfo.offsetWidth
        passwordOneCopyInfo.classList.add('run-animation')
    }
}





