
const validatePassword = (password) => {
    if (password.length < 8) {
        console.log('Password too short');
        return;
    }

    const hasUpperCase = /[A-Z]/.test(password);

    const hasLowerCase = /[a-z]/.test(password);

    const hasDigit = /[0-9]/.test(password)

    if (hasUpperCase && hasLowerCase && hasDigit) {
        console.log('Password is Correct', password);
        
    } else{
        console.log('Wrong Password! Password Must contain uppercase, lowercase and 0-9 digit');
        
    }

    return hasUpperCase && hasLowerCase && hasDigit;
}

let myPassword = validatePassword('bait2018');



