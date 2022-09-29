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
  newsBox.innerHTML += `
  
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./news/news1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      <a
                href="https://www.memurlar.net/haber/1042319/uzmanindan-altin-aciklamasi-simdi-alan-kazancli-cikar.html" target="_blank" style="text-decoration: none">
                <h5>Uzmanından 'altın' açıklaması: Şimdi alan kazançlı çıkar - Memurlar</h5></a>
        
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="./news/nws2.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      <a
      href="https://www.haber24.com/emekliye-arka-arkaya-mujdeli-haberler-gelmeye-devam-ediyor-destek-limitleri-yukseldi-10-gun-sure-verildi" target="_blank" style="text-decoration: none">
      <h5>Emekliye Arka Arkaya Müjdeli Haberler Gelmeye Devam Ediyor! Destek Limitleri Yükseldi! 10 Gün Süre Verildi</h5></a>

        
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="./news/news3.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block"> <a
      href="https://www.bloomberght.com/atlanta-fed-baskani-bostic-jeopolitik-belirsizliklere-dikkat-cekti-2316088" target="_blank" style="text-decoration: none">
      <h5>Atlanta Fed Başkanı Bostic “jeopolitik belirsizliklere” dikkat çekti - BLOOMBERG HT - BloombergHT</h5></a>
        
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
