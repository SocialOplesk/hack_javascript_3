const fnTest = require('./hack_5.js');


describe('hack-5', ()=>{
    test('validar que sea de estatus 200', async () => {
        const response = await fnTest();
        const status = 200;
        expect(response.status).toBe(status);
    });
    
    test('validar que sea de metodo DELETE', async()=>{
        const response = await fnTest();
        const method = "delete";
        expect(response.config.method).toBe(method);
    });
    
    test('validar el url del endpoint /posts/1', async()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/1`;
        const response = await fnTest();
        expect(response.config.url).toBe(url);
    });
    
    test('validar el value del response {}', async()=>{
        const response = await fnTest();
        const props = {};    

        expect(response.data).toStrictEqual(props);
    });
});