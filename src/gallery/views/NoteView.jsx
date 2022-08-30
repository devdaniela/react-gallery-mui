import { AddOutlined, SaveOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';


export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
        <Grid item>
            <Typography fontSize={28} fontWeight='light' >28 de Agosto, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color="primary">
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Ingrese el título'
                label='Título'
                sx={{ border:'none', mb: 1 }}
            />
            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='¿Qué sucedió el día de hoy?'
                minRows={5}
            />
        </Grid>

        {/* Image Gallery */}
        <ImageGallery />

        <IconButton
            size='large'
            sx={{
            color: 'white',
            backgroundColor:'primary.main',
            ':hover': { backgroundColor:'primary.main', opacity: 0.9 },
            position: 'fixed',
            right: 30,
            bottom: 60
            }}
        >
            <AddOutlined />
        </IconButton>

    </Grid>
  )
}
