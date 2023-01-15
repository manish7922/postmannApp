import axios from "axios";
// import axois from "axios";

// const baseURL = "http://localhost:2411";

  function getData(formData, jsonText, paramData, headerData) {
    return  axios({
        method: formData.Formmethod ,
        url: formData.Formurl,
        body: jsonText,
        headers: headerData,
        params: paramData
    })

}
// function post(url, obj) {
//   return axois.post(baseURL + url, obj);
// }



export default {
getData,
};