import React from 'react';
import styles from './about.module.css';
import Button from "@/app/components/button/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
    return (
        <div className={`${styles.container} greenEndLine`}>

            <div className={styles.left}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={'/homen01.png'}
                        alt={'Homen01'}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>

            <div className={styles.right}>
                <span>O Expert</span>
                <h3 className={styles.title}>
                    Micael Abreu
                </h3>
                <h4 className={styles.subtitle}>
                    Apaixonado por games e empreendedor nato.
                    Fundei minha agência em 2016, a Agência Tucano, e trabalho com web design e desenvolvimento há mais de 10 anos.
                </h4>
                <h4 className={styles.subtitle}>
                    Já tive a oportunidade de criar mais de 100 sites para diversos tipos de segmento. Hoje estou a frente de duas empresas, a Agência Tucano e o Designer ABS.
                </h4>
                <h4 className={styles.subtitle}>
                    Se você quer aprender tudo que eu tenho pra te ensinar, se inscreve agora nesse curso incrível!
                </h4>
                <Button title={'Garantir minha vaga'} icon={FaArrowRight} width={'250px'} height={'45px'}/>
            </div>

        </div>
    );
};

export default About;