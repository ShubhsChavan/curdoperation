import React from 'react'
import { toast } from "react-toastify";
import axios from "axios";
import { useState, useEffect } from "react";
import "./products.css"
import { Link } from 'react-router-dom';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        (async function fetchProductList() {
          try {
            const { data } = await axios.get(
              `https://dummyjson.com/products?limit=100`
            );
            const slicedProduct = data?.products?.slice(0, 10);
    
            setAllProducts(data.products);
            setProductList(slicedProduct);
            console.log(productList);
    
          } catch (error) {
            console.log(`error in getting product list`, error);
            toast.error(error.message);
          } 
        })();
      }, []);

      useEffect(() => {
        toast.warning(`Please wait fetching product list`)
        const pageChangeProduct = allProducts?.slice(page * 10 - 10, 10 * page);
        setTimeout(() => {
          toast.success(`Success`)
        }, 4500);
        setProductList(pageChangeProduct);
      }, [page]);

      function handlepagination(i){
        setPage(i+1);
      }

      const deleteProduct = (id) => {
        const index = productList.findIndex((product) => product.id === id);
        if (index !== -1) {
          let newproductList = [...productList];
          newproductList.splice(index, 1);
        //   Displyed the toast messages
          toast.success("Contact Deleted Successfully !");
          setProductList(newproductList);
        }
    };
      
  return (
    <>
      <div className="pagination">
          <span onClick={()=>setPage(page-1)}>⏮</span>
          {[...Array(allProducts.length/10)].map((_,i)=>{
            return <span key={i} className={page===i+1 ?"paginationselected" : ""} onClick={()=>handlepagination(i)}>{i+1}</span>; 
            }
            )}
          
          <span onClick={()=>setPage(page+1)}>⏩</span>
        </div>

      <div className='container'>
        {productList.map((product)=>(
          
            
              <div key={product.id} className='item'>
                  <h2>{product.title}</h2>
                  <img src={product.thumbnail}/> 
                  <div className='price'>
                    <span> ${product.price}</span>
                    <span>{product.discountPercentage}%</span>
                  </div>
                  <div className="buttons">
                    <Link className="edit" to={`editproduct/${product.id}`}>Edit</Link>
                    <button className="delete" onClick={()=>deleteProduct(product.id)}>Delete</button>
                  </div>
              </div>
        ))
        }
      </div>
      
    </>
    
  )
}

export default Products