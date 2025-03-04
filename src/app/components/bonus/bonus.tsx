import React from 'react';
import styles from './bonus.module.css';
import Image from "next/image";

const Bonus = () => {
    return (
        <section className={styles.bonusContent} id={'bonus'}>

            <h3 className={styles.title}>4 bônus exclusivos</h3>

            <div className={styles.card}>
                <div className={styles.bonusText}>
                    <h2>Curso Introdução ao WordPress</h2>
                    <h3>Curso completo de WordPress, passando por toda sua base e menus para que você não tenha dúvidas
                        sobre a ferramenta e consiga evoluir.</h3>
                </div>
                <Image
                    src={'/bonus/v1_626.png'}
                    alt={'Curso Introdução ao WordPres'}
                    width={170}
                    height={170}
                    className={styles.bonusImage}
                />
            </div>

            <div className={styles.card}>
                <Image
                    src={'/bonus/v1_627.png'}
                    alt={'Curso Introdução ao Elementor'}
                    width={170}
                    height={170}
                    className={styles.bonusImage}
                />
                <div className={styles.bonusText}>
                    <h2>Curso Introdução ao Elementor</h2>
                    <h3>Curso completo de Elementor, te apresentando toda a base desse plugin, passando pelos seus menus
                        e funcionalidades e como ele pode te ajudar no dia a dia.</h3>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.bonusText}>
                    <h2>1 licença do Elementor PRO</h2>
                    <h3>Uma licença do Elementor PRO, para que você não precise gastar mais nada com isso para colocar
                        seus estudos em prática. Licença válida enquanto durar o curso.</h3>
                </div>
                <Image
                    src={'/bonus/v1_632.png'}
                    alt={'1 licença do Elementor PRO'}
                    width={170}
                    height={170}
                    className={styles.bonusImage}
                />
            </div>

            <div className={styles.card}>
                <Image
                    src={'/bonus/v1_639.png'}
                    alt={'1 licença do Happy Addons'}
                    width={170}
                    height={170}
                    className={styles.bonusImage}
                />
                <div className={styles.bonusText}>
                    <h2>1 licença do Happy Addons</h2>
                    <h3>Uma licença do Happy Addons, um plugin incrível de complementos para o Elementor para você criar
                        páginas ainda mais bonitas e impactantes.</h3>
                </div>
            </div>

        </section>
    );
};

export default Bonus;