const getNews = () => {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=a43885209183415b94694317a7db3d8f"
  )
    .then((res) => {
      return res.json();
    })
    .then((news) => {
      newsApp(news);
      console.log(news);
    });
};
getNews();

const newsApp = (news) => {
  const newsBox = document.querySelector(".news");
  const { articles } = news;
  const news1Image = articles[4].urlToImage;
  const news1Title = articles[4].title;
  const news2Image = articles[2].urlToImage;
  const news2Title = articles[2].title;
  const news3Image = articles[8].urlToImage;
  const news3Title = articles[8].title;

  newsBox.innerHTML += `
  
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${news1Image}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${news1Title}</h5>
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="${news2Image}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${news2Title}</h5>
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="${news3Image}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${news3Title}</h5>
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  
  `;
};

const getData = () => {
  fetch("https://api.exchangerate.host/latest?base=TRY")
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      dovizKuru(result);
      dovizCeviri(result);
      console.log(result);
    });
};

getData();

const dovizKuru = (result) => {
  let trl = document.querySelector(".try");
  let usd = document.querySelector(".usd");
  let euro = document.querySelector(".euro");
  let gbp = document.querySelector(".gbp");

  const { rates } = result;

  usd.innerText = `Dolar : ${(rates.TRY / rates.USD).toFixed(2)}TL`;
  euro.innerText = `Euro : ${(rates.TRY / rates.EUR).toFixed(2)}TL`;
  gbp.innerText = `Sterlin : ${(rates.TRY / rates.GBP).toFixed(2)}TL`;
};

const dovizCeviri = (result) => {
  const { rates } = result;
  const buttons = document.querySelector(".buttons");
  const clear = document.querySelector(".clear");
  buttons.addEventListener("click", (e) => {
    const firstRate = document.querySelector(".inputFirstText");
    const secondRate = document.querySelector(".inputSecond");
    const selectFirst = document.querySelector(".selectMenu1").value;
    const selectSecond = document.querySelector(".selectMenu2").value;

    console.log(selectFirst);
    console.log(rates[selectFirst]);
    console.log(rates[selectSecond]);

    if ((e.target.className = "calculate")) {
      sonuc = (
        (firstRate.value * rates[selectSecond]) /
        rates[selectFirst]
      ).toFixed(3);

      secondRate.innerHTML = `  ${sonuc} `;
    }
    clear.addEventListener("click", () => {
      firstRate.value = "";
      secondRate.innerText = " ";
    });
  });
};

dovizCeviri();
dovizKuru();
newsApp();
