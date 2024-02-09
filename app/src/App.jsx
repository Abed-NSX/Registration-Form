import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import './App.css';
import Alert from '@mui/material/Alert';
import { Grid } from '@mui/material';

const Header = () => (
  <Stack sx={{ bgcolor: '#3f51b5', color: '#fff', pt: 1, pl: 2, pr: 2 }}>
    <Typography variant="h3" gutterBottom>
      Registration Form
    </Typography>
  </Stack>
);

const RegistrationForm = (props) => (
  <Box mt={5} p={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Stack direction="row">
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        First name:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="firstName"
        value={props.state.firstName}
        onChange={props.onChange}
      />
    </Stack>

    <Stack direction="row" mt={2}>
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        Last name:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="lastName"
        value={props.state.lastName}
        onChange={props.onChange}
      />
    </Stack>

    <Stack direction="row" mt={2}>
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        Age:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="age"
        value={props.state.age}
        onChange={props.onChange}
      />
    </Stack>

    <Stack direction="row" mt={2}>
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        Date of birth:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="dateOfBirth"
        value={props.state.dateOfBirth}
        onChange={props.onChange}
      />
    </Stack>

    <Stack direction="row" mt={2}>
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        ID number:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="idNumber"
        value={props.state.idNumber}
        onChange={props.onChange}
      />
    </Stack>

    <Stack direction="row" mt={2}>
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        Father's name:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="fathersName"
        value={props.state.fathersName}
        onChange={props.onChange}
      />
    </Stack>

    <Stack direction="row" mt={2}>
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        Place of birth:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="placeOfBirth"
        value={props.state.placeOfBirth}
        onChange={props.onChange}
      />
    </Stack>

    <Stack direction="row" mt={2}>
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        Phone number:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="phoneNumber"
        value={props.state.phoneNumber}
        onChange={props.onChange}
      />
    </Stack>

    <Stack direction="row" mt={2}>
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        Address:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="address"
        value={props.state.address}
        onChange={props.onChange}
      />
    </Stack>

    <Stack direction="row" mt={2}>
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        Email adress:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="emailAddress"
        value={props.state.emailAddress}
        onChange={props.onChange}
      />
    </Stack>

    <Stack direction="row" mt={2}>
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        Work experience:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="workExperience"
        value={props.state.workExperience}
        onChange={props.onChange}
      />
    </Stack>

    <Stack direction="row" mt={2}>
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        Desired work title:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="desiredWorkTitle"
        value={props.state.desiredWorkTitle}
        onChange={props.onChange}
      />
    </Stack>

    <Stack direction="row" mt={2}>
      <Typography variant="body1" gutterBottom mt={2} width="220px">
        How did you hear about us:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="heardAboutUsFrom"
        value={props.state.heardAboutUsFrom}
        onChange={props.onChange}
      />
    </Stack>

    <Stack mt={7} direction="row">
      <Button variant="contained" color="error" sx={{ mr: 5 }} onClick={props.onReset}>
        Reset
      </Button>
      <Button variant="contained" sx={{ mr: 5 }} onClick={props.onSave}>
        Save
      </Button>
    </Stack>
  </Box>
);

const ShowData = ({ forms, onDelete }) => (
  <Stack p={2} mt={5} ml={2} mr={2}>
    <Grid container spacing={2}>
      {forms.map((form) => (
        <Grid
          item
          xs={6}
          sm={3}
          md={3}
          lg={3}
          key={form.id}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            mr: 2,
            p: 1,
          }}
        >
          <>
            {Object.keys(form).map((field) => (
              <Stack key={form.id + '-' + 'stack'} direction="row">
                <Typography variant="body1" gutterBottom mt={2} width="220px">
                  {field}: {form[field]}
                </Typography>
              </Stack>
            ))}
            <Button
              variant="text"
              key={form.id + '-' + 'button'}
              onClick={() => onDelete(form.id)}
              sx={{ float: 'right', mr: 1 }}
            >
              Delete
            </Button>
          </>
        </Grid>
      ))}
    </Grid>
  </Stack>
);

function App() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [forms, setForms] = useState([]);

  // temporary storage
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    age: '',
    dateOfBirth: '',
    idNumber: '',
    fathersName: '',
    placeOfBirth: '',
    phoneNumber: '',
    address: '',
    emailAddress: '',
    workExperience: '',
    desiredWorkTitle: '',
    heardAboutUsFrom: '',
  });

  useEffect(() => {
    onShowAll();
  }, [])

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setState({ ...state, [name]: value });
  };

  const onSave = () => {
    console.log('Data saved...');
    console.log('state', state);

    fetch('http://localhost:3000/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.message);
        onShowAll();
      })
      .catch((error) => {
        console.log(error.message);
      });

    setMessage('Data was saved successfully!');
    setOpen(true);

    // onReset();
  };

  const onReset = () => {
    setState({
      firstName: '',
      lastName: '',
      age: '',
      dateOfBirth: '',
      idNumber: '',
      fathersName: '',
      placeOfBirth: '',
      phoneNumber: '',
      address: '',
      emailAddress: '',
      workExperience: '',
      desiredWorkTitle: '',
      heardAboutUsFrom: '',
    });
  };

  const onShowAll = () => {
    fetch('http://localhost:3000/showAll') // Replace with your API URL
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setForms(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onDelete = (id) => {
    fetch('http://localhost:3000/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.message);
        onShowAll();
      })
      .catch((error) => {
        console.log(error.message);
      });

    setMessage('Data was deleted successfully!');
    setOpen(true);
  };

  return (
    <Container maxWidth={false} sx={{ width: '100%', p: '0 !important' }}>
      <Header />
      <RegistrationForm
        onChange={onChange}
        state={state}
        onSave={onSave}
        onReset={onReset}
      />

      <ShowData forms={forms} onDelete={onDelete} />

      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" variant="filled" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
