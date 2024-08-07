import { useEffect, useState } from "react";
import { Button, Input, Textarea } from "../components";
import toast from "react-hot-toast";

const initialValues = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};
const Contact = () => {
  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = "Contact Us | Vinsum Axpress";
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const { fullName, email, subject, message } = values;

    if (!fullName || !email || !subject || !message) {
      setIsLoading(false);
      setErrorMessage("All fields are required");
      return;
    }

    // Simulate sending email
    setTimeout(() => {
      setIsLoading(false);
      setValues(initialValues);
      toast.success("Message sent successfully!",);
    }, 2000);
  };

  const { fullName, email, subject, message } = values;
  return (
    <>
      <section className="py-16 px-4">
        <div className="container flex flex-col items-center justify-center gap-3">
          <p className="text-sm text-primary font-medium">Contact us</p>
          <h1 className="sm:text-4xl text-3xl font-bold text-center">
            Get in touch with our team
          </h1>
          <p className="text-gray-800 text-center">
            We have the team and know-how to help your scale 10x faster
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container h-[450px] flex items-center justify-center">
          <h1 className="text-xl font-bold">Map</h1>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container flex lg:flex-row flex-col gap-6">
          <div className="lg:w-1/2 w-full">
            <div>
              <h3 className="text-xl font-bold">Address</h3>
              <p className="font-medium text-gray-700">
                {" "}
                404- Electronic City, Udyog Vihar, Phase IV, Sector 18,
                Gurugram, 122015.
              </p>
            </div>

            <div className="my-6">
              <h3 className="text-xl font-bold">Information</h3>
              <p className="font-medium text-gray-700 mt-2">
                Phone:{" "}
                <a href="tel:0124 4070191" className="ml-2">
                  0124 4070191
                </a>
              </p>
              <p className="font-medium text-gray-700 mt-2">
                Customer Care:{" "}
                <a href="tel:1800-833-3513" className="ml-2">
                  1800-833-3513
                </a>
              </p>
              <p className="font-medium text-gray-700 mt-2">
                <a href="mailto:care@vinsumaxpress.com">
                  care@vinsumaxpress.com
                </a>
              </p>
            </div>

            <div className="my-6">
              <h3 className="text-xl font-bold">Follow Us</h3>
              <div className="flex gap-4 flex-wrap mt-2">
                <a
                  href="#"
                  target="_blank"
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#243F2F] text-white text-lg"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#243F2F] text-white text-lg"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#243F2F] text-white text-lg"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#243F2F] text-white text-lg"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
            <p>Our friendly team would love to hear from you!</p>

            <form onSubmit={handleSendMessage} className="space-y-4 my-8">
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
              </div>
              <Input
                label="Subject"
                id="subject"
                value={subject}
                onChange={handleInputChange}
              />
              <Textarea
                label="Message"
                id="message"
                type="textarea"
                value={message}
                onChange={handleInputChange}
              />
              <Button
                loading={isLoading}
                disabled={isLoading}
                type="submit"
                label="Send Message"
                loadingMessage="Sending..."
              />
              {errorMessage && (
                <div className="py-4 px-2 bg-primary/10 text-primary rounded">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
