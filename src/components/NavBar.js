import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link to='/saveProduct' class="nav-link" href="#">Add Product</Link>
                            </li> */}
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar