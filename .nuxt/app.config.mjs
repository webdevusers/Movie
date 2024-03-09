
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "dev"
  },
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "red-orange",
      "mandy",
      "supernova",
      "cinder",
      "shark",
      "athens-gray",
      "grayscale1",
      "grayscale2",
      "grayscale3",
      "grayscale4",
      "grayscale5",
      "grayscale6",
      "grayscale7",
      "grayscale8",
      "grayscale9",
      "grayscale10",
      "primary"
    ],
    "strategy": "merge"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "C:/Users/User/Desktop/Projects/Movie/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
