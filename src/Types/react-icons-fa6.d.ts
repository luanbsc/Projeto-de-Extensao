declare module "react-icons/fa6" {
  import type { ComponentType, SVGProps } from "react";

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    title?: string;
  }

  export const FaArrowUpLong: ComponentType<IconProps>;
  export const FaArrowDownLong: ComponentType<IconProps>;
}