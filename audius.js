

  const second = async () => {

    const response = await fetch('https://dn-usa.audius.metadata.fyi/v1/playlists/na0k1/tracks? app_name=com.impacrecords.radio')
    const data = await response.json()
    const items = data.data
    console.log(data);
    const table = document.querySelector('tbody');
    var i = 1
  
    items.forEach(items =>  {
      
      const row = document.createElement('tr');
      table.appendChild(row);
      
      row.innerHTML = 
      `
      <td>${items.valueOf.length = i++}</td>
      <td class="coverImage" onclick="togglePlay('https://discoveryprovider.audius.co/v1/tracks/${items.id}/stream?app_name=MGDS17');"><img src="${items.artwork["150x150"]}" alt=""></td>
      <td class="title" style="text-align:left;" onclick="togglePlay('https://discoveryprovider.audius.co/v1/tracks/${items.id}/stream?app_name=MGDS17');">${items.title}</td>
      <td class="more"><a href="#"><img src="./Assets/Icons/iconmonstr-favorite-4-32.png" alt=""></a></td>
      
      `;


  });
}

  second();