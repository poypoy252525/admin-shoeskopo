import { Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

interface Props {
  label: string;
  placeholder?: string;
  isTextArea?: boolean;
  register: Object;
}

const CustomFormControlInput = ({
  label,
  placeholder,
  isTextArea,
  register,
}: Props) => {
  return (
    <Box w="100%">
      <FormControl isRequired>
        <FormLabel fontSize="large">{label}</FormLabel>
        {!isTextArea ? (
          <Input
            placeholder={placeholder}
            bg="white"
            border="1px"
            borderColor="red.200"
            fontSize="small"
            {...register}
          />
        ) : (
          <Textarea
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
