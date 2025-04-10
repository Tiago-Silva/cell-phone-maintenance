'use client';

import React, {useEffect, useState} from 'react';
import styles from './header.module.css';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition < 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${!isVisible ? styles.hidden : ''}`}>

            <div className={styles.logo}>
                <img src="/foguete.svg" alt="Foguete" />
                <a href="#">Manutenção de <span>Celulares</span></a>
            </div>


            <nav className={styles.navbar}>
                <a href="#home">Home</a>
                <a href="#about">Curso</a>
                <a href="#treeSection">View</a>
                <a href="#bonus">Bônus</a>
                <a href="#skill">Conteúdo</a>
            </nav>

        </header>
    );
};

export default Header;