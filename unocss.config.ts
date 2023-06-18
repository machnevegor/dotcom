import type { UserConfig } from "@unocss/core";
import presetUno from "@unocss/preset-uno";
import { presetScrollbarHide } from "unocss-preset-scrollbar-hide";

export default <UserConfig> {
  presets: [
    presetUno(),
    presetScrollbarHide(),
  ],
};
