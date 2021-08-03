export type OverrideProps<
  ComponentProps extends object,
  OverrideProps extends object = {}
> = Omit<ComponentProps, keyof OverrideProps> & OverrideProps;
