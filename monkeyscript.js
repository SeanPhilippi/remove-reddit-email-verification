// ==UserScript==
// @name         Hide Reddit Email Verification
// @namespace
// @version      1.0
// @description  Hide the reddit email verification banner
// @author       Sean Philippi
// @include        *://*.reddit.com/*
// @grant        metadata
//Adapted from Hide Reddit Side Bar script by u/pm_all_ahri_art
// ==/UserScript==
const hideEmailVerification = () => {
  console.log("boom! BOOM!");
  let first = true;
  const verifyEmail = document.querySelector("._12Ewyh01Y1cMPB3Ri_F1C4");
  const topBorder = document.querySelector("._25n1vjWrHyVcdDkuLwR2Y-");
  const elements = [verifyEmail, topBorder];
  if (verifyEmail) {
    elements.forEach(el => el.setAttribute("style", "display: none;"));
  }
  if (first) {
    startLoop();
    first = false;
  }
};

const startLoop = () => {
  console.log("I'm whirling!");
  window.setInterval(() => {
    hideEmailVerification();
  }, 10000);
};

window.setTimeout(() => {
  console.log("first");
  hideEmailVerification();
}, 2000);
