// import { elements } from './base';
// import * as utils from './utils';
export function addMarkup(arr) {
  const yearContainer = document.querySelector('.footer__year');
  yearContainer.textContent = arr.year;

  //   const container = utils.createNewElement('div', 'home', elements.root);
  //   const firstHalf = utils.createNewElement(
  //     'section',
  //     'home__half main about contact',
  //     container
  //   );
  //   const secondHalf = utils.createNewElement(
  //     'section',
  //     'home__half map',
  //     container
  //   );
  //   const containers = [firstHalf, secondHalf];
  //   return containers;
}
