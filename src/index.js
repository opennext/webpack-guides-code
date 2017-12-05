import _ from 'lodash';
import './style.css';
import Icon from  './1.jpg';
import Data from './data.xml'

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello')
  var myImage = new Image()
  myImage.src = Icon
  element.appendChild(myImage)
  console.log(Data)
  return element;
}

document.body.appendChild(component());

// import _ from 'lodash';

// function component() {
//     var element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());