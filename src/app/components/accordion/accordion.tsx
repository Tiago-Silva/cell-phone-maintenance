'use client';

import React, {useState} from 'react';
import styles from './accordion.module.css';
import {FaChevronRight} from 'react-icons/fa';

interface Props {
    item: {
        question: string;
        answer: string;
    };
    index: number;
}

const Accordion: React.FC<Props> = ({item, index}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`${styles.container} ${openIndex === index ? styles.open : ''}`}>
            <button
                className={styles.button}
                onClick={() => toggleItem(index)}
            >
                <FaChevronRight className={`${styles.faIcon} ${openIndex === index ? styles.open : ''}`}/>
                {item.question}
            </button>
            <div className={`${styles.content} ${openIndex === index ? styles.open : ''}`}>
                {item.answer}
            </div>
        </div>
    );
};

export default Accordion;