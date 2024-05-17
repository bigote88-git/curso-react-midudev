export const distintDataFromObject = (dataArray, fieldName) => {

    const distintData = dataArray.map(data => data[fieldName]);
    return [...new Set(distintData)];
}