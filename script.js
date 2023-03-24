"use strict";

function load() {
  const button = document.querySelector(".btn");

  // MediaQueryList object
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Toggles the "dark-mode" class based on if the media query matches
  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
  }

  // Initial setting
  toggleDarkMode(useDark.matches);

  // Listen for changes in the OS settings
  useDark.addListener((evt) => toggleDarkMode(evt.matches));

  // Toggles the "dark-mode" class on click
  button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
  });
}

const headerGraphics = document.querySelector(".header_graphics");

const risingKeyframes = [{ transform: "translateY(0vw)" }, { transform: "translateY(-60vw)" }];

const risingProperties = {
  duration: 1000,
  iterations: 1,
  easing: "linear",
  fill: "forwards",
};

headerGraphics.addEventListener("click", () => {
  headerGraphics.animate(risingKeyframes, risingProperties);
});

window.addEventListener("DOMContentLoaded", load);
