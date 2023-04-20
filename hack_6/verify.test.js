const fnTest = require('./hack_6.js');


describe('hack-6', () => {
    test('validar el valor del response', async () => {
        const response = await fnTest();
        const props = {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        };
        expect(response).toStrictEqual(props);
    });
});