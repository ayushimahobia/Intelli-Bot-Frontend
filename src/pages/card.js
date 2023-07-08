import React from 'react'
import './card.css'
import { HiDocument } from 'react-icons/hi';
import {ImParagraphLeft} from 'react-icons/im'
import {BiBot} from 'react-icons/bi'


const Card = ({title,desc,icon,onClick}) => {
  return (
    <>
    <div className='cardx' onClick={onClick}>
        <div className='content'>
            <div className='iconx'>
                {icon === 2 ? <HiDocument/> : 
                    icon === 1 ? <ImParagraphLeft/> : 
                        icon === 3 ? <BiBot/> : null
                }
            </div>
            <div className='titlex'>{title}</div>
            <div className='desx'>{desc}</div>
        </div>
    </div>
    </>
  )
}
export default Card;