'use client';

import { InputText } from "@/ui-library/InputText/InputText";
import { EyeIcon } from "@/ui-library/icons/EyeIcon";
import { EyeSlashIcon } from "@/ui-library/icons/EyeSlashIcon";
import { useState } from "react";

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const icon = showPassword ? <EyeSlashIcon /> : <EyeIcon />;

  const onClick = () => {
    setShowPassword(!showPassword);
  }

  return (
    <InputText
      type={showPassword ? 'text' : 'password'}
      name="password"
      label="Mot de passe"
      icon={icon}
      iconAction={onClick}
    />
  )
}

export { PasswordField };