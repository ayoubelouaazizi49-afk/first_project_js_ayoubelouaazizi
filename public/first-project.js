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


