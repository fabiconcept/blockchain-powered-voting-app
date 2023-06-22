export function flattenObject(obj) {
    let flattened = {};

    function flattenHelper(obj, path) {
        if (typeof obj !== 'object' || obj === null) {
            flattened[path] = obj;
            return;
        }

        if (Array.isArray(obj)) {
            obj.forEach((item, index) => {
                flattenHelper(item, `${path}[${index}]`);
            });
        } else {
            Object.keys(obj).forEach(key => {
                const newPath = path ? `${path}.${key}` : key;
                flattenHelper(obj[key], newPath);
            });
        }
    }

    flattenHelper(obj, '');

    return JSON.stringify(flattened);
}

export const sortStateListByVoteCount = (array) => {
    const editArray = [...array]
    editArray.sort((a, b) => a.count - b.count);
    return editArray;
}

export const sortStateListByName = (array) => {
    const editArray = [...array]
    editArray.sort((a, b) => a.name - b.name);
    return editArray;
}

export const sortStateListByDate = (array) => {
    const editArray = [...array]
    editArray.sort((a, b) => a.date - b.date);
    return editArray;
}

export const splitArray = (array, limit) => {
    const parentArray = [...array];
    const houseArray = [];

    while (parentArray.length > 0) {
        const tempHoldingArray = parentArray.splice(0, (limit > 0 ? limit : 8));
        houseArray.push(tempHoldingArray);
    }

    return houseArray;
};

export function calculateRemEquivalent(percentage) {
    // Validate the input
    if (typeof percentage !== 'number' || percentage < 0 || percentage > 100) {
        throw new Error('Percentage must be a number between 0 and 100');
    }

    // Calculate the equivalent rem value
    const remRange = 15 - 1; // Difference between 100% and 0% in rem
    const remEquivalent = ((percentage / 100) * remRange) + 1; // Convert percentage to rem equivalent

    // Round the result to two decimal places
    const roundedRemEquivalent = remEquivalent.toFixed(2);

    return `${roundedRemEquivalent}rem`;
}

export function convertColorCode(colorCode) {
    const opacities = [0.5, 0.25, 0.05, 0];
    const cleanedColorCode = colorCode.replace('#', '');
    const red = parseInt(cleanedColorCode.substr(0, 2), 16);
    const green = parseInt(cleanedColorCode.substr(2, 2), 16);
    const blue = parseInt(cleanedColorCode.substr(4, 2), 16);

    const convertedColors = opacities.map((opacity) => {
        return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    });

    return convertedColors;
}  




// UseLess Funtions
export const getRandomData = (lengthVal) => {
    return Array.from({ length: (lengthVal ? lengthVal : 6) }, () => Math.floor(Math.random() * 9999));
  };

export function generateRandomHexString(length) {
    const characters = "0123456789abcdef";
    let result = "0x";
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    
    return result;
  }