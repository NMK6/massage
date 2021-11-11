import * as homeView from './../views/homeView';
import { home } from './../models/Home';
export function renderHome() {
  const containers = homeView.addMarkup(home);
  return containers;
}
