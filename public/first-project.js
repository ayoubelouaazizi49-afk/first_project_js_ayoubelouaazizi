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