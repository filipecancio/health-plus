import React from 'react';
import './painel.css';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, AppBar, Toolbar, CssBaseline } from '@material-ui/core';

const Painel = () =><div >
    <CssBaseline/>
    <AppBar position="fixed">
        <Toolbar>
            Health-Plus
        </Toolbar>
    </AppBar>
    <Drawer variant="permanent">
        <List>
            {['Pacientes','Exames','Laudos'].map((text,index)=>(
                <ListItem button key={text}>
                    <ListItemText primary={text}/>
                </ListItem>
            ))}
        </List>
        
    </Drawer>
</div>

export default Painel;
