import React, {FC} from 'react'


interface UserProps {
  name: string
  grade:string
}

export default function Input({name, grade}):FC<UserProps> {
  return (
    <div className="mb-5">
      <input type="text" className="bg-green-500" value={name+grade}  />
    </div>
  );
}
