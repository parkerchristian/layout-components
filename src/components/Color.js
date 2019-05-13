import React from 'react';

const hexFromColor = color => {
  return `${color.toString(16).padStart(2, 0)}`.toUpperCase();
};

const hexFromRGB = (rgb) => {
  return `#${hexFromColor(rgb.red)}${hexFromColor(rgb.green)}${hexFromColor(rgb.blue)}`;
};

export default function Color() {
  const name = 'Black';
  const rgb = {
    red: 0,
    green: 0,
    blue: 0
  };
  const hex = hexFromRGB(rgb);

  const colorStyle = {
    display: 'inline-block',
    backgroundColor: hex,
    width: '0.8em',
    height: '0.8em'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name} <div style={colorStyle}></div></dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>
        <p>Red - {rgb.red}</p>
        <p>Green - {rgb.green}</p>
        <p>Blue - {rgb.blue}</p>
      </dd>
    </dl>
  );
}
