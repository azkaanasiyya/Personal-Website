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
  { name: 'ReactJS', img: react, border: true },
  { name: 'TailwindCSS', img: tailwind, border: true },
  { name: 'Webflow', img: webflow, border: true },
  { name: 'WordPress', img: wordpress, extraClass: 'bg-neutral-50 rounded-full', border: true },
  { name: 'HTML', img: html, border: true },
  { name: 'CSS', img: css, border: true },
  { name: 'Vite', img: vite, border: true },
  { name: 'JavaScript', img: js, border: true },
  { name: 'MySQL', img: mysql, border: true },
  { name: 'MongoDB', img: mongodb, border: true },
  { name: 'Laravel', img: laravel, border: true },
  { name: 'Python', img: python, border: true },
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
          <div className="skill-content grid grid-cols-4 justify-between gap-6">
            {skills.map(({ name, img, border, extraClass }, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center rounded-2xl gap-5 p-6 
                ${border ? 'hover:border hover:border-primary-500' : 'hover:bg-neutral-300'}`}
              >
                <img src={img} alt={name} className={`w-12 h-12 ${extraClass || ''}`} />
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
