import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  label: string;
  items: string[];
  placeholder?: string;
  register: UseFormRegisterReturn;
  defaultValue?: string;
  setValue?: (value: string | undefined) => void;
}

const CustomFormControlSelect = ({
  items,
  label,
  placeholder,
  register,
  defaultValue,
  setValue,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue
  );

  useEffect(() => {
    // Update selectedValue when defaultValue changes
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    // Call setValue with the updated selectedValue
    setValue && setValue(selectedValue);
  }, [selectedValue, setValue]);

  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Select
        value={selectedValue}
        placeholder={placeholder}
        fontSize="small"
        {...register}
        onChange={(e) => setSelectedValue(e.target.value)}
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
