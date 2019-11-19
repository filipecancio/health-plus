import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

const Sidebar = () => (
    <Drawer variant="persistent"
    anchor="left">
        <List>
            {['Pacientes','Exames','Laudos'].map((text,index)=>(
                <ListItem button key={text}>
                    <ListItemText primary={text}/>
                </ListItem>
            ))}
        </List>
    </Drawer>
);

export default Sidebar;