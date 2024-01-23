import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from 'react-redux'
import {add} from '../store/cartSlice'
const Products = () => {
  const [product, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setData(result));
  }, []);
  const cartHandler = (product) => {
    dispatch(add(product))
  }

  const cards = product.map((product) => (
    <div className="col-md-3">
      <Card key={product.id} className="h-100" style={{marginBottom:"10px"}}>
        <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{ height: '120px', width: '100px' }} />
          </div>
        <Card.Body>
          <Card.Title>{  product.title}</Card.Title>
          <Card.Text>
            INR. {product.price}
          </Card.Text>
           
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" onClick={()=>cartHandler(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Products DashBoard</h1>
      <div className="row">
{cards}
      </div>
    
    </>
  );
};

export default Products;
