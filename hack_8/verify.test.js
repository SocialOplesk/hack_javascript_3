const fnTest = require('./hack_8.js');


describe('hack-8', () => {
    test('validar el valor del response length = 100', async () => {
        const response = await fnTest();
        const len = 100;
        expect(response).toBe(len);
    });
});