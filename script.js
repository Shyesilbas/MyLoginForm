function RefreshPage(){
    window.location.reload();
}
function GetTime(){
    let anlıkTarih = new Date();
    let gün = anlıkTarih.getDate();
    let ay = anlıkTarih.getMonth()+1;
    let yıl = anlıkTarih.getFullYear();
    let saat =anlıkTarih.getHours();
    let dakika = anlıkTarih.getMinutes();
    let saniye = anlıkTarih.getSeconds();
     
    ay = ("0"+ay).slice(-2);
    gün = ("0"+gün).slice(-2);
    saat =("0"+saat).slice(-2);
    dakika=("0"+dakika).slice(-2); 
    saniye = ("0" + saniye).slice(-2);
    let AnlıkSaatDiv = document.getElementById("Time-container");
    AnlıkSaatDiv.textContent = `${gün}.${ay}.${yıl} - ${saat}:${dakika}:${saniye}`;
}
setInterval(GetTime,1000);
GetTime();


var passwordField = document.getElementById("password");
var toggleIcon = document.getElementById("togglePassword");
var isPasswordVisible = false;
function togglePassword() {
isPasswordVisible = !isPasswordVisible

if (isPasswordVisible) {
    passwordField.type = "text";
    toggleIcon.textContent = "👀";
} else {
    passwordField.type = "password";
    toggleIcon.textContent = "👁️";
}
}

function togglePassword2() {
var passwordInput = document.getElementById("password2");
var toggleIcon = document.getElementById("togglePassword");

if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.textContent = "👀";
} else {
    passwordInput.type = "password";
    toggleIcon.textContent = "👁️";
}
}

function SwitchForm() {
var registerContainer = document.getElementById("Register-container");
var loginContainer = document.getElementById("Login-container");

if (registerContainer.style.display === "block" || registerContainer.style.display === "") {
    registerContainer.style.display = "none";
    loginContainer.style.display = "block";
} else {
    registerContainer.style.display = "block";
    loginContainer.style.display = "none";
}
}
function strongPassword(input){
var strength = input.value;
var strongpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,101}$/;

if(strongpassword.test(strength)){
    input.classList.remove("invalid");
    input.classList.add("valid");
}
else{
    input.classList.remove("valid");
    input.classList.add("invalid");
}

}

function checkPassword() {
    var password = document.getElementById("password").value;
  
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,100}$/;
  
    if (!passwordPattern.test(password)) {
      alert("Check the Password criterias!");
      return;
    } 

    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("Checkpassword").value;

    if(password1 != password2){
      alert("Passwords do NOT match!");
      return false;
    }
    return true;
}

function register() {
    if (!checkPassword()) {
      return;
    }
    var comingSoonText = document.createElement("h1");
      comingSoonText.innerText = "Coming Soon...";
      comingSoonText.id = "comingSoonText"; 
      document.body.innerHTML = ''; 
      document.body.appendChild(comingSoonText);

      var backButton = document.createElement("button");
      backButton.innerText = "Back to Registration";
      backButton.onclick = function() {
        window.location.reload();
      };

      document.body.appendChild(backButton);
    }
    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?";
        let password = "";
  
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          password += charset[randomIndex];
        }
  
        return password;
      }
  
      document.getElementById("recommendPassword").addEventListener("click", function() {
        const newPassword = generatePassword(12); // 12 karakter uzunluğunda bir şifre oluşturur
        alert(`Recommended Password: ${newPassword}`);
      });
  
