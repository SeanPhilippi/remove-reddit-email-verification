// ==UserScript==
// @name         Hide Reddit Email Verification
// @namespace
// @version      1.0
// @description  Hide the reddit email verification banner
// @author
// @include        *://*.reddit.com/*
// @grant        metadata
//Adapted from Hide Reddit Side Bar script by u/pm_all_ahri_art
// ==/UserScript==
const hideEmailVerification = () => {
  console.log("i'm firing")
  var verify_email = document.getElementsByClassName("_3GEY4V1vCvw8HqDBo4DyQW");
  if (verify_email) {
      verify_email[0].setAttribute('style', 'display: hidden;');
  }
  setTimeout(hideEmailVerification, 2000);
}

hideEmailVerification();

/*GM_addStyle ( `
// @grant        GM_addStyle
    .redesign-beta-optin {
        width: 0px;
        visibility: hidden;
        padding: 0px;
    }
` );*/

// look into https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent