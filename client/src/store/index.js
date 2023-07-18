import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '/src/public/threejs.png',
  fullDecal: '/src/public/threejs.png',
})

export default state;