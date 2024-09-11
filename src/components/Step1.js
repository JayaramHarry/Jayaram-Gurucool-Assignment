import { TextField } from '@mui/material';

export const Step1 = ({ formData, handleInputChange, errors }) => {
  return (
    <div>
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        name="phone"
        label="Phone"
        type="tel"
        value={formData.phone}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        error={!!errors.phone}
        helperText={errors.phone}
      />
    </div>
  );
};
