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
    "v1_768.png",
    "v1_769.png"
];

const TreeSection = () => {
    return (
        <section className={`${styles.container} greenStartLine greenEndLine`} id={'treeSection'}>
            <h2 className={styles.title}>Conheça tudo que você vai aprender no curso</h2>

            <div className={styles.swiperContainer}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={6}
                    navigation={true}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 },
                    }}
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
            </div>

            <div className={styles.bonus}>+3 bônus incríveis!</div>

            <div className={styles.footer}>
                <div className={styles.wrapper}>
                    <h3>
                        Inscreva-se agora no Landing Pages ABS e comece a criar páginas Fodásticas!
                    </h3>
                    <button className={styles.ctaButton}>
                        GARANTIR MINHA VAGA →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TreeSection;