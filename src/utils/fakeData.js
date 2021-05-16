import { v4 as uuidv4 } from 'uuid';

import tutorialsCapitalIcon from '../assets/images/tutorialscapital.png';
import gitLabIcon from '../assets/images/gitlab.png';
import reactNativeIcon from '../assets/images/react-native.png';
import reduxIcon from '../assets/images/redux.png';
import angularIcon from '../assets/images/angular.png';

const myCreations = [{
  id: uuidv4(),
  name: 'Tutorials Capital',
  image: tutorialsCapitalIcon,
  url: 'https://tutorialscapital.com/',
  upvote: 0,
}];

const favouritesSites = [{
  id: uuidv4(),
  name: 'Git Lab',
  image: gitLabIcon,
  url: 'https://about.gitlab.com/',
  upvote: 0,
}, {
  id: uuidv4(),
  name: 'React Native',
  image: reactNativeIcon,
  url: 'https://reactnative.dev/',
  upvote: 0,
}, {
  id: uuidv4(),
  name: 'Redux',
  image: reduxIcon,
  url: 'https://redux.js.org/',
  upvote: 0,
}, {
  id: uuidv4(),
  name: 'Angular',
  image: angularIcon,
  url: 'https://angular.io/',
  upvote: 0,
}];

export {
  myCreations,
  favouritesSites,
}