import { Grid, IconButton, InputLabel, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';

export const InputSearch = () => {
  return (
    <Grid container justifyContent="flex-end" sx={{ mb:2 }}>
        <Grid item xs={12} sx={{ mr: { xs: 0, md:15} }} textAlign="right">
            <InputLabel sx={{ display: {xs: 'none', sm:'inline-block'}, mt:1, mr:2 }}>Search by #</InputLabel>
            <TextField 
              hiddenLabel
              size="small"
              variant="filled"
              sx={{ width:{xs:'100%', sm:'auto'} }}
              InputProps={{
                sx: { borderRadius: '10px'},
                disableUnderline: true,
                endAdornment: (
                  <IconButton sx={{ color:'primary.light' }}>
                    <SearchOutlined />
                  </IconButton>
                ),
              }}
            />
        </Grid>
      </Grid>
  )
}
