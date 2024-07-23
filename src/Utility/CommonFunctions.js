
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

export function validateMessage(message) {
    message = message.trim();
    
    if (message.length < 2) {
        return false;
    }
    
    return true;
}
 
export const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = date.getUTCDate();
    const monthIndex = date.getUTCMonth(); // getUTCMonth() returns month from 0-11
    const year = date.getUTCFullYear();
    
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const month = monthNames[monthIndex];
    
    return `${day} ${month} ${year}`;
};


