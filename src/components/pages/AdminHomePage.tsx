import React, { useState } from "react";
import {
  Container,
  Paper,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BottomNavBar from "@molecules/BottomNavBar";

const mockAlerts = [
  {
    alert_id: "A001",
    device_id: "D12345",
    device_location: "40.7128, -74.0060",
    alert_type: "Emergency",
    alert_time: "2025-02-23 14:30:00",
  },
  {
    alert_id: "A002",
    device_id: "D67890",
    device_location: "34.0522, -118.2437",
    alert_type: "Fire",
    alert_time: "2025-02-23 14:45:00",
  },
  {
    alert_id: "A003",
    device_id: "D54321",
    device_location: "37.7749, -122.4194",
    alert_type: "Medical",
    alert_time: "2025-02-23 15:00:00",
  },
  {
    alert_id: "A004",
    device_id: "D98765",
    device_location: "51.5074, -0.1278",
    alert_type: "Police",
    alert_time: "2025-02-23 15:15:00",
  },
];

const AdminHomePage: React.FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const handleClick = (newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate("/homepage");
    }
    else if (newValue === 3) {
      navigate("/");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h5" color="error" gutterBottom>
        Alert Notifications
      </Typography>

      {mockAlerts.map((alert, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            borderRadius: "16px",
            mb: 1,
            cursor: "pointer",
            width: "80%",
            padding: 2,
          }}
        >
          <ListItem component="div">
            <ListItemText
              primary={`Alert ID: ${alert.alert_id}`}
              secondary={
                <Box>
                  <Typography variant="body2">
                    <strong>Device ID:</strong> {alert.device_id}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Device Location:</strong> {alert.device_location}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Alert Type:</strong> {alert.alert_type}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Alert Time:</strong> {alert.alert_time}
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        </Paper>
      ))}
      <BottomNavBar value={value} onClick={handleClick} />
    </Container>
  );
};

export default AdminHomePage;
