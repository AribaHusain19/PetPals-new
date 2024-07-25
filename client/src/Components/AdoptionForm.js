import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAdoption } from "../redux/actions/adoptions";
import { useDispatch } from "react-redux";


const schema = yup
  .object({
    FirstName: yup.string().required(),
    LastName: yup.string().required(),
    email: yup.string().required().email("Please enter a valid email"),
    address: yup.string().required(),
    phone: yup.number().positive().integer().required(),
  })
  .required();

const AdoptionForm = ({ closeModal }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      FirstName: "",
      LastName: "",
      email: "",
      phone: "",
      address: "",
      
    },
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log({data});
        createAdoption({dispatch,payload:data});
        closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="FirstName">First Name</InputLabel>
        <Controller
          name="FirstName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              error={!!errors.FirstName}
              id="FirstName"
              label="First Name"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="LastName">Last Name</InputLabel>
        <Controller
          name="LastName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              error={!!errors.LastName}
              id="LastName"
              label="Last Name"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              error={!!errors.email}
              id="email"
              label="Email"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          Phone Number
        </InputLabel>
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              error={!!errors.phone}
              id="phone"
              label="Phone Number"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="address">Address</InputLabel>
        <Controller
          name="address"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              error={!!errors.address}
              id="address"
              label="Address"
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <Button variant="contained" color="success" type="submit">
          Adopt
        </Button>
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <Button variant="contained" color="warning" onClick={closeModal}>
          Cancel
        </Button>
      </FormControl>
    </form>
  );
};

export default AdoptionForm;