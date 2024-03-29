
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'
<<<<<<< HEAD
import cfg0 from "C:/Users/User/Desktop/Projects/Movie/app.config"
=======
import cfg0 from "C:/Users/webde/OneDrive/Pulpit/Movie/app.config"
>>>>>>> fdf309191c5aae59a3396292999b0c33a0672b92

declare const inlineConfig = {
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
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0]>
type IsAny<T> = 0 extends 1 & T ? true : false

type MergedAppConfig<Resolved extends Record<string, unknown>, Custom extends Record<string, unknown>> = {
  [K in keyof (Resolved & Custom)]: K extends keyof Custom
    ? unknown extends Custom[K]
      ? Resolved[K]
      : IsAny<Custom[K]> extends true
        ? Resolved[K]
        : Custom[K] extends Record<string, any>
            ? Resolved[K] extends Record<string, any>
              ? MergedAppConfig<Resolved[K], Custom[K]>
              : Exclude<Custom[K], undefined>
            : Exclude<Custom[K], undefined>
    : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
