import React, {useState, useEffect} from 'react';
import { TextField, Button, Grid, FormControlLabel, Checkbox,Typography, Link, Input } from '@mui/material';
import Card from "./Card";

const Form = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAdress] = useState('')
    const [ucid, setUcid] = useState('')

    const [submitted, setSubmitted] = useState(false);
    const [file, setFile] = useState();

    const submitPage =  () => {
      setSubmitted(!submitted)
    }


    const [selectedImage, setSelectedImage] = useState(null);


    function handleImageChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

    const[major, setMajor] = useState('')

    const [ucidError, setUcidError] = useState('')
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        setFormValid(!ucidError);
      }, [ucidError]);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);

      };

    const handleMajorChange = (event) => {
        setMajor(event.target.value);
      };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
      };
    const handleAddressChange = (event) => {
        setAdress(event.target.value)
    }
    const handleUcidChange = (event) => {
        setUcid(event.target.value)
        if (event.target.value.length !== 9) {
            setUcidError('Ucid digits must be 9')
        }
        else {
            setUcidError('')
        }
    }




    const handleSubmit = async (event) => {
        event.preventDefault();

       setSubmitted(true);
        /*
        setFirstName("");
        setLastName("");
        setMajor("");
        setAdress("");
        setUcid("")*/
      };




  return (


    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={10} sm={8} md={6} lg={4}>
        {submitted ?  (
          <Card

            firstName={firstName}
            lastName={lastName}
            major={major}
            address={address}
            ucid={ucid}
            selectedImage={file}





          />
        ): (

        <>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: { xs: 2, sm: 4 },
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          }}
        >
          Validation Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="FirstName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            //error={!!usernameError}
            //helperText={usernameError}
          />



            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="contained-button-file"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                fullWidth
              >
                Upload Profile Image
              </Button>
            </label>
            {selectedImage && (
              <div>
                <Typography variant="body2" color="textSecondary">
                  Image Preview:
                </Typography>
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ width: '100%', marginTop: '10px' }}
                />
              </div>
            )}









          <TextField
            label="LastName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={handleLastNameChange}
            required
            //error={!!usernameError}
            //helperText={usernameError}
          />

          {/* <TextField
            label="image"
            variant="outlined"
            fullWidth
            margin="normal"
            type="file"

            value={selectedImage}
            onChange={handleImageChange}
            required
          /> */}







           <TextField
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            value={address}
            onChange={handleAddressChange}
            required
            //error={!!usernameError}
            //helperText={usernameError}
          />

          <TextField
            label="major"
            variant="outlined"
            fullWidth
            margin="normal"
            type="string"
            value={major}
            onChange={handleMajorChange}
            required
          />
          <TextField
            label="ucid"
            variant="outlined"
            type="number"
            fullWidth
            margin="normal"
            value={ucid}
            onChange={handleUcidChange}
            required
            //error={!!passwordError}
            //helperText={passwordError}
          />


          {submitted }

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!formValid}

          >
            Submit Form
          </Button>
          <Grid container justifyContent="flex-end">
            {/* </*Grid item>
              <Typography>
                Already have an account?
                <Link href="#/signin" variant="body2">
                  Sign In
                </Link>
              </Typography>
            </Grid> */}
          </Grid>
        </form>
        </>
        )}
      </Grid>
    </Grid>
  )
}

export default Form