import { Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useEffect } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  label: string;
  placeholder?: string;
  isTextArea?: boolean;
  register: UseFormRegisterReturn;
  defaultValue?: string;
  setValue?: () => void;
}

const CustomFormControlInput = ({
  label,
  placeholder,
  isTextArea,
  register,
  defaultValue,
  setValue,
}: Props) => {
  useEffect(() => {
    setValue && setValue();
  }, [defaultValue]);

  return (
    <Box w="100%">
      <FormControl isRequired>
        <FormLabel fontSize="large">{label}</FormLabel>
        {!isTextArea ? (
          <Input
            defaultValue={defaultValue}
            placeholder={placeholder}
            bg="white"
            border="1px"
            borderColor="red.200"
            fontSize="small"
            {...register}
          />
        ) : (
          <Textarea
            defaultValue={defaultValue}
            placeholder={placeholder}
            bg="white"
            border="1px"
            borderColor="red.200"
            fontSize="small"
            h={40}
            {...register}
          />
        )}
      </FormControl>
    </Box>
  );
};

export default CustomFormControlInput;
