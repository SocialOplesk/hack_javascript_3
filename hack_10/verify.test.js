const fnTest = require('./hack_10.js');


describe('hack-10', () => {
    test('validar que tenga estatus 200', async () => {
        const id = 50;
        const response = await fnTest(id);
        const status = 200;
        expect(response.status).toBe(status);
    });
    test('validar el valor del response {"id":50}', async () => {
        const id = 50;
        const response = await fnTest(id);
        const data = await response.json()
        const props = {
            "id": 50
          }
        expect(data).toStrictEqual(props);
    });
});