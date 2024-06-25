import axios from "axios";

const DAILYMENU_API_BASE_URL="http://localhost:8082/api/v1/dailymenu";
const GROCERY_API_BASE_URL="http://localhost:8082/api/v1/grocery";

class Product{

    getDailyMenuProduct(){
        return axios.get(DAILYMENU_API_BASE_URL);
    }

    getDailyMenuProductById(productid){
        return axios.get(DAILYMENU_API_BASE_URL+'/'+productid);
    }
    getGroceryProductById(productid){
        return axios.get(GROCERY_API_BASE_URL+'/'+productid);
    }

    addDailyMenuProduct(product){
        return axios.post(DAILYMENU_API_BASE_URL, product);
    }

    getGroceryProduct(){
        return axios.get(GROCERY_API_BASE_URL);
    }

    addGroceryProduct(product){
        return axios.post(GROCERY_API_BASE_URL, product);
    }

    updateGroceryProduct(product, productid){
        return axios.put(GROCERY_API_BASE_URL +'/' +productid,product);
    }
    updateDailyProduct(product, productid){
        return axios.put(DAILYMENU_API_BASE_URL +'/' +productid, product);
    }

    deleteDailyProduct(productid){
        return axios.delete(DAILYMENU_API_BASE_URL+'/'+productid);
    }
    deleteGroceryProduct(productid){
        return axios.delete(GROCERY_API_BASE_URL+'/'+productid)
    }


}

export default new Product()