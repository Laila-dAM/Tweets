const tweetsData = [
    { username: 'usuario1', content: 'Primeiro tweet! ðŸŒ¸', timestamp: '10 min atrÃ¡s' },
    { username: 'usuario2', content: 'Adoro a nova plataforma em cores pasteis! ðŸ’™ðŸ’›', timestamp: '15 min atrÃ¡s' },
 ];
 
 
 function renderTweets(tweets) {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = '';
 
 
    tweets.forEach(tweet => {
        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');
        tweetElement.innerHTML = `
            <strong>${tweet.username}</strong> <span>${tweet.timestamp}</span>
            <p>${tweet.content}</p>
            <button class="retweet-btn">Retweet</button>
            <button class="like-btn">Like</button>
        `;
        contentSection.appendChild(tweetElement);
    });
 }
 
 
 renderTweets(tweetsData);
 
  document.getElementById('home-tab').addEventListener('click', function() {
    renderTweets(tweetsData);
 });
 
 
 document.getElementById('explore-tab').addEventListener('click', function() {
    const exploreContent = 'ConteÃºdo da aba Explorar';
    document.getElementById('content').innerHTML = exploreContent;
 });
 
 
 function handleLike(tweetIndex) {
    console.log(`Liked tweet ${tweetIndex + 1}`);
 }
 
 document.querySelectorAll('.like-btn').forEach((likeBtn, index) => {
    likeBtn.addEventListener('click', () => handleLike(index));
 });
 
 
 document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const commentInput = document.getElementById('comment');
    const comment = commentInput.value;
 
     console.log(`Comment: ${comment}`);
   
    commentInput.value = '';
 });
 