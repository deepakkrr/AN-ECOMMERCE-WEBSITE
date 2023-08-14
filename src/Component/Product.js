import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../Store/CartSlice";
const Product = () => {

    const dispatch=useDispatch();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

const AddToCart=(product)=>{
    dispatch(add(product));

}

  const card = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px",marginTop:"12px"}}>
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
        <Card.Footer style={{backgroundColor:"white"}}>
          <Button variant="primary" onClick={()=>AddToCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{card}</div>
    </>
  );
};

export default Product;
