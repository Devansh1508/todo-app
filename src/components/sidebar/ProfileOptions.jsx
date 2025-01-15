import React from 'react';

const ProfileOptions = () => {
  const options = [
    { text: 'Profile' },
    { text: 'Logout' },
  ];

  return (
    <div className='mt-3'>
      {options.map((option, index) => (
        <div className='bg-white text-black p-4 border' key={index}>{option.text}</div>
      ))}
    </div>
  );
};

export default ProfileOptions;