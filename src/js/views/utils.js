export function addExtraHtml(el, newHtml) {
	el.insertAdjacentHTML('beforeend', newHtml);
}
export function addToBeginningExtraHtml(el, newHtml) {
	el.insertAdjacentHTML('afterbegin', newHtml);
}
export function addNewClass(el, newClass) {
	el.classList.add(newClass);
}
