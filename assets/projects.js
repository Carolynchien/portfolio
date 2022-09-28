import ShoppngSite from './shoppingsite/ShoppingSite.png'
import search from './shoppingsite/Search.png'
import catagory from './shoppingsite/catagory.png'
import cart from './shoppingsite/cart.png'
import ThisSite from './thissite/thisSite.png'
import booking from './thissite/booking.png'
import comment from './thissite/comment.png'
import reservation from './thissite/Reservation.png'
import LetsChat from './LetsChat/LetsChat.png'
import post from './thissite/post.png'
import RandomDiceGame from '../public/RandomDiceGame.mp4'
import game from '../assets/RandomDiceGame/game.png'
import randomDice from '../assets/RandomDiceGame/randomDice.png'
import dice from '../assets/RandomDiceGame/dice.png'
import chat from './LetsChat/chat.png'
import swipeboard from './LetsChat/swipeboard.png'
const projects = [
  {
    id: 0,
    name: 'LetsChat',
    description: 'A full-stake mock dating app',
    fullDescription:
      'A dating app where date seekers to meet site suggested people, match and chat with them in real time',
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
    github: 'https://github.com/Carolynchien/LetsChat',
    imageCollection: [LetsChat, swipeboard, chat]
  },
  {
    id: 1,
    name: 'ThisSite ',
    description: 'A full-stack short-term vacation booking website',
    fullDescription:
      'A cozy rentals website for vacation statys, where travelers can rent their properties out and book properties listed from locals',
    image: ThisSite,

    skills: ['Javascript', 'ReactJs', 'CSS', 'PostgreSQL'],
    deployLink: '',
    github: 'https://github.com/apd5392/ThisSite-FrontEnd-',
    imageCollection: [ThisSite, booking, comment, reservation, post]
  },
  {
    id: 2,
    name: 'ShoppngSite ',
    description: 'A e-commerce website',
    fullDescription:
      'An e-commerce website where users can view clothing products and add to the shopping cart.',
    image: ShoppngSite,
    skills: ['Javascript', 'ReactJs', 'CSS', 'MongoDB'],
    deployLink: 'https://arcane-fjord-09085.herokuapp.com/',
    github: 'https://github.com/Carolynchien/Project_ShoppingSite',
    imageCollection: [ShoppngSite, catagory, search, cart]
  },
  {
    id: 3,
    name: 'RandomDiceGame',
    description: 'A trivia adventaure game inspired by Monolpoy',
    fullDescription:
      'Players must answer questions correctly in order to advance on the board, if the answer is incorrect, player must move back to the start.....',
    image: '',
    video: RandomDiceGame,
    skills: ['Javascript', 'HTML', 'CSS'],
    deployLink: 'https://overrated11-paper.surge.sh',
    github: 'https://github.com/Carolynchien/Project-Random-Dice-Game',
    imageCollection: [randomDice, game, dice]
  }
]

export default projects
