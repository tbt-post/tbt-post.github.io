var copyBtns = document.querySelectorAll('.language-shell');
// console.log("BB: ", copyBtns);
for (var i = 0; i < copyBtns.length; i++) {
  copyBtns[i].addEventListener('click', selectionHandler, false);
}
function selectionHandler(event) {

  // var lLink = document.querySelector('.language-shell');
  var range = document.createRange();
  range.selectNode(event.target);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {

    var successful = document.execCommand('copy');
    var msg = successful
      ? 'successful'
      : 'unsuccessful';
    console.log('Copy command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  window.getSelection().removeAllRanges();

};
