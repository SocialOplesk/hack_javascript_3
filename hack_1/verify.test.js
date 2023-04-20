const fnTest = require('./hack_1');



describe('hack-1', () => {
    test('validar estatus de tipo 200', async () => {
        const response = await fnTest();
        const status = 200;

        expect(response.status).toBe(status);
    });

    test('validar metodo de tipo GET', async () => {
        const response = await fnTest();
        const method = "get";
        expect(response.config.method).toBe(method);
    });

    test('validar endpoint /users/1', async () => {
        const response = await fnTest();
        const url = `https://jsonplaceholder.typicode.com/users/1`;
        expect(response.config.url).toBe(url);
    });

    test('validar las propiedades del response', async () => {
        const response = await fnTest();
        const props = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }

        expect(response.data).toStrictEqual(props)
    });
})