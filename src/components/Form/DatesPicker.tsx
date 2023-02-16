import DatePicker, { registerLocale } from 'react-datepicker';
import { useFormContext, Controller } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-BR', ptBR);
type Props = {
  name: string;
};
export function DatesPicker({ name }: Props) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          locale="pt-BR"
          showTimeSelect
          dateFormat="Pp"
          selected={value}
          onChange={(date: Date) => onChange(date)}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
        />
      )}
      name={name}
    />
  );
}
