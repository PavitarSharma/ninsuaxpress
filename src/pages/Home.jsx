import {
  Button,
  Input,
  Navbar,
  ParallaxSection,
  Statistics,
} from "../components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  bannerData,
  clients,
  services,
  servicesTypes,
  whyVinsumAxpress,
} from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes";
import { useState } from "react";
const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const Icon = service.icon;
  return (
    <div className="rounded-xl p-4 hover:drop-shadow-md transition bg-white border border-gray-300 group hover:-translate-y-2 duration-1000 cursor-pointer flex flex-col items-start hover:bg-gradient-to-b from-primary/10 to-blue-50">
      {Icon && (
        <Icon className="text-5xl mb-4 text-gray-600 group-hover:text-primary " />
      )}
      <h3 className="text-2xl font-bold">{service.title}</h3>
      <p className="mt-8 text-gray-600 text-sm flex-1">{service.description}</p>
      <button
        onClick={() => navigate(service.path)}
        className="px-4 py-2 text-sm rounded mt-2 text-primary font-semibold flex items-center gap-1"
      >
        Explore more <ChevronsRight size={20} />
      </button>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [docketNumber, setDocketNumber] = useState("");

  const handleSubmitDocketNumber = () => {
    if (!docketNumber) {
      alert("Please enter a valid docket number");
      return;
    }
    // navigate(ROUTES.DOCKET_SEARCH, { state: { docketNumber } });
  };
  return (
    <>
      <ParallaxSection className="!mt-0">
        <Navbar />
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          fade={true}
          modules={[Autoplay]}
          className="mySwiper h-full"
        >
          {bannerData.map((data, index) => (
            <SwiperSlide key={index}>
              <div
                style={{ backgroundImage: `url(${data.image})` }}
                className="h-full bg-cover bg-no-repeat bg-center py-28"
              >
                <motion.div
                  variants={fadeIn("top", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="py-16 container w-full h-full"
                >
                  <div className="flex items-center justify-center flex-col">
                    <h1 className="md:text-5xl text-4xl font-bold max-w-6xl text-center !leading-tight text-white">
                      <span className="text-primary">V</span>
                      <span>ersatile</span>{" "}
                      <span className="text-primary">I</span>
                      <span>ntegrated</span>{" "}
                      <span className="text-primary">N</span>
                      <span>ationwide</span> <br className="md:block hidden" />
                      <span className="text-primary">S</span>
                      <span>ervices</span>{" "}
                      <span className="text-primary">U</span>
                      <span>nder</span> <span className="text-primary">M</span>
                      <span>obility</span>
                    </h1>
                    <p className="max-w-3xl text-white w-full text-center my-4 font-medium">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Officiis, accusantium totam. Aperiam ab sed, ratione neque
                      aut eveniet minima aliquid dolor! Iure recusandae a iste
                      pariatur, assumenda ad officia accusantium.
                    </p>

                    <div className="flex sm:flex-row flex-col gap-4 sm:items-center max-w-2xl w-full">
                      <input
                        type="text"
                        placeholder="Paste your email address here"
                        className="flex-1 border rounded-xl py-3.5 outline-none px-4 text-sm text-gray-900 placeholder:text-gray-600"
                      />
                      <Button label="Subscribe us" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ParallaxSection>

      <ParallaxSection className="xl:!h-[70vh]">
        <div className="container mx-auto py-16">
          <h1 className="sm:text-5xl text-4xl font-bold text-center">
            How we works
          </h1>
          <p className="max-w-4xl w-full mx-auto text-center text-gray-600 mt-4">
            Explore specialized logistics services, from express delivery to
            secure handling and 24/7 support, ensuring excellence at every step.
          </p>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-6 mt-8">
            {servicesTypes.map((data, index) => (
              <motion.div
                variants={fadeIn("up", index * 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: index * 0.25 }}
                key={index}
                className="rounded-xl p-4 hover:drop-shadow-md transition bg-white border border-gray-300 group hover:-translate-y-2 duration-1000 cursor-pointer flex flex-col items-start hover:bg-blue-50/20"
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="mb-4 w-28 h-28 object-contain"
                />
                <h3 className="text-2xl font-bold">{data.title}</h3>
                <p className="mt-8 text-gray-600 text-sm flex-1">
                  {data.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection>
        <div className="container mx-auto py-16">
          <h1 className="sm:text-5xl text-4xl font-bold text-center">
            Our Services
          </h1>
          <p className="max-w-4xl w-full mx-auto text-center text-gray-600 mt-4">
            We have wide network of offices in all major locations to help you
            with the services we offer.
          </p>

          <motion.div
            variants={fadeIn("right", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-6 mt-8"
          >
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="grid  sm:grid-cols-2 gap-4 py-4"
          >
            {services.slice(3, 5).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      <ParallaxSection>
        <div className="container flex lg:flex-row flex-col items-center gap-6 mx-auto py-16">
          <motion.div
            variants={fadeIn("right", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="lg:w-1/2 w-full"
          >
            <h1 className="text-4xl font-semibold lg:text-start text-center">
              Derivering Satisfaction around the globe
            </h1>
            <p className="my-4 text-gray-600 lg:text-start text-center">
              Delivering satisfaction globally by addressing all aspects of
              logistics and supply chain management with comprehensive,
              end-to-end solutions.
            </p>
            <Button
              label="Call to action"
              onClick={() => navigate(ROUTES.CONTACT)}
            />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="lg:w-1/2 w-full lg:h-[600px] sm:h-[500px] h-[350px]"
          >
            <video
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              autoPlay
              muted
              className="w-full h-full object-cover m-auto rounded-xl"
            />
          </motion.div>
        </div>
      </ParallaxSection>

      <ParallaxSection>
        <div className="container mx-auto py-16">
          <motion.div
            variants={fadeIn("left", 0.25)}
            initial="hidden"
            viewport={{ once: false, amount: 0.7 }}
            whileInView="show"
          >
            <h1 className="sm:text-5xl text-4xl font-bold text-center">
              Why vinsum axpress
            </h1>
            <p className="max-w-4xl w-full mx-auto text-center text-gray-600 mt-4">
              Trusted partner for logistics solutions, offering reliability,
              expertise, and customized, sustainable services tailored to meet
              unique client needs.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("top", 0.25)}
            initial="hidden"
            viewport={{ once: false, amount: 0.7 }}
            whileInView="show"
            className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-6 mt-8"
          >
            {whyVinsumAxpress.map((data, index) => (
              <div
                key={index}
                className="border rounded-tr-[5rem] rounded-bl-[5rem] p-4 hover:drop-shadow-lg cursor-pointer bg-white"
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="mb-4 w-28 h-28 object-contain"
                />
                <h3 className="text-2xl font-bold">{data.title}</h3>
                <p className="mt-8 text-gray-600 text-sm flex-1 px-2">
                  {data.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      <ParallaxSection className="">
        <div
          style={{ backgroundImage: "url(/images/background.jpg)" }}
          className="w-full h-full  bg-cover bg-no-repeat"
        >
          <motion.div
            variants={fadeIn("bottom", 0.25)}
            initial="hidden"
            viewport={{ once: false, amount: 0.7 }}
            whileInView="show"
            className="container mx-auto py-16"
          >
            <h1 className="sm:text-5xl text-4xl font-bold text-center">
              Our trusted clients
            </h1>
            <p className="max-w-4xl w-full mx-auto text-center text-gray-600 mt-4">
              World&#39;s leading automobile industriesdsd
            </p>
          </motion.div>
          <div className="sm:my-10 space-y-16">
            <Swiper
              slidesPerView={8}
              spaceBetween={50}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              fade={true}
              modules={[Autoplay]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                540: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 8,
                  spaceBetween: 50,
                },
              }}
              r
            >
              {clients.map((data, index) => (
                <SwiperSlide key={index}>
                  <img src={data.image} alt="client-image" className="w-40" />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              slidesPerView={8}
              spaceBetween={50}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              fade={true}
              modules={[Autoplay]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                540: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 8,
                  spaceBetween: 50,
                },
              }}
              r
            >
              {clients.reverse().map((data, index) => (
                <SwiperSlide key={index}>
                  <img src={data.image} alt="client-image" className="w-40" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <motion.div
            variants={fadeIn("top", 0.25)}
            initial="hidden"
            viewport={{ once: false, amount: 0.7 }}
            whileInView="show"
            className="flex items-center justify-center py-12"
          >
            <Button
              label="Explore all clients"
              onClick={() => navigator(ROUTES.ABOUT.OUR_CLIENTS)}
            />
          </motion.div>
        </div>
      </ParallaxSection>

      <ParallaxSection>
        <div className="py-16 container">
          <motion.div
            variants={fadeIn("bottom", 0.25)}
            initial="hidden"
            viewport={{ once: false, amount: 0.7 }}
            whileInView="show"
          >
            <h1 className="sm:text-5xl text-4xl font-bold text-center">
              What makes us special?
            </h1>
            <p className="max-w-4xl w-full mx-auto text-center text-gray-600 mt-4">
              Almost 2000+ clients served till now with a customer base of 1000+
              satisfied customers.
            </p>
          </motion.div>

          <div className="flex lg:flex-row flex-col items-center gap-6 py-10">
            <motion.div
              variants={fadeIn("right", 0.25)}
              initial="hidden"
              viewport={{ once: false, amount: 0.7 }}
              whileInView="show"
              className="lg:w-1/2 w-full"
            >
              <h1 className="text-4xl font-semibold lg:text-start text-center">
                Get updates track your docked
              </h1>
              <div className="w-full flex items-center my-6 gap-4">
                <div className="flex-1">
                  <Input
                    id="dockedtNumber"
                    placeholder="Enter docket number"
                    value={docketNumber}
                    onChange={setDocketNumber}
                    required={true}
                  />
                </div>
                <Button label="Check now" onClick={handleSubmitDocketNumber} />
              </div>
              <img
                src="/images/what-makes-us-special.svg"
                alt="special"
                className="mx-auto w-full h-full"
              />
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.25)}
              initial="hidden"
              viewport={{ once: false, amount: 0.7 }}
              whileInView="show"
              className="lg:w-1/2 w-full lg:h-[600px] sm:h-[500px] h-[350px] border rounded-xl flex items-center justify-center border-gray-300 shadow bg-white"
            >
              <h1 className="text-xl font-bold">Map</h1>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection className="bg-gradient-to-t relative to-primary/20 from-white px-4">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
         <motion.div
              variants={fadeIn("top", 0.25)}
              initial="hidden"
              viewport={{ once: false, amount: 0.7 }}
              whileInView="show">
                <Statistics />
              </motion.div>
        </div>
      </ParallaxSection>
    </>
  );
};

export default Home;
