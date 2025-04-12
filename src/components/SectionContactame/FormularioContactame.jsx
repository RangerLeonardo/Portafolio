import {React, useState} from 'react'
import '../../styles/sectionContactame/formularioContactame.css'
import { NavLink } from 'react-router-dom';

export const FormularioContactame = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellidos: "",
        asunto: "",
        correo: "",
        empresa: "",
        mensaje: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData); // Simulación de envío
    };

    return (
        <form className="form_principal" onSubmit={handleSubmit}>
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
                        name="correo"
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

                <div className="div_btn">
                    <NavLink to={"/Portafolio/formulario_enviado"}>
                        <button type="submit" className="btn_enviar_formulario">ENVIAR</button>
                    </NavLink>
                </div>

            </fieldset>
        </form>
    );
}

export default FormularioContactame
