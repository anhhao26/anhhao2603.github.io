document.addEventListener("DOMContentLoaded", function () {
    const logoContainer = document.getElementById("riotgame-logo-container");
    const popupOverlay = document.getElementById("riotgame-popup-overlay");
    const popupCloseOverlay = document.getElementById("riotgame-popup-close");
  
    const searchContainer = document.getElementById("riotgame-search-container");
    const searchIcon = document.getElementById("riotgame-search-icon");
    const esports = document.getElementById("riotgame-esports");
    const universe = document.getElementById("riotgame-nav-universe");
    const moreMenu = document.getElementById("riotgame-more-menu");
  
    const playFreeButton = document.querySelector(".riotgame-play-free-button");
    const videoLogo = document.querySelector(".riotgame-video-logo");
    const popupPlay = document.getElementById("riotgame-popup-play");
    const closePopupPlay = document.getElementById("riotgame-close-play-popup");
  
    const mobileExtraButton = document.getElementById("mobile-extra-button");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
  
    if (moreMenu) {
      moreMenu.classList.remove("active");
    }
  
    if (logoContainer) {
      logoContainer.addEventListener("click", function (event) {
        event.stopPropagation();
        if (window.innerWidth <= 767) {
          const mobilePanel1 = document.querySelector(".mobile-menu-panel-1");
          if (mobilePanel1) {
            mobilePanel1.classList.toggle("active");
          }
        } else {
          if (popupOverlay) {
            popupOverlay.style.display = "flex";
          }
        }
      });
    }
  
    if (popupCloseOverlay && popupOverlay) {
      popupCloseOverlay.addEventListener("click", function () {
        popupOverlay.style.display = "none";
      });
    }
    window.addEventListener("click", function (event) {
      if (popupOverlay && event.target === popupOverlay) {
        popupOverlay.style.display = "none";
      }
    });
  
    if (searchIcon && searchContainer) {
      searchIcon.addEventListener("click", function () {
        searchContainer.classList.toggle("active");
        if (esports) esports.classList.toggle("riotgame-hidden");
        if (universe) universe.classList.toggle("riotgame-hidden");
        if (moreMenu) {
          if (searchContainer.classList.contains("active")) {
            moreMenu.classList.add("active");
          } else {
            moreMenu.classList.remove("active");
          }
        }
      });
    }
  
    if (playFreeButton && videoLogo && popupPlay) {
      playFreeButton.addEventListener("click", function () {
        playFreeButton.classList.add("riotgame-hidden");
        videoLogo.classList.add("riotgame-hidden");
        popupPlay.style.display = "block";
      });
      if (closePopupPlay) {
        closePopupPlay.addEventListener("click", function () {
          popupPlay.style.display = "none";
          playFreeButton.classList.remove("riotgame-hidden");
          videoLogo.classList.remove("riotgame-hidden");
        });
      }
    }
  
    if (mobileExtraButton) {
      mobileExtraButton.addEventListener("click", function () {
        document.body.classList.add("menu-open");
      });
    }
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
      });
    }
  
    const links = {
      league: document.getElementById("riotgame-league"),
      valorant: document.getElementById("riotgame-valorant"),
      tft: document.getElementById("riotgame-tft"),
      lor: document.getElementById("riotgame-lor"),
      wildrift: document.getElementById("riotgame-wildrift"),
      convergence: document.getElementById("riotgame-convergence"),
      hextech: document.getElementById("riotgame-hextech"),
      magseeker: document.getElementById("riotgame-magseeker"),
      ruinedKing1: document.getElementById("riotgame-ruinedKing1"),
      songOfNunu: document.getElementById("riotgame-songOfNunu"),
      lolEsports: document.getElementById("riotgame-lolEsports"),
      valorantEsports: document.getElementById("riotgame-valorantEsports"),
      arcane: document.getElementById("riotgame-arcane"),
      universe: document.getElementById("riotgame-universe"),
      riotGamesMusic: document.getElementById("riotgame-riotGamesMusic"),
      riotGames: document.getElementById("riotgame-riotGames"),
      riotMerch: document.getElementById("riotgame-riotMerch"),
      ruinedKing2: document.getElementById("riotgame-ruinedKing2"),
      riotMobile: document.getElementById("riotgame-riotMobile"),
      riotSupport: document.getElementById("riotgame-riotSupport")
    };
  
    const promoImg1 = document.getElementById("promo-img1");
    const promoImg2 = document.getElementById("promo-img2");
    const popupImages = document.querySelector(".riotgame-popup-images");
    const promoTexts = document.querySelectorAll(".promo-text");
  
    const originalImg1 = promoImg1 ? promoImg1.src : "";
    const originalImg2 = promoImg2 ? promoImg2.src : "";
  
    const imgURLs = {
      merged: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/9f6c08831b0d22c4c929fc50ada08d29650f1917-1280x721.jpg?&format=pjpg&quality=85",
      valorant: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/47bb9b281d270d8335092a72cb1dd09493bc8216-660x428.jpg",
      tft: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/fce3ba7a937c6d491fc3653458c83d5e5f36c0ef-1920x1080.jpg?&format=pjpg&quality=85",
      lor: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/95f244060cf64373f7b30e9db7edbbd41f705f04-1920x1080.jpg?&format=pjpg&quality=85",
      wildrift: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/a0d4a04e8059f9e9426b8a8ed7a2b0174886e754-1320x743.jpg?&format=pjpg&quality=85",
      convergence: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/96d6ec42a3be4ed02195fb31816bb2f188c5121d-1320x743.jpg?&format=pjpg&quality=85",
      hextech: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/410485481cef2bf4a4a15e2beedf9b929012a0c3-1320x743.jpg?&format=pjpg&quality=85",
      magseeker: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/02281bbdccf6311df4ae705d099ed45beb42f64e-1920x1080.jpg?&format=pjpg&quality=85",
      ruinedKing: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/904be9b7fb2dc287fc1a8f30f0421134eed3a35d-1320x743.jpg?&format=pjpg&quality=85",
      songOfNunu: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/8b0fd50a7bbd02b24bc2c5df278b1a556cf0cecf-1320x743.jpg?&format=pjpg&quality=85",
      lolEsports: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/8459546a9d8a91074ef7f4ef8e43ebd561d30396-1920x1080.jpg?&format=pjpg&quality=85",
      valorantEsports: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/46e6f7f8295ccf1ffa2480d7f0c1b9926204c08f-1920x1080.jpg?&format=pjpg&quality=85",
      arcane: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/70361f54e9202cccae3852adebdc567246d83179-1320x743.jpg?&format=pjpg&quality=85",
      universe: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/ada5282be4b3fa4225027ac9170014db245deb58-1320x743.jpg?&format=pjpg&quality=85",
      riotGamesMusic: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/73a9ef5885cacca97a8589c4263d324c290cf536-1320x743.jpg?&format=pjpg&quality=85",
      riotGames: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/92cb46a6c9e197cda4523d98c0ae54b93775ff4d-1320x743.jpg?&format=pjpg&quality=85",
      riotMerch: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/14c0d13d9191eda569d1c5d4bc8905175a2e934b-1320x743.jpg?&format=pjpg&quality=85",
      riotMobile: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/b9c9b6e5de1aaf80222934c67e4e7947d877b443-1320x743.jpg?&format=pjpg&quality=85",
      riotSupport: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/1d1c0b2d99b5da39e0eb5ae4b136c5c3a604e30c-1320x743.jpg?&format=pjpg&quality=85"
    };
  
    function addHover(link, imageURL, scaleValue = 1) {
      if (!link || !promoImg1 || !popupImages) return;
      link.addEventListener("mouseenter", function () {
        popupImages.style.gridTemplateColumns = "1fr";
        promoImg1.src = imageURL;
        if (promoImg2) promoImg2.style.display = "none";
        promoTexts.forEach(p => (p.style.display = "none"));
        promoImg1.style.transform = "scale(" + scaleValue + ")";
      });
      link.addEventListener("mouseleave", function () {
        popupImages.style.gridTemplateColumns = "1fr 1fr";
        promoImg1.src = originalImg1;
        if (promoImg2) {
          promoImg2.src = originalImg2;
          promoImg2.style.display = "block";
        }
        promoTexts.forEach(p => (p.style.display = "block"));
        promoImg1.style.transform = "scale(1)";
      });
    }
  
    addHover(links.league, imgURLs.merged, 1);
    addHover(links.valorant, imgURLs.valorant, 0.9);
    addHover(links.tft, imgURLs.tft, 1);
    addHover(links.lor, imgURLs.lor, 1);
    addHover(links.wildrift, imgURLs.wildrift, 1);
    addHover(links.convergence, imgURLs.convergence, 1);
    addHover(links.hextech, imgURLs.hextech, 1);
    addHover(links.magseeker, imgURLs.magseeker, 1);
    addHover(links.ruinedKing1, imgURLs.ruinedKing, 1);
    addHover(links.songOfNunu, imgURLs.songOfNunu, 1);
    addHover(links.lolEsports, imgURLs.lolEsports, 1);
    addHover(links.valorantEsports, imgURLs.valorantEsports, 1);
    addHover(links.arcane, imgURLs.arcane, 1);
    addHover(links.universe, imgURLs.universe, 1);
    addHover(links.riotGamesMusic, imgURLs.riotGamesMusic, 1);
    addHover(links.riotGames, imgURLs.riotGames, 1);
    addHover(links.riotMerch, imgURLs.riotMerch, 1);
    addHover(links.ruinedKing2, imgURLs.ruinedKing, 1);
    addHover(links.riotMobile, imgURLs.riotMobile, 1);
    addHover(links.riotSupport, imgURLs.riotSupport, 1);
  });
  
  
  
  
  
  const slider = document.querySelector('.body-news2');
      const nextBtn = document.getElementById('nextBtn');
      const prevBtn = document.getElementById('prevBtn');
  
      nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
      });
  
      prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
      });
  
  
  
      function changeContent(championType) {
        const contentMap = {
          assassins: {
            bg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2037fa505fd6b830ad9212f57865bbf49014e2e3-656x656.png',
            img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png',
            name: 'Akali',
            desc: 'The Rogue Assassin'
          },
          fighters: {
            bg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fab36e5433f9457968d5f4e5c2ebed38fdd4b17c-656x657.png',
            img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/70c26e49de8a2c79ac3de144772d2debd195edff-1628x1628.png',
            name: 'Yasuo',
            desc: 'The Unforgiven'
          },
          mages: {
            bg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b5fc531af3d3e8ef47d72cbf5a2ccdddd7912276-656x657.png',
            img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png',
            name: 'Lux',
            desc: 'The Lady of Luminosity'
          },
          marksmen: {
            bg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/e5282eb187f0a06c879fe6996c9831ff2d7752a3-656x657.svg',
            img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png',
            name: 'Jinx',
            desc: 'The Loose Cannon'
          },
          supports: {
            bg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a2d0a92f82549cafa4006bc47e8d7287505a3c40-656x657.png',
            img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png',
            name: 'Thresh',
            desc: 'The Chain Warden'
          },
          tanks: {
            bg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ac80f85e9c522cb59b932c1b95caf3fa1ef81a13-656x657.png?auto=format&fit=fill&q=80&w=656',
            img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png?auto=format&fit=fill&q=80&w=1289',
            name: 'Leona',
            desc: 'The Radiant Dawn'
          }
        };
      
        const champion = contentMap[championType];
        document.querySelector('.choose-champion3').style.backgroundImage = `url('${champion.bg}')`;
        document.querySelector('.champion-img3').src = champion.img;
        document.querySelector('.champion-info3 h2').textContent = champion.name;
        document.querySelector('.champion-description3').textContent = champion.desc;
      }
      
      function scrollSlider(direction) {
        const container = document.querySelector('.champion-types3');
        if (direction === 'left') {
          container.scrollBy({ left: -200, behavior: 'smooth' });
        } else if (direction === 'right') {
          container.scrollBy({ left: 200, behavior: 'smooth' });
        }
      }
      document.getElementById('aram').addEventListener('click', function() {
        document.getElementById('page2-all').style.backgroundImage = "url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/de076d7f25b6472f2a6f72a5795fc182d9413962-5120x1810.png?auto=format&fit=fill&q=80&w=2834')";
        const videoElement = document.getElementById('background-video');
        videoElement.src = "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4";
        videoElement.load();
        document.querySelector('.title-video4').textContent = "ALL RANDOM, ALL MID";
        document.querySelector('.title-video-24').textContent = "Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode.";
      });
      document.getElementById('tft').addEventListener('click', function() {
        const videoElement = document.getElementById('background-video');
        videoElement.src = "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4";
        videoElement.load();
        const pageElement = document.getElementById('page2-all');
        pageElement.style.backgroundColor = "#ADD8E6";
        document.querySelector('.title-video4').textContent = "THE MOST POPULAR GAME MODE";
        document.querySelector('.title-video-24').textContent = "Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.";
      });
      document.getElementById('summoners-rift').addEventListener('click', function() {
        const pageElement = document.getElementById('page2-all');
        pageElement.style.backgroundImage = "url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0eb5bc3bbb7794eceea3a5e7948906e1cbcd027f-5120x1810.png?auto=format&fit=fill&q=80&w=2834')";
        const videoElement = document.getElementById('background-video');
        videoElement.src = "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4";
        videoElement.load();
        document.querySelector('.title-video4').textContent = "A FREE-FOR-ALL WAR FOR SUPREMACY";
        document.querySelector('.title-video-24').textContent = "Assemble a squad of champions that battle on your behalf. Outlast all seven of your opponents and become the last person standing.";
      });