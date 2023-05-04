const {encryptMessage, decryptMessage} = require('./index.js');

test('returns a string', () => {
    const testMessage = 'my super secret message'
    expect(typeof encryptMessage(testMessage)).toEqual('string');
});

test('Does not return the plain-text string', () => {
    const testMessage = 'my super secret message'
    expect(encryptMessage(testMessage)).not.toEqual(testMessage);
});

test('returns a string', () => {
    const testMessage = 'my super secret message';
    const encrypted = encryptMessage(testMessage);
    expect(typeof decryptMessage(encrypted)).toEqual('string');
});

test('decryptMessage - decrypts encryptMessage output', () => {
    const testMessage = 'my super secret message';
    const encrypted = encryptMessage(testMessage);
    expect(decryptMessage(encrypted)).toEqual(testMessage);
});
