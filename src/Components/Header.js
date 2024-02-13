import React from "react"
import { Nav } from "reactstrap"
import cat from '../Assets/cat.png'
import { NavLink as RouterNavLink } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <img
                src={cat}
                alt="Home Logo"
                className="HomeLogo"
            />
            <Nav>
                <RouterNavLink to="/" className="nav-link"> Home </RouterNavLink>
                <RouterNavLink to="/catindex" className="nav-link">
                    Meet All the Cats
                </RouterNavLink>
                <RouterNavLink to="/catnew" className="nav-link">
                    Add Your Cat
                </RouterNavLink>
                <a
                    target="blank"
                    href="https://tinder.com/"
                    className="nav-link"
                >
                    Find your Purrfect match!
                </a>
            </Nav>
        </div>
    )
}
export default Header