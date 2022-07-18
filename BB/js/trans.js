// The translations for the texts and content in the modal
const translationData = [
  {
    trans_id: "header_text",
    en: "INTRODUCING BET BUILDER",
    zh: "隆重推出创造玩法",
    vi: "GIỚI THIỆU CƯỢC TÙY CHỌN",
    id: "APA ITU BET BUILDER",
    th: "ใหม่! สร้างบิลสเต็ปได้ในแมทช์เดียว",
    ko: "베팅빌더를 소개합니다",
    pt: "Criar Aposta, introdução!",
    km: "សេចក្តីណែនាំ​ស្តីពីមុខងារ ការបង្កើតប័ណ្ណភ្នាល់ (Bet Builder)",
    ja: "ベットビルダーの紹介",
  },
  {
    trans_id: "subheader_text",
    en: "Available for selected Football Matches",
    zh: "精选的足球赛事皆有",
    vi: "Hiện đã khả dụng cho các trận bóng được chọn.",
    id: "Tersedia untuk Pertandingan Sepak Bola tertentu",
    th: "เปิดใช้งานแล้วในแมทช์ฟุตบอลที่กำหนด",
    ko: "선정 축구 경기에서 이용가능합니다.",
    pt: "Disponível em jogos selecionados",
    km: "មានលើការប្រកួតបាល់ទាត់ដែលបានជ្រើសរើស",
    ja: "特定のサッカーの試合でご利用いただけます",
  },
  {
    trans_id: "bet_builder_text",
    en: [
      "Bet Builder is a type of bet where you can combine selections from the same event into a single bet – a same-event parlay or multiple!",
    ],
    zh: ["创造玩法是一种可以让您在同一场赛事中自行组合成为一个盘口。"],
    vi: [
      "Cược Tùy Chọn là một loại cược mà Quý Khách có thể kết hợp các lựa chọn từ cùng một trận đấu thành một cược đơn hoặc một cược xâu từ cùng trận đấu!",
    ],
    id: [
      "Bet Builder adalah jenis taruhan di mana Anda dapat menggabungkan pilihan dari pertandingan yang sama menjadi satu taruhan – pertandingan parlay yang sama atau beberapa!",
    ],
    th: [
      '"สร้างบิลสเต็ป" ฟีเจอร์ใหม่ที่คุณสามารถเลือกเดิมพันได้หลายประเภทพร้อมกันในแมทช์เดียว',
    ],
    ko: [
      "동일 경기에서 여러 항목을 선택해 하나의 베팅으로 조합할 수 있는 기능입니다. 팔레이 또는 조합 베팅과 유사합니다.",
    ],
    pt: [
      "A função Criar Aposta é um recurso que permite você criar uma aposta múltipla no mesmo evento, combinando diversos mercados do mesmo jogo em uma única aposta.",
    ],
    km: [
      "ការបង្កើតប័ណ្ណភ្នាល់ គឺ​ជា​ប្រភេទ​នៃ​ការ​ភ្នាល់មួយ ដែលអ្នក​អាចច្របាច់​បញ្ចូល​គ្នា​រេវាង​ជម្រើស​​នានា ពី​ព្រឹត្តិ​ការណ៍​តែមួយទៅ​ក្នុង​ប័ណ្ណភ្នាល់ទោល - ដូច​ទៅនឹង​ការ​ភ្នាល់​គូ​បក ឬ ​ការ​ភ្នាល់​គូ​ចម្រុះ!",
    ],
    ja: [
      "ベットビルダーは、同じイベントのセレクションから複数を1つのベットに組み合わせることができるベットの種類です。（同じイベントのパーレイまたはマルチプル）",
    ],
  },
  {
    trans_id: "learn-more-link",
    en: "Learn More",
    zh: "了解更多",
    vi: "TÌM HIỂU THÊM",
    id: "PELAJARI LEBIH LANJUT",
    th: "อ่านเพิ่มเติม",
    ko: "더 알아보기",
    pt: "SAIBA MAIS",
    km: "មើល​បន្ថែមទៀត",
    ja: "詳細を見る",
  },
];

