const fnTest = require('./hack_3');


describe('hack-3', ()=>{
    test('validar que sea de estatus 200', async () => {
        const response = await fnTest();
        const status = 200;
        expect(response.status).toBe(status);
    });
    
    test('validar que sea de metodo PUT', async()=>{
        const response = await fnTest();
        const method = "put";
        expect(response.config.method).toBe(method);
    });
    
    test('validar el url del endpoint /posts/1', async()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/1`;
        const response = await fnTest();
        expect(response.config.url).toBe(url);
    });
    
    test('validar el value del response {"id":1}', async()=>{
        const response = await fnTest();
        const props = {
            "id": 1
        }
        expect(response.data).toStrictEqual(props);
    });
});