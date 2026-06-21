let currentUser = null;
let user = [];
while (true) {
    let choice = prompt("1- Sign Up \n 2- Login \n 3- Change Password")


    if (choice === "1") {
        signUp();

    } else if (choice === "2") {
        login()

    } else if (choice === "3") {
        changePassword()

    }
    else if (choice === "exit") {
        break;
    }
}
// *signup
function signUp() {
    // !name
    let nom = prompt("Enter Full Name").trim();
    if (nom.length < 5) {
        alert("Short name")
        return;
    }
    nom = nom.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    // !email
    let email = prompt("Enter Email").trim();
    email = email.toLowerCase();
    if (email.includes(" ")) {
        alert("Remove Space");
        return;
    }
    if (email.length < 10) {
        alert("Email short")
        return;
    }
    if (!email.includes("@")) {
        alert("Email must contain @")
        return;
    }
// !age
    let age = prompt("Enter Age").trim();
    if (age.includes(" ")) {
        alert("Remove Space");
        return;
    }
     if (age.length >= 3 || age.length === 0) {
        alert("Invalid Age")
        return;
    }
    if (isNaN(age)) {
        alert("Age must cotain Numbers");
        return;
    }
    // !Password
    let password = prompt("Enter Password").trim();
    if (password.includes(" ")) {
        alert("Remove Space");
        return;
    }

    if (!password.includes("@") &&
        !password.includes("#") &&
        !password.includes("-") &&
        !password.includes("+") &&
        !password.includes("*") &&
        !password.includes("/")) {
        alert("Add one Special Caracter");
        return;
    }
     if (password.length < 7) {
        alert("Password incorect")
        return;
    }

    let confirm = prompt ("Confirm");



    if (confirm === password) {
    user.push({
        name: nom,
        email: email,
        age: age,
        password: password,
        balance: 0,
        loan: 0,
        investement:[],
        history:[],

    });
    console.log("Account Created");

    } else {
    console.log("Incorrect Password");

   }
}
// !functionlogin
function login () {
  
let email = prompt("Enter your Email to log In").trim().toLowerCase();
let foundUser = user.find(us => us.email === email);
if (!foundUser){
    alert("Email not found in our database!");
    return;
}
let password = prompt("Enter your password:");
if (foundUser.password !==password){
    alert("Incorrect password!");
    return;
}
currentUser = foundUser;
alert(`welcome back, ${currentUser.name}!`);
console.log("Logged in successfully");

}

function changePassword () {
  let email = prompt("Enter your email to change password:").trim().toLowerCase();
  let foundUser = user.find(us => us.email === email);
   
if (! foundUser){
    alert("email npot found! you cannot change the  password.");
    return;
}
 let newPassword = prompt("Enter your New password:").trim();
  if (newPassword.includes(" ")){
    alert("Password cannot contain spaces.");
    return;
  }
  if (newPassword.length < 7){
    alert("Password must be at least 7 characters long.");
    return;
  }

  let specialChars = ["@", "#", "-", "+", "*", "/"];
let hasSpecial = specialChars.some(char => newPassword.includes(char));
if (!hasSpecial){
    alert("PAssword must contain at  least one special character:@,#,=,*");
    return;
}
foundUser.password = newPassword;
alert("PAssword changed successfully! you can now log in with your new password.");
console.log("Password updated");

}
