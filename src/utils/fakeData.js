import { v4 as uuidv4 } from 'uuid';

import gitLabIcon from '../assets/images/gitlab.png';
import flutterIcon from '../assets/images/flutter.png';
import javascriptIcon from '../assets/images/javascript.png';
import reactNativeIcon from '../assets/images/react-native.png';
import reduxIcon from '../assets/images/redux.png';
import angularIcon from '../assets/images/angular.png';
import antdIcon from '../assets/images/antd.png';

const favouritesSites = [{
  id: uuidv4(),
  name: 'Git Lab',
  image: gitLabIcon,
  url: 'https://about.gitlab.com/',
  upvote: 0,
}, {
  id: uuidv4(),
  name: 'Flutter',
  image: flutterIcon,
  url: 'https://flutter.dev/',
  upvote: 0,
}, {
  id: uuidv4(),
  name: 'Javascript',
  image: javascriptIcon,
  url: 'https://www.javascript.com/',
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
}, {
  id: uuidv4(),
  name: 'Antd',
  image: antdIcon,
  url: 'https://ant.design/',
  upvote: 0,
}];

export default favouritesSites;