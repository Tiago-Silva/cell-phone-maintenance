import React from 'react';
import styles from './about.module.css';
import Button from "@/app/components/button/button";
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa";

const About = () => {
    return (
        <div className={`${styles.container} greenEndLine`}>

            <div className={styles.left}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={'/about/about03.png'}
                        alt={'Homen01'}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        style={{objectFit: 'contain'}}
                    />
                </div>
            </div>

            <div className={styles.right}>
                <span>O Expert</span>
                <h3 className={styles.title}>
                    Micael Abreu
                </h3>
                <h4 className={styles.subtitle}>
                    No dia 29 de março de 2017, começamos nossa jornada com um sonho:
                    oferecer um serviço de qualidade na manutenção de celulares.
                    Começamos pequenos, com dedicação e muito aprendizado, e hoje temos orgulho de dizer que somos a
                    melhor assistência técnica da cidade e região!
                </h4>
                <h4 className={styles.subtitle}>
                    Mas não paramos por aqui… Agora, queremos compartilhar nosso conhecimento com você
                </h4>
                <h4 className={styles.subtitle}>
                    Se o seu objetivo é aprender a consertar celulares e descobrir os segredos para ter uma assistência
                    técnica de sucesso, nós estamos aqui para te ajudar. Com anos de experiência, sabemos exatamente o
                    que funciona e como transformar a manutenção de celulares em um negócio lucrativo.

                    🚀 Está pronto para dar o primeiro passo? Aprenda com quem já percorreu esse caminho e construa sua
                    própria história de sucesso!
                </h4>
                <Button title={'Garantir minha vaga'} icon={FaArrowRight} width={'250px'} height={'45px'}/>
            </div>

        </div>
    );
};

export default About;