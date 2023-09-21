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

export const Icon = ({
  component: IconComponent,
  className: className,
  ...restProps
}: IconProps) => (
  <IconComponent
    className={className}
    focusable="false"
    aria-hidden="true"
    {...restProps}
  />
);
