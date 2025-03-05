import React from 'react';
import styles from './footer.module.css';
import {AiOutlineHeart} from "react-icons/ai";

const Footer = () => {
    return (
        <div className={styles.container}>

            <h4 className={styles.subtitle}>
                <p>
                    DESIGNER ABS – CNPJ: 41.015.135/0001-08 <br/>
                    Atendimento via chat em dias úteis. Atendimento diário por e-mail: contato@designerabs.com.br.
                </p>
            </h4>
            <h4 className={styles.subtitle}>
                <p className={styles.paragraph}>
                    A empresa DESIGNER ABS, CNPJ 41.015.135/0001-08, não tem nenhuma relação institucional com o Facebook, Instagram, WhatsApp ou Facebook Messenger. Ao abordar questões financeiras, de
                    qualquer um dos nossos produtos, sites, vídeos, palestras, programas ou outros conteúdos, fazemos todos os esforços para garantir que estes representem fielmente nossos cursos e sua
                    capacidade de crescer o seu negócio e melhorar sua vida. No entanto, não garante que você conseguirá obter quaisquer resultados ou ganhar algum dinheiro usando qualquer uma de nossas
                    ideias, ferramentas, estratégias e recomendações, e nada em nossos sites é uma promessa ou garantia para você de ganhos futuros. Depende da sua aplicação e esforço.
                </p>
            </h4>
            <span>
                Política de Privacidade | Termos de Uso
            </span>
            <h4 className={styles.subtitle}>
                Feito com <AiOutlineHeart size={10} /> por: <span>Tiago Silva.</span>
            </h4>
        </div>
    );
};

export default Footer;