import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = (props) => {
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? 'selected' : ''
  }

  return (
    <aside
      className={`right-sidebar sidebar-light`}
      id="sidebarbg"
      data-sidebarbg="skin6"
    >
      <div className="sidebar-nav">
        <ul className="nav p-0" id="sidebar-nav">
          {props.routes
            .filter((route) => !route.redirect && route.showInNav)
            .map((route, index) => (
              <li
                className={
                  activeRoute(route.path) +
                  (route.pro ? ' active active-pro' : '') +
                  ' sidebar-item'
                }
                key={index}
              >
                <NavLink
                  to={route.path}
                  className="nav-link sidebar-link"
                  activeClassName="active"
                >
                  <i className={route.icon} />
                  <span className="hide-menu">{route.name}</span>
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
