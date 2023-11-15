import React, { useState, ChangeEvent, FC } from 'react';

interface FormComponentProps { };

const FormComponent: FC<FormComponentProps> = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}

export default FormComponent;