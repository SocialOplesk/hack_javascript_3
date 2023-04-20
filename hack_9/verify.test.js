const fnTest = require('./hack_9.js');


describe('hack-9', () => {
    test('validar el valor del response {"id":101}', async () => {
        const response = await fnTest();
        const props = {
            "id": 101
        };
        expect(response).toStrictEqual(props);
    });
});