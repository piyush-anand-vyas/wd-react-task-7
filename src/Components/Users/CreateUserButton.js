import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CreateUserButton() {
    return (
        <li className="nav-item">
         <NavLink activeClassName="active" className="nav-link" to="/adduser">
            <i className="fas fa-user-tie"></i>
                <span>Create User</span></NavLink>
        </li>
    )
}
