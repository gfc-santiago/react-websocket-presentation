import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import SocketProvider from "../../../hooks/socket-provider";
import CollectionProvider from "../../../hooks/collection-provider";
import presentation from "../../../data/presentation";
export default function DashboardLayout() {
  return (
    <Box sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" component="div">
            Dashboard
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
