import React from 'react';
import styles from './price.module.css';
import {FaArrowRight, FaCheck, FaTimes} from "react-icons/fa";
import Button from "@/app/components/button/button";

const Price = () => {
    return (
        <section className={styles.container}>

            <h2 className={styles.title}>Escolha sua melhor opção</h2>

            <div className={styles.cardsWrapper}>

                <div className={styles.card}>
                    <h4 className={styles.course}>Curso</h4>
                    <div className={styles.cardContent}>
                        <div className={styles.wrapperTitle}>
                            <img src="/foguete.svg" alt="Foguete" />
                            <h3 className={styles.cardTitle}>Landing Pages <span>ABS</span></h3>
                        </div>
                        <div className={styles.wrapperPriceCard}>
                            <div className={styles.wrapperPrice}>
                                <h3 className={styles.price}>12x de <span>R$100,10</span></h3>
                                <span className={styles.accessType}>1 ANO DE ACESSO</span>
                            </div>
                            <p className={styles.priceAlt}>ou R$997 à vista no cartão, boleto ou pix.</p>
                        </div>
                        <div className={styles.wrapperList}>
                            <ul className={`${styles.benefits} ${styles.benefitsTitle}`}>
                                <li><FaCheck className={styles.icon}/> Módulos inclusos:</li>
                            </ul>
                            <ul className={styles.benefits}>
                                <li><FaCheck className={styles.icon}/> Landing Pages ABS <span className={styles.bonus}>+bônus</span></li>
                                <li> <FaCheck className={styles.icon}/> Introdução ao Elementor</li>
                                <li> <FaCheck className={styles.icon}/> Introdução ao WordPress</li>
                                <li className={styles.unavailable}><FaTimes className={styles.icon2}/> Photoshop do Zero</li>
                                <li className={styles.unavailable}><FaTimes className={styles.icon2}/> Produtividade ABS</li>
                                <li className={styles.unavailable}><FaTimes className={styles.icon2}/> Conteúdo ABS</li>
                                <li className={styles.unavailable}><FaTimes className={styles.icon2}/> Motion Flyer</li>
                                <li className={styles.unavailable}><FaTimes className={styles.icon2}/> Creative Flyer</li>
                                <li className={styles.unavailable}><FaTimes className={styles.icon2}/> Social Media ABS</li>
                            </ul>
                            <ul className={`${styles.benefits} ${styles.benefitsTitle}`}>
                                <li><FaCheck className={styles.icon}/> Suporte via plataforma e Telegram</li>
                                <li><FaCheck className={styles.icon}/> Acesso ao servidor do Discord</li>
                                <li><FaCheck className={styles.icon}/> Certificado de conclusão</li>
                                <li className={styles.unavailable}><FaTimes className={styles.icon2}/> Acesso garantido aos cursos futuros</li>
                                <li className={styles.unavailable}><FaTimes className={styles.icon2}/> Acesso às Lives ABS Class</li>
                                <li className={styles.unavailable}><FaTimes className={styles.icon2}/> Replay das ABS Class</li>
                                <li className={styles.unavailable}><FaTimes className={styles.icon2}/> Método BUILD ABS</li>
                                <li className={styles.unavailable}><FaTimes className={styles.icon2}/> Mentorias ABS PRO</li>
                                <li className={styles.unavailable}><FaTimes className={styles.icon2}/> Visibilidade no Portplayer <span className={styles.bonus}>!em-breve</span></li>
                            </ul>
                        </div>
                        <Button title={'COMPRAR AVULSO'} icon={FaArrowRight} width={'250px'} />
                    </div>
                </div>

                <div className={styles.card}>
                    <h4 className={styles.course}>Passe</h4>
                    <div className={styles.cardContent}>
                        <div className={styles.wrapperTitle}>
                            <img src="/foguete.svg" alt="Foguete" />
                            <h3 className={styles.cardTitle}>&lt;PRO&gt; <span>PLAYER</span></h3>
                        </div>
                        <div className={styles.wrapperPriceCard}>
                            <div className={styles.wrapperPrice}>
                                <h3 className={styles.price}>12x de <span>R$59,94</span></h3>
                                <span className={styles.accessType}>ANUAL</span>
                            </div>
                            <p className={styles.priceAlt}>ou R$597 à vista no cartão, boleto ou pix.</p>
                        </div>
                        <div className={styles.wrapperList}>
                            <ul className={`${styles.benefits} ${styles.benefitsTitle}`}>
                                <li><FaCheck className={styles.icon}/> Módulos inclusos:</li>
                            </ul>
                            <ul className={styles.benefits}>
                                <li><FaCheck className={styles.icon}/> Landing Pages ABS <span className={styles.bonus}>+bônus</span></li>
                                <li> <FaCheck className={styles.icon}/> Introdução ao Elementor</li>
                                <li> <FaCheck className={styles.icon}/> Introdução ao WordPress</li>
                                <li><FaCheck className={styles.icon}/> Photoshop do Zero</li>
                                <li><FaCheck className={styles.icon}/> Produtividade ABS</li>
                                <li><FaCheck className={styles.icon}/> Conteúdo ABS</li>
                                <li><FaCheck className={styles.icon}/> Motion Flyer</li>
                                <li><FaCheck className={styles.icon}/> Creative Flyer</li>
                                <li><FaCheck className={styles.icon}/> Social Media ABS</li>
                            </ul>
                            <ul className={`${styles.benefits} ${styles.benefitsTitle}`}>
                                <li><FaCheck className={styles.icon}/> Suporte via plataforma e Telegram</li>
                                <li><FaCheck className={styles.icon}/> Acesso ao servidor do Discord</li>
                                <li><FaCheck className={styles.icon}/> Certificado de conclusão</li>
                                <li><FaCheck className={styles.icon}/> Acesso garantido aos cursos futuros</li>
                                <li><FaCheck className={styles.icon}/> Acesso às Lives ABS Class</li>
                                <li><FaCheck className={styles.icon}/> Replay das ABS Class</li>
                                <li><FaCheck className={styles.icon}/> Método BUILD ABS</li>
                                <li><FaCheck className={styles.icon}/> Mentorias ABS PRO</li>
                                <li><FaCheck className={styles.icon}/> Visibilidade no Portplayer <span className={styles.bonus}>!em-breve</span></li>
                            </ul>
                        </div>
                        <Button title={'ASSINAR AGORA'} icon={FaArrowRight} width={'250px'} />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Price;