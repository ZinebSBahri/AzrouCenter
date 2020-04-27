import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';


export const mainListItems = (
  <div>
    <ListItem button component="a" href="/index">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="My Space" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="My Applications" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Opportunities" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Volunteer" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Azrou Center" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>

      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>

      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>

      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
