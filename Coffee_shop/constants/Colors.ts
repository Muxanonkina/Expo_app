/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { IconMapping } from "@/components/ui/IconSymbol";

const tintColorLight = "orange";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#151718",
    headerBackground: "#11181C",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#c68e17",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#151718",
    headerBackground: "rgba(1,1,1)",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
export const MAPPING = {
  "house.fill": "home",
  "paperplane.fill": "contact-page",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
} as IconMapping;
