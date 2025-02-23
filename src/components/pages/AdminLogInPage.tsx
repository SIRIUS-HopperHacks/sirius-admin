import React, { useState } from "react";
import { Container, TextField, Box } from "@mui/material";
import PrimaryButton from "@atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogInPage: React.FC = () => {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/admin/login", {
        employeeId,
        password,
      });

      if (response.status === 200) {
        navigate("/homepage");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
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
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        mb={"10rem"}
        width={"50%"}
        component="form"
        onSubmit={handleLogIn}
      >
        <TextField
          required
          id="outlined-required"
          label="Government Employee ID"
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

export default AdminLogInPage;
