export const updateServiceManager = (data) => {
    let updatedQuery = "";
    const params = [];
    if(data.name){
        updatedQuery += "name = ?";
        params.push(data.name)
    }
    if(data.description){
        updatedQuery += (updatedQuery ? ", " : "") + "description = ?";
        params.push(data.description)
    }
    if(data.price){
        updatedQuery += (updatedQuery ? ", " : "") + "price = ?";
        params.push(data.price)
    }
    if(data.duration){
        updatedQuery += (updatedQuery ? ", " : "") + "duration = ?";
        params.push(data.duration)
    }
    return{updatedQuery, params};
}