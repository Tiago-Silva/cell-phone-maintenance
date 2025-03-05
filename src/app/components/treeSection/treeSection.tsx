'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './treeSection.module.css';

const images = [
    "v1_757.png",
    "v1_760.png",
    "v1_762.png",
    "v1_764.png",
    "v1_766.png",
    "v1_768.png",
    "v1_757.png",
    "v1_760.png",
    "v1_762.png",
    "v1_764.png",
    "v1_766.png",
    "v1_768.png"
];

const TreeSection = () => {
    return (
        <section className={`${styles.container} greenStartLine greenEndLine`} id={'treeSection'}>
            <h2 className={styles.title}>Conheça tudo que você vai aprender no curso</h2>

            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={6}
                navigation={true}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className={styles.swiperContainer}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <Image
                            src={`/module/${image}`}
                            alt={`Módulo ${index + 1}`}
                            width={200}
                            height={300}
                            className={styles.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.bonus}>+3 bônus incríveis!</div>

            <div className={styles.footer}>
                <h3>
                    Inscreva-se agora no Landing Pages ABS e comece a criar páginas Fodásticas!
                </h3>
                <button className={styles.ctaButton}>
                    GARANTIR MINHA VAGA →
                </button>
            </div>
        </section>
    );
};

export default TreeSection;