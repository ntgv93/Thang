module.exports = extractColor;

function extractColor(comment) {
  //return 'color';

  if(comment === null || typeof comment !== 'string'){
    return null;
  }

  var commentWithoutEmails = comment.replace(/[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9]+/ig, '');

  // if (commentWithoutEmails.toLowerCase().indexOf('teal') !== -1 ){
  //   return 'teal';
  // }

  if(/teal|blue|turquoise|torquoise/i.test(commentWithoutEmails)){
    return 'teal';
  }  

  if(/red/i.test(commentWithoutEmails)){
    return 'red';
  }  

  if(/black/i.test(commentWithoutEmails)){
    return 'black';
  }

  
  return null;
}