// The translations located inside the animation clip
const animationTranslationData = [
  {
    layerName: "#SelectAMatch",
    en: "Select a match and look for the Bet Builder tab.",
    zh: "选一场赛事后寻找创造玩法的分页。",
    vi: "Chọn 1 trận đấu và tìm kiếm tab Cược Tùy Chọn.",
    id: "Pilih pertandingan dan cari tab Bet Builder.",
    th: "เพียงเลือกแมทช์ที่ต้องการและกดปุ่ม สร้างบิลสเต็ป",
    ko: "경기를 선택하고 베팅빌더 탭을 확인하세요. ",
    pt: "Selecione um evento e procure a opção ‘Criar Aposta’.",
    km: "ជ្រើស​រើស​ការ​ប្រកួត​មួយ និង​សម្លឹង​រកប្រអប់ ការបង្កើតប័ណ្ណភ្នាល់",
    ja: "試合を選択し、ベットビルダータブを探します。",
  },
  {
    layerName: "#ChooseSelections",
    en: "Choose the selections you want to combine, add to your Bet Slip and Place Bet.",
    zh: "透过选择建立您的专属\r组合，将其加入您的下注单然后下注。",
    vi: "Thêm các lựa chọn Quý Khách muốn kết hợp vào Vé Cược và Đặt Cược",
    id: "Pilih pilihan yang ingin Anda gabungkan, tambahkan ke Slip Taruhan dan Pasang Taruhan.",
    th: "เลือกเดิมพันที่คุณต้องการสร้างบิลสเต็ป เพิ่มไปที่ สลิปการเดิมพัน เพื่อ วางเดิมพัน",
    ko: "조합할 항목을 선택하고 베팅 슬립에 추가하여 베팅을 진행하세요.",
    pt: "Escolha as seleções que deseja combinar, adicione ao seu Boletim de Apostas e clique em Apostar.",
    km: "ជ្រើសរើសជម្រើសដែលអ្នកចង់បញ្ចូលគ្នា រួចបន្ថែមទៅក្នុងប័ណ្ណភ្នាល់របស់អ្នក និងដាក់ភ្នាល់",
    ja: "組み合わせたいセレクションを選択しベット伝票に追加後、ベットするを押してください。",
  },
  {
    layerName: "#BetBuilder",
    en: "Bet Builder",
    zh: "创造玩法",
    vi: "Cược Tùy Chọn",
    id: "Bet Builder",
    th: "สร้างบิลสเต็ป",
    ko: "베팅빌더",
    pt: "Criar Aposta",
    km: "ការបង្កើតប័ណ្ណភ្នាល់",
    ja: "ベットビルダー",
  },
  {
    layerName: "#Handicap",
    en: "Handicap -0.5",
    zh: "让球 -0.5",
    vi: "Cược Chấp -0.5",
    id: "Handicap -0.5",
    th: "แฮนดิแคป -0.5",
    ko: "핸디캡 -0.5",
    pt: "Handicap -0.5",
    km: "គ្រាប់ត -0.5",
    ja: "ハンデ -0.5",
  },
  {
    layerName: "#GoalsOver",
    en: "Goals: Over 3.5",
    zh: "进球：大 3.5",
    vi: "Bàn Thắng: Trên 3.5",
    id: "Gol: Atas 3.5",
    th: "ประตูรวม: สูง 3.5",
    ko: "골수 : 오버 3.5",
    pt: "Gols: Acima 3.5",
    km: "គ្រាប់បាល់ : លើស 3.5",
    ja: "ゴール: オーバー 3.5",
  },
  {
    layerName: "#AnytimeGoalScorer",
    en: "Anytime Goalscorer",
    zh: "任何时间进球球员",
    vi: "Cầu Thủ Ghi Bàn",
    id: "Pencetak Gol Kapan Saja",
    th: "ผู้ทำประตูเวลาใดก็ได้",
    ko: "경기 내 득점",
    pt: "Anytime Goalscorer",
    km: "អ្នករកគ្រាប់បាល់ពេលណាមួយ",
    ja: "得点者",
  },
  {
    layerName: "#StartBuilding",
    en: "Start Building your Bets today.",
    zh: "今天就开始創建您的专属下注组合。",
    vi: "Sử dụng Cược Tùy Chọn ngay hôm nay",
    id: "Pasang Taruhan Anda hari ini.",
    th: "สร้างบิลสเต็ป ได้แล้ววันนี้",
    ko: "지금 바로 나만의 베팅을 설정하세요.",
    pt: "Comece a Criar suas Apostas hoje.",
    km: "ចាប់ផ្តើមបង្កើតប័ណ្ណភ្នាល់របស់អ្នកថ្ងៃនេះ",
    // km: '<text x="20" y="35" class="small">My</text>',
    ja: "今から自分だけのカスタマイズとベット体験を開始。",
  },
];

