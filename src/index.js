import _ from 'lodash';
import './style.css'
import MyImage from './image.jpg'

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = MyImage;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
