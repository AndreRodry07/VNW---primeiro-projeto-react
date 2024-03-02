import { useState } from "react";
import "../formFooter/form-footer.css";
import "../formFooter/form-mediaqueries.css";

export default function SubscribeForm() {
    const initialFormData = {
        name: "",
        email: "",
        phone: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            alert("Formulário enviado com sucesso! Verifique o seu e-mail.");
            setFormData(initialFormData);
        }, 5000); 
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Nome" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="form-control" 
            />

            <label htmlFor="email"></label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="form-control" 
            />

            <label htmlFor="phone"></label>
            <input 
            type="tel" 
            name="phone" 
            id="phone" 
            placeholder="Telefone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
            className="form-control" 
            />

            <button type="submit" value="Submit" className="submit-btn">
                Obter preço de atacado
            </button>
        </form>
    );
}
