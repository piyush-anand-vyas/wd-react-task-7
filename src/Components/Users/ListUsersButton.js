import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ListUsersButton() {
    return (
            <li className="nav-item">
                <NavLink activeClassName="set-active" className="nav-link" to="/user">
                <i className="fas fa-list-alt"></i>
                    <span>List Users</span></NavLink>
            </li>
    )
}
