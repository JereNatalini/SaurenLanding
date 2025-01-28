import { Box, TextField, Button, Typography, Container } from '@mui/material';
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
                    <Box
                        sx={{
                            flex: 1,
                            backgroundColor: '#1e1e1e', // Fondo del formulario más claro que el fondo general
                            p: 6,
                            borderRadius: '12px',
                            width: '100%',
                            maxWidth: '500px',
                            mx: 'auto',
                        }}
                    >
                        <form>
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
                                        input: {
                                            color: '#ffffff', // Texto en blanco
                                            backgroundColor: '#2c2c2c', // Fondo de los campos de texto
                                            borderRadius: '4px',
                                        },
                                        fieldset: { borderColor: '#0047ab' }, // Bordes azules
                                        '&:hover fieldset': { borderColor: '#0047ab' }, // Bordes en hover
                                    }}
                                    slotProps={{
                                        inputLabel: { style: { color: '#cccccc' } }, // Etiquetas en gris
                                    }}
                                    label="Nombre"
                                    variant="outlined"
                                    required
                                    color="primary"
                                />
                                <TextField
                                    fullWidth
                                    sx={{
                                        flex: '1 1 calc(50% - 8px)',
                                        input: {
                                            color: '#ffffff',
                                            backgroundColor: '#2c2c2c',
                                            borderRadius: '4px',
                                        },
                                        fieldset: { borderColor: '#0047ab' },
                                        '&:hover fieldset': { borderColor: '#0047ab' },
                                    }}
                                    slotProps={{
                                        inputLabel: { style: { color: '#cccccc' } },
                                    }}
                                    label="Apellido"
                                    variant="outlined"
                                    required
                                    color="primary"
                                />
                                <TextField
                                    fullWidth
                                    sx={{
                                        flex: '1 1 calc(50% - 8px)',
                                        input: {
                                            color: '#ffffff',
                                            backgroundColor: '#2c2c2c',
                                            borderRadius: '4px',
                                        },
                                        fieldset: { borderColor: '#0047ab' },
                                        '&:hover fieldset': { borderColor: '#0047ab' },
                                    }}
                                    slotProps={{
                                        inputLabel: { style: { color: '#cccccc' } },
                                    }}
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
                                        input: {
                                            color: '#ffffff',
                                            backgroundColor: '#2c2c2c',
                                            borderRadius: '4px',
                                        },
                                        fieldset: { borderColor: '#0047ab' },
                                        '&:hover fieldset': { borderColor: '#0047ab' },
                                    }}
                                    slotProps={{
                                        inputLabel: { style: { color: '#cccccc' } },
                                    }}
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
                                        '& .MuiInputBase-root': {
                                            color: '#ffffff', // Texto en blanco
                                            backgroundColor: '#2c2c2c', // Fondo
                                            borderRadius: '4px',
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#0047ab', // Borde inicial
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#0047ab', // Borde en hover
                                        },
                                    }}
                                    slotProps={{
                                        inputLabel: { style: { color: '#cccccc' } }, // Etiqueta en gris
                                    }}
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
                            >
                                Comencemos
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactFormWithText;
