import { motion } from 'framer-motion'
import Image_left from './Image_left'
import Image_right from './Image_right'


function Body(props) {
  return (
    <>
      <div className='mainBody'>
        <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
  transition={{ duration: 1}}>
          <Image_right image = {props.image1} heading = {props.heading1} about = {props.about1} link = {props.link} linkText = {props.linkText}/>
        </motion.div>
        <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
  transition={{ duration: 1}}>
          <Image_left image = {props.image2} heading = {props.heading2} about = {props.about2}/>
        </motion.div>
        <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
  transition={{ duration: 1}}>
          <Image_right ight image = {props.image3} heading = {props.heading3} about = {props.about3}/>
        </motion.div>
        <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
  transition={{ duration: 1}}>
          <Image_left image = {props.image4} heading = {props.heading4} about = {props.about4}/>
        </motion.div>
        <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
  transition={{ duration: 1}}>
          <Image_right image = {props.image5} heading = {props.heading5} about = {props.about5}/>
        </motion.div>
        <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
  transition={{ duration: 1}}>
          <Image_left image = {props.image6} heading = {props.heading6} about = {props.about6}/>
        </motion.div>
        <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
  transition={{ duration: 1}}>
          <Image_right image = {props.image7} heading = {props.heading7} about = {props.about7}/>
        </motion.div>
        <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
  transition={{ duration: 1}}>
          <Image_left image = {props.image8} heading = {props.heading8} about = {props.about8}/>
        </motion.div>
        <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
  transition={{ duration: 1}}>
          <Image_right image = {props.image9} heading = {props.heading9} about = {props.about9}/>
        </motion.div>
      </div>
    </>
  )
}
export default Body