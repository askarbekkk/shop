import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Rating from "./Rating";

const Product = ({product}) => {
    const dispatch = useDispatch()
    const {catalog, rates, based} = useSelector((store) => store)
    const currency = {
        USD: "$",
        EUR: "€",
        RUB:   "₽"
    }

    return (
        <Col md={3} key={product.id}>
            <Card className='mb-4'>
                <Card.Img variant="top" src={product.image} className='product-img' />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        Price: {(product.price * rates[based]).toFixed(2)}{currency[based]}
                    </Card.Text>
                    <Rating rating={product.rating} color='white' />
                    <div className='d-flex justify-content-between align-items-center mt-2'>
                        <Button variant="secondary"
                                onClick={() => dispatch({type: "ADD_TO_CART", product})}>
                            add to cart
                        </Button>

                        <span  className='heart'
                        onClick={() =>  dispatch({type: "ADD_TO_FAVORITES", product})}
                        >

                            <i className="far fa-heart">

                            </i>
                        </span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;