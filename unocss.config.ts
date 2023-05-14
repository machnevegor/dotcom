import presetUno from "@unocss/preset-uno";

import type { UserConfig } from "@unocss/core";

export default <UserConfig> {
  shortcuts: {
    "caret": "inline-block w-3 h-6 align-sub bg-black",
  },
  presets: [
    presetUno(),
  ],
};
