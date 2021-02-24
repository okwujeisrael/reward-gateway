import React, { useState } from 'react';

import { getBio, getAvatar } from '../utils/helpers'

const Card = (props) => {
  const [color, setColor] = useState('gray');
  const [label, setLabel] = useState('');
  const { id, avatar, name, title, company, bio, handleClick } = props;

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === 'colors') setColor(e.target.value)
    if (e.target.name === 'label') setLabel(e.target.value)
  }

  return (
    <div 
      className={`card border bg-${color}-300 rounded-lg p-4 mb-6 w-7/12 animate__animated animate__slideInDown shadow-xl`}
    > 
      <div className="flex justify-center">
        <img 
          src={getAvatar(avatar)} 
          alt={`${name}'s avatar`} 
          className="w-28 h-28 pb-2 cursor-pointer"
          onClick={handleClick} 
          id={id}
        />
      </div>
      <h3 className="pb-2 dosis-bold">NAME: {name}</h3>
      <p className="pb-2">TITLE: {title}</p>
      <p className="pb-2">COMPANY: {company}</p>
      <p className="pb-2 text-green-600 dosis-bold text-center text-lg">BIOGRAPHY</p>
      <p className="pb-2 text-green-600" dangerouslySetInnerHTML={{ __html: getBio(bio) }}></p>

      <label htmlFor={`colors${id}`} className="pr-4 block">PICK A BACKGROUND COLOUR</label>
      <select name="colors" id={`colors${id}`} className="px-2 mt-1" onChange={handleChange}>
        <option value="gray">gray</option>
        <option value="purple">purple</option>
        <option value="pink">pink</option>
        <option value="blue">blue</option>
      </select>

      <label htmlFor={`label${id}`} className="pr-4 mt-4 block">ENTER A LABEL</label>
      <input className="mt-1 p-1" type="text" id={`label${id}`} name="label" onInput={handleChange} value={label} />
      {
        !!label && 
        <p className="mt-4 p-1 w-64 bg-black text-gray-100">
          {label}
        </p>
      }
    </div>
  )
}

export default Card;
