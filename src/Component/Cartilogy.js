import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from '../Store/CartSlice';

const Cartilogy = () => {
  const dispatch=useDispatch();
  const productCart=useSelector((state)=>state.cart)

  const card = productCart.map((product) => (
    <div
      className="col-md-3"
      style={{ marginBottom: "10px", marginTop: "12px" }}
    >
      <Card key={product.id} className="h-100" border="black">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "130px", width: "100px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="danger" onClick={()=>RemoveFromCart(product.id)}>
            Remove From Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

const RemoveFromCart=(id)=>{
  dispatch(remove(id));
}


  return (
    <>
    <h2>Cart</h2>
    <div className="row">
      {card}
    </div>
    </>
  );
};

export default Cartilogy;