// Elements
const animationContainer = document.getElementById("animation_container");
const lottiePlayer = document.createElement("lottie-player");
const replayButton = document.getElementById("replay_animation_button");
// const replayOverlay = document.getElementById("animation_container_overlay");

// Language Code of the HTML
const { lang } = document.documentElement;

// JSON file (located in LottieFiles) to load the animation w/ dynamic text
// Modified fonts to use CSS

/* JSON Local file */
let lottieJSON = "../../js/animation.json";

/* CDN version */
//let lottieJSON = "https://assets5.lottiefiles.com/packages/lf20_ifbfsp1z.json";

// Hides the replay button and the replay overlay
replayButton.style.display = "none";
// replayOverlay.style.display = "none";

// Generates the translated data in the modal content
translationData.forEach((objData) => {
  const $objectEl = document.getElementById(objData.trans_id);

  if ($objectEl) {
    if (typeof objData[lang] === "object") {
      // FOR PARAGRAPHS
      objData[lang].forEach((textData) => {
        const $newParaEl = document.createElement("p");
        $newParaEl.innerHTML = textData;
        $objectEl.appendChild($newParaEl);
      });
    } else if (typeof objData[lang] === "string") {
      // FOR SINGLE-LINE TEXTS
      $objectEl.innerHTML = objData[lang];
    }
  }
});

// Fetches the JSON data for the localization inside the animation
// fetch(lottieJSON).then(async (response) => {
//   try {
//     const jsonData = await response.json();
//     loadLottiePlayer(jsonData);
//   } catch (error) {
//     console.log("Error happened here!");
//     console.error(error);
//   }
// });

fetch(lottieJSON).then(async (res) => {
  try {
    const jsonData = await res.json();
    loadLottiePlayer(jsonData);
  } catch (error) {
    console.log("Error happened here.");
  }
});

// Dynamically changes the localization inside the animation before it's loaded
function loadLottiePlayer(lottieData) {
  const layers = lottieData.layers;
  const textLayers = [];

  // Stores all the names of text layers found in the JSON data
  layers.forEach((layer) => {
    if (layer.nm.startsWith("#")) {
      textLayers.push(layer.nm);
    }
  });

  // Loops through all the text layers in the JSON file as exported in Adobe AE
  textLayers.forEach((textLayer) => {
    const index = layers.findIndex((object) => {
      return object.nm === textLayer;
    });

    // Loops through the localisation object and checks matches with the texts
    animationTranslationData.forEach((transData) => {
      if (lottieData.layers[index].nm === transData.layerName) {
        /**
         * Certain language scripts don't work on certain fonts. This piece of
         * code addresses that problem by substituting a different font.
         *  */
        lottieData.layers[index].t.d.k[0].s.f = "Helvetica";
        if (lang === "th") {
          lottieData.layers[index].t.d.k[0].s.f = "ArialUnicodeMS";
        } else if (lang === "km") {
          lottieData.layers[index].t.d.k[0].s.f = "Khmer";
        }

        // Modifies the text in the data fetched from the JSON

        lottieData.layers[index].t.d.k[0].s.t = transData[lang];
      }
    });
  });

  // Load the Lottie Player inside the animation container
  lottiePlayer.setAttribute("id", "BetBuilderPlayer");
  lottiePlayer.src = lottieData;
  lottiePlayer.background = "transparent";
  lottiePlayer.speed = 1;
  lottiePlayer.loop = false;
  lottiePlayer.width = 280;
  lottiePlayer.height = 280;
  lottiePlayer.autoplay = true;
  lottiePlayer.controls = false;

  // Appends the <lottie-player /> element to the DOM
  animationContainer.appendChild(lottiePlayer);

  // Loads the replay controls once the animation has been completed
  if (lottiePlayer) {
    lottiePlayer.addEventListener("complete", () => {
      replayButton.style.display = "block";
      // replayOverlay.style.display = "block";
    });

    if (lang === "th") {
      convertThai();
    } else if (lang === "km") {
      convertKhmer();
    }
  }
}

