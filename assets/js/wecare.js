  
// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

var helpers = [{
    title: "Old Man's War fiction",
    author: 'John X',
    tags: ['war']
  }, {
    title: 'Right Ho Jeeves',
    author: 'P.D. Mans',
    tags: ['fiction', 'war']
}]

var options = {
    keys: [{
      name: 'title',
      weight: 0.3
    }, {
      name: 'author',
      weight: 0.7
    }]
  };

// Create the index from the list
const index = Fuse.createIndex(keys, list)
var fuse = new Fuse(helpers, options, index)
  