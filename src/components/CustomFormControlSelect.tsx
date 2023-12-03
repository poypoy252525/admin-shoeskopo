import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useEffect } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  label: string;
  items: string[];
  placeholder?: string;
  register: UseFormRegisterReturn;
  defaultValue?: string;
  setValue?: () => void;
}

const CustomFormControlSelect = ({
  items,
  label,
  placeholder,
  register,
  defaultValue,
  setValue,
}: Props) => {
  useEffect(() => {
    setValue && setValue();
  }, [defaultValue]);
  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Select
        defaultValue={defaultValue}
        placeholder={placeholder}
        fontSize="small"
        {...register}
      >
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomFormControlSelect;
