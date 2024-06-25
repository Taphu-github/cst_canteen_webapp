import axios from "axios";

const STUDENT_API_BASE_URL="http://localhost:8082/api/v1/students";
const CUSTOMER_API="http://localhost:8082/api/v1/customer";
class Customer{

    getStudent(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    addStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    getStudentById(studentid){
        return axios.get(STUDENT_API_BASE_URL+'/'+studentid);
    }

    updateStudent(student, studentid){
        return axios.put(STUDENT_API_BASE_URL +'/' +studentid, student);
    }
    getCustomer(){
        return axios.get(CUSTOMER_API);
    }

    getCsutomerById(customerid){
        return axios.get(CUSTOMER_API+'/'+customerid);
    }

    addCustomer(customer){
        return axios.post(CUSTOMER_API, customer)
    }

}

export default new Customer()