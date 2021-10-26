const fs = require(`fs`);

const inputData = fs.readFileSync(`input.txt`);;
console.log({ inputData });

const jsonData = JSON.parse(inputData);
console.log({ jsonData });
