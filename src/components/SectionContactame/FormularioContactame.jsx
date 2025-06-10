import {React, useState, useEffect} from 'react'
import '../../styles/sectionContactame/formularioContactame.css'
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const FormularioContactame = () => {
    const navigate = useNavigate();
    const [disableButton, setDisableButton] = useState(true);

    const [formData, setFormData] = useState({
        nombre: "",
        apellidos: "",
        asunto: "",
        email: "",
        empresa: "",
        mensaje: ""
    });

    const [formStatus, setFormStatus] = useState({
        message: '',
        type: '', // 'success' o 'error'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        verifyFormToEnableButton();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setFormStatus({ message: 'Enviando mensaje...', type: '' }); // Resetear y mostrar "Enviando..."

        try {
            const vercelFunctionURL = 'https://vercel-function-email.vercel.app/api/send_email';

            const response = await fetch(vercelFunctionURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Enviamos directamente el estado `formData` como JSON
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setFormStatus({
                    message: '¡Mensaje enviado con éxito! Te responderé pronto.',
                    type: 'success',
                });
                setTimeToEnableButton(time);
                navigate('/Portafolio/formulario_enviado');
            } else {
                setFormStatus({
                    message: `Error: ${result.message || 'Hubo un problema al enviar tu mensaje.'}`,
                    type: 'error',
                });
            }
        } catch (error) {
            console.error('Error en la conexión o en el envío:', error);
            setFormStatus({
                message: 'Error de conexión. Por favor, inténtalo de nuevo más tarde.',
                type: 'error',
            });
        }
    };

    const verifyFormToEnableButton = () => {
        const isValid = (
            formData.nombre.trim() !== '' &&
            formData.apellidos.trim() !== '' &&
            formData.asunto.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.mensaje.trim() !== ''
        );
        setDisableButton(!isValid);
    }

    return (
        // Cambiar handleTest por handleSubmit en el onSubmit del formulario
        <form id='contact-form' className="form_principal" onSubmit={handleSubmit} method="POST">
            <fieldset className="fieldset_principal">

                <div className="div_label_input">
                    <label className="form_label">Nombre(s):</label>
                    <input 
                        className="input_form"
                        type="text"
                        name="nombre"
                        required
                        placeholder="Ingresa tu nombre..."
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="div_label_input">
                    <label className="form_label">Apellidos:</label>
                    <input 
                        className="input_form"
                        type="text"
                        name="apellidos"
                        required
                        placeholder="Ingresa tus apellidos..."
                        value={formData.apellidos}
                        onChange={handleChange}
                    />
                </div>

                <div className="div_label_input">
                    <label className="form_label">Asunto:</label>
                    <input 
                        className="input_form"
                        type="text"
                        name="asunto"
                        required
                        placeholder="Escribe el asunto..."
                        value={formData.asunto}
                        onChange={handleChange}
                    />
                </div>

                <div className="div_label_input">
                    <label className="form_label">Correo:</label>
                    <input 
                        className="input_form"
                        type="email"
                        name="email"
                        required
                        placeholder="Ingresa tu correo..."
                        value={formData.correo}
                        onChange={handleChange}
                    />
                </div>

                <div className="div_label_input">
                    <label className="form_label">Empresa:</label>
                    <input 
                        className="input_form"
                        type="text"
                        name="empresa"
                        placeholder="Nombre de la empresa (opcional)..."
                        value={formData.empresa}
                        onChange={handleChange}
                    />
                </div>

                <div className="div_label_input">
                    <label className="form_label">Mensaje:</label>
                </div>
                
                <div className="div_text_area">
                    <textarea
                        className="input_form"
                        name="mensaje"
                        required
                        placeholder="Escribe tu mensaje..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows="4"
                    />
                </div>

                <div>
                    <input type="text" name='atack' className='unbelievable'/>
                </div>

                <div className="div_btn">
                    <button type="submit" className="btn_enviar_formulario" disabled={disableButton}>ENVIAR</button>
                </div>

                {formStatus.message && (
                    <div id="form-status" className={formStatus.type}>
                        {formStatus.message}
                    </div>
                )}

            </fieldset>
        </form>
    );
}

export default FormularioContactame
