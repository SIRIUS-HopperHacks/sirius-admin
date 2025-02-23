import React, { useState } from "react";
import { Container, TextField, Box } from "@mui/material";
import PrimaryButton from "@atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
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
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        mb={"10rem"}
        width={"50%"}
      >
        <TextField
          required
          id="outlined-required"
          label="Name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
        onClick={handleSignUp}
      >
        Sign Up
      </PrimaryButton>
    </Container>
  );
};

export default AdminSignUpPage;
