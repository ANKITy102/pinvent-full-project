import React from 'react'
import SpinnerImg from "../../loader/Loader"
import {FeEdit, FaTrashAlt, FaEdit }from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";
import "./productList.scss"
const ProductList = ({products,isLoading}) => {
  const shortenText = (text, n) =>{
    if(text.length > n ){
      const shortenedText = text.substring(0,n).
      concat("...")
      return shortenedText
    }
    return text;
  }
  return (
    <div className='product-list'>
      <hr />
      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h3>Inventory Items</h3>
          </span>
          <span>
            <h3>Search Products</h3>
          </span>
        </div>

        {isLoading && <SpinnerImg/>}

         <div className="table">
          {!isLoading && products.lenth===0 ?(
            <p>-- No product found, please add a product...</p>
          ):(
            <table>
              <thead>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Category </th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Value</th>
                  <th>Action</th>
              </thead>
              <tbody>
                  {
                    products.map((product, index)=>{
                      const {_id, name, category, price, quantity} = product;
                      return (
                        <tr key={_id}>
                          <td>{index + 1}</td>
                          <td>{shortenText(name,16)}</td>
                          <td>{category}</td>
                          <td>&#8377; {price}</td>
                          <td>{quantity}</td>
                          <td>&#8377; {price * quantity}</td>
                          <td className="icons">
                            <span>
                              <AiOutlineEye size={25} color={"purple"}/>
                            </span>
                            <span>
                              <FaEdit size={25} color={"green"}/>
                            </span>
                            <span>
                              <FaTrashAlt size={25} color={"red"}/>
                            </span>
                          </td>
                        </tr>
                      )
                    })
                }
              </tbody>
            </table>
          )}
         </div>
      </div>
    </div>
  )
}

export default ProductList
