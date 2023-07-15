import React from 'react';

import Input from './Elements';

export default function Home(props) {
  const { children } = props;
  return (
    <>
      <div className={`bg-blue-600`}>
        <Input />
      </div>
    </>
  );
}
