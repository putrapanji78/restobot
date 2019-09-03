export const getMenus = (menus) => {
    return{
        type: 'GET_MENUS',
        playload: menus
    }
}