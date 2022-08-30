import { Grid, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

import { styled } from '@mui/material/styles';



const CustomInputSearch = styled(TextField)(({ theme }) => ({
  background: theme.palette.secondary.light, //theme.status.danger,
  borderRadius: '30px',
}));


const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null
      }}
    />
  );
};





export const InputSearch = () => {
  return (
    <Grid container justifyContent="flex-end">
        <Grid item xs={12} sx={{ mr: { xs: 0, md:15} }} textAlign="right">
            {/* <InputLabel sx={{ display: {xs: 'none', sm:'inline-block'}, mt:1, mr:2 }}>Search by #</InputLabel>
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
            /> */}

            <CustomInputSearch />

            <IconTextField
              iconEnd={<SearchOutlined />}
              InputProps={{
                sx:{ borderRadius:'10px' },
              }}
            />

        </Grid>
      </Grid>
  )
}
