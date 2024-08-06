import { Hero } from "../components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { clients } from "../constants";

const Home = () => {
  return (
    <>
      <Hero />
      {/* Clients */}
      <section className="py-14 px-4">
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
      </section>
    </>
  );
};

export default Home;
