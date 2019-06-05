import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  const onClick = (e) => {
    e.preventDefault(); // May not be needed!!!
    props.setAuth(false);
    console.log(props.auth.isAuth);
  }

  if (!props.auth.isAuth) {
    console.log("INSIDE");
    return null;
  }

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark ">
        <a className="navbar-brand" href="#">
          Task Menager
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
  
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {/* <a className="nav-link"> */}
                <NavLink to="/UserDashboardPage" activeClassName="is-active" exact={true}>
                  View User
                </NavLink>
              {/* </a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link"> */}
                <NavLink to="/create" activeClassName="is-active" exact={true}>
                  Create user
                </NavLink>
              {/* </a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link"> */}
              <button className="btn btn-link" onClick={onClick}>
                <NavLink to="/" activeClassName="is-active" exact={true}>
                  Log out
                </NavLink>
              </button>
              {/* </a> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header