// Click Event: Replays the animation and hides the replay controls
replayButton.addEventListener("click", () => {
  if (lottiePlayer) {
    lottiePlayer.stop();
    lottiePlayer.play();
    replayButton.style.display = "none";
    // replayOverlay.style.display = "none";
  }
});

// Since iOS is running problems with Thai text from AE export, this is a substitute
function convertThai() {
  lottiePlayer.addEventListener("ready", () => {
    const betBuilderPlayer = document.getElementById("BetBuilderPlayer");
    // Get shadow root
    const betBuilderRoot = betBuilderPlayer && betBuilderPlayer.shadowRoot;

    const selectAMatch = betBuilderRoot
      .querySelector("#animation")
      .getElementsByTagName("svg")[0]
      .querySelector("#SelectAMatch");

    const chooseSelections = betBuilderRoot
      .querySelector("#animation")
      .getElementsByTagName("svg")[0]
      .querySelector("#ChooseSelections");

    const startBuilding = betBuilderRoot
      .querySelector("#animation")
      .getElementsByTagName("svg")[0]
      .querySelector("#StartBuilding");

    // const textNode = document.createElement("text");
    // textNode.innerHTML = "ចាប់ផ្តើមបង្កើតប័ណ្ណភ្នាល់របស់អ្នកថ្ងៃនេះ TEST";
    selectAMatch.innerHTML = `<text x="-80" y="-10" class="small">เพียงเลือกแมทช์ที่ต้อ</text>
        <text x="-55" y="20">งการและกดปุ่ม</text>
        <text x="-45" y="50">สร้างบิลสเต็ป</text>`;

    chooseSelections.innerHTML = `<text x="-80" y="-20" class="small">เลือกเดิมพันที่คุณต้อ</text>
        <text x="-70" y="10">งการสร้างบิลสเต็ป</text>
        <text x="-95" y="40">เพิ่มไปที่ สลิปการเดิมพัน</text>
        <text x="-60" y="70">เพื่อ วางเดิมพัน</text>`;

    startBuilding.innerHTML = `<text x="-55" y="-10" class="small">สร้างบิลสเต็ป</text>
        <text x="-50" y="20">ได้แล้ววันนี้</text>`;
  });
}

// Since iOS is running problems with Khmer text from AE export, this is a substitute
function convertKhmer() {
  lottiePlayer.addEventListener("ready", () => {
    const betBuilderPlayer = document.getElementById("BetBuilderPlayer");
    // Get shadow root
    const betBuilderRoot = betBuilderPlayer && betBuilderPlayer.shadowRoot;

    const selectAMatch = betBuilderRoot
      .querySelector("#animation")
      .getElementsByTagName("svg")[0]
      .querySelector("#SelectAMatch");

    const chooseSelections = betBuilderRoot
      .querySelector("#animation")
      .getElementsByTagName("svg")[0]
      .querySelector("#ChooseSelections");

    const startBuilding = betBuilderRoot
      .querySelector("#animation")
      .getElementsByTagName("svg")[0]
      .querySelector("#StartBuilding");

    // const textNode = document.createElement("text");
    // textNode.innerHTML = "ចាប់ផ្តើមបង្កើតប័ណ្ណភ្នាល់របស់អ្នកថ្ងៃនេះ TEST";
    selectAMatch.innerHTML = `<text x="-110" y="-10" class="small">ជ្រើស​រើស​ការ​ប្រកួត​មួយ</text>
        <text x="-80" y="20">និង​សម្លឹង​រកប្រអប់</text>
        <text x="-90" y="50">ការបង្កើតប័ណ្ណភ្នាល់</text>`;

    chooseSelections.innerHTML = `<text x="-80" y="-20" class="small">ជ្រើសរើសជម្រើស</text>
        <text x="-95" y="10">ដែលអ្នកចង់បញ្ចូលគ្នា</text>
        <text x="-70" y="40">រួចបន្ថែមទៅក្នុង</text>
        <text x="-90" y="70">ប័ណ្ណភ្នាល់របស់អ្នក</text>
        <text x="-60" y="100">និងដាក់ភ្នាល់</text>`;

    startBuilding.innerHTML = `<text x="-120" y="-10" class="small">ចាប់ផ្តើមបង្កើតប័ណ្ណភ្នាល់រប</text>
        <text x="-55" y="20">ស់អ្នកថ្ងៃនេះ</text>`;
  });
}
