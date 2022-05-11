import Link from "next/link";
import React from "react";
import { Container, Nav, NavDropdown, Navbar, Dropdown } from "react-bootstrap";

export default function NavbarP() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="" className="bg-nav">
      <Container>
        <Navbar.Brand href="#home">
          <Link href="/">
            <img
              src="/images/TRKlogo.png"
              width="120"
              height="40"
              className="d-inline-block align-top bg-white"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-link" className="drop">
                <img src="/images/Branchlogo.png" width={60}></img> Personal
                Administrativo - Logistica
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link href="/documents-controls">
                  <Dropdown.Item href="#/action-1">
                    • Control documentación
                  </Dropdown.Item>
                </Link>
                <Dropdown.Item href="#/action-2">
                  • Cambios pendientes aprobación
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    //   <div className="navigation-wrap  start-header start-style bg-nav">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-12">
    //         <nav className="navbar navbar-expand-md  ">
    //           <Link href={'/'}>
    //           <img alt="" src="/images/TRKlogo.png" /></Link>

    //           <button
    //             aria-controls="navbarSupportedContent"
    //             aria-expanded="false"
    //             aria-label="Toggle navigation"
    //             className="navbar-toggler"
    //             data-target="#navbarSupportedContent"
    //             data-toggle="collapse"
    //             type="button"
    //           >
    //             <span className="navbar-toggler-icon"></span>
    //           </button>
    //           <div
    //             className="collapse navbar-collapse"
    //             id="navbarSupportedContent"
    //           >
    //             <ul className="navbar-nav ml-auto py-4 py-md-0">
    //               <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
    //                 <img alt="" src="/images/Branchlogo.png" width={50} />
    //                 <a
    //                   aria-expanded="false"
    //                   aria-haspopup="true"
    //                   className="nav-link dropdown-toggle text-color"
    //                   data-toggle="dropdown"
    //                   href="#"
    //                   role="button"
    //                 >
    //                   Transportista{" "}
    //                   <i
    //                     className="fa fa-chevron-down"
    //                     aria-hidden="true"
    //                   ></i>
    //                 </a>
    //                 <div className="dropdown-menu">
    //                   <a className="dropdown-item" href="#">
    //                     Action
    //                   </a>
    //                   <a className="dropdown-item" href="#">
    //                     Another action
    //                   </a>
    //                   <a className="dropdown-item" href="#">
    //                     Something else here
    //                   </a>
    //                   <a className="dropdown-item" href="#">
    //                     Another action
    //                   </a>
    //                 </div>
    //               </li>
    //               <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
    //                 <img alt="" src="/images/Adminlogo.png" width={50} />
    //                 <a
    //                   aria-expanded="false"
    //                   aria-haspopup="true"
    //                   className="nav-link dropdown-toggle text-color"
    //                   data-toggle="dropdown"
    //                   href="#"
    //                   role="button"
    //                 >
    //                   Administración{" "}
    //                   <i
    //                     className="fa fa-chevron-down"
    //                     aria-hidden="true"
    //                   ></i>
    //                 </a>
    //                 <div className="dropdown-menu">
    //                   <Link href='/documents-controls'>
    //                   <a className="dropdown-item" >
    //                     Control documentación
    //                   </a>
    //                   </Link>

    //                   <a className="dropdown-item" href="#">
    //                     Administración campos: Conductores
    //                   </a>
    //                   <a className="dropdown-item" href="#">
    //                     Administración campos: Vehículos
    //                   </a>
    //                   <a className="dropdown-item" href="#">
    //                     Administración campos: Transportistas
    //                   </a>
    //                 </div>
    //               </li>
    //               <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
    //                 <img alt="" src="/images/Securitylogo.png" width={50} />
    //                 <a
    //                   aria-expanded="false"
    //                   aria-haspopup="true"
    //                   className="nav-link dropdown-toggle text-color"
    //                   data-toggle="dropdown"
    //                   href="#"
    //                   role="button"
    //                 >
    //                   Seguridad{" "}
    //                   <i
    //                     className="fa fa-chevron-down"
    //                     aria-hidden="true"
    //                   ></i>
    //                 </a>
    //                 <div className="dropdown-menu">
    //                   <a className="dropdown-item" href="#">
    //                     Action
    //                   </a>
    //                   <a className="dropdown-item" href="#">
    //                     Another action
    //                   </a>
    //                   <a className="dropdown-item" href="#">
    //                     Something else here
    //                   </a>
    //                   <a className="dropdown-item" href="#">
    //                     Another action
    //                   </a>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </nav>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
