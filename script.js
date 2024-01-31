const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist')
const resultPlayslist = document.getElementById('result-playlists')

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlayslist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImg = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImg.src = element.urlImg;
    });

    resultsArtist.classList.remove('hidden');
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === '') {
        resultPlayslist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return
    }
    requestApi(searchTerm);
})