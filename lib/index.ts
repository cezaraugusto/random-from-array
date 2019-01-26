/**
 * Given an array, return a random value from it
 * @returns {any} - a single random value from the input's array
*/
export default (arr: Array<any>): any => arr[Math.floor((Math.random() * arr.length))]
