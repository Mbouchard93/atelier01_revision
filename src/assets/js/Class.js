/**
 * @param {string} word
 */

export default class Astring {
    constructor(word) {
        this.word = word
    }
    //Une méthode qui prend un nombre en paramètre et retourne un booléen. Elle doit vérifier si le nombre est égal à la longueur du string.
    /**
     * 
     * @param {number} nB 
     * @returns {boolean}
     */
    isEqual (nB) {
        let nbWord = this.word.length;
       return nB === nbWord;
    }
    //Une méthode qui retourne la moitié du string fourni dans le constructeur.
    /**
     * 
     * @returns {string}
     */
    halfOfString() {
        const middle = this.word.length / 2;
        return this.word.slice(middle)
    }
    // Une méthode qui retourne un booléen. Elle doit vérifier si le dernier caractère du string est un point ".".
    /**
     * 
     * @returns {boolean}
     */
    checkLastChar(){
     return this.word.endsWith('.')
    }
    //Une méthode qui retourne un booléen. Elle doit vérifier si le string ne contient que des caractères "a".
    /**
     * 
     * @returns {boolean}
     */
    checkCharisAllA() {
        for ( let char of this.word.toLowerCase()){
            if (char !== 'a') {
                return false
            }
        }
        return true;
    }
    //Une méthode qui retourne un booléen. Elle doit vérifier que le string ne contient aucun chiffre.
    /**
     * 
     * @returns {boolean}
     */
    hasNoNumbers() {
        const words = this.word.split('');
        const Nb = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        for (let word of words){
            if (Nb.includes(word)){
                return true
            }
        }
        return false;
    }
    //Une méthode qui retourne un booléen.  Elle doit vérifier si le caractère du milieu du string n’est pas un point ".".
    /**
     * 
     * @returns {boolean}
     */
    checkMidChar() {
        const middle = Math.floor(this.word.length / 2);
        console.log(middle)
        const word = this.word.split('')
        if (word[middle] === '.') {
            return true
        }else {
            return false
        }
    }
}

