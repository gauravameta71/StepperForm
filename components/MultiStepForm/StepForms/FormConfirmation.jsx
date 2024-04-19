import NavButtons from "@/components/FormInputs/NavButtons";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function FormConfirmation() {
  const formData = useSelector((store) => store.onboarding.formData);
    const formRef = useRef(null);

    const handleDownloadPdf = () => {
      // Select the form element and its content
      const form = formRef.current;
      if (!form) return; // Ensure the form reference exists
      const formContent = form.cloneNode(true);

      // Create a new jsPDF instance
      const pdf = new jsPDF("p", "mm", "a4");

      // Convert form content to canvas and add to PDF
      html2canvas(formContent).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // A4 size: 210 x 297 mm
        pdf.save("form_data.pdf"); // Save PDF with a specific filename
      });
    };

  async function processData(data) {
    console.log(formData);
  }

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Confirm and Submit Data
      </h2>
      <form onSubmit={processData} ref={formRef}>
        <div className="max-h-[580px] overflow-y-auto">
          <div className="grid grid-cols-2 gap-6 ">
            <div className="mb-6 col-span-2 flex justify-center items-center mt-6">
              <img
                src={formData.profileImage}
                alt="Uploaded Image"
                className="w-40 h-36 rounded-full"
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
        {/* <button onClick={handleDownloadPdf} className="btn btn-primary">
          Download PDF
        </button> */}
      </div>
    </div>
  );
}
