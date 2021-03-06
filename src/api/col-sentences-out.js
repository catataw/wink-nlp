//     wink-nlp
//
//     Copyright (C) GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp”.
//
//     Permission is hereby granted, free of charge, to any
//     person obtaining a copy of this software and
//     associated documentation files (the "Software"), to
//     deal in the Software without restriction, including
//     without limitation the rights to use, copy, modify,
//     merge, publish, distribute, sublicense, and/or sell
//     copies of the Software, and to permit persons to
//     whom the Software is furnished to do so, subject to
//     the following conditions:
//
//     The above copyright notice and this permission notice
//     shall be included in all copies or substantial
//     portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
//     ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
//     TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
//     PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
//     DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
//     CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
//     CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

var itmSentenceOut = require( './itm-sentence-out.js' );

// ## colSentencesOut
/**
 * Out for collection of sentences. Note: the out always returns a Javascript
 * data type or data structure.
 * @param  {object}   rdd          Raw Document Data-structure.
 * @param  {function} itsf         Desired `its` mapper.
 * @param  {object}   wordVectors  The word vectors.
 * @return {*}                     Mapped sentences.
 * @private
 */
var colSentencesOut = function ( rdd, itsf, wordVectors ) {
  var sents = [];
  for ( let i = 0; i < rdd.sentences.length; i += 1 ) {
    sents.push( itmSentenceOut( i, rdd, itsf, wordVectors ) );
  }
  return sents;
}; // colSentencesOut()

module.exports = colSentencesOut;
