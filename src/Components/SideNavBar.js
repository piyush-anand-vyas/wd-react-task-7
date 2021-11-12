import React from 'react'
import '../App.css'
import rocket from '../img/undraw_rocket.svg'
import ChartButton from './AddOn/ChartButton'
import PageButton from './AddOn/PageButton'
import TableButton from './AddOn/TableButton'
import InterfaceComponentButton from './Interface/InterfaceComponentButton'
import InterfaceUtilitiesButton from './Interface/InterfaceUtilitiesButton'
import CreateUserButton from './Users/CreateUserButton'
import ListUsersButton from './Users/ListUsersButton'
import { NavLink } from 'react-router-dom'

export default function SideNavBar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></NavLink>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* Users Heading */}
            <div className="sidebar-heading">
                Users
            </div>

            {/* Users - list Users */}
            <ListUsersButton/>

            {/* Users - Create Users */}
            <CreateUserButton/>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* Interface Heading */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* Interface - component */}
            <InterfaceComponentButton/>

            {/* Interace - utilities */}
            <InterfaceUtilitiesButton />

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* Addon Heading */}
            <div className="sidebar-heading">
                Addons
            </div>

            {/* Addon - Pages */}
            <PageButton />

            {/* Addon - Charts */}
            <ChartButton />

            {/* Addon - Tables */}
            <TableButton />

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            {/* <!-- Side</hr>bar Message --> */}
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src={rocket} alt="..." />
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
    )
}
