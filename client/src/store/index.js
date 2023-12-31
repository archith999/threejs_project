import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#91171F",
  isFullTexture: false,
  isLogoTexture: true,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
