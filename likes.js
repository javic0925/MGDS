setTimeout(function(){

    

        const hearts = document.querySelectorAll('[id^="heart"]');
    
    
        hearts.forEach( heart => {
            let liked = localStorage.getItem(heart.id);
            // first load
            if ( liked === null ) {
              console.log('nothing in storage yet');
              localStorage.setItem(heart.id, 'false');
            } else {
              console.log('already in storage');
              if (liked === 'true') heart.classList.add('liked');
            }
            heart.addEventListener('click', () => {
              // get up-to-date value
              liked = localStorage.getItem(heart.id);
              if ( liked === 'true' ) {
                // console.log('unliking');
                heart.classList.remove('liked');
                localStorage.setItem(heart.id, 'false');
              } else {
                // console.log('liking');
                heart.classList.add('liked');
                localStorage.setItem(heart.id, 'true');
              }
            });
          });
          console.log(hearts);
        
     


}, 1000);