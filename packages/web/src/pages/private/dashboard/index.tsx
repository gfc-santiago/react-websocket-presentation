import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import SocketProvider from "../../../hooks/socket-provider";
import CollectionProvider from "../../../hooks/collection-provider";
import presentation from "../../../data/presentation";
import { ChevronLeft } from "@mui/icons-material";
export default function DashboardLayout() {
  const location = useLocation();
  return (
    <Box sx={{ height: "100vh" }}>
      <AppBar
        position="static"
        sx={{ flexDirection: "row", alignItems: "center" }}
      >
        <Box
          sx={{
            pr: 0,
            mr: -1,
            display: location.pathname === "/dashboard" ? "none" : "block",
          }}
        >
          <Link to="/dashboard">
            <IconButton
              sx={{ color: "primary.contrastText" }}
              aria-label="open drawer"
            >
              <ChevronLeft />
            </IconButton>
          </Link>
        </Box>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            UMCDC Remote
          </Typography>
        </Toolbar>
      </AppBar>
      <SocketProvider>
        <CollectionProvider presentation={presentation}>
          <Outlet />
        </CollectionProvider>
      </SocketProvider>
    </Box>
  );
}
