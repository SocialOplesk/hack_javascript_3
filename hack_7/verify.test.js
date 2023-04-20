const fnTest = require('./hack_7.js');


describe('hack-7', () => {
    test('validar el valor del response', async () => {
        const id = 30;
        const response = await fnTest(id);
        const props = {
            "userId": 3,
            "id": 30,
            "title": "a quo magni similique perferendis",
            "body": "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
        };
        expect(response).toStrictEqual(props);
    });
});