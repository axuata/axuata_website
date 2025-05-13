import {defineConfig, presetWind3, transformerVariantGroup, transformerDirectives} from 'unocss';

export default defineConfig({
  presets: [
    presetWind3()
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
});