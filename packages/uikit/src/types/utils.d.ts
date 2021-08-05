export type OverrideProps<ComponentProps, OverridingProps> = Omit<
  ComponentProps,
  keyof OverridingProps
> &
  OverridingProps;
