interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: SelectOption[];
  placeholder?: string;
}
