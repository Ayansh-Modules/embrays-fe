
export function validateURL(url) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return pattern.test(url);
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


