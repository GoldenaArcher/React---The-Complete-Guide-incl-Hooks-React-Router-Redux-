import React from 'react';

import burgerLolo from '../../assets/Images/burger-logo.png';

import styles from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={burgerLolo} alt='MyBurger' />
        </div>
    )
}

export default Logo;
