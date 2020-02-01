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
    const verify_email = document.getElementsByClassName("_12Ewyh01Y1cMPB3Ri_F1C4");
    if (verify_email) {
        verify_email[0].setAttribute('style', 'display: none;');
    }
  }

  window.setInterval(function(){
    hideEmailVerification();
  }, 5000);