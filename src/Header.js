import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import {useSelector} from "react-redux";

const Header = () => {
    const {cart, favorite} = useSelector(store => store)
    const totalCountInCart = cart.reduce((total, amount) => total + amount.quantity, 0)
    const totalCountInFavorite = favorite.reduce((total, amount) => total + amount.quantity, 0)

    return (
        <Navbar bg="light" variant="light">
            <LinkContainer to='/'>
                <Navbar.Brand>Navbar</Navbar.Brand>
            </LinkContainer>
            <Nav className="ml-auto">
                <LinkContainer to='/' exact>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/cart'>
                    <Nav.Link>Cart({totalCountInCart})</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favorites">
                    <Nav.Link>Favorites({totalCountInFavorite})</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
};

export default Header;