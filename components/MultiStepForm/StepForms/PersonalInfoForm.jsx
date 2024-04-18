"use client";

import NavButtons from "@/components/FormInputs/NavButtons";
import SelectInput from "@/components/FormInputs/SelectInput";
import TextInput from "@/components/FormInputs/TextInput";
import {
  setCurrentStep,
  updateFormData,
} from "@/redux/slices/onboardingStudentsSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export default function PersonalInfoForm() {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const formData = useSelector((store) => store.onboarding.formData);
  console.log(formData, currentStep);
  const [loading, setLoading] = useState(false);
  const gender = [
    {
      id: "male",
      title: "Male",
    },
    {
      id: "female",
      title: "Female",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });
  const dispatch = useDispatch();
  
  const [profileImage, setProfileImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const newFormData = {
      ...formData,
      profileImage: file, // Include the uploaded file in the form data
    };
    dispatch(updateFormData(newFormData)); // Dispatch the updated form data
  };

  async function processData(data) {
    // All Data is Valid
    // Collect all the data
    // Update Data in the Global state
    dispatch(updateFormData({ ...data, profileImage }));
    // Make API Request to Save the Data also in the DB

    // Update the Current Step
    dispatch(setCurrentStep(currentStep + 1));
  }

  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Personal info
        </h5>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">
          Upload Image
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-full cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
          required
          name="profileImage"
          onChange={handleFileChange}
        />
        
        <TextInput
          label="Full Name"
          name="fullName"
          register={register}
          errors={errors}
        />
         <TextInput
          label="Email Address"
          name="email"
          type="email"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Phone Number"
          name="phone"
          type="number"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Date of Birth"
          type="date"
          name="dob"
          register={register}
          errors={errors}
        />
        <SelectInput
          label="Select your Gender"
          name="gender"
          register={register}
          options={gender}
        />
        <TextInput
          label="Your Location Address"
          name="location"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Your Country of Residence"
          name="country"
          register={register}
          errors={errors}
        />
      </div>
      
      <NavButtons />
    </form>
  );
}


