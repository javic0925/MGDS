const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius6.prod-us-west-2.staked.cloud/v1/playlists/search?query=Reggaeton Top 2021 & New&app_name=MGDS17',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

  const second = async () => {

    const response = await fetch('https://dn-usa.audius.metadata.fyi/v1/playlists/na0k1/tracks?app_name=MGDS17')
    const data = await response.json()
    const items = data.data
    const table = document.querySelector('tbody');
    var i = 1
  
    items.forEach(items =>  {
      
      const row = document.createElement('tr');
      table.appendChild(row);
      
      row.innerHTML = 
      `
      <td id="number">${items.valueOf.length = i++}</td>
      <td class="coverImage" onclick="togglePlay('https://discoveryprovider.audius.co/v1/tracks/${items.id}/stream?app_name=MGDS17');"><img src="${items.artwork["150x150"]}" alt=""></td>
      <td class="title" style="text-align:left;" onclick="togglePlay('https://discoveryprovider.audius.co/v1/tracks/${items.id}/stream?app_name=MGDS17');">${items.title}</td>
      <td id="more"><span id=${"heart-"+ i++}><i class="fas fa-heart"></i></span></td>
      
      `;


  });

  
}

  second();

  // na0k1

