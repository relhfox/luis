import servicePic from '../img/img1.png'
import { motion } from 'motion/react'

const Block = ({ title, text, link }) => {

    const forAnimat = (delay) => ({
        hidden: { x: -300, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay }
        }
    })

    return (
        <div id={title} className='block'>

            <div style={{maxWidth: '500px', margin: '0 20px 0 0', lineHeight: 'normal'}}>
                <motion.h2
                    variants={forAnimat(0)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    style={{textShadow: 'black 3px 3px'}}
                >{title}</motion.h2>

                <motion.div
                    variants={forAnimat(0.7)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    style={{margin: '20px 0 0 0'}}
                >{text}</motion.div>
            </div>

            <div>
                <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0 }}
                    src={servicePic}
                    style={{borderRadius: '50px'}}
                />
            </div>

            <div style={{margin: '40px 0 0 0'}}>
                <a href={`#${link}`}>=== ROLL TO THE NEXT ===</a>
            </div>
        </div>
    )
}

export default Block
