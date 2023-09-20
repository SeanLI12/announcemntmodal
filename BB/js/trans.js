// The translations for the texts and content in the modal
const translationData = [];

// The translations located inside the animation clip
const animationTranslationData = [];

// Elements
const animationContainer = document.getElementById("animation_container");
const lottiePlayer = document.createElement("lottie-player");
const replayButton = document.getElementById("replay_animation_button");
// const replayOverlay = document.getElementById("animation_container_overlay");

// Language Code of the HTML
const { lang } = document.documentElement;

// JSON file (located in LottieFiles) to load the animation w/ dynamic text

/* JSON Local file */
let lottieJSON = "../../js/animation.json";

/* CDN version */
//let lottieJSON = "https://assets5.lottiefiles.com/packages/lf20_ifbfsp1z.json";

// Hides the replay button and the replay overlay
replayButton.style.display = "none";
// replayOverlay.style.display = "none";

function fetchTranslationDataFromSheets() {
  const sheetsData =
    "https://sheets.googleapis.com/v4/spreadsheets/1CRNEc0zDsAmtAT8iHtSwAhVxinID5202OIFx6-_kmCo/values/sheet1?alt=json&key=AIzaSyDxZruTkrDTIRgPOmhUZtEBQRARBosTGyA";

  // Fetching the JSON data for translation
  fetch(sheetsData).then(async (res) => {
    try {
      const jsonData = await res.json();
      convertDatasetForTranslation(jsonData);
    } catch (error) {
      console.log("Error in fetching the translation data from Google Sheets.");
    }
  });
}

/**
 * Converts the data retrieved from Google Sheets to objects-in-array form.
 *  */
function convertDatasetForTranslation(data) {
  const dataSet = data.values;

  dataSet.forEach((translationArray, idx) => {
    let hasHashTag = false;

    // The keys are in the first index of the dataset, so they're not included
    if (idx !== 0) {
      const keys = dataSet[0];
      const translationObjectToPush = {};

      // Goes through the array to add the values to the object
      for (let i = 0; i < translationArray.length; i++) {
        // Checks if the ID value has hashtag (to distinguish translations)
        if (translationArray[0].charAt(0) === "#") {
          hasHashTag = true;
        }

        // Pushes the value to the object with the respective translation key
        translationObjectToPush[keys[i]] = translationArray[i];
      }

      // The array to push the object on will depend on the data
      if (hasHashTag) {
        animationTranslationData.push(translationObjectToPush);
      } else {
        translationData.push(translationObjectToPush);
      }
    }
  });

  generateTranslationDataInModal();
  fetchJSONFromLottieFile();
}

// Fetches the JSON data for the localization inside the animation
function fetchJSONFromLottieFile() {
  fetch(lottieJSON).then(async (res) => {
    try {
      const jsonData = await res.json();
      loadLottiePlayer(jsonData);
    } catch (error) {
      console.log("Error in fetching the JSON file to play in Lottie Player.");
    }
  });
}

// Generates the translated data in the modal content
function generateTranslationDataInModal() {
  translationData.forEach((objData) => {
    const $objectEl = document.getElementById(objData.key);

    if ($objectEl) {
      if (typeof objData[lang] === "object") {
        // FOR PARAGRAPHS
        objData[lang].forEach((textData) => {
          const $newParaEl = document.createElement("p");
          $newParaEl.innerHTML = textData;
          $objectEl.appendChild($newParaEl);
        });
      } else if (typeof objData[lang] === "string") {
        if (objData.key === "bet_builder_text") {
          const $newParaEl = document.createElement("p");
          $newParaEl.innerHTML = objData[lang];
          $objectEl.appendChild($newParaEl);
        } else {
          // FOR SINGLE-LINE TEXTS
          $objectEl.innerHTML = objData[lang];
        }
      }
    }
  });
}

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
      if (lottieData.layers[index].nm === transData.key) {
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

fetchTranslationDataFromSheets();
