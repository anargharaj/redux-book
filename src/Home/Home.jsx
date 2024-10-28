import React from 'react'
import Header from './Header'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { delet } from '../redux/productSlice';
import { Link } from 'react-router-dom';


function Home() {
    const product = useSelector((state) => state.productReducer)
    console.log(product)
    const dispatch = useDispatch()
  return (

     <>

              <Header />

              
                <div >
                  <img src="https://img.freepik.com/premium-photo/books-education-library_746565-1008.jpg" alt=""  style={{width:"100%",height:"400px"}}/>

                </div>
                {/* <div className='col-6'>

                  <img src="https://i.giphy.com/wc3VoCTwGuGkg.gif" alt="" />

                </div> */}
              

      <div id='home' className=' d-flex justify-content-center align-items-center ' style={{backgroundColor:"black"}}>
        <div className='container border border-secondary shadow pt-3 rounded-4'>
          <Link to={'/add'} className='btn my-4'style={{color:"white",backgroundColor:"black"}}>
            <span className='fs-5'>+</span> Dive into the World of Words
          </Link>


          <div>
            {
              product?.length > 0 ?
                <Table striped bordered hover responsive='sm'>
                  <thead>
                    <tr className='row1'>
                      <th className='text-black text-center p-3'>ID</th>
                      <th className='text-black text-center p-3'>Book Name</th>
                      <th className='text-black text-center p-3'>Author</th>
                      <th className='text-black text-center p-3'>Price</th>
                      <th className='text-black text-center p-3'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      product?.map((item, index) => (
                        <tr key={index} className='row2'>
                          <td className='text-black text-center p-3'>{item?.id}</td>
                          <td className='text-black text-center p-3'>{item?.name}</td>
                          <td className='text-black text-center p-3'>{item?.cat}</td>
                          <td className='text-black text-center p-3'>
                            <i className="fa-solid fa-indian-rupee-sign" />{item?.price}
                          </td>
                          <td className='text-primary text-center p-3'>
                            <Link to={`edit/${item.id}`} className='btn btn-info mt-1 me-2'>
                              <i className="fa-solid fa-pen-to-square" style={{ color: "black" }} />
                            </Link>
                            <button className='btn btn-info mt-1 me-2' onClick={() => { dispatch(delet({ id: item.id })) }}>
                              <i className="fa-solid fa-trash" style={{ color: "brown" }} />
                            </button>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </Table>
                :

                <h3>No products yet!!</h3>

            }

          </div>

        </div>
      </div>

     </>
  )
}

export default Home