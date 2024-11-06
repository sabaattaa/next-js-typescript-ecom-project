"use client";

import React from "react";

type InputProps = {
  type?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  name?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  minLength?: number;
  autoFocus?: boolean;
  autoComplete?: string;
  autoCapitalize?: string;
  spellCheck?: boolean;
  pattern?: string;
  size?: number;
  step?: number;
  maxlength?: number;
  min?: number;
  max?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
  tabIndex?: number;
};

export const Input: React.FC<InputProps> = ({
  type = "text",
  required = false,
  disabled = false,
  readOnly = false,
  name,
  placeholder,
  className,
  value,
  onChange,
  maxLength,
  minLength,
  autoFocus = false,
  autoComplete = "off",
  autoCapitalize = "words",
  spellCheck = true,
  pattern,
  size,
  step,
  min,
  max,
  onFocus,
  onBlur,
  onClick,
  tabIndex,
}) => {
  return (
      <input
        
      type={type}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      name={name}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      minLength={minLength}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      autoCapitalize={autoCapitalize}
      spellCheck={spellCheck}
      pattern={pattern}
      size={size}
      step={step}
      min={min}
      max={max}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
      tabIndex={tabIndex}
    />
  );
};
