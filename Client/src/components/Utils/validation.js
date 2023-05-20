function validation(inputs) {

    const errors = {}
    const email = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.email) && inputs.email.length < 35);
    const password = (/.*[0-9].*/.test(inputs.password) && (inputs.password.length > 5 && inputs.password.length < 11))
    if (inputs.email) {
        if (!email) {
            errors['email'] = 'EMAIL INVALIDO';
        }
    }

    if (inputs.password)
        if (!password) {
            errors['password'] = 'TU CONTRASEñA DEBE TENER ENTRE 6 Y 10 CARACTERES Y CONTENER AL MENOS UN NUMERO'
        }

    return errors;
}

export default validation;
//const atLeastOneNumberRegex = /.*[0-9].*/
//const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;