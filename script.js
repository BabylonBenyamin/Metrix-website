let currentMessage = ''

function updateMessage() {
    fetch('https://backend-render-api2-01.onrender.com/last-message')
      .then(response => response.json())
      .then(data => {
        // Access the data returned from the endpoint
        const username = data.username;
        let content = data.content;
        const attachmentUrl = data.attachmentUrl;
        const formattedDate = data.formattedDate;
        const avatarUrl = data.avatarUrl;
 
        // Extract the title from content
        let titleText;
        if (content) {
          // Split content at two newline characters
          const parts = content.split('\n\n');
          if (parts.length > 1) {
            // Assign first part to title and second part to content
            titleText = parts[0];
            content = parts[1];
          }
        }
 
        if (titleText) {
          // Remove <@1085684579194642492> from title
          titleText = titleText.replace(/<@\d+>/g, '');
          titleText = titleText.trim();
        }
 
        if (content) {
          // Remove <@1085684579194642492> from content
          content = content.replace('<@1085684579194642492>', '');
        }
 
        // Check if the current message is different from the previous message
        if (content !== currentMessage) {
          // Update the currentMessage variable
          currentMessage = content;
 
          // Use the data in your front-end code
          const container = document.querySelector('.featured__container');
          const image = container.querySelector('.post__thembail img');
          const title = container.querySelector('.post__title');
          const message = container.querySelector('.post__body');
          const avatar = container.querySelector('.post__author-avater img');
          const sender = container.querySelector('.post__author-info h5');
          const date = container.querySelector('.post__author-info small');

          // single post
          const singlePostTitle = document.querySelector('.singlepost h2');
          const singlePostAvater = document.querySelector('.singlepost .post__author-avater img');
          const singlePostSender = document.querySelector('.singlepost .post__author-info h5');
          const singlePostDate = document.querySelector('.singlepost .post__author-info small');
          const singlePostImage = document.querySelector('.singlepost .singlepost__thumbnail img');
          const singlePostmessage = document.querySelector('.singlepost .container p');
 
          image.src = attachmentUrl;
          singlePostImage.src = attachmentUrl;
          title.textContent = titleText;
          singlePostTitle.textContent = titleText;
          message.textContent = content;
          singlePostmessage.textContent = content;
          avatar.src = avatarUrl;
          singlePostAvater.src = avatarUrl;
          sender.textContent = `Sender: Metrix Admin (${username})`;
          singlePostSender.textContent = `Sender: Metrix Admin (${username})`;
          date.textContent = `${formattedDate}`;
          singlePostDate.textContent = `${formattedDate}`;
        }
      });
  }
 
  // Call updateMessage() every 1 seconds
  setInterval(updateMessage, 30);

  const navItems = document.querySelector(".nav__itens")

  const openNavBtn = document.querySelector("#open__nav-btn")

  const closeNavBtn = document.querySelector("#close__nav-btn")


  //open nav addEventListener
const openNav = () => {
  navItems.style.display = 'flex'
  openNavBtn.style.display = 'none'
  closeNavBtn.style.display = 'inline-block'
}


  openNavBtn.addEventListener('click', openNav)



  //close nav addEventListener

  const closeNav = () => {
    navItems.style.display = 'none'
  openNavBtn.style.display = 'inline-block'
  closeNavBtn.style.display = 'none'
  }
 
  closeNavBtn.addEventListener('click', closeNav)


 
// .featured{
//   display: none;
// }
// .post{
//   display: none;
// }

// .singlepost{
//   display: none;
// }
//  

const featuresSection = document.querySelector('.featured');
const postSection = document.querySelector('.post');
const singlepost = document.querySelector('.singlepost');
const logo = document.querySelector('.nav__logo');
const home = document.querySelector('.home');

featuresSection.addEventListener('click', function() {
  featuresSection.style.display = 'none';
  postSection.style.display = 'none';
  singlepost.style.display = 'flex';
});

logo.addEventListener('click', function() {
  featuresSection.style.display = 'flex';
  postSection.style.display = 'flex';
  singlepost.style.display = 'none';
});

home.addEventListener('click', function() {
  featuresSection.style.display = 'flex';
  postSection.style.display = 'flex';
  singlepost.style.display = 'none';
});
