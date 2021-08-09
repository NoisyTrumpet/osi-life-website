import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import {
  Text,
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Textarea,
  Grid,
} from "@chakra-ui/react";

const ContactForm = ({ title, subtitle }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    const formattedValues = {
      Name: `${values.fname} ${values.lname}`,
      Email: values.email,
      Message: values.message,
      Phone: values.phone,
    };
    return new Promise((resolve) => {
      axios
        .post("https://formspree.io/f/xnqoknvr", formattedValues)
        .then(() => {
          alert(`Thanks for your message! We'll get back to you shortly.`);
          resolve();
        })
        .catch((err) => {
          alert(`There was an error sending your message.`, err);
          resolve();
        });
    });
  };

  const Label = ({ children }) => {
    return (
      <FormLabel
        position="absolute"
        top="-2.5"
        left="4"
        zIndex="3"
        color="white"
        bg="secondary"
        px={2}
        borderRadius="4px"
      >
        {children}
      </FormLabel>
    );
  };

  return (
    <Box mb={8}>
      <Container>
        <Box textAlign="center" color="white">
          {title && (
            <Text fontSize={[`xl`, `2xl`, `3xl`]} fontWeight="bold">
              {title}
            </Text>
          )}
          {subtitle && <Text>{subtitle}</Text>}
        </Box>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateColumns={`repeat(2, 1fr)`} gap={2}>
              <FormControl my={4}>
                <Box position="relative">
                  <Label>First Name</Label>
                  <Input
                    id="fname"
                    type="text"
                    pt={8}
                    pb={6}
                    bg="white"
                    {...register("fname", {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                  />
                </Box>
                <FormErrorMessage>
                  {errors.fname && errors.fname.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl my={4}>
                <Box>
                  <Label>Last Name</Label>
                  <Input
                    id="lname"
                    type="text"
                    pt={8}
                    pb={6}
                    bg="white"
                    {...register("lname", {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                  />
                </Box>
                <FormErrorMessage>
                  {errors.lname && errors.lname.message}
                </FormErrorMessage>
              </FormControl>
            </Grid>

            <Grid templateColumns={`repeat(2, 1fr)`} gap={2}>
              <FormControl my={4}>
                <Box>
                  <Label>E-Mail</Label>
                  <Input
                    id="email"
                    type="email"
                    pt={8}
                    pb={6}
                    bg="white"
                    {...register("email", {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                  />
                </Box>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl my={4}>
                <Box>
                  <Label>Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    pt={8}
                    pb={6}
                    bg="white"
                    {...register("phone", {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                  />
                </Box>
                <FormErrorMessage>
                  {errors.phone && errors.phone.message}
                </FormErrorMessage>
              </FormControl>
            </Grid>

            <FormControl my={4}>
              <Box>
                <Label>Message</Label>
                <Textarea
                  id="message"
                  type="text"
                  pt={8}
                  pb={6}
                  bg="white"
                  {...register("message", {
                    required: "This is required",
                    minLength: {
                      value: 10,
                      message: "Minimum length should be 10",
                    },
                  })}
                />
              </Box>
              <FormErrorMessage>
                {errors.message && errors.message.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              mt={4}
              isLoading={isSubmitting}
              type="submit"
              variant="secondary"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
