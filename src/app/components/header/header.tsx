import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>

            <div className={styles.logo}>
                <img src="/foguete.svg" alt="Foguete" />
                <a href="#">Manutenção de <span>Celulares</span></a>
            </div>


            <nav className={styles.navbar}>
                <a href="#home">Home</a>
                <a href="#about">Curso</a>
                <a href="#treeSection">View</a>
                <a href="#skill">Conteúdo</a>
                <a href="#contact">Bônus</a>
            </nav>

        </header>
    );
};

export default Header;