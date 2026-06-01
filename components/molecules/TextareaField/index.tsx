import { Label, Textarea } from "@/components/atoms";
import { cn } from "@/lib/utils/cn";

interface TextareaFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  rows?: number;
  className?: string;
}

const TextareaField = ({
  id,
  label,
  placeholder,
  defaultValue,
  rows,
  className,
}: TextareaFieldProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        name={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        rows={rows}
      />
    </div>
  );
};

export default TextareaField;
