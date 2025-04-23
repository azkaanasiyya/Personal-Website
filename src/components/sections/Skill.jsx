import react from '../../assets/react-logo.svg';
import tailwind from '../../assets/tailwind-logo.svg';
import webflow from '../../assets/webflow-logo.svg';
import wordpress from '../../assets/wordpress-logo.svg';
import html from '../../assets/html-logo.svg';
import css from '../../assets/css-logo.svg';
import vite from '../../assets/vite-logo.svg';
import mysql from '../../assets/mysql-logo.svg';
import js from '../../assets/javascript-logo.svg';
import mongodb from '../../assets/mongodb-logo.svg';
import laravel from '../../assets/laravel-logo.svg';
import python from '../../assets/python-logo.svg';

const skills = [
  { name: 'ReactJS', img: react },
  { name: 'TailwindCSS', img: tailwind },
  { name: 'Webflow', img: webflow },
  { name: 'WordPress', img: wordpress, extraClass: 'bg-neutral-50 rounded-full' },
  { name: 'HTML', img: html },
  { name: 'CSS', img: css },
  { name: 'Vite', img: vite },
  { name: 'JavaScript', img: js },
  { name: 'MySQL', img: mysql },
  { name: 'MongoDB', img: mongodb },
  { name: 'Laravel', img: laravel },
  { name: 'Python', img: python },
];

function Skill() {
  return (
    <div id="skill" className="bg-neutral-500">
      <div className="container mx-auto max-w-[1200px] px-16 py-28">
        <div className="skill-wrapper flex flex-col gap-[72px]">
          <div className="skill-header flex flex-col items-center gap-8">
            <p className="bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-4xl font-bold leading-[57.6px] tracking-wide text-transparent">
              Skills & Technologies
            </p>
          </div>
          <div className="skill-content grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 ">
            {skills.map(({ name, img, extraClass }, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-5 rounded-2xl border 
                           border-transparent p-6 transition-all hover:scale-105 hover:border-primary-500"
              >
                <img src={img} alt={name} className={`h-12 w-12 ${extraClass || ''}`} />
                <p className="font-medium text-white">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
