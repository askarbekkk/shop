import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Alert, Button, Card, Table} from "react-bootstrap";

const Cart = () => {
    const {cart, based, rates} = useSelector((store) => store)
    const currency = {
        USD: "$",
        EUR: "€",
        RUB: "₽"
    }
    const dispatch = useDispatch()
    const totalPrice = cart.reduce((acc, el) => el.quantity* rates[based] * el.price + acc,0)
    return (
        <div>
            {
                cart.length === 0 ?
                    <Alert variant="info">
                        Ваша корзина пуста
                    </Alert> :
                    <>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>images</th>
                                <th>title</th>
                                <th>quantity</th>
                                <th>price</th>
                                <th>total</th>
                                <th> </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                cart.map(product =>
                                    <tr  key={product.id}>
                                        <td>
                                            <img src={product.image} alt="" width='47px'/>
                                        </td>
                                        <td>{product.title}</td>
                                        <td>
                                            <Button variant='secondary'
                                                    onClick={() => dispatch({type:"REMOVE_FROM_CART", id:product.id})}

                                            >-</Button>
                                            <span className='px-3'> {product.quantity}</span>
                                            <Button variant='secondary'
                                                    onClick={() => dispatch({type:"ADD_TO_CART", product})}
                                            >+</Button>

                                        </td>
                                        <td>{(product.price * rates[based]).toFixed(1)}{currency[based]}}</td>
                                        <td>{(product.price * rates[based]).toFixed(1) * product.quantity}{currency[based]}</td>
                                        <td>
                                            <Button variant="outline-danger"
                                                    onClick={ () => dispatch({type: "DELETE_ITEM", id: product.id})}
                                            >del
                                            </Button>{' '}
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </Table>
                        <div className='text-right'>
                            <h3>Total: {totalPrice.toFixed(2)}{currency[based]}</h3>
                        </div>
                    </>
            }
        </div>
    );
};

export default Cart;