declare module "react-icons/io" {
  import type { ComponentType, SVGProps } from "react";

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    title?: string;
  }

  export const IoMdArrowDropright: ComponentType<IconProps>;
  export const IoMdArrowDropdown: ComponentType<IconProps>;
}