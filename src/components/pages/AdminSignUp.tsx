import React, { useContext } from "react";
import { Container, TextField, Box } from "@mui/material";
import PrimaryButton from "@atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { APIContext } from "@contexts/api.context";

const AdminSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const api = useContext(APIContext);
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    await api?.signUp(email, password);
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
        component="form"
        onSubmit={handleSignUp}
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
          name="email"
          type="email"
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
          name="password"
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
          name="confirmPassword"
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
        <PrimaryButton
          type="submit"
          sx={{
            backgroundColor: "#980000",
            "&:hover": { backgroundColor: "#7a0000" },
            width: "30%",
          }}
        >
          Sign Up
        </PrimaryButton>
      </Box>
      <PrimaryButton
        type="submit"
        sx={{
          backgroundColor: "#980000",
          "&:hover": { backgroundColor: "#7a0000" },
          width: "30%",
        }}
      >
        Sign Up
      </PrimaryButton>
    </Container>
  );
};

export default AdminSignUpPage;
