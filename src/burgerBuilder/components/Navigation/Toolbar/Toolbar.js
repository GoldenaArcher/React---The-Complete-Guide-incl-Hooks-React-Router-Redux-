import React from 'react';

import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => {
    return (
        <div>
            <header className={styles.Toolbar}>
                <div>MENU</div>
                <Logo />
                <nav>
                    <NavigationItems />
                </nav>
            </header>
        </div>
    )
}

export default Toolbar;
