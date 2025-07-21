"use client"
import Styles from './Form.module.scss';
import { useState } from 'react';

export default function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '', // campo invisível
        mensagem: ''
    });

    // Estado para armazenar erros de validação
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Estado para controlar o envio do formulário com o spining loading
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Estado para controlar a exibição do modal Popup
    const [showModal, setShowModal] = useState(false);

    // Função para lidar com mudanças nos campos do formulário
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true); // inicia o loading

        // Limpa os erros antes de validar
        const newErrors: { [key: string]: string } = {};
        
        // Verifica se o campo invisível (honeypot) foi preenchido
        if (formData.telefone.trim() !== '') {
            console.warn('Tentativa de spam bloqueada pelo honeypot');
            return;
        }

        // Validação do nome
        if (!formData.nome.trim()) {
            newErrors.nome = 'O nome é obrigatório.';
        } else if (formData.nome.trim().length < 3) {
            newErrors.nome = 'Por favor preencha o nome válido. O nome deve ter pelo menos 3 caracteres.';
        }

        // Validação do email
        if (!formData.email.trim()) {
            newErrors.email = 'O email é obrigatório.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'O email deve ser um endereço de email válido.';
        }

        // Validação da mensagem
        if (!formData.mensagem.trim()) {
            newErrors.mensagem = 'A mensagem é obrigatória.';
        } else if (formData.mensagem.trim().length < 10) {
            newErrors.mensagem = 'A mensagem deve ter pelo menos 10 caracteres.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false); // encerra o loading
            return;
        }

        setErrors({});

        try {
            const response = await fetch('/api/enviar', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // Verifica se a resposta foi bem-sucedida
            const result = await response.json();

            // Exibe o modal de sucesso Popup
            setShowModal(true);

            if (result.status === 'sucesso') {
                //REMOVER ESSE BLOCO APOS O TESTE
                // alert('Mensagem enviada com sucesso!');
                setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
                // aqui vamos disparar o popup na próxima etapa

            } else {
                alert('Erro ao enviar.' + result.mensagem);
            }
        } catch (err) {
            console.error('Erro ao enviar para o Google Sheets:', err);
            alert('Erro de conexão. Tente novamente.');
        }

        setIsSubmitting(false); // encerra o loading ao final
    };

    const requiredStyle = '#ffc4c4';

    return (
        <>

            <div className={Styles.form}>
                <h3 className={Styles.form__title}>Preenche o formulário abaixo e vamos construir essa ponte juntos.</h3>
                <form onSubmit={handleSubmit} noValidate>
                    <div className={Styles.form__group}>
                        <label htmlFor="nome">Nome<span style={{ color: requiredStyle }}>*</span>:</label><br />
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder='Escreva o seu nome aqui...'
                        />
                        {errors.nome && <p style={{ color: 'red' }}>{errors.nome}</p>}
                    </div>

                    <div className={Styles.form__group}>
                        <label htmlFor="email">Email<span style={{ color: requiredStyle }}>*</span>:</label><br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Escreva o seu melhor email aqui...'
                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>

                    {/* Campo escondido (honeypot) para detectar bots */}
                    <div style={{ display: 'none' }}>
                        <label htmlFor="telefone">Telefone:</label>
                        <input
                            type="text"
                            id="telefone"
                            name="telefone"
                            autoComplete="off"
                            value={(formData as any).telefone || ''}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={Styles.form__group}>
                        <label htmlFor="mensagem">Mensagem<span style={{ color: requiredStyle }}>*</span>:</label><br />
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows={5}
                            value={formData.mensagem}
                            onChange={handleChange}
                            placeholder='Escreva a sua mensagem aqui...'
                        />
                        {errors.mensagem && <p style={{ color: 'red' }}>{errors.mensagem}</p>}
                    </div>


                    {isSubmitting ? (
                        <div style={{ textAlign: 'center' }}>
                            <div className={Styles.spinner}></div>
                            <p style={{ color: '#ffffff', marginTop: '0.5rem' }}>Enviando mensagem...</p>
                        </div>
                    ) : (
                        <button type="submit" className={Styles.form__button}>Enviar</button>
                    )}

                </form>
            </div>

            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999
                }}>
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '2rem',
                        borderRadius: '8px',
                        maxWidth: '90%',
                        textAlign: 'center',
                        boxShadow: '0 0 20px rgba(0,0,0,0.3)'
                    }}>
                        <h2 style={{
                            marginBottom: '1rem',
                            fontSize: '1.6rem',
                            fontWeight: 'bold'
                        }}>
                            Mensagem enviada com sucesso!
                        </h2>
                        <p style={{
                            marginBottom: '1rem',
                            fontSize: '1.2rem',
                            color: '#1f1f1f',
                            textAlign: 'center'
                        }}>
                            Obrigado por sua mensagem.<br />Em breve retornarei o seu contacto.
                        </p>
                        <button onClick={() => setShowModal(false)} style={{
                            marginTop: '1rem',
                            padding: '1rem 1.5rem',
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            background: 'linear-gradient(90deg, rgb(0, 43, 115) 0%, rgb(127, 5, 37) 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}