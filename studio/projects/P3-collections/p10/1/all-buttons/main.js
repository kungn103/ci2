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
  let hue = 0;
  // let buttons = document.querySelectorAll('.buttons');
  blocks.forEach((block, index) => {
  // let imageUrl = block['image']['display']['url'];
  // buttons[i].querySelector('img').src = imageUrl;
    let blockClass = block['class'];
    if (blockClass == 'Image') {
      renderImage(block, hue);
    }

    hue = hue + 25;
  });
};

const renderImage = (block, hue) => {
  console.log(block['title']);

  let imageUrl = block['image']['display']['url'];
  let imageBlockTemplate = document.getElementById('image-block');
  let clone = imageBlockTemplate.content.cloneNode(true);

  clone.querySelector('img').src = imageUrl;
  clone.querySelector('p').innerText = block['title']; 

  // let randomHue = Math.random()*255;
  // console.log(randomHue);
  let randomColor = 'hsl(' + hue + ' ,100%, 50%)';
  clone.querySelector('li').style.setProperty('--color', randomColor);
  let randomWidth = Math.random()*50;
  let randomWidthValue = randomWidth + '%';
  clone.querySelector('li').style.setProperty('--width', randomWidthValue);

  if (block['title'] == 'green'){
    clone.querySelector('li').style.setProperty('--color', 'green');
  }

  document.getElementById('contents').appendChild(clone);
};


$(function(){

  $("select").on("change",function(){
 
   $("img").hide();
   $("."+this.value).show();
 
  });
 
 });