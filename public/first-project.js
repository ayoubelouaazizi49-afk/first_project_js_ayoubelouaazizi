  let currentUser = null;
  let user = [];
while (true) {
    let choice = prompt("1- Sign Up \n 2- Login \n 3- Change Password")


    if (choice === "1") {
        signUp();

    }else if (choice === "2") {
        login()

    }else if (choice === "3") {
       changePassword()

    }
     else if (choice === "exit") {
        break;
    }
}
// *signup
function signUp() {
    // !========Name=============================
    let nom = prompt("Enter Full Name").trim();
    if (nom.length < 5) {
        alert("Short name")
        return;
    }
     nom = nom.split(' ')
         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
         .join(' ');




         