declare module "react-icons/md" {
  import type { ComponentType, SVGProps } from "react";

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    title?: string;
  }

  export const MdOutlineDarkMode: ComponentType<IconProps>;
  export const MdNavigateNext: ComponentType<IconProps>;
  export const MdNavigateBefore: ComponentType<IconProps>;
}
