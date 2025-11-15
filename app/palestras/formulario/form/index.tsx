'use client'
import Link from 'next/link'
import Styles from './Form.module.scss'
import { useState } from 'react'

export default function ContatoPalestras() {
    const [formData, setFormData] = useState({
        nome: '',
        apelido: '',
        nomeEmpresa: '',
        siteUrl: '',
        email: '',
        tipoEvento: '',
        comoConheceu: '',
        mensagem: '',
        concordaTermos: false, // <-- boolean
        telefone: '' // honeypot
    })

    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const target = e.target as HTMLInputElement;
            setFormData(prev => ({ ...prev, [name]: target.checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {}

        if (formData.telefone.trim() !== '') {
            console.warn('Tentativa de spam detectada')
            return newErrors
        }

        if (!formData.nome.trim()) newErrors.nome = 'O nome é obrigatório.'
        if (formData.nome.trim().length < 3) newErrors.nome = 'O nome deve ter pelo menos 3 caracteres.'

        if (!formData.apelido.trim()) newErrors.apelido = 'O apelido é obrigatório.'
        if (formData.apelido.trim().length < 3) newErrors.apelido = 'O apelido deve ter pelo menos 3 caracteres.'

        if (!formData.nomeEmpresa.trim()) newErrors.nomeEmpresa = 'O nome da empresa é obrigatório.'
        if (formData.nomeEmpresa.trim().length < 3) newErrors.nomeEmpresa = 'O nome da empresa deve ser preenchido corretamente.'

        if (!formData.siteUrl.trim()) {
            newErrors.siteUrl = 'O campo do site é obrigatório.'
        } else {
            try {
                new URL(formData.siteUrl)
            } catch (_) {
                newErrors.siteUrl = 'Insira um endereço de site válido (ex: https://exemplo.com)'
            }
        }

        if (!formData.email.trim()) newErrors.email = 'O email é obrigatório.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido.'

        if (!formData.mensagem.trim()) newErrors.mensagem = 'A mensagem é obrigatória.'
        if (formData.mensagem.trim().length < 10) newErrors.mensagem = 'A mensagem deve ter pelo menos 10 caracteres.'

        if (!formData.tipoEvento) newErrors.tipoEvento = 'Selecione o tipo de evento.'
        if (!formData.concordaTermos) newErrors.concordaTermos = 'Você precisa concordar com os termos.'

        return newErrors
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            setIsSubmitting(false)
            return
        }

        setErrors({})

        try {
            const response = await fetch("/api/palestras", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.status === "sucesso") {
                setShowModal(true);
                setFormData({
                    nome: '',
                    apelido: '',
                    nomeEmpresa: '',
                    siteUrl: '',
                    email: '',
                    tipoEvento: '',
                    comoConheceu: '',
                    mensagem: '',
                    concordaTermos: false, // <-- boolean
                    telefone: '' // honeypot
                });
            } else {
                alert("Erro ao enviar: " + result.mensagem);
            }
        } catch (err) {
            console.error("Erro ao enviar:", err);
            alert("Erro de conexão. Tente novamente.");
        }

        setIsSubmitting(false)
    }

    const requiredStyle = '#f75b5b'

    return (
        <>
            <div className={Styles.form}>
                <h3 className={Styles.form__title}>
                    Solicite uma palestra preenchendo o formulário abaixo.
                </h3>
                <form onSubmit={handleSubmit} noValidate>
                    {/* Nome */}
                    <div className={Styles.form__groupDadosPessoais}>
                        <div className={Styles.form__groupDadosPessoais__groupNome}>
                            <label htmlFor="nome">Nome<span style={{ color: requiredStyle }}>*</span>:</label><br />
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                placeholder='Digite o seu nome aqui.'
                            />
                            {errors.nome && <p style={{ color: 'red' }}>{errors.nome}</p>}
                        </div>
                        {/* Apelido */}
                        <div className={Styles.form__groupDadosPessoais__groupApelido}>
                            <label htmlFor="apelido">Apelido<span style={{ color: requiredStyle }}>*</span>:</label><br />
                            <input
                                type="text"
                                id="apelido"
                                name="apelido"
                                value={formData.apelido}
                                onChange={handleChange}
                                placeholder='Aqui, o seu apelido.'
                            />
                            {errors.apelido && <p style={{ color: 'red' }}>{errors.apelido}</p>}
                        </div>
                    </div>


                    {/* Nome da Empresa */}
                    <div className={Styles.form__group}>
                        <label htmlFor="nomeEmpresa">Nome da Empresa<span style={{ color: requiredStyle }}>*</span>:</label><br />
                        <input
                            type="text"
                            id="nomeEmpresa"
                            name="nomeEmpresa"
                            value={formData.nomeEmpresa}
                            onChange={handleChange}
                            placeholder='Digite o seu da sua empresa.'
                        />
                        {errors.nomeEmpresa && <p style={{ color: 'red' }}>{errors.nomeEmpresa}</p>}
                    </div>

                    {/* Site URL */}
                    <div className={Styles.form__group}>
                        <label htmlFor="siteUrl">Website<span style={{ color: requiredStyle }}>*</span>:</label><br />
                        <input
                            type="url"
                            id="siteUrl"
                            name="siteUrl"
                            value={formData.siteUrl}
                            onChange={handleChange}
                            placeholder='https://www.seusite.com'
                        />
                        {errors.siteUrl && <p style={{ color: 'red' }}>{errors.siteUrl}</p>}
                    </div>

                    {/* Email */}
                    <div className={Styles.form__group}>
                        <label htmlFor="email">Email<span style={{ color: requiredStyle }}>*</span>:</label><br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Digite o seu melhor email aqui.'
                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>

                    {/* Campo escondido (honeypot) para detectar bots */}
                    <div style={{ display: 'none' }}>
                        <input type="text" id="telefone" name="telefone" autoComplete="off" value={formData.telefone} onChange={handleChange} />
                    </div>

                    {/* Tipo de Evento */}
                    <div className={Styles.form__groupTipoEvento}>
                        <label htmlFor="tipoEvento">Para qual tipo de evento gostarias de contratar-me?<span style={{ color: requiredStyle }}>*</span>:</label><br />
                        <select
                            id="tipoEvento"
                            name="tipoEvento"
                            value={formData.tipoEvento}
                            onChange={handleChange}
                        >
                            <option value="">Selecione</option>
                            <option value="empresarial">Empresarial</option>
                            <option value="social">Social</option>
                            <option value="educacional">Educacional</option>
                            <option value="atletas">Atletas / Artista</option>
                        </select>
                        {errors.tipoEvento && <p style={{ color: 'red' }}>{errors.tipoEvento}</p>}
                    </div>

                    {/* Como conheceu */}
                    <div className={Styles.form__group}>
                        <label htmlFor="comoConheceu">Conte-me, como conheceu o Marco?</label><br />
                        <textarea
                            id="comoConheceu"
                            name="comoConheceu"
                            rows={3}
                            value={formData.comoConheceu}
                            onChange={handleChange}
                            placeholder='Através de um amigo, redes sociais, site, pessoalmente, etc.'
                        />
                    </div>

                    {/* Mensagem */}
                    <div className={Styles.form__group}>
                        <label htmlFor="mensagem">Mensagem<span style={{ color: requiredStyle }}>*</span>:</label><br />
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows={5}
                            value={formData.mensagem}
                            onChange={handleChange}
                            placeholder='Escreva-me aqui a sua mensagem ou uma solicitação específica.'
                        />
                        {errors.mensagem && <p style={{ color: 'red' }}>{errors.mensagem}</p>}
                    </div>

                    {/* Termos */}
                    <div className={Styles.form__groupTermos}>
                        <label>
                            <input type="checkbox" name="concordaTermos" checked={formData.concordaTermos} onChange={handleChange} />
                            Concordo com os termos e condições<span style={{ color: requiredStyle }}>*</span>
                        </label>
                        <Link href="/termo-de-uso" rel="noopener noreferrer" className={Styles.form__groupTermos__link}>
                            Leia os termos e condições aqui. 
                        </Link>
                        {errors.concordaTermos && <p style={{ color: 'red' }}>{errors.concordaTermos}</p>}
                    </div>

                    {isSubmitting ? (
                        <div style={{ textAlign: 'center' }}>
                            <div className={Styles.spinner}></div>
                            <p className={Styles.spinnerText}>Enviando mensagem...</p>
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
    )
}
