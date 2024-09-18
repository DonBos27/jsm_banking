import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/utils";

const authformSchema = formSchema("sign-up");

interface CustomInputProps {
  control: Control<z.infer<typeof authformSchema>>;
  name: FieldPath<z.infer<typeof authformSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
}: CustomInputProps) => {
  // Generate a unique ID based on the name
  const uniqueId = `input-${name}`;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label" htmlFor={uniqueId}>
            {label}
          </FormLabel>
          <div className="flex flex-col w-full">
            <FormControl>
              <Input
                id={uniqueId}
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
