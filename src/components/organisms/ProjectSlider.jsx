import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Projects from '../../data/Projects';
import ProjectCard from '../molecules/ProjectCard';

export default function ProjectSlider() {
  return (
    <div className="project-slider-container w-full">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {Projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
