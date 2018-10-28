function sumOfOther(incomingArray) {
    let count = 0;

    for (let i = 0; i < incomingArray.length; i++) {
        count += incomingArray[i]; 
    }

    const resultArray = [];

    for (let i = 0; i < incomingArray.length; i++) {
        resultArray[i] = count - incomingArray[i];
    }

    return resultArray;
}