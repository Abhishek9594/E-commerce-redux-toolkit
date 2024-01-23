import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'
import {useDispatch} from 'react-redux'
const Cart = () => {
    const dispatch = useDispatch()
    const removeHandler = (id) => {
        dispatch(remove(id))
}
    const cartProducts = useSelector(state=>state.cart)
    const cards = cartProducts.map((product) => (
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
        <Button variant="danger" onClick={()=>removeHandler(product.id)}>Remove Item</Button>
        </Card.Footer>
          </Card>
        </div>
      ));
  return (
      <div>
          <div className="row">
            {cards}
          </div>
      </div>
  )
}

export default Cart