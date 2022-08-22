import { Grid, IconButton, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

export const InputSearch = () => {
  return (
    <Grid container justifyContent="flex-end">
        <Grid item xs={12} lg={4} xl={3} sx={{ mr: { xs: 0, lg:4, xl:22} }}>
          <TextField
            fullWidth
            id="standard-bare"
            variant="filled"
            label="Search by"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchOutlined />
                </IconButton>
              ),
            }}
          />
        </Grid>
      </Grid>
  )
}
