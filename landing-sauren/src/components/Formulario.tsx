import React, { useState } from "react";
import { Box, Button, TextField, Alert } from "@mui/material";
import theme from "../theme";

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/mrbeqpzp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ nombre: "", apellido: "", email: "", telefono: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: '800px',
        mx: 'auto',
        p: 4,
        borderRadius: 2,
        backgroundColor: 'rgba(18, 18, 18, 0.9)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {status === "success" && (
        <Alert severity="success" sx={{
          bgcolor: 'rgba(46, 125, 50, 0.15)',
          color: '#66bb6a',
          border: '1px solid rgba(76, 175, 80, 0.3)'
        }}>
          Formulario enviado con éxito
        </Alert>
      )}
      {status === "error" && (
        <Alert severity="error" sx={{
          bgcolor: 'rgba(211, 47, 47, 0.15)',
          color: '#ef5350',
          border: '1px solid rgba(244, 67, 54, 0.3)'
        }}>
          Ocurrió un error al enviar
        </Alert>
      )}

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <TextField
          name="nombre"
          label="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          sx={{
            flex: 1,
            '& .MuiOutlinedInput-root': {
              color: '#fff',
              '& fieldset': { borderColor: '#434343' },
              '&:hover fieldset': { borderColor: '#616161' },
              '&.Mui-focused fieldset': { borderColor: '#00e5ff' }
            },
            '& .MuiInputLabel-root': { 
              color: '#9e9e9e',
              '&.Mui-focused': { color: '#00e5ff' }
            }
          }}
        />
        <TextField
          name="apellido"
          label="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          sx={{
            flex: 1,
            '& .MuiOutlinedInput-root': {
              color: '#fff',
              '& fieldset': { borderColor: '#434343' },
              '&:hover fieldset': { borderColor: '#616161' },
              '&.Mui-focused fieldset': { borderColor: '#00e5ff' }
            },
            '& .MuiInputLabel-root': { 
              color: '#9e9e9e',
              '&.Mui-focused': { color: '#00e5ff' }
            }
          }}
        />
      </Box>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <TextField
          name="email"
          label="Correo Electrónico"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          sx={{
            flex: 1,
            '& .MuiOutlinedInput-root': {
              color: '#fff',
              '& fieldset': { borderColor: '#434343' },
              '&:hover fieldset': { borderColor: '#616161' },
              '&.Mui-focused fieldset': { borderColor: '#00e5ff' }
            },
            '& .MuiInputLabel-root': { 
              color: '#9e9e9e',
              '&.Mui-focused': { color: '#00e5ff' }
            }
          }}
        />
        <TextField
          name="telefono"
          label="Teléfono"
          type="tel"
          value={formData.telefono}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={{
            flex: 1,
            '& .MuiOutlinedInput-root': {
              color: '#fff',
              '& fieldset': { borderColor: '#434343' },
              '&:hover fieldset': { borderColor: '#616161' },
              '&.Mui-focused fieldset': { borderColor: '#00e5ff' }
            },
            '& .MuiInputLabel-root': { 
              color: '#9e9e9e',
              '&.Mui-focused': { color: '#00e5ff' }
            }
          }}
        />
      </Box>

      <TextField
        name="mensaje"
        label="Mensaje"
        multiline
        minRows={4}
        value={formData.mensaje}
        onChange={handleChange}
        required
        fullWidth
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            color: '#fff',
            '& fieldset': { borderColor: '#434343' },
            '&:hover fieldset': { borderColor: '#616161' },
            '&.Mui-focused fieldset': { borderColor: '#00e5ff' }
          },
          '& .MuiInputLabel-root': { 
            color: '#9e9e9e',
            '&.Mui-focused': { color: '#00e5ff' }
          }
        }}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ 
          mt: 2,
          py: 1.5,
          fontSize: '1rem',
          background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${theme.palette.secondary.light} 100%, ${theme.palette.primary.light} 0%)`,
            boxShadow: '0 4px 15px rgba(0, 229, 255, 0.3)'
          },
          transition: 'all 0.3s ease',
          borderRadius: 1,
          textTransform: 'none',
          fontWeight: 500,
          letterSpacing: '0.5px'
        }}
      >
        Comencemos
      </Button>
    </Box>
  );
};

export default Formulario;