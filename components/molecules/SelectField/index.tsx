import { Label, Select } from "@/components/atoms";
import { cn } from "@/lib/utils/cn";

interface SelectFieldProps {
  id: string;
  label: string;
  options: { label: string; value: string }[];
  defaultValue?: string;
  className?: string;
}

const SelectField = ({ id, label, options, defaultValue, className }: SelectFieldProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Select id={id} name={id} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectField;
