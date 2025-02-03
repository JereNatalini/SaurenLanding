import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { Form } from 'react-router-dom';
import Formulario from '../../components/Formulario';
const ContactFormWithText = () => {
    return (
        <Box
            sx={{
                width: '100%',
                py: 10,
                px: 3,
                backgroundColor: '#333333', // Fondo completamente oscuro
                borderTopRightRadius: '10%',
                borderTopLeftRadius: '10%',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 6,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}
                >
                    {/* Sección de texto (izquierda) */}
                    <Box sx={{ flex: 1, textAlign: 'left' }}>
                        <Typography variant="h2" gutterBottom sx={{ color: '#ffffff', mb: 4 }}>
                            ¿Qué sigue?
                        </Typography>
                        <Typography variant="body1" mb={3} sx={{ color: '#cccccc' }}>
                            <strong>01</strong> Envíanos tu información técnica para evaluar tus necesidades y, si es necesario, un acuerdo de confidencialidad.
                        </Typography>
                        <Typography variant="body1" mb={3} sx={{ color: '#cccccc' }}>
                            <strong>02</strong> Recibe tu propuesta y presupuesto en dos días hábiles.
                        </Typography>
                        <Typography variant="body1" mb={3} sx={{ color: '#cccccc' }}>
                            <strong>03</strong> Firma el acuerdo marco y empecemos a impulsar tu negocio.
                        </Typography>
                        <Typography variant="body1" mb={5} sx={{ color: '#cccccc' }}>
                            <strong>04</strong> Comienza el proceso de integración y prepárate para aprovechar al máximo nuestro servicio.
                        </Typography>

                        <Typography variant="h2" gutterBottom sx={{ color: '#ffffff', mb: 2 }}>
                            ¿Listo para hablar ahora?
                        </Typography>
                        <Typography variant="body1" mb={4} sx={{ color: '#cccccc' }}>
                            Programa una llamada con nuestro equipo hoy para iniciar la conversación.
                        </Typography>
                    </Box>

                    {/* Sección del formulario (derecha) */}
                    <Formulario/>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactFormWithText;
