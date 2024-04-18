import NavButtons from "@/components/FormInputs/NavButtons";
import React from "react";
import { useSelector } from "react-redux";

export default function FormConfirmation() {
  const formData = useSelector((store) => store.onboarding.formData);
  async function processData(data) {
    console.log(formData);
  }

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Confirm and Submit Data
      </h2>
      <form onSubmit={processData}>
        <div className="max-h-[580px] overflow-y-auto">
          <div className="grid grid-cols-2 gap-6 ">
            <div className="mb-6 col-span-2 flex justify-center items-center mt-6">
              <img
                src={formData.profileImage}
                alt="Uploaded Image"
                className="max-w-full h-auto"
              />
            </div>
            <div className="flex flex-col  mb-6 ">
              <label className="block text-sm font-medium text-gray-700">
                Full Name:
              </label>
              <p className="text-lg font-semibold">{formData.fullName}</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Email Address:
              </label>
              <p className="text-lg font-semibold">{formData.email}</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number:
              </label>
              <p className="text-lg font-semibold">{formData.phone}</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth:
              </label>
              <p className="text-lg font-semibold">{formData.dob}</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Gender:
              </label>
              <p className="text-lg font-semibold">{formData.gender}</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Location Address:
              </label>
              <p className="text-lg font-semibold">{formData.location}</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Country of Residence:
              </label>
              <p className="text-lg font-semibold">{formData.country}</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Enter Highest Level of Education:
                  </label>
                  <p className="text-lg font-semibold">
                    {formData.levelOfEducation}
                  </p>
                </div>
                Name of the last Institution:
              </label>
              <p className="text-lg font-semibold">
                {formData.previousInstitution}
              </p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Graduation Year:
              </label>
              <p className="text-lg font-semibold">{formData.graduationYear}</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Your preferred Languages:
              </label>
              <p className="text-lg font-semibold">
                {formData.preferredLanguages}
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Programming Languages Known:
              </label>
              <p className="text-lg font-semibold">{formData.knownLanguages}</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Years of Programming Experience:
              </label>
              <p className="text-lg font-semibold">
                {formData.programmingExperience}
              </p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Portfolio Link:
              </label>
              <p className="text-lg font-semibold">{formData.portfolioLink}</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Discuss Your Recent Projects::
              </label>
              <p className="text-lg font-semibold">{formData.projects}</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Tech Stack Used in Project:
              </label>
              <p className="text-lg font-semibold">{formData.techStack}</p>
            </div>

            {/* Add other form fields here */}
          </div>
        </div>
      </form>
      <div className="mt-18">
        <NavButtons />
      </div>
    </div>
  );
}
