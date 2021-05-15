import { v4 as uuidv4 } from 'uuid';

const fakeData = [{
  id: uuidv4(),
  name: 'Google',
  image: 'https://1.bp.blogspot.com/-gJSIqMr9Kjg/YJ1QkUtNpdI/AAAAAAAABhY/DsMXDOk2Ko0-mSjYtCocrzjpuHF40VcuQCLcBGAsYHQ/s0/google.png',
  url: 'http://www.yahoo.com',
  rating: 0,
}, {
  id: uuidv4(),
  name: 'Facebook',
  image: 'https://1.bp.blogspot.com/-x8kdGWF_8vU/YJ1R4cXB3_I/AAAAAAAABh8/VsBS4nonokEn-ZH1f40lBq9DXs7BoakVgCLcBGAsYHQ/s0/facebook.png',
  url: 'https://www.facebook.com/',
  rating: 0,
}, {
  id: uuidv4(),
  name: 'Apple',
  image: 'https://1.bp.blogspot.com/-dIfJwYxZN24/YJ1QkQCu55I/AAAAAAAABhc/1o7DiMlmbHY-IDbGCvMshRhhUnxDSuquACLcBGAsYHQ/s0/apple.png',
  url: 'https://www.apple.com/',
  rating: 0,
}, {
  id: uuidv4(),
  name: 'Amazon',
  image: 'https://1.bp.blogspot.com/-PZqjsb-pGUY/YJ1QkaDoLGI/AAAAAAAABhg/A0ZuINLrOKcvKR78imbDH4BImqCJvHEIACLcBGAsYHQ/s0/amazon.png',
  url: 'https://www.amazon.com/',
  rating: 0,
}, {
  id: uuidv4(),
  name: 'Microsoft',
  image: 'https://1.bp.blogspot.com/-KLH7deH77Ek/YJ1QlTtPKzI/AAAAAAAABhk/VOHqbQhHUYIgDC_AbUsLE4HR_9EVvbuwgCLcBGAsYHQ/s0/microsoft.png',
  url: 'https://www.microsoft.com/',
  rating: 0,
}];

export default fakeData;