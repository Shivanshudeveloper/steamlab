import { Helmet } from "react-helmet";
import { Box, Container } from "@material-ui/core";
import SettingsNotifications from "./dashboard/SettingsNotifications";
import SettingsPassword from "./dashboard/SettingsPassword";

const SettingsView = () => (
  <>
    <Helmet>
      <title>Settings | Client Portal</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
  </>
);

export default SettingsView;
