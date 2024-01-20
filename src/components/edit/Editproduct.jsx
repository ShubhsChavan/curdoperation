import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import style from "./editproduct.Module.css"
import axios from 'axios';

const Editproduct = () => {

  const{id}=useParams();
  const [values, setvalues]=useState(
    {id: id,
      name:"",
      price: ""
    }
    
    

  );
  return (
    <>
      <form className={style.container}>
        <div className={style.form_group}>
          <label for="exampleInputEmail1">Product Name</label>
          <input type="text"  id="exampleInputEmail1"  placeholder="Product Name"/>
          
        </div>
        <div className={style.form_group}>
          <label for="exampleInputPassword1">Product Price</label>
          <input type="number"  id="exampleInputPassword1" placeholder="Product Price"/>
        </div>
        
        <button type="submit" className={style.btn}>Submit</button>
      </form>
    </>
  );
}

export default Editproduct