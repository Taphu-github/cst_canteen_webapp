import axios from "axios";

const ORDER_URL="http://localhost:8082/api/v1/order";
const CREDIT_URL="http://localhost:8082/api/v1/credit";
const FEED_URL="http://localhost:8082/api/v1/feed";
class OrderandCredit{

    getFeeds(){
        return axios.get(FEED_URL);
    }
    addFeed(student){
        return axios.post(FEED_URL, student);
    }
    getOrder(){
        return axios.get(ORDER_URL);
    }

    addOrders(student){
        return axios.post(ORDER_URL, student);
    }

    getOrdersById(studentid){
        return axios.get(ORDER_URL+'/'+studentid);
    }

    updateOrder(student, studentid){
        return axios.put(ORDER_URL +'/' +studentid, student);
    }

    getCredit(){
        return axios.get(CREDIT_URL);
    }

    getCreditById(OrderandCreditid){
        return axios.get(CREDIT_URL+'/'+OrderandCreditid);
    }

    addCredit(OrderandCredit){
        return axios.post(CREDIT_URL, OrderandCredit)
    }
    updateOrder(student, studentid){
        return axios.put(ORDER_URL +'/' +studentid, student);
    }
    updateCredit(student, studentid){
        return axios.put(CREDIT_URL +'/' +studentid, student);
    }

}

export default new OrderandCredit()