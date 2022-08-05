import type { Config } from "aleph/types";

export default <Config> {
  css: {
    postcss: {
      plugins: [
        "postcss-nested",
        "autoprefixer",
      ],
      modules: {
        scopeBehaviour: "local",
      },
    },
  },
};
