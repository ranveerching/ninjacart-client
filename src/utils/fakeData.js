import { v4 as uuidv4 } from 'uuid';

import gitLabIcon from '../assets/images/gitlab.png';

const fakeData = [{
  id: uuidv4(),
  name: 'Git Lab',
  image: gitLabIcon,
  url: 'https://about.gitlab.com/',
  upvote: 0,
}];

export default fakeData;