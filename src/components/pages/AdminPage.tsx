import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";
import PrimaryButton from "@atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";
import logo from "@assets/logo/SIRIUS_ADMIN_LOGO.png";

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const handleLogIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleUser = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "http://localhost:3000/";
  };

  return (
    <Container>
      <Box
        sx={{
          mt: 8,
          mb: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
          <img
            src={logo}
            alt="Admin Sirius Logo"
            style={{ width: "10rem", height: "auto", marginTop: "2rem" }}
          />
        </Box>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          color="#980000"
        >
          SIRIUS
        </Typography>
        <Typography
          variant="subtitle1"
          component="h1"
          align="center"
          gutterBottom
        >
          Make Safe, Anytime, Anywhere
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <PrimaryButton
            type="submit"
            sx={{
              backgroundColor: "#980000",
              "&:hover": { backgroundColor: "#7a0000" },
              width: "30%",
            }}
            onClick={handleLogIn}
          >
            Log In
          </PrimaryButton>
          <PrimaryButton
            type="submit"
            sx={{
              backgroundColor: "#980000",
              "&:hover": { backgroundColor: "#7a0000" },
              width: "30%",
            }}
            onClick={handleSignUp}
          >
            Sign Up
          </PrimaryButton>
          <Typography>
            <Link color="#980000" underline="hover" onClick={handleUser}>
              Continue as User
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminPage;
