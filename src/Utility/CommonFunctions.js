
export function cleanString(input) {
    let cleaned = input.replace(/\n+/g, ' ');
    cleaned = cleaned.replace(/[^\w\s.,!?]/g, '');

    return cleaned;
}

 




