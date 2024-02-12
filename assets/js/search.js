export function findElementById(id) {
  // Return the element in the DOM with corresponding `id`
  // Your code here

  const elementById = document.getElementById(`${id}`);
  return elementById;
}

export function findFirstElementOfTag(tag) {
  // Return the first occurence of an element of tag name `tag`
  // Your code here
  const firstElementOfTag = document.querySelector(`${tag}`);
  return firstElementOfTag;
}

export function findFirstElementOfClass(cls) {
  // Return the first occurence of an element of class `cls`
  // Your code here
  const firstElementOfClass = document.querySelector(`.${cls}`);
  return firstElementOfClass;
}

export function findElementsOfTag(tag) {
  // Return an array of elements that have a tag name of `tag`
  // Your code here
  const elementsOfTag = document.getElementsByTagName(`${tag}`);
  return elementsOfTag;
}

export function findElementsOfClass(cls) {
  // Return an array of elements that have are of class `cls`
  // Your code here
  const elementsOfClass = document.getElementsByClassName(`${cls}`);
  return elementsOfClass;
}
