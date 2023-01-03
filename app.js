const api_url = "https://api.waifu.im/";
const btn = document.getElementById("button");
const img = document.getElementById("image");

function hideLoader(){
    document.getElementById("centering").style.display = 'none';
}

btn.addEventListener('click', () => {
    let link = document.getElementById("versatile").value;
    try{
        fetch(api_url + "search/?included_tags=" + link).then(res => res.json()).then(result => {
            console.log(result);
            hideLoader()
            img.src = result.images[0].url
        })
    }
    catch(err){
        console.log(err);
    }

})