import React from 'react'

const NavBar = ()=>{
    var styling = {
        listStyleType: "none",
        display:"flex",
        backgroundColor: "red",
        gap:"15px",        
        justifyContent: "space-evenly",
    }
    var aStyling = {
        textDecoration: "none",
    }
    return (
        <header>
            <nav>
                <ul style={styling}>
                    <li><a href="#" style={aStyling}>Home</a></li>
                    <li><a href="#" style={aStyling}>About</a></li>
                    <li><a href="#" style={aStyling}>Contact</a></li>
                    <li><a href="#" style={aStyling}>Gallery</a></li>
                    <li><a href="#" style={aStyling}>Signup</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar