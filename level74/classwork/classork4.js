function concatenateStrings(str1, str2, str3, str4, str5) {
    let result = '';

    switch (typeof str1) {
        case 'string':
            result += str1;
            break;
        default:
            console.log("Argument 1 is not a string");
            return;
    }

    switch (typeof str2) {
        case 'string':
            result += str2;
            break;
        default:
            console.log("Argument 2 is not a string");
            return;
    }

    switch (typeof str3) {
        case 'string':
            result += str3;
            break;
        default:
            console.log("Argument 3 is not a string");
            return;
    }

    switch (typeof str4) {
        case 'string':
            result += str4;
            break;
        default:
            console.log("Argument 4 is not a string");
            return;
    }

    switch (typeof str5) {
        case 'string':
            result += str5;
            break;
        default:
            console.log("Argument 5 is not a string");
            return;
    }

    return result;
}
