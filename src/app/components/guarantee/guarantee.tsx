import React from 'react';
import styles from './guarantee.module.css';
import Image from "next/image";

const Guarantee = () => {
    return (
        <div className={styles.container}>
            <Image src="/guarantee/garantia7.svg" alt="Guarantee" width={200} height={200}/>

            <div className={styles.wrapper}>
                <h2 className={styles.title}>7 dias de Garantia</h2>
                <h3 className={styles.subTitle}>Sua satisfação ou o seu dinheiro de volta.</h3>
                <h3 className={styles.subTitle}>Em caso de insatisfação com o conteúdo oferecido, firmamos um
                    compromisso de satisfação garantida ou o seu dinheiro de volta. Sem enrolação!</h3>
            </div>
        </div>
    );
};

export default Guarantee;