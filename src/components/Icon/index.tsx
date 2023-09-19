type IconProps = {
  component: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
} & React.SVGProps<
  SVGSVGElement & {
    title?: string | undefined;
  }
>;

export const Icon = ({ component: IconComponent, ...restProps }: IconProps) => (
  <IconComponent focusable="false" aria-hidden="true" {...restProps} />
);
