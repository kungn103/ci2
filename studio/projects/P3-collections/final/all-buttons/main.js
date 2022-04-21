window.addEventListener('DOMContentLoaded', () => {
  const channel = 'digital-buttons';

  fetch(`https://api.are.na/v2/channels/${channel}?per=100`, {cache: 'no-store'})
    .then(response => response.json())
    .then(data => {
      renderBlocks(data);
    });
  
});


const renderBlocks = (data) => {
  let blocks = data['contents'];
  blocks.forEach((block, index) => {
    let blockClass = block['class'];
    if (blockClass == 'Image') {
      renderImage(block);
    }
  });
};


const renderImage = (block) => {
  // console.log(block['title']);

  let imageUrl = block['image']['display']['url'];
  let imageBlockTemplate = document.getElementById('image-block');
  let clone = imageBlockTemplate.content.cloneNode(true);

  clone.querySelector('img').src = imageUrl;

  clone.querySelector('li').classList.add(block['title'].trim());

  document.getElementById('contents').appendChild(clone);
};

// document.querySelectorAll('done');
// array.forEach(element => {
//   // add event listener or if statement onclick 
// });

$(function(){

  $("select").on("change",function(){
 
   $('.block').hide();
   $("."+this.value).show();
 
  });
 
 });

var add = document.querySelectorAll('.add');
add.addEventListener('click', function(){
  add.classList.add('.spin');
})