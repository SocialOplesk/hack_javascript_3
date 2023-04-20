const fnTest = require('./hack_4.js');


describe('hack-4', ()=>{
    test('validar que sea de estatus 200', async () => {
        const response = await fnTest();
        const status = 200;
        expect(response.status).toBe(status);
    });
    
    test('validar que sea de metodo PATCH', async()=>{
        const response = await fnTest();
        const method = "patch";
        expect(response.config.method).toBe(method);
    });
    
    test('validar el url del endpoint /posts/1', async()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/1`;
        const response = await fnTest();
        expect(response.config.url).toBe(url);
    });
    
    test('validar el value del response {"id":1, props...}', async()=>{
        const response = await fnTest();
        const props = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        expect(response.data).toStrictEqual(props);
    });
});