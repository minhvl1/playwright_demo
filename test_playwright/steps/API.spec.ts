import {test, expect} from '@playwright/test'


test("Get users", async ({ request, baseURL }) => {
    const _response = await request.get(`${baseURL}/Activities/2`)
    expect(_response.ok()).toBeTruthy();
    expect(_response.status()).toBe(200);
    // console.log(await _response.json());
    let body = await _response.json()

    for (var i=0;i<Object.values(body).length;i++) {
        console.log(Object.keys(body)[i]+" : "+Object.values(body)[i])
    }
})


test("create a new user", async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/Activities`, {
        data: {
            "id": 0,
            "title": "string",
            "dueDate": "2022-11-25T03:50:44.500Z",
            "completed": true
        },
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(await response.json());
})

test("Get users- complex reponse body ", async ({ request, baseURL }) => {
    const _response = await request.get(`https://reqres.in/api/users/2`)
    expect(_response.ok()).toBeTruthy();
    expect(_response.status()).toBe(200);
    // console.log(await _response.json());
    let body = await _response.json()

    for(let y=0 ; y< Object.keys(body).length; y++) {
        for (let i = 0; i < Object.values(Object.values(body)[y]).length; i++) {
            console.log(Object.keys(Object.values(body)[y])[i] + " : " + Object.values(Object.values(body)[y])[i] )
        }
    }
})
