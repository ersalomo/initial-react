import React from 'react';

import Input from './Elements/Input';

export default function Home(props) {
  const { children } = props;
  return (
    <>
      <div className={``}>
        <Input name="Ersalomo" grade="90" className="bg-red-900"/>
      </div>
    </>
  );
}
