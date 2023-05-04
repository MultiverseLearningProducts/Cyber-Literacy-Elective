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

const encryptMessage = () => {
    // TODO - createCipheriv method call here

    // TODO - cipher update method call here

    // TODO - cipher final method call here

}
const decryptMessage = () => {
    // TODO - createDecipheriv method call here

    // TODO - decipher update method call here

    // TODO - decipher final method call here

}

// DO NOT EDIT BELOW

module.exports = {
    encryptMessage,
    decryptMessage
};
