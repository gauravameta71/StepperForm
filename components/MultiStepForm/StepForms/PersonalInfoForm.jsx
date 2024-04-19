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

// file

 

export default function PersonalInfoForm() {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const formData = useSelector((store) => store.onboarding.formData);
  console.log(formData, currentStep);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      // FileReader has read the file successfully
      const base64Data = reader.result;
      setProfileImage(base64Data);

      const newFormData = {
        ...formData,
        profileImage: base64Data, // Include the uploaded file in the form data
      };

      // Dispatch the updated form data after the file is read and converted
      dispatch(updateFormData(newFormData));
    };

    // Read the file as a data URL (base64 encoded)
    reader.readAsDataURL(file);
  };

  const handleUploadButtonClick = () => {
    document.getElementById("file_input").click();
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
        <div>
          <label htmlFor="file_input">Upload Image</label>
          <input type="file" id="file_input"  onChange={handleFileChange} />
          <button onClick={handleUploadButtonClick}>Select Image</button>
          {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>

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


