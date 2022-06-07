const API_URL = "https://productos-pctools-default-rtdb.firebaseio.com/productos_react.json";

export async function getAllProductos(){
    try{
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}