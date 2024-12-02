function isValidUsername(userName, passWord) {
    if (passWord.length >= 8 && !passWord.includes(' ') && !passWord.includes(userName)) {
        console.log("Login Successful");
        return true;
    } else {
        console.log("Login Failed");
        return false;
    }
}
