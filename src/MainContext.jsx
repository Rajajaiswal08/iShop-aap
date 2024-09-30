import axios from 'axios';
import React, { createContext, useState } from 'react'
const Context = createContext();
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MainContext(props) {
   const API_BASE_URL = "http://localhost:5000";
   const Cate_base_url = "/Category";
   const[cotegory,setCategory]=useState([])

    const fatchCategory = (id = null)=>{
     let API = API_BASE_URL + Cate_base_url ;
     if(id){
      API += "/" + id;
     }

      axios.get(API)
      .then(
        (resposnse)=>{
          console.log(resposnse)
              if(resposnse.data.flag == 1){
                  setCategory(resposnse.data.category);
              }
        }
      ).catch(
        (error)=>{
          console.log("error show", error)
        }
      )
    }


   const showToast =(msg,flag)=>{
     toast (msg,{type:flag ? 'success' : 'warning'})
   }

  return (
    <Context.Provider value={{ cotegory,fatchCategory,API_BASE_URL,Cate_base_url,showToast}}>
         <ToastContainer />
      {props.children}
    </Context.Provider>
  )
}

export default MainContext;

export {Context}