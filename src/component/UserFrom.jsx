import React from 'react';

import { Formik, Form, Field } from 'formik';
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button,MenuItem } from '@mui/material';
const initialValues = {
  name: '',
  address: '',
  country: '',
  gender: '',
  hobbies: []
};

const countries = [
  { label: 'USA', value: 'usa' },
  { label: 'Canada', value: 'canada' },
  { label: 'UK', value: 'uk' },
  // Add more countries as needed
];

const hobbies = [
  { label: 'Reading', value: 'reading' },
  { label: 'Sports', value: 'sports' },
  { label: 'Music', value: 'music' },
  // Add more hobbies as needed
];

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.address) {
    errors.address = 'Required';
  }

  if (!values.country) {
    errors.country = 'Required';
  }

  if (!values.gender) {
    errors.gender = 'Required';
  }

  return errors;
};

const handleSubmit = (values) => {
  // Handle form submission (e.g., display an alert or log the form values)
  console.log(values);
};

const UserFrom = () => {
  return (
    <Formik   initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
    
      {({ errors, touched }) => (
        <Form  className='d-flex flex-column w-50  m-3 form-label fs-6' >
          <Field
            as={TextField}
            className="py-2 "
            name="name"
            label="Name"
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />

          <Field
            as={TextField}
            className="py-2 "
            name="address"
            label="Address"
            multiline
            rows={4}
            error={touched.address && Boolean(errors.address)}
            helperText={touched.address && errors.address}
          />

          <Field
            as={TextField}
            name="country"
            className="py-2 "
            select
            label="Country"
            error={touched.country && Boolean(errors.country)}
            helperText={touched.country && errors.country}
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Field>

          <FormControl component="fieldset" error={touched.gender && Boolean(errors.gender)}>
            <FormLabel component="legend">Gender</FormLabel>
            <Field as={RadioGroup} name="gender">
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </Field>
            {touched.gender && errors.gender && <div>{errors.gender}</div>}
          </FormControl>

          <Field
            as={TextField}
            name="hobbies"
            className="py-2 "
            select
            multiple
            label="Hobbies/Interests"
            error={touched.hobbies && Boolean(errors.hobbies)}
            helperText={touched.hobbies && errors.hobbies}
          >
            {hobbies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Field>

          <Button    className="py-2 w-25 mx-auto" type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>)
    }


export default UserFrom
