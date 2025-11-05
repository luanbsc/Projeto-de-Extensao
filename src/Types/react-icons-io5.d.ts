declare module "react-icons/io5" {
  import type { ComponentType, SVGProps } from "react";

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    title?: string;
  }

  export const IoReload: ComponentType<IconProps>;
}