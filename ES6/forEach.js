// 문제 01: Moving Away from For Loops

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    /* 문제
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
  }*/
      posts.forEach(function(posts) {
          savePost(posts);
      });
}

// 문제 02 : Processing Values
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
    areas.push(image.height * image.width);
});
