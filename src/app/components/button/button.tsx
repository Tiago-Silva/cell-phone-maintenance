import React from 'react';
import styles from './button.module.css';
import {IconType} from "react-icons";

interface Props {
    title: string;
    icon?: IconType;
    width?: string;
    height?: string;
}

const Button: React.FC<Props> = ({
    title,
    icon: Icon,
    width = '35rem',
    height = '6rem',
}) => {
    return (
        <button className={styles.container} style={{ width, height }}>
            {title}
            {Icon && <Icon className={styles.icon} />}
        </button>
    );
};

export default Button;