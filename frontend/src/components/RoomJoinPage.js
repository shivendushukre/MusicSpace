import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RoomJoinPage = () => {

    const [state, setState] = useState({
        roomCode: "",
        error: ""
    })

    const handleTextFieldChange = (e) => {
        setState({
            roomCode: e.target.value
        })
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography variant="h4" component="h4">
                    Join a Room
                </Typography>
            </Grid>

            <Grid item xs={12} align="center">
                <TextField
                    error={state.error}
                    label="Code"
                    placeholder="Enter a Room Code"
                    value={state.roomCode}
                    helperText={state.error}
                    variant="outlined"
                    onChange={handleTextFieldChange}
                />
            </Grid>

            <Grid item xs={12} align="center">
                <Button
                    variant="contained"
                    color="primary"
                    onClick
                >
                    Enter Room
                </Button>
            </Grid>

            <Grid item xs={12} align="center">
                <Button
                    variant="contained"
                    color="secondary"
                    to="/"
                    component={Link}
                >
                    Back
                </Button>
            </Grid>
        </Grid>
    )
}

export default RoomJoinPage;