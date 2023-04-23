import React from 'react'
import './color_picker.scss'

const ColorPicker = () => {
  return (
    <div className="color_pick">
      <div className="arrow"></div>
      <div className="in">
        <div className="main">
          <div className="row">
            <div className="block white"></div>
            <div className="block red"></div>
            <div className="block orange"></div>
            <div className="block yellow"></div>
            <div className="block green"></div>
            <div className="block blue"></div>
            <div className="block purple"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
