import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Select, FormControl, InputLabel } from '@mui/material';

// ----------------------------------------------------------------------

RHFSelect.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

export default function RHFSelect({ name, children, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth>
          <InputLabel sx={{ color: 'var(--label)' }}>{other.label}</InputLabel>
          <Select {...field} fullWidth error={!!error} {...other}>
            {children}
          </Select>
        </FormControl>
      )}
    />
  );
}
