import React from 'react'
import ReactDom from 'react-dom'

import myClasses from './Modal.module.css'

const BackDrop = (props) => {
  return <div className={myClasses.backdrop} onClick={props.onClose} ></div>
}

const ModalOverlay = (props) => {
  return (
    <div className={myClasses.modal}>
      <div className={myClasses.content}>{props.children}</div>
    </div>
  )
}

const potalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<BackDrop onClose={props.onClose} />, potalElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, potalElement)}
    </>
  )
}

export default Modal