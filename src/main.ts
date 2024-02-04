import './style.css'
import GlslCanvas from 'glslCanvas';

const canvas = document.createElement('canvas');
const sandbox = new GlslCanvas(canvas);

console.log({ sandbox })
