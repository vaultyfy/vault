import { ReactSVG } from "react-svg";
import { IconProps } from "@phosphor-icons/react";

interface CustomIconProps {
  name: string;
  type?: "console" | "app";
}

export const Icon = ({ name, type }: CustomIconProps) => {
  return (
    <ReactSVG
      src={`${type ? `/icons/console/${name}.svg` : `/icons/${name}.svg`}`}
    />
  );
};

export interface GradientIconProps extends IconProps {
  startColor: string;
  endColor: string;
  IconComponent: React.ComponentType<IconProps>;
}

export const GradientIcon = ({
  startColor,
  endColor,
  IconComponent,
  size = 20,
  ...props
}: GradientIconProps) => {
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg width={size} height={size}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: startColor }} />
          <stop offset="100%" style={{ stopColor: endColor }} />
        </linearGradient>
      </defs>
      <IconComponent {...props} size={size} color={`url(#${gradientId})`} />
    </svg>
  );
};
