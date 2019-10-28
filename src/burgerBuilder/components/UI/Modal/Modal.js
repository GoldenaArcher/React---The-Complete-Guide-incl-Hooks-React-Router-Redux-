import React from 'react';
import styles from './Modal.module.css';

const modal = (props) => (
    <div 
        className={styles.Modal}
        style={{
            transform: props.show ? 'translageY(0)' : 'ranslageY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>  
);

export default modal;