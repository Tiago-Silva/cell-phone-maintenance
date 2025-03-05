import React from 'react';
import styles from './questions.module.css';
import {FaRegQuestionCircle, FaWhatsapp} from "react-icons/fa";
import Accordion from "@/app/components/accordion/accordion";

interface FaqItem {
    question: string;
    answer: string;
}

const faqItems: FaqItem[] = [
    {
        question: 'Por onde vou assistir o curso?',
        answer: 'Ao assinar qualquer plano através do checkout da Kiwify, você receberá seus dados de acesso no e-mail. Nossa plataforma é uma plataforma própria e exclusiva, totalmente diferente de tudo que você já viu!'
    },
    {
        question: 'Como funciona a garantia de 7 dias?',
        answer: 'Você tem 7 dias para solicitar reembolso caso não goste do curso.'
    },
    {question: 'Quem pode fazer o curso?', answer: 'Qualquer pessoa interessada em aprender pode participar!'},
    {question: 'O que preciso para fazer o curso?', answer: 'Apenas um dispositivo com acesso à internet.'},
    {question: 'Qual é o tempo de acesso ao curso?', answer: 'Você terá acesso vitalício ao curso.'},
    {
        question: 'Fiz o pagamento, quanto tempo levo para acessar?',
        answer: 'O acesso é liberado imediatamente após a confirmação do pagamento.'
    },
    {
        question: 'Como funciona o suporte?',
        answer: 'Você pode entrar em contato diretamente pelo WhatsApp ou e-mail para tirar dúvidas.'
    },
    {question: 'Vou receber certificado?', answer: 'Sim! Após a conclusão do curso você receberá um certificado.'}
];

const Questions: React.FC = () => {
    return (
        <div className={`${styles.container} greenStartLine grayEndLine`}>

            <div className={styles.left}>
                <FaRegQuestionCircle className={styles.icon}/>
                <h2 className={styles.title}>Perguntas frequentes</h2>
                <p className={styles.subtitle}>
                    Ainda está com dúvidas sobre o curso? <br/>Chame diretamente no WhatsApp.
                </p>
                <a
                    href="https://wa.me/seu-numero-aqui"
                    target="_blank"
                    className={styles.whatsappButton}
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp/> CHAMAR NO WHATSAPP
                </a>
            </div>

            <div className={styles.faqList}>
                {faqItems.map((item, index) => (
                    <Accordion item={item} index={index}/>
                ))}
            </div>
        </div>
    );
};

export default Questions;