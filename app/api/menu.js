import request from '../utils/request';

export const getMenu = async function () {
    const response = await request.get("/menu")
    
    return response.data
}

export const createMenu = async function (payload) {
    const response = await request.post("/menu", payload)
    
    return response.data
}