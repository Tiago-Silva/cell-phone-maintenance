import React from 'react';
import styles from './index.module.css';
import {HiOutlineCheckCircle} from "react-icons/hi";
import Image from "next/image";

const CourseInformationSection = () => {
    return (
        <section className={styles.container} id={'about'}>

            <div className={styles.left}>
                <h2 className={styles.title}>O curso é pra quem quer:</h2>

                <div className={styles.card}>

                    <div className={styles.info}>
                        <div className={styles.wrapperIcon}>
                            <HiOutlineCheckCircle className={styles.icon}/>
                        </div>
                        <div className={styles.wrapperInfo}>
                            <h3>Oferecer mais um serviço</h3>
                            <h5>Você vai poder oferecer manutenção de celulares para seus clientes e aumentar o seu portfólio de serviços.</h5>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.wrapperIcon}>
                            <HiOutlineCheckCircle className={styles.icon}/>
                        </div>
                        <div className={styles.wrapperInfo}>
                            <h3>Ter uma nova Fonte de Renda</h3>
                            <h5>Com o conhecimento certo, você pode transformar a manutenção de celulares em sua principal fonte de renda.</h5>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.wrapperIcon}>
                            <HiOutlineCheckCircle className={styles.icon}/>
                        </div>
                        <div className={styles.wrapperInfo}>
                            <h3>Faturar alto com manutenção</h3>
                            <h5>O mercado de assistência técnica de celulares está em alta e você pode faturar alto atendendo sua região.</h5>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.wrapperIcon}>
                            <HiOutlineCheckCircle className={styles.icon}/>
                        </div>
                        <div className={styles.wrapperInfo}>
                            <h3>Aprender do zero e sem complicação</h3>
                            <h5>Você vai aprender, passo a passo, desde o básico até técnicas avançadas de manutenção de celulares.</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.right}>
                <Image src={'/homen02.png'} alt={'Homen02'} width={500} height={500} />
            </div>

        </section>
    );
};

export default CourseInformationSection;