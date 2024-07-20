
export function validateURL(url) {
    const urlRegex = /^(https?:\/\/)?([\w\-]+(\.[\w\-]+)+)([\w\-,@?^=%&:\/~+#]*)?$/;
    return urlRegex.test(url);
}


export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
 
export function validateContactNumber(number) {
    const numberRegex = /^\+?[1-9]\d{1,14}$/;
    return numberRegex.test(number);
}
 


