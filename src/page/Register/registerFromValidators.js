import emailValid from "email-validator";

export const loginValidator = {
    message: "Minimalna długość to 3 znaki",
    validate: function (text) {
        return text.length >= 3;
    }
};

export const emailValidator = {
    message: "Niepoprawny format adresu email",
    validate: function (text) {
        return emailValid.validate(text);
    }
};

export const passwordValidator = {
    message: "Minimalna długość to 3 znaki",
    validate: function (text) {
        return text.length >= 3;
    }
};

export const passwordConfirmValidator = {
    message: "Podane hasła są różne",
    validate: function (text, password) {
        return password.localeCompare(text) === 0;
    }
};

