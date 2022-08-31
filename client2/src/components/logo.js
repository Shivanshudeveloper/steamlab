import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

export const Logo = styled((props) => {
  const { variant, ...other } = props;

  const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return (
    <>
      <img style={{ width: '200px' }} alt="Steamlabs" src="https://res.cloudinary.com/dlshlmi6j/image/upload/v1661949968/logos/logo_ashqgj.png" />
    </>
  );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};
