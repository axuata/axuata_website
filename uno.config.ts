import {defineConfig, presetIcons, presetWind3, transformerVariantGroup, transformerDirectives} from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
});