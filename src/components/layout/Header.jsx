import React from 'react';
import styles from '../../styles/Layout/Header.module.css'
import { NAV } from '../../consts/nav';
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <div className={styles.header}>
            {NAV.map(item => (<Link key={item.id} to={item.path}>{item.title}</Link>))}
        </div>
    );
};

export default Header;