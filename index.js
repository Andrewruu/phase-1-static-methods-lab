class Formatter {
  //add static methods here

  static capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize(word){
    return word.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let words = sentence.split( " " )
    for ( let n = 0; n < words.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize(words[n]))
      } 
      else {
        if ( exceptions.includes(words[n])) {
          result.push(words[n])
        } else {
          result.push(this.capitalize(words[n]))
        }
      }

    }
    return result.join( " " );
  }
}



