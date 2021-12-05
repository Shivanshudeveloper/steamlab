import Navbar from '../components/Navbar';
import { Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
          <Navbar />
          <Container maxWidth="xl">
              {children}
          </Container>
    </>
  )
}

export default Layout