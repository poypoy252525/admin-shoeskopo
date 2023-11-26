import { FormControl, FormLabel, Select } from "@chakra-ui/react";

interface Props {
  label: string;
  items: string[];
  placeholder?: string;
  register: Object;
}

const CustomFormControlSelect = ({
  items,
  label,
  placeholder,
  register,
}: Props) => {
  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Select {...register} placeholder={placeholder} fontSize="small">
        {items.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomFormControlSelect;
