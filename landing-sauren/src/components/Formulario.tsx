import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Formulario: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formspree.io/f/mrbeqpzp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                <Alert severity="success">Formulario enviado con exito</Alert>
                setFormData({ nombre: "", apellido: "", email: "", telefono: "", mensaje: "" });
            } else {
                <Alert severity="error">Error al enviar el formulario</Alert>
            }
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
        }
    };

    return (
        <Box
            sx={{
                flex: 1,
                backgroundColor: '#1e1e1e',
                p: 6,
                borderRadius: '12px',
                width: '100%',
                maxWidth: '500px',
                mx: 'auto',
            }}
        >
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 3,
                        mb: 4,
                        justifyContent: 'space-between',
                    }}
                >
                    <TextField
                        fullWidth
                        sx={{
                            flex: '1 1 calc(50% - 8px)',
                            input: { color: '#e0e0e0', backgroundColor: '#2c2c2c', borderRadius: '4px' },
                            fieldset: { borderColor: '#0047ab' },
                            '&:hover fieldset': { borderColor: '#0047ab' },
                            '& .MuiInputLabel-root': { color: '#ffffff' },  // Color del label
                            '& .MuiInputLabel-root.Mui-focused': { color: '#ffffff' }, // Color del label cuando el campo está enfocado
                        }}
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        label="Nombre"
                        variant="outlined"
                        required
                        color="primary"
                    />
                    <TextField
                        fullWidth
                        sx={{
                            flex: '1 1 calc(50% - 8px)',
                            input: { color: '#e0e0e0', backgroundColor: '#2c2c2c', borderRadius: '4px' },
                            fieldset: { borderColor: '#0047ab' },
                            '&:hover fieldset': { borderColor: '#0047ab' },
                            '& .MuiInputLabel-root': { color: '#ffffff' },  // Color del label
                            '& .MuiInputLabel-root.Mui-focused': { color: '#ffffff' }, // Color del label cuando el campo está enfocado
                        }}
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        label="Apellido"
                        variant="outlined"
                        required
                        color="primary"
                    />
                    <TextField
                        fullWidth
                        sx={{
                            flex: '1 1 calc(50% - 8px)',
                            input: { color: '#e0e0e0', backgroundColor: '#2c2c2c', borderRadius: '4px' },
                            fieldset: { borderColor: '#0047ab' },
                            '&:hover fieldset': { borderColor: '#0047ab' },
                            '& .MuiInputLabel-root': { color: '#ffffff' },  // Color del label
                            '& .MuiInputLabel-root.Mui-focused': { color: '#ffffff' }, // Color del label cuando el campo está enfocado
                        }}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Correo Electrónico"
                        type="email"
                        variant="outlined"
                        required
                        color="primary"
                    />
                    <TextField
                        fullWidth
                        sx={{
                            flex: '1 1 calc(50% - 8px)',
                            input: { color: '#e0e0e0', backgroundColor: '#2c2c2c', borderRadius: '4px' },
                            fieldset: { borderColor: '#0047ab' },
                            '&:hover fieldset': { borderColor: '#0047ab' },
                            '& .MuiInputLabel-root': { color: '#ffffff' },  // Color del label
                            '& .MuiInputLabel-root.Mui-focused': { color: '#ffffff' }, // Color del label cuando el campo está enfocado
                        }}
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        label="Teléfono"
                        type="tel"
                        variant="outlined"
                        color="primary"
                    />
                </Box>
                <Box mb={5}>
                    <TextField
                        fullWidth
                        sx={{
                            flex: '1 1 calc(50% - 8px)',
                            input: { color: '#e0e0e0', backgroundColor: '#2c2c2c', borderRadius: '4px' },
                            fieldset: { borderColor: '#0047ab' },
                            '&:hover fieldset': { borderColor: '#0047ab' },
                            '& .MuiInputLabel-root': { color: '#ffffff' },  // Color del label
                            '& .MuiInputLabel-root.Mui-focused': { color: '#ffffff' }, // Color del label cuando el campo está enfocado
                        }}
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        label="Mensaje"
                        multiline
                        rows={4}
                        variant="outlined"
                        color="primary"
                    />
                </Box>
                <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    sx={{
                        width: '100%',
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                    }}
                    type="submit"
                >
                    Comencemos
                </Button>
            </form>
        </Box>
    );
};

export default Formulario;
