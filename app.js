
var generalBtn=document.getElementById("general");
const businessBtn=document.getElementById("business");
const sportsBtn=document.getElementById("sports");
const techBtn=document.getElementById("tech");
const entertainmentBtn=document.getElementById("entertainment");
const searchBtn=document.getElementById("searchBtn");

const newsQuery=document.getElementById("newsQuery");
const newsType=document.getElementById("newsType");
const newsDetails=document.getElementById("newsDetails");



const API_key="9e9b7d1c2042476586e5d3584b6e7cab";
const headlines_News="https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const general_News="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const business_News="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const sports_News="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const tech_News="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const entertainment_News="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const search_News= "https://newsapi.org/v2/everything?q="


var newsDataArr=[];

window.onload=function(){
    newsType.innerHTML="<h3>HEADLINES</h3>";
    fetchHeadlines();
};

generalBtn.addEventListener("click", function(){
    newsType.innerHTML="<h3>GENERAL</h3>";
    fetchGeneralNews();
});
businessBtn.addEventListener("click", function(){
    newsType.innerHTML="<h3>BUSINESS</h3>";
    fetchBusinessNews();
});
sportsBtn.addEventListener("click", function(){
    newsType.innerHTML="<h3>SPORTS</h3>";
    fetchSportsNews();
});
techBtn.addEventListener("click", function(){
    newsType.innerHTML="<h3>TECHNOLOGY</h3>";
    fetchTechNews();
});
entertainmentBtn.addEventListener("click", function(){
    newsType.innerHTML="<h3>ENTERTAINMENT</h3>";
    fetchEntertainmentNews();
});
searchBtn.addEventListener("click", function(){
    newsType.innerHTML="<h3>SEARCH: "+newsQuery.value.toUpperCase()+"</h3>"
    fetchQueryNews();
});

const fetchHeadlines = async ()=>{
    const responce = await fetch(headlines_News+API_key);
    newsDataArr=[];
    if(responce.status >= 200 && responce.status<300){
        const myJson=await responce.json();
        newsDataArr=myJson.articles;
    }else{
        console.log(responce.status, responce.statusText);
        return;
    }
    displayNews();
}

const fetchGeneralNews= async ()=>{
    const responce =  await fetch(general_News + API_key);
    newsDataArr=[];
    if(responce.status >= 200 && responce.status< 300){
        const myJson = await responce.json();
        newsDataArr = myJson.articles;
    }else{
        console.log(responce.status, responce.statusText);
        return;
    }
    console.log(newsDataArr);
    displayNews();
}
const fetchBusinessNews= async ()=>{
    const responce =  await fetch(business_News + API_key);
    newsDataArr=[];
    if(responce.status >= 200 && responce.status< 300){
        const myJson = await responce.json();
        newsDataArr = myJson.articles;
    }else{
        console.log(responce.status, responce.statusText);
    }
    displayNews();
}
const fetchSportsNews= async ()=>{
    const responce =  await fetch(sports_News + API_key);
    newsDataArr=[];
    if(responce.status >= 200 && responce.status< 300){
        const myJson = await responce.json();
        newsDataArr = myJson.articles;
    }else{
        console.log(responce.status, responce.statusText);
    }
    displayNews();
}
const fetchTechNews= async ()=>{
    const responce =  await fetch(tech_News + API_key);
    newsDataArr=[];
    if(responce.status >= 200 && responce.status< 300){
        const myJson = await responce.json();
        newsDataArr = myJson.articles;
    }else{
        console.log(responce.status, responce.statusText);
    }
    displayNews();
}
const fetchEntertainmentNews= async ()=>{
    const responce =  await fetch(entertainment_News + API_key);
    newsDataArr=[];
    if(responce.status >= 200 && responce.status< 300){
        const myJson = await responce.json();
        newsDataArr = myJson.articles;
    }else{
        console.log(responce.status, responce.statusText);
    }
    displayNews();
}
const fetchQueryNews= async ()=>{
    if(newsQuery.value ==  null)
        return; 
    const responce =  await fetch(search_News +encodeURIComponent(newsQuery.value)+ "&apiKey=" + API_key);
    console.log(responce)
    newsDataArr=[];
    if(responce.status >= 200 && responce.status< 300){
        const myJson = await responce.json();
        newsDataArr = myJson.articles;
    }else{
        console.log(responce.status, responce.statusText);
    }
    displayNews();
}

function displayNews(){
    newsDetails.innerHTML = "";

    // if(newsDataArr.length==0){
    //     newsDetails.innerHTML="<h5>No News Found!!</h5>";
    //     return;
    // }

    newsDataArr.forEach(news=>{
        
        var col=document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card=document.createElement('div');
        card.className="p-2";

        var image=document.createElement("img");
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody=document.createElement('div');

        var newsHeading=document.createElement('h5');
        newsHeading.className="card-title";
        newsHeading.innerHTML=news.title;

        var description= document.createElement("h6");
        description.className="text-muted";
        description.innerHTML=news.description;

        var link=document.createElement('a');
        link.className="btn btn-dark readMore";
        link.setAttribute("target","_blank");
        link.href=news.url;
        link.innerHTML="Read more"; 

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsDetails.append(col);

    });
}