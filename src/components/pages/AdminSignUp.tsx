import React from "react";
import { Container, TextField, Box } from "@mui/material";
import PrimaryButton from "@atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";

const AdminSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const handleLogIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/homepage");
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
      <Box display={"flex"} flexDirection={"column"} gap={3} mb={"10rem"} width={"50%"}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          placeholder="Your name"
          sx={{
            "& label": { color: "#980000" },
            "& label.Mui-focused": { color: "#980000" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#980000" },
              "&:hover fieldset": { borderColor: "#7a0000" },
              "&.Mui-focused fieldset": { borderColor: "#980000" },
            },
            "& input": { color: "#980000" },
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder="example@example.com"
          sx={{
            "& label": { color: "#980000" },
            "& label.Mui-focused": { color: "#980000" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#980000" },
              "&:hover fieldset": { borderColor: "#7a0000" },
              "&.Mui-focused fieldset": { borderColor: "#980000" },
            },
            "& input": { color: "#980000" },
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Government Employee ID"
          placeholder=""
          sx={{
            "& label": { color: "#980000" },
            "& label.Mui-focused": { color: "#980000" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#980000" },
              "&:hover fieldset": { borderColor: "#7a0000" },
              "&.Mui-focused fieldset": { borderColor: "#980000" },
            },
            "& input": { color: "#980000" },
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          placeholder="*******"
          sx={{
            "& label": { color: "#980000" },
            "& label.Mui-focused": { color: "#980000" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#980000" },
              "&:hover fieldset": { borderColor: "#7a0000" },
              "&.Mui-focused fieldset": { borderColor: "#980000" },
            },
            "& input": { color: "#980000" },
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Confirm Password"
          type="password"
          placeholder="*******"
          sx={{
            "& label": { color: "#980000" },
            "& label.Mui-focused": { color: "#980000" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#980000" },
              "&:hover fieldset": { borderColor: "#7a0000" },
              "&.Mui-focused fieldset": { borderColor: "#980000" },
            },
            "& input": { color: "#980000" },
          }}
        />
      </Box>
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
    </Container>
  );
};

export default AdminSignUpPage;
