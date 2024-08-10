import { Button, Navbar, ParallaxSection, SectionWrapper } from "../components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { bannerData, services, servicesTypes } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../variants";

const ServiceCard = ({ service }) => {
  return (
    <div className="rounded-xl p-4 hover:drop-shadow-md transition bg-white border border-gray-300">
      <h3 className="text-2xl font-bold">{service.title}</h3>
      <p className="mt-8 text-gray-600 text-sm">{service.description}</p>
    </div>
  );
};

const MultiModalTransportation = () => {
  return (
    <>
      <ParallaxSection className="relative screen-section">
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

      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="h-screen flex items-center justify-center flex-col"
      >
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col items-center justify-center container"
        >
          <h1 className="text-5xl font-semibold text-center">
            How Meetmind Works
          </h1>
          <p className="text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae
            quam error!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-8 container">
          {servicesTypes.map((service, index) => (
            <motion.div
              variants={fadeIn("up", "spring", index * 0.25, 0.75)}
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: index * 0.25 }}
              className="rounded-xl p-4 hover:drop-shadow-md transition bg-white border border-gray-300"
            >
              <h3 className="text-3xl font-bold">{service.title}</h3>
              <p className="mt-8 text-gray-600">{service.description}</p>
              <ul className="mt-4 text-gray-600 space-y-2 list-disc list-inside">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="bg-gradient-to-b from-blue-50 to-purple-50 h-screen"
      >
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col items-center justify-center container py-10"
        >
          <h1 className="text-5xl font-semibold text-center">Our Services</h1>
          <p className="text-center mt-2">
            WE HAVE WIDE NETWORK OF OFFICES IN ALL MAJOR LOCATIONS TO HELP YOU
            WITH THE SERVICES WE OFFER
          </p>
        </motion.div>

        <div className="py-10 container">
          <motion.div
            variants={fadeIn("left", "spring", 0.25, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-6"
          >
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn("right", "spring", 0.25, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="grid  sm:grid-cols-2 gap-4"
          >
            {services.slice(3, 5).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-28 h-screen"
      >
        <div className="container md:flex-row flex-col flex items-center gap-6 h-full">
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl font-semibold">
              Derivering Satisfaction around the globe
            </h1>
            <p className="my-4 text-gray-600">
              Delivering satisfaction globally by addressing all aspects of
              logistics and supply chain management with comprehensive,
              end-to-end solutions.
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="h-[550px] rounded-3xl border max-w-md w-full mx-auto bg-gradient-to-tr from-primary/60 to-purple-300 relative">
              <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="flex flex-col h-full"
              >
                <motion.div
                  variants={fadeIn("top", "spring", 0.25, 0.75)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className="flex flex-col items-center justify-center gap-2 py-8"
                >
                  <h4 className="text-center text-2xl font-semibold max-w-sm w-full"> Derivering Satisfaction around the globe</h4>
                  <p className="text-center text-white font-medium">Catering end to end needs of logistics and supply chain.</p>
                </motion.div>

                <motion.div
                  variants={fadeIn("top", "spring", 0.25, 0.75)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className="bg-white h-[90%] w-[90%] mx-auto rounded-t-xl"
                >
                  <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay muted className="w-full h-full object-cover m-auto rounded-t-xl"></video>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* <Hero /> */}
      {/* Clients */}
      {/* <section className="py-14 px-4">
        <div className="max-w-6xl w-full mx-auto">
        <p className="text-center mb-14 text-lg">Trusted By 100+ Companies Worldwide.</p>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            fade={true}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              568: {
                slidesPerView: 3,
              },
              950: {
                slidesPerView: 4,
              },
            }}
          >
            {clients?.map((client, index) => (
              <SwiperSlide key={index}>
                <img
                  src={client.image}
                  alt="client-image"
                  className="h-16 object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
    </>
  );
};

export default MultiModalTransportation;
