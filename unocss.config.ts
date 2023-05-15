import presetUno from "@unocss/preset-uno";
import { presetScrollbarHide } from "unocss-preset-scrollbar-hide";

import type { UserConfig } from "@unocss/core";

export default <UserConfig> {
  presets: [
    presetUno(),
    presetScrollbarHide(),
  ],
};
