const fnTest = require('./hack_2');


describe('hack-2', ()=>{
    test('validar que sea de estatus 201', async () => {
        const response = await fnTest();
        const status = 201;
        expect(response.status).toBe(status);
    });
    
    test('validar que sea de metodo POST', async()=>{
        const response = await fnTest();
        const method = "post";
        expect(response.config.method).toBe(method);
    });
    
    test('validar el url del endpoint /posts', async()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const response = await fnTest();
        expect(response.config.url).toBe(url);
    });
    
    test('validar el value del response {"id":101}', async()=>{
        const response = await fnTest();
        const props = {
            "id": 101
        };
        expect(response.data).toStrictEqual(props);
    });
});