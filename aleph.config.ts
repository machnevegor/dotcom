import type { Config } from "aleph/types";

export default <Config> {
  i18n: {
    defaultLocale: "ru",
  },
  css: {
    postcss: {
      plugins: [
        "postcss-nested",
        "autoprefixer",
      ],
    },
  },
};
