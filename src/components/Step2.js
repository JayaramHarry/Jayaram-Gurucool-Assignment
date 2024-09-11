import { TextField } from '@mui/material';

export const Step2 = ({ formData, handleInputChange, errors }) => {
  return (
    <div>
      <TextField
        name="address"
        label="Address Line 1"
        value={formData.address}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        error={!!errors.address}
        helperText={errors.address}
      />
      <TextField
        name="address2"
        label="Address Line 2"
        value={formData.address2}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="city"
        label="City"
        value={formData.city}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        error={!!errors.city}
        helperText={errors.city}
      />
      <TextField
        name="state"
        label="State"
        value={formData.state}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        error={!!errors.state}
        helperText={errors.state}
      />
      <TextField
        name="zip"
        label="Zip Code"
        value={formData.zip}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        error={!!errors.zip}
        helperText={errors.zip}
        inputProps={{ maxLength: 6 }} // Limit to 5 characters
      />
    </div>
  );
};
