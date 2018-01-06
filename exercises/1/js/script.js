/**
 * JavaScript
 */

const items = [ ...document.querySelectorAll('[data-time]') ];

const filterFlexbox = items
  .filter((item) => item.textContent.includes('Flexbox'))
  .map((item) => item.dataset.time)
  .map((timeCode) => {
    const parts = timeCode
      .split(':')
      .map((part) => parseFloat(part));
    return (parts[0] * 60) + (parts[1]);
  })
  .reduce((prevTotal, nextItem) =>  prevTotal + nextItem, 0);
console.log(filterFlexbox);