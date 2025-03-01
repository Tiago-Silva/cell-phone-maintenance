import React from 'react';
import styles from './home.module.css';
import Image from "next/image";
import Button from "@/app/components/button/button";

const HomeSection = () => {
    return (
        <section className={styles.container} id={'home'}>

            <div className={styles.left} >
                <h3 className={styles.title}>
                    Domine as técnicas, entre para o mercado de <span>manutenção de celulares</span> e comece a faturar alto!
                </h3>
                <h4 className={styles.subtitle}>
                    Um método único, exclusivo e completo, com o passo a passo para você transformar a manutenção de celulares em um novo serviço ou até mesmo sua nova fonte de renda.
                </h4>
                <Button />
            </div>

            <div className={styles.right} >
                <Image src={'/homen01.png'} alt={'Homen01'} width={500} height={700} />
            </div>

        </section>
    );
};

export default HomeSection;