import React from 'react';

import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = (props) => {
    return (
        <div>
            <header className={styles.Toolbar}>
                <DrawerToggle clicked={props.drawerToogleClicked} />
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav  className={styles.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </header>
        </div>
    )
}

export default Toolbar;
