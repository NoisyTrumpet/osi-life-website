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
  Flex,
  Stack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = ({ title, subtitle }) => {
  const success = () =>
    toast.success(
      "Thank You for your message! Someone from our team will reach out shortly.",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );
  const error = () =>
    toast("Ooops! We've encountered an error, please try again!");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    const inquiryType = () => {
      if (values.hCare) {
        return values.hCare;
      }
      if (values.patient) {
        return values.patient;
      }
      return "Not Selected";
    };
    const formattedValues = {
      Name: `${values.fname} ${values.lname}`,
      Email: values.email,
      Message: values.message,
      Phone: values.phone,
      "Inquiry Type": inquiryType(),
    };

    return new Promise((resolve) => {
      axios
        .post("https://formspree.io/f/xnqoknvr", formattedValues)
        .then(() => {
          success();
          resolve();
        })
        .catch((err) => {
          error();
          resolve();
        });
    });
  };

  const Label = ({ children, id, display }) => {
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
        htmlFor={id}
        display={display && display}
      >
        {children}
      </FormLabel>
    );
  };

  return (
    <Box mb={8} id="contact">
      <Container px={0}>
        <Box textAlign="center" color="white">
          {title && (
            <Text
              fontSize={[`xl`, `2xl`, `3xl`]}
              fontWeight="bold"
              fontFamily={`var(--chakra-fonts-heading)`}
            >
              {title}
            </Text>
          )}
          {subtitle && <Text>{subtitle}</Text>}
        </Box>
        <Box maxWidth="800px" mx="auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateColumns={[`100%`, `repeat(2, 1fr)`]} gap={2}>
              <FormControl
                my={4}
                id="fname"
                isInvalid={errors.fname && errors.fname.message}
              >
                <Box position="relative">
                  <Label id="fname">First Name</Label>
                  <Input
                    id="fname"
                    type="text"
                    pt={8}
                    pb={6}
                    bg="white"
                    {...register("fname", {
                      required: "This is required",
                      minLength: {
                        value: 2,
                        message: "Minimum length should be 2",
                      },
                    })}
                  />
                </Box>
                <FormErrorMessage>
                  {errors.fname && errors.fname.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                my={4}
                id="lname"
                isInvalid={errors.lname && errors.lname.message}
              >
                <Box>
                  <Label id="lname">Last Name</Label>
                  <Input
                    id="lname"
                    type="text"
                    pt={8}
                    pb={6}
                    bg="white"
                    {...register("lname", {
                      required: "This is required",
                      minLength: {
                        value: 2,
                        message: "Minimum length should be 2",
                      },
                    })}
                  />
                </Box>
                <FormErrorMessage>
                  {errors.lname && errors.lname.message}
                </FormErrorMessage>
              </FormControl>
            </Grid>

            <Grid templateColumns={[`100%`, `repeat(2, 1fr)`]} gap={2}>
              <FormControl
                my={4}
                id="email"
                isInvalid={errors.email && errors.email.message}
              >
                <Box>
                  <Label id="email">E-Mail</Label>
                  <Input
                    id="email"
                    type="email"
                    pt={8}
                    pb={6}
                    bg="white"
                    {...register("email", {
                      required: "This is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                  />
                </Box>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                my={4}
                id="phone"
                isInvalid={errors.phone && errors.phone.message}
              >
                <Box>
                  <Label id="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    pt={8}
                    pb={6}
                    bg="white"
                    placeholder="example: 210-111-1111"
                    {...register("phone", {
                      required: "This is required",
                      pattern: {
                        value:
                          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                        message: "Entered value does not match phone format",
                      },
                    })}
                  />
                </Box>
                <FormErrorMessage>
                  {errors.phone && errors.phone.message}
                </FormErrorMessage>
              </FormControl>
            </Grid>

            <FormControl
              my={4}
              id="message"
              isInvalid={errors.message && errors.message.message}
            >
              <Box>
                <Label id="message">Message</Label>
                <Textarea
                  id="message"
                  type="text"
                  pt={8}
                  pb={6}
                  bg="white"
                  minH={200}
                  {...register("message")}
                />
                <FormErrorMessage>
                  {errors.message && errors.message.message}
                </FormErrorMessage>
              </Box>
            </FormControl>
            <Flex direction={["column", "row"]} justifyContent="space-between">
              <Flex color="white">
                {/* <FormControl w="fit-content" mr={2} id="hCare">
                  <Label id="hCare" display="none">
                    Healthcare Provider
                  </Label>
                  <Checkbox name="hCare" size="lg" {...register("hCare")}>
                    Healthcare Provider
                  </Checkbox>
                </FormControl>
                <FormControl w="fit-content">
                  <Label id="patient" display="none">
                    Patient
                  </Label>
                  <Checkbox name="patient" size="lg" {...register("patient")}>
                    Patient
                  </Checkbox>
                </FormControl> */}
                <RadioGroup defaultValue="2">
                  <Stack spacing={5} direction="row">
                    <Radio
                      colorScheme="whiteAlpha"
                      value="Healthcare Provider"
                      {...register("hCare")}
                    >
                      Healthcare Provider
                    </Radio>
                    <Radio
                      colorScheme="whiteAlpha"
                      value="Patient"
                      {...register("patient")}
                    >
                      Patient
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Box alignSelf={{ base: `center`, sm: `flex-start` }}>
                <Button
                  mt={4}
                  isLoading={isSubmitting}
                  type="submit"
                  variant="secondary"
                >
                  Submit
                </Button>
              </Box>
            </Flex>
          </form>
        </Box>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </Box>
  );
};

export default ContactForm;
