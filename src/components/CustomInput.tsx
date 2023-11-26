import { Input, InputProps } from "@chakra-ui/react";
import { forwardRef } from "react";

const CustomInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input ref={ref} fontSize="small" bg="white" {...props} />
));

export default CustomInput;
