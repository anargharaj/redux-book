import React from 'react'
import { useState } from 'react';
import { add } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Add() {
    const [name, setName] = useState("")
    const [cat, setCat] = useState("")
    const [price, setPrice] = useState("")
  
  
    const product = useSelector((state) => state.productReducer)
    console.log(product)
    const dispatch = useDispatch();
    const navigate=useNavigate()
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(add({ id: product[product.length - 1].id + 1, name, cat, price }))
      navigate('/')
    }
  
  return (
    <>
          <div className='add-bg d-flex vh-100 justify-content-center align-items-center mt-5'>
        <div className='add border p-5 shadow'>
          <h3 className='text-light'>Add New Books</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className='text-light'>Book</label>
              <input type="text" name='name' className='form-control form-signin' placeholder='Enter bookname' onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="category" className='text-light'>Author</label>
              <input type="text" name='cat' className='form-control form-signin' placeholder='Enter author' onChange={e=>setCat(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="price" className='text-light'>Price</label>
              <input type="text" name='price' className='form-control form-signin' placeholder='Enter Price' onChange={e=>setPrice(e.target.value)}/>
            </div>
            <div className='d-flex justify-content-between mt-4'>
              <Link to={"/"} className='btn btn-secondary ' style={{color:"white",backgroundColor:"red"}}>Cancel</Link>
              <button className='btn  ' style={{color:"white",backgroundColor:"green"}}>Submit</button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Add