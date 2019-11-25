import xoticProj from 'images/xoticProj.png';
import windowProj from 'images/windowProj.png';
import pongPortfolio from 'images/pongPortfolio.png';
import githubFinder from 'images/githubFinder.png';
import portfolioProj from 'images/portfolioProj.png';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'Xotic Pop',
    description:
      'This project initially began as an introduction into Shopify liquid code and later was spun into a niche business, Xotic Pop. Xotic Pop features exclusive sodas and snacks from around the world. Suppling hard to find favorites to sweet tooths around the US!',
    skills: ['Shopify', 'Liquid', 'HTML', 'CSS3', 'Sass', 'JavaScript'],
    image: xoticProj,
    links: {
      github: 'https://github.com/',
      preview: 'https://xoticpop.com/',
    },
  },
  {
    title: 'GitHub Finder',
    description:
      'GitHub Finder is a responsive app that allows users to search GitHub usernames and returns GitHub accounts displaying the latest repositories and other information such as stars, followers, and membership details. This is made possible by utilizing GitHub API and React.Js as the server-side framework.',
    skills: ['HTML5', 'Sass', 'ES6', 'ReactJS'],
    image: githubFinder,
    links: {
      github: 'https://github.com/stepanianpat/github-finder',
      preview: 'https://github-finder-ed906.firebaseapp.com/',
    },
  },
  {
    title: 'Pong',
    description:
      'Pong is a classic game that has been around for many years. This version of pong is built with JavaScript. It has two-player functionality enabling users to compete against each other! While JavaScript handles the mechanics the rest of the site is simply designed with HTML and CSS for the old school pong feel.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: pongPortfolio,
    links: {
      github: 'https://github.com/stepanianpat/Pong',
      preview: 'https://portfolio-pong.firebaseapp.com',
    },
  },
  {
    title: 'Portfolio',
    description:
      'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    image: portfolioProj,
    links: {
      github: 'https://github.com/stepanianpat/Portfolio-2019',
      preview: 'https://portfolio-patricks.firebaseapp.com/',
    },
  },
  {
    title: 'First Street Window & Door',
    description:
      'One of my first projects I began as I started my programming journey. A site for a Window and Door business showcasing the various services and offers the company provides for customers. As well as a contact section to generate leads.',
    skills: ['HTML', 'CSS3', 'JavaScript'],
    image: windowProj,
    links: {
      github: 'https://github.com/stepanianpat/First-Street',
      preview: 'https://google.com/',
    },
  },
];
