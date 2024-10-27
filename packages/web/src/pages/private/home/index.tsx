import { CameraAlt, Dashboard } from "@mui/icons-material";
import { Button, Container, Grid2, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import { useConfig } from "../../../hooks";

export default function HomePage() {
  const config = useConfig();
  const [address, setAddress] = useState(false);
  useEffect(() => {
    if (config?.host) {
      axios
        .get(`${config?.host}/ip`)
        .then(({ data }) => setAddress(data?.address));
    }
  }, [config?.host]);
  return (
    <Container
      sx={{
        p: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2
        container
        sx={{ textAlign: "center", maxWidth: "500px", width: "100vw" }}
      >
        <Grid2 size={12} sx={{ p: 2 }}>
          <Typography variant="h5">UMCDC Remote</Typography>
        </Grid2>
        {address && (
          <Grid2 size={12} sx={{ p: 2 }}>
            <QRCode value={`http://${address}`} size={100} />
            <Link to={`http://${address}`}>
              <Typography>http://{address}</Typography>
            </Link>
          </Grid2>
        )}
        <Grid2 size={{ xs: 6 }} sx={{ p: 1 }}>
          <Link to="/dashboard/remote">
            <Button
              fullWidth
              variant="outlined"
              color="success"
              startIcon={<Dashboard />}
            >
              Dashboard
            </Button>
          </Link>
        </Grid2>
        <Grid2 size={{ xs: 6 }} sx={{ p: 1 }}>
          <Link to={config?.camera ?? ""} target="_blank">
            <Button
              fullWidth
              variant="outlined"
              color="warning"
              startIcon={<CameraAlt />}
            >
              Camera
            </Button>
          </Link>
        </Grid2>
      </Grid2>
    </Container>
  );
}
