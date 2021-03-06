import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../nav/Navbar.module.css";

export default function Navbar() {
  
  return (
  
      <div className="navigation-wrap  start-header start-style bg-nav">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-md  ">
                <img alt="" src="/images/TRKlogo.png" />

                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#navbarSupportedContent"
                  data-toggle="collapse"
                  type="button"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto py-4 py-md-0">
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                      <img alt="" src="/images/Branchlogo.png" width={50} />
                      <a
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="nav-link dropdown-toggle text-color"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                      >
                        Transportista{" "}
                        <i
                          className="fa fa-chevron-down"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </div>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                      <img alt="" src="/images/Adminlogo.png" width={50} />
                      <a
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="nav-link dropdown-toggle text-color"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                      >
                        Administraci??n{" "}
                        <i
                          className="fa fa-chevron-down"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <div className="dropdown-menu">
                        <Link href='documents-controls'>
                        <a className="dropdown-item" >
                          Control documentaci??n
                        </a>
                        </Link>
                        
                        <a className="dropdown-item" href="#">
                          Administraci??n campos: Conductores
                        </a>
                        <a className="dropdown-item" href="#">
                          Administraci??n campos: Veh??culos
                        </a>
                        <a className="dropdown-item" href="#">
                          Administraci??n campos: Transportistas
                        </a>
                      </div>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                      <img alt="" src="/images/Securitylogo.png" width={50} />
                      <a
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="nav-link dropdown-toggle text-color"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                      >
                        Seguridad{" "}
                        <i
                          className="fa fa-chevron-down"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
    
  );
}
