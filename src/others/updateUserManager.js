export const updateUserManager = (data) => {
    let updatedQuery = "";
    const params = [];
    if(data.name){
        updatedQuery += "name = ?";
        params.push(data.name)
    }
    if(data.email){
        updatedQuery += (updatedQuery ? ", " : "") + "email = ?";
        params.push(data.email)
    }
    if(data.phone_number){
        updatedQuery += (updatedQuery ? ", " : "") + "phone_number = ?";
        params.push(data.phone_number)
    }
    if(data.pass){
        updatedQuery += (updatedQuery ? ", " : "") + "pass = ?";
        params.push(data.pass)
    }
    return{updatedQuery, params};
}
