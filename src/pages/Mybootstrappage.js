import React from 'react'

function Mybootstrappage() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <button class="btn btn-default" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">&#9776;</button>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                    <li className="nav-item">

                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown link
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
                                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                                   
                                    <span class="fs-4">Sidebar</span>
                                </a>
                                <hr/>
                                    <ul class="nav nav-pills flex-column mb-auto">
                                        <li class="nav-item">
                                            <a href="#" class="nav-link active" aria-current="page">
                                                
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link link-body-emphasis">
                                                
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link link-body-emphasis">
                                               
                                                Orders
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link link-body-emphasis">
                                               
                                                Products
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link link-body-emphasis">
                                                
                                                Customers
                                            </a>
                                        </li>
                                    </ul>
                                    <hr/>
                                        <div class="dropdown">
                                            <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                                                    <strong>mdo</strong>
                                            </a>
                                            <ul class="dropdown-menu text-small shadow">
                                                <li><a class="dropdown-item" href="#">New project...</a></li>
                                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                                <li><hr class="dropdown-divider"/></li>
                                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default Mybootstrappage