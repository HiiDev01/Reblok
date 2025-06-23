import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram} from "react-icons/fa6";
import { BiSolidPhone } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import '../headerStyles/MinHeader.css'

const MinHeader = () => {
  return (
    <div className='minheader'>
      <div className='contact'>
        <a href="">
          <span><IoIosMail size={20}/></span>
          infomailreblok@mail.com
        </a>
        <a href="">
          <span><BiSolidPhone size={20}/></span>
          +00 (234) 000 000 00
        </a>
      </div>

      <div className="social">
        <a href="#">
          <FaFacebookF size={16}/>
        </a>
        <a href="#">
          <FaXTwitter size={16}/>
        </a>
        <a href="#">
          <FaLinkedinIn size={16}/>
        </a>
        <a href="#">
          <FaInstagram size={16}/>
        </a>
      </div>
    </div>
  )
}

export default MinHeader
