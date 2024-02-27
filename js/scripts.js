// AudioDB API

function fetchData() {

    let artistName = document.getElementById("searchbar").value.toLowerCase();
    artistName = artistName.replace(/\s/g, "_");
    const requestUrl = `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${artistName}`;
    console.log(requestUrl);

    fetch(requestUrl)
    .then(res => res.json())
    .then(data => {

        let albumList = '';

        data.album.forEach(album => {

            let html = `
              
                <div class="col-3 my-1"><img src="${album.strAlbumThumb}" width="70"/></div>
                <div class="col-9"><p class="text-dark fw-bolder">${album.strAlbum}</p></div>

            `;
          
            albumList += html;
          
          });  

        const accordion = `
            <div class="card border-0">
                <div class="card-header border-0">
                    <h2 class="border-0">
                        <button class="btn text-uppercase text-dark w-100 fw-bold" data-toggle="collapse" data-target="#collapseOne">
                        ${data.album[0].strArtist} 
                        </button>
                    </h2>
                </div>
        
                <div id="collapseOne" class="collapse" data-parent="#accordion">
                    <div class="card-body border-0 bg-light p-0">
                        <div class="row justify-content-center align-items-center">
                            ${albumList} 
                        </div>
                    </div>
                </div>
            </div>
        `;
      
            document.getElementById('accordion').insertAdjacentHTML('beforeend', accordion);
      
          
    })
    .catch(error => console.log(error));

}



