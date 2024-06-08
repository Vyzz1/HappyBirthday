// src/TimeSinceBirthday.js
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./TimSinceBirthday.css";
import { Swiper, SwiperSlide } from "swiper/react";

const TimeSinceBirthday = ({ birthday }) => {
  const [timeSince, setTimeSince] = useState({});

  useEffect(() => {
    const calculateTimeSinceBirthday = () => {
      const birthDate = new Date(birthday);
      const now = new Date();

      const days = differenceInDays(now, birthDate);
      const hours = differenceInHours(now, birthDate);
      const minutes = differenceInMinutes(now, birthDate);
      const seconds = differenceInSeconds(now, birthDate);
      const months = differenceInMonths(now, birthDate);
      const years = differenceInYears(now, birthDate);
      setTimeSince({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        months: months,
        years: years,
      });
    };

    calculateTimeSinceBirthday();

    const intervalId = setInterval(calculateTimeSinceBirthday, 1000);

    return () => clearInterval(intervalId);
  }, [birthday]);

  return (
    <>
      <Swiper modules={[Autoplay]} slidesPerView={1} autoplay={{ delay: 2000 }}>
        <SwiperSlide className="date">
          {timeSince.years} <span className="sub_date"> years </span>{" "}
        </SwiperSlide>
        <SwiperSlide className="date">
          {timeSince.months} <span className="sub_date"> months </span>{" "}
        </SwiperSlide>
        <SwiperSlide className="date">
          {timeSince.hours} <span className="sub_date"> hours </span>{" "}
        </SwiperSlide>
        <SwiperSlide className="date">
          {timeSince.minutes} <span className="sub_date"> minutes </span>{" "}
        </SwiperSlide>
        <SwiperSlide className="date">
          {timeSince.seconds} <span className="sub_date"> seconds </span>{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TimeSinceBirthday;

TimeSinceBirthday.propTypes = {
  birthday: PropTypes.string.isRequired,
};
