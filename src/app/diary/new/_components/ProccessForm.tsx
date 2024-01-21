import { Control, UseFormRegister } from "react-hook-form";
import { Input } from "@mui/material";

type ProcessFormProps = {
  register: UseFormRegister<DiaryFormValues>;
  control: Control<DiaryFormValues>;
};

export const ProcessForm: React.FC<ProcessFormProps> = ({ register, control }) => <Input {...register("process")} />;