import React from "react";
import SubMenu from './Submenu'
import { Navbar } from 'react-bootstrap'
import menus from '../data/menus'



export default function MainMenu() {
    const subMenus = menus.map(subMenu => {
        return (
            <SubMenu 
            title={subMenu.title} 
            position={subMenu.position}
            children = {subMenu.children} />
        )

    })

    return (
        <div>
            <Navbar className="navbar">
                {subMenus}
            </Navbar>
        </div>
    )
}