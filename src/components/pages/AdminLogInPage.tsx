import React, { useContext } from "react";
import { Container, TextField, Box } from "@mui/material";
import PrimaryButton from "@atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { APIContext } from "@contexts/api.context";

const AdminLogInPage: React.FC = () => {
  const navigate = useNavigate();
  const api = useContext(APIContext);
  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await api?.login(email, password);

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
        onSubmit={handleLogIn}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        mb={"10rem"}
        width={"50%"}
      >
        <TextField
          required
          id="outlined-required"
          label="Email"
          name="email"
          type="email"
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
          Log In
        </PrimaryButton>
      </Box>
    </Container>
  );
};

export default AdminLogInPage;
