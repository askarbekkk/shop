import React, {useEffect} from 'react';
import data from "./data";
import {Button, Card, Col, Row, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Product from "./Product";

const Shop = () => {
    const dispatch = useDispatch()
    const {catalog, rates, based} = useSelector((store) => store)
    const currency = {
        USD: "$",
        EUR: "€",
        RUB:   "₽"
    }
    useEffect(() => {
        dispatch({type: 'SET_CATALOG', catalog: data})
    }, [])

    return (
        <>
            <div>
                <Row className='mb-4'>
                    <Col md={3}>
                        <div className='d-flex'>
                            <Form.Control size="sm" as="select" className='mr-3' onChange={(e) =>
                                dispatch({type: "SORT_CATALOG", payload: e.target.value})}>

                                <option value="" disabled selected>sort by</option>
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                                <option value="lowest">to lowest</option>
                                <option value="highest">to highest</option>
                            </Form.Control>
                            <Form.Control size="sm" as="select" onChange={(e) => dispatch({type:"GET_BASED", payload: e.target.value})}>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="RUB">RUB</option>
                            </Form.Control>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                {catalog.map(product =>
                   <Product  product={product} />
                )}
            </Row>
        </>
    );
};

export default Shop;