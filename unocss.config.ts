import { presetScrollbarHide } from "unocss-preset-scrollbar-hide";

import type { UserConfig } from "@unocss/core";
import presetUno from "@unocss/preset-uno";

export default <UserConfig> {
  presets: [
    presetUno(),
    presetScrollbarHide(),
  ],
};
