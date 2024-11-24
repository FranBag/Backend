export const updateReservationManager = (data) => {
    let updatedQuery = "";
    const params = [];
    if(data.id_customer){
        updatedQuery += "id_customer = ?";
        params.push(data.id_customer)
    }
    if(data.id_service){
        updatedQuery += (updatedQuery ? ", " : "") + "id_service = ?";
        params.push(data.id_service)
    }
    if(data.id_schedule){
        updatedQuery += (updatedQuery ? ", " : "") + "id_schedule = ?";
        params.push(data.id_schedule)
    }
    if(data.state){
        updatedQuery += (updatedQuery ? ", " : "") + "state = ?";
        params.push(data.state)
    }
    if(data.date){
        updatedQuery += (updatedQuery ? ", " : "") + "date = ?";
        params.push(data.date)
    }
    return{updatedQuery, params};
}