import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

export default function Games() {
  const paperStyle = { passing: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Add Game</u>
        </h1>
        <TextField
          id="outlined-basic"
          label="Mybe ID"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Maybe Name"
          variant="outlined"
          fullWidth
        />
      </Paper>
    </Box>
  );
}
