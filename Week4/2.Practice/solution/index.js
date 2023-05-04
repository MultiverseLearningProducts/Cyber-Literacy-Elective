// require crypto module
const crypto = require("crypto");
// MD5 is weak. AES is strong.
const algorithm = "aes-256-cbc"; 
// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);
// secret key generate 32 bytes of random data
const key = crypto.randomBytes(32);

// DO NOT EDIT ABOVE 👆

// YOUR CODE BELOW 👇

const encryptMessage = (message) => {
    // TODO - createCipheriv method call here
    const cipher = crypto.createCipheriv(algorithm, key, initVector);

    // TODO - cipher update method call here
    let encryptedData = cipher.update(message, "utf-8", "hex");

    // TODO - cipher final method call here
    encryptedData += cipher.final("hex");

    return encryptedData;
}
const decryptMessage = (encryptedData) => {
    // TODO - createDecipheriv method call here
    const decipher = crypto.createDecipheriv(algorithm, key, initVector);
    // TODO - decipher update method call here
    let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
    // TODO - decipher final method call here
    decryptedData += decipher.final("utf8");

    return decryptedData;
}

// DO NOT EDIT BELOW

module.exports = {
    encryptMessage,
    decryptMessage
};
