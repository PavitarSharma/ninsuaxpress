import { Clock, CloudUpload, MapPin } from "lucide-react";
import { openings } from "../constants";
import { Button, Input } from "../components";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

const initialValues = {
  email: "",
  fullName: "",
  phone: "",
  experience: "",
  currentCtc: "",
  expectedCtc: "",
};
const Career = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    document.title = "Career | Vinsum Axpress";
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    setErrorMessage("");
    const myFile = acceptedFiles[0];
    const allowedFileTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 10 * 1024 * 1024;
    if (!allowedFileTypes.includes(myFile.type)) {
      setErrorMessage("Error: Only PDF or DOCX files are allowed.");
      return;
    }

    if (myFile.size > maxSize) {
      setErrorMessage("Error: File size should be 10MB or less.");
      return;
    }
    setFile(myFile);
    setErrorMessage("");
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmitApplication = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const { fullName, email, phone, experience, expectedCtc, currentCtc } =
      formValues;

    if (
      !fullName ||
      !email ||
      !phone ||
      !experience ||
      !currentCtc ||
      !expectedCtc ||
      !file
    ) {
      setIsLoading(false);
      setErrorMessage("All fields are required");
      return;
    }

    const formdata = new FormData();
    formdata.append("fullName", fullName);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("experience", experience);
    formdata.append("currentCtc", currentCtc);
    formdata.append("expectedCtc", expectedCtc);
    if (file) formdata.append("resume", file);

    // Simulate sending email
    setTimeout(() => {
      setIsLoading(false);
      setFormValues(initialValues);
      setFile(null)
      toast.success("Application submitted successfully!");
    }, 2000);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });
  const { fullName, email, phone, experience, expectedCtc, currentCtc } =
    formValues;
  return (
    <>
      <section className="py-16 px-4">
        <div className="container">
          <a
            href="#discover"
            className="border border-primary text-primary rounded-full py-2.5 px-3 text-sm font-medium"
          >
            We&#39;re hiring
          </a>
          <h1 className="text-5xl font-semibold my-6">
            Be part of our mission
          </h1>
          <p className="max-w-2xl font-poppins">
            We&#39;re looking for passionate people to join us on our mission.
            We value flat hierarchies, clear communication, and full ownership
            and responsibility.
          </p>
        </div>
      </section>

      <section id="discover" className="py-16 px-4 bg-primary/5 rounded">
        <div className="container grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {openings.map((opening, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded p-4 shadow-sm hover:-translate-y-2 transition duration-500"
              >
                <h1 className="text-xl font-semibold">{opening.position}</h1>
                <div className="my-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-gray-600" />
                    <span className="text-sm">{opening.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} className="text-gray-600" />
                    <span className="text-sm">{opening.role}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Opening: </span>
                    <span className="text-sm">{opening.vacancy}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Experience: </span>
                    <span className="text-sm">{opening.experience}</span>
                  </div>
                </div>

                {/* <div className="mt-6 flex justify-end">
                  <a
                    href="#application"
                    className="rounded-full bg-primary text-white py-2.5 px-4 font-medium"
                  >
                    Apply
                  </a>
                </div> */}
              </div>
            );
          })}
        </div>
      </section>

      <section id="application" className="py-16 px-4">
        <h1 className="text-center font-bold text-4xl mb-10">
          Apply for the role
        </h1>
        <div className="container">
          <form
            onSubmit={handleSubmitApplication}
            className="space-y-6 max-w-4xl w-full mx-auto"
          >
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
              <Input
                label="Full Name"
                id="fullName"
                value={fullName}
                onChange={handleInputChange}
              />
              <Input
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={handleInputChange}
              />
              <Input
                label="Phone"
                id="phone"
                value={phone}
                onChange={handleInputChange}
              />
              <Input
                label="Experience"
                id="experience"
                value={experience}
                onChange={handleInputChange}
              />
              <Input
                label="Current CTC"
                id="currentCtc"
                value={currentCtc}
                onChange={handleInputChange}
              />
              <Input
                label="Expected CTC"
                id="expectedCtc"
                value={expectedCtc}
                onChange={handleInputChange}
              />
            </div>
            <label
              {...getRootProps()}
              onClick={(e) => e.stopPropagation()}
              htmlFor="file"
              className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg h-56 !mt-10"
            >
              <CloudUpload size={42} className="text-gray-600" />
              {isDragActive ? (
                <p className="text-xs text-gray-500">
                  Release to drop the files here
                </p>
              ) : (
                <>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, DOCX, etc (MAX. 800x400px)
                  </p>
                </>
              )}
              <input
                type="file"
                id="file"
                accept=".pdf,.docx"
                hidden
                {...getInputProps()}
              />
            </label>
            <Button
              loading={isLoading}
              disabled={isLoading}
              type="submit"
              label="Submit Application"
              loadingMessage="Submitting..."
            />
            {errorMessage && (
              <div className="py-4 px-2 bg-primary/10 text-primary rounded">
                {errorMessage}
              </div>
            )}

            <div className="bg-gray-200 rounded-lg py-4 px-2 !mt-10">
              <p className="text-center">
                Interested canditates shall send in their detailed resume to:{" "}
                <span className="text-primary font-medium">
                  info@vinsumaxpress.com
                </span>
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 px-4">
        <h1 className="text-center font-bold text-4xl mb-10">Grow With Us</h1>
        <div className="container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
          <div className="p-8 bg-white border border-gray-300 rounded-tr-[62px] rounded-bl-[62px] relative bg-gradient-to-b from-slate-50 to-primary/10">
            <h4 className="text-2xl font-bold mb-4">Why We?</h4>
            <p>
              Our sense of commitment & our dedicated & professionally managed
              team has enabled us to fix highest standards and cater to
              customer&#39;s total satisfaction. We believe that with our
              ability to anticipate and fulfill the aspirations of our customers
              and respond competitively will make us to become the best in
              trade.
            </p>
          </div>
          <div className="p-8 bg-white border border-gray-300 rounded-tr-[62px] rounded-bl-[62px] relative bg-gradient-to-b from-slate-50 to-primary/10">
            <h4 className="text-2xl font-bold mb-4">Work Culture</h4>
            <p>
              Our Work culture is the key driving force that help us align our
              organisation towards customer sensitivity and deliver beyond
              customer&#39;s expectations. The attitude, behavior, action and
              delivery promise of every Vinsum Axpress family member takes us to
              the next level of work culture towards excellence. These corporate
              values will propel the organisation to achieve new heights in
              business in the long run.
            </p>
          </div>
          <div className="p-8 bg-white border border-gray-300 rounded-tr-[62px] rounded-bl-[62px] relative bg-gradient-to-b from-slate-50 to-primary/10">
            <h4 className="text-2xl font-bold mb-4">
              Training And Development
            </h4>
            <p>
              Training and development is a subsystem of any organization. It
              ensures that randomness is reduced and learning or behavioral
              change takes place in structured format. We help employees in
              achieving their personal goals, which in turn, enhances the
              individual contribution to an organization through this.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
