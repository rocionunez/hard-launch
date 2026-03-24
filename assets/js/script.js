fetch("./assets/data/episodes.json")

.then(function(response){
    return response.json()
})
.then(function(episodes){
    let placeholder = document.querySelector('#data-output');
    let out = "";
    // for each, cuando sea index = length - 1 agregar el span
    for (let episode of (episodes).reverse()){
        if(episode.id == episodes.length){
            out +=  `
            <div class="card col-10 col-sm-10 col-md-8 col-lg-3 col-xl-3 m-5 border-light autoshow image-reveal">
                <div class="card-body">
                <!-- card title -->
                <h5 class="card-title text-center text-light fs-4 mb-4">${episode.title}
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-warning">NEW
                </h5>
                <!-- episode thumbnail -->
                <img src="${episode.thumbnail}" class="card-img-top" alt="">
                <!-- episode description -->
                <p class="card-text text-justify text-light my-2 description fs-5 text-center">${episode.description}</p>
                </div>
                <!-- links to watch/listen -->
                <div class="card-footer">
                    <div class="btn-group" role="group">
                    <a href="${episode.youtube}" class="btn btn-outline-light" target="_blank">Watch
                    on Youtube</a>
                    <a href="${episode.spotify}"
                    class="btn btn-outline-light" target="_blank">Listen on Spotify</a>
                    <a href="${episode.apple}"
                    class="btn btn-outline-light" target="_blank">Listen on Apple Music</a>
                    </div>
                </div>
            </div>
            `
        }else{

            out +=  `
            <div class="card col-10 col-sm-10 col-md-8 col-lg-3 col-xl-3 m-5 border-light autoshow image-reveal">
                <div class="card-body">
                <!-- card title -->
                <h5 class="card-title text-center text-light fs-4 mb-4">${episode.title}
                </h5>
                <!-- episode thumbnail -->
                <img src="${episode.thumbnail}" class="card-img-top" alt="">
                <!-- episode description -->
                <p class="card-text text-justify text-light my-2 description fs-5 text-center">${episode.description}</p>
                </div>
                <!-- links to watch/listen -->
                <div class="card-footer">
                    <div class="btn-group" role="group">
                    <a href="${episode.youtube}" class="btn btn-outline-light" target="_blank">Watch
                    on Youtube</a>
                    <a href="${episode.spotify}"
                    class="btn btn-outline-light" target="_blank">Listen on Spotify</a>
                    <a href="${episode.apple}"
                    class="btn btn-outline-light" target="_blank">Listen on Apple Music</a>
                    </div>
                </div>
            </div>
            `
        }
    }

    placeholder.innerHTML = out ;
})