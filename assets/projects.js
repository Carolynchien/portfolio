import ShoppngSite from './ShoppingSite.png'
import ThisSite from './thisSite.png'
import LetsChat from './LetsChat.png'
import RandomDiceGame from '../public/RandomDiceGame.mp4'

const projects = [
  {
    name: 'LetsChat',
    description: 'A full-stake mock dating app',
    image: LetsChat,
    skills: [
      'Java',
      'JavaScript',
      'ReactJs',
      'CSS',
      'Socket.io',
      'PostgreSQL',
      'SpringBoot'
    ],
    deployLink: '',
    github: 'https://github.com/Carolynchien/LetsChat'
  },
  {
    name: 'ThisSite ',
    description: 'A full-stake short-term vacation booking website',
    image: ThisSite,
    skills: ['Javascript', 'ReactJs', 'CSS', 'PostgreSQL'],
    deployLink: '',
    github: 'https://github.com/apd5392/ThisSite-FrontEnd-'
  },
  {
    name: 'ShoppngSite ',
    description: 'A e-commerce website',
    image: ShoppngSite,
    skills: ['Javascript', 'ReactJs', 'CSS', 'MongoDB'],
    deployLink: 'https://arcane-fjord-09085.herokuapp.com/',
    github: 'https://github.com/Carolynchien/Project_ShoppingSite'
  },
  {
    name: 'RandomDiceGame',
    description: 'A trivia adventaure game inspired by Monolpoy',
    image: '',
    video: RandomDiceGame,
    skills: ['Javascript', 'HTML', 'CSS'],
    deployLink: 'https://overrated11-paper.surge.sh',
    github: 'https://github.com/Carolynchien/Project-Random-Dice-Game'
  }
]

export default projects
