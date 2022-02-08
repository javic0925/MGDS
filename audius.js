const second = async () => {

    const response = await fetch('https://discovery-a.mainnet.audius.radar.tech/v1/playlists/na0k1/tracks?app_name=MGDS17')
    const data = await response.json()
    const items = data.data
    const table = document.querySelector('tbody');
    var i = 0
  
    items.forEach(items =>  {
      
      const row = document.createElement('tr');
      table.appendChild(row);
      
      row.innerHTML = 
      `
      <td id="number">${i = ++i}</td>
      <td class="coverImage" onclick="togglePlay('https://discovery-a.mainnet.audius.radar.tech/v1/tracks/${items.id}/stream?app_name=MGDS17');"><img src="${items.artwork["150x150"]}" alt=""></td>
      <td class="title" style="text-align:left;" onclick="togglePlay('https://discovery-a.mainnet.audius.radar.tech/v1/tracks/${items.id}/stream?app_name=MGDS17');">${items.title}</td>
      <td id="more"><span id=${"heart-"+ i}><i class="fas fa-heart"></i></span></td>
      
      `;


  });

  
}

  second();

  // na0k1

