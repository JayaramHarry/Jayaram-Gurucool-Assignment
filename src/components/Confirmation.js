// import React from 'react';

// export const Confirmation = ({ formData }) => {
//   return (
//     <div>
//       <h3>Confirmation</h3>
//       <p><strong>Name:</strong> {formData.name}</p>
//       <p><strong>Email:</strong> {formData.email}</p>
//       <p><strong>Address:</strong> {formData.address}</p>
//       <p><strong>City:</strong> {formData.city}</p>
//     </div>
//   );
// };

import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

export const Confirmation = ({ formData }) => {
  const { name, email, phone, address, address2, city, state, zip } = formData;

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Review Your Information
      </Typography>
      <List disablePadding>
        <ListItem>
          <ListItemText primary="Name" secondary={name || 'Not provided'} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={email || 'Not provided'} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone" secondary={phone || 'Not provided'} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Address Line 1" secondary={address || 'Not provided'} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Address Line 2" secondary={address2 || 'Not provided'} />
        </ListItem>
        <ListItem>
          <ListItemText primary="City" secondary={city || 'Not provided'} />
        </ListItem>
        <ListItem>
          <ListItemText primary="State" secondary={state || 'Not provided'} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zip Code" secondary={zip || 'Not provided'} />
        </ListItem>
      </List>
    </div>
  );
};
