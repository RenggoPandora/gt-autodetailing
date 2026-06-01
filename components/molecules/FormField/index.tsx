import { Input, Label } from "@/components/atoms";
import { cn } from "@/lib/utils/cn";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
}

const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  className,
}: FormFieldProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} type={type} placeholder={placeholder} autoComplete={autoComplete} />
    </div>
  );
};

export default FormField;
