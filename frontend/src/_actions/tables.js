export const getTable = (tables)=> {
    return{
        type : 'GET_TABLES',
        payload : tables
    }
}