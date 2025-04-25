import react from '../assets/react-logo.svg';
import tailwind from '../assets/tailwind-logo.svg';
import webflow from '../assets/webflow-logo.svg';
import wordpress from '../assets/wordpress-logo.svg';
import html from '../assets/html-logo.svg';
import css from '../assets/css-logo.svg';
import vite from '../assets/vite-logo.svg';
import mysql from '../assets/mysql-logo.svg';
import js from '../assets/javascript-logo.svg';
import mongodb from '../assets/mongodb-logo.svg';
import laravel from '../assets/laravel-logo.svg';
import python from '../assets/python-logo.svg';
import { link } from 'framer-motion/client';

export const Skills = [
  { name: 'ReactJS', img: react, link: 'https://react.dev/' },
  { name: 'TailwindCSS', img: tailwind, link: 'https://tailwindcss.com/' },
  { name: 'Webflow', img: webflow, link: 'https://webflow.com/' },
  { name: 'WordPress', img: wordpress, extraClass: 'bg-neutral-50 rounded-full', link: 'https://wordpress.org/' },
  { name: 'HTML', img: html, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', img: css, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Vite', img: vite, link: 'https://vitejs.dev/' },
  { name: 'JavaScript', img: js, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'MySQL', img: mysql, link: 'https://www.mysql.com/' },
  { name: 'MongoDB', img: mongodb, link: 'https://www.mongodb.com/' },
  { name: 'Laravel', img: laravel, link: 'https://laravel.com/' },
  { name: 'Python', img: python, link: 'https://www.python.org/' },
];