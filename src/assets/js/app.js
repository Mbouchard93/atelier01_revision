import Astring from './Class.js';
import Product from './Product.js';
import products from './products.js';

/**
 * @type {Astring}
 */
const word = new Astring('All.o44')

console.log(word.isEqual(6)); 

console.log(word.halfOfString())

console.log(word.checkLastChar())

console.log(word.checkCharisAllA());

console.log(word.hasNoNumbers())

console.log(word.checkMidChar())

/**
 * @type {HTMLElement}
 */
const container = document.querySelector('.container')

/**
 * @param {Product} product
 */
products.forEach(product => {
    container.appendChild(product.toHtml()) 
});

