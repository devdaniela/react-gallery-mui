import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

export const SiderBar = ({ openDrawer, setOpenDrawer, drawerWidth = 260 }) => {

  const menu = ['Enero','Febrero','Marzo','Abril'];

  return (
    <Box component='nav'>
        <Drawer
            variant='temporary'
            open={ openDrawer }
            onClose={ () => setOpenDrawer(!openDrawer) }
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component="div">
                    Daniela Romero
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    menu.map( text => (
                        <ListItem key={text}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } sx={{ width: '100%' }} />
                                    <ListItemText secondary={ 'Texto secundario' } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
                
            </List>

        </Drawer>
    </Box>
  )
}
