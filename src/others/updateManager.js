export const updateManager = (data) => {
    let updateQuery = "";
    const params = [];
    if(data.name){
        updateQuery += "name = ?";
        params.push(data.name)
    }
    if(data.email){
        updateQuery += (updateQuery ? ", " : "") + "email = ?";
        params.push(data.email)
    }
    if(data.phone_number){
        updateQuery += (updateQuery ? ", " : "") + "phone_number = ?";
        params.push(data.phone_number)
    }
    if(data.pass){
        updateQuery += (updateQuery ? ", " : "") + "pass = ?";
        params.push(data.pass)
    }

    return updateQuery, params;
}

/* prueba
const datos = {
    name:"hola",
    email:"asdfa@asdsa.com",
    phone_number:"12345678",
    pass:"pepito123"
}

const [a, b] = updateManager(datos);

*/