import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import ArticleIcon from '@mui/icons-material/Article';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
// import TableViewIcon from '@mui/icons-material/TableView';

const drawerWidth = 200;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
       
      </AppBar>
      <Drawer className="drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            overflow: 'inherit',
            backgroundColor:'#4e73df;',
            color: 'white',
          },
        }}
        variant="permanent"
        anchor="left"
      > 
         <p className="sb-admin sidebar-brand d-flex align-items-center justify-content-center pt-2"
          href="/#">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">MR ADMIN <sup>2</sup></div>
            </p>
          {/* <Toolbar /> */}
          <Divider />
          <p className="px-4 pt-2 mt-2"><i className="fas fa-fw fa-tachometer-alt"></i> DashBoard</p>
         
        <Divider />
        <p className="interface mt-2 mx-3">INTERFACE</p>
        <List>
          {['Compenants', 'Utilites',].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <SettingsIcon /> : <BuildIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <p className="interface mt-2 mx-3">ADDONS</p>
        <List>
          {['Pages', 'Charts', 'Tables'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <ArticleIcon /> : <StackedBarChartIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
