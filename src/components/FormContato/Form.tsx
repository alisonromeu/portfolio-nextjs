import React, { useRef } from "react";
import { FormContainer, Input, TextArea } from "./styles"
import emailjs from '@emailjs/browser';


export default function Form() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_default', form.current, '1s6gz6M4bZ5sjN6hX')
        .then(() => {
            alert('Mensagem enviada! :D');
        }, (error) => {
            alert(error.message);
        });
        e.target.reset();
    };

    return (
        <FormContainer onSubmit={sendEmail} ref={form} data-aos="fade-up">
            <Input 
                name="name"
                placeholder="Nome"
                required
            />
            <Input 
                name="email"
                placeholder="E-mail"
                type="email"
                required
            />
            <TextArea name="message" placeholder="Mensagem" required />
            <button type="submit">Enviar</button>
        </FormContainer>
    )
}