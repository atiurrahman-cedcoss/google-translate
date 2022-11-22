function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  );
  // Create element:
  const para = document.createElement("div");
  para.className = "google_translate_element";

  // Append to another element:
  // document.getElementsByTagName("body").appendChild(para);
  document.body.appendChild(para);

}

googleTranslateElementInit()