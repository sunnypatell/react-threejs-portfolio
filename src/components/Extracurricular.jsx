import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { styles } from "../styles";
import { extracurricular } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const CertificationCard = ({ title, icon, type, date, points, credential }) => (
  <div className="certification-card bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
    <div className="relative w-full h-[230px]">
      <img
        src={icon}
        alt={title}
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
        <div
          onClick={() => window.open(credential, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src="/link.png"
            alt="link"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
    </div>
    <div className="mt-5">
      <h3 className="text-white font-bold text-[24px]">{title}</h3>
      <p className="mt-2 text-secondary text-[14px]">{type}</p>
    </div>
    <p className="mt-2 text-secondary text-[14px]">{date}</p>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {points.map((point, index) => (
        <li
          key={`certification-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Extracurricular = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          CONTINUOUS LEARNING
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certifications
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following certifications showcase my expertise and continuous learning in various technologies and methodologies.
        </motion.p>
      </div>

      <motion.div 
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-20 flex flex-col items-center"
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {extracurricular.map((certification, index) => (
            <SwiperSlide key={`certification-${index}`}>
              <CertificationCard {...certification} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style jsx global>{`
        .mySwiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 300px;
          height: 400px;
        }
        .swiper-slide img {
          display: block;
          width: 100%;
        }
        .swiper-pagination-bullet {
          background: #915eff;
        }
        .certification-card {
          background-color: rgba(30, 30, 60, 0.8);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transition: all 0.3s ease-in-out;
        }
        .certification-card:hover {
          transform: scale(1.05);
        }
        .black-gradient {
          background: #000000;
          background: -webkit-linear-gradient(to right, #434343, #000000);
          background: linear-gradient(to right, #434343, #000000);
        }
        @media (max-width: 768px) {
          .swiper-slide {
            width: 250px;
            height: 350px;
          }
        }
      `}</style>
    </>
  );
};

export default SectionWrapper(Extracurricular, "extracurricular");