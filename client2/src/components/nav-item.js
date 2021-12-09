import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';

export const NavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const router = useRouter();

  var temprouter = "";
  if (router.pathname !== "/") {
    temprouter = `${router.pathname}.html`;
  } else {
    temprouter = `${router.pathname}`;
  }


  const active = href ? (temprouter === href) : false;

  return (
    <ListItem
      onClick={() => window.location.href = `${href}`}
      disableGutters
      sx={{
        display: 'flex',
        cursor: 'pointer',
        mb: 0.5,
        py: 0,
        px: 2,
        '&:hover': {
          backgroundColor: 'rgba(255,255,255, 0.08)'
        },
        backgroundColor: active && 'rgba(255,255,255, 0.08)',
        fontWeight: active && 'fontWeightBold',
        width: '100%',
        '& .MuiButton-startIcon': {
          color: active ? 'secondary.main' : 'neutral.400'
        },
      }}
      {...others}
    >
      <a
        style={{ textDecoration: 'none' }}
        href={href}
      >
        <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            borderRadius: 1,
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            color: active ? 'secondary.main' : 'neutral.300',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
      </a>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string
};
