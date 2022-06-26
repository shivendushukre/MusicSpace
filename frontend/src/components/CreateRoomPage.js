import React, { Component, useState, useEffect } from "react";
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


const CreateRoomPage = () => {

    const defaultVotes = 2;

    const [state, setDetails] = useState({
        guestCanPause: true,
        votesToSkip: defaultVotes
    });

    const [roomcode, setroomcode] = useState("");

    const navigate = useNavigate();

    const handleVotesChange = (e) => {
        setDetails({ votesToSkip: e.target.value });

    }

    const handleGuestCanPauseChange = (e) => {
        setDetails({ guestCanPause: e.target.value === 'true' ? true : false });
    }

    const handleRoomButtonPressed = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                votes_to_skip: state.votesToSkip,
                guest_can_pause: state.guestCanPause
            })
        };

        fetch('/api/create-room', requestOptions)
            .then(
                (response) => response.json()
            )
            .then(
                (data) => setroomcode(data.code)
            );
    }


    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    Create A Room
                </Typography>
            </Grid>

            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align="center">
                            Guest Control of Playback State
                        </div>
                    </FormHelperText>
                    <RadioGroup
                        row
                        defaultValue="true"
                        onChange={handleGuestCanPauseChange}
                    >
                        <FormControlLabel
                            value="true"
                            control={<Radio color="primary" />}
                            label="Play/Pause"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="false"
                            control={<Radio color="secondary" />}
                            label="No Control"
                            labelPlacement="bottom"
                        />
                    </RadioGroup>

                </FormControl>
            </Grid>

            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField
                        required={true}
                        type="number"
                        defaultValue={defaultVotes}
                        inputProps={{
                            min: 1,
                            style: { textAlign: "center" },
                        }}
                        variant="standard"
                        onChange={handleVotesChange}
                    />
                    <FormHelperText>
                        <div align="center">
                            Votes Required to Skip a Song
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>

            <Grid item xs={12} align="center">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleRoomButtonPressed}
                >Create A Room</Button>
            </Grid>

            {/* <Grid item xs={12} align="center">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/room/${roomcode}`)}
                >Go to Room</Button>
            </Grid> */}


            <Grid item xs={12} align="center">
                <Button
                    variant="contained"
                    color="secondary"
                    to="/"
                    component={Link}
                >Back</Button>
            </Grid>
        </Grid >
    )
}

export default CreateRoomPage;