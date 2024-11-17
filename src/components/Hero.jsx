import servicePic from '../img/img1.png'
import { motion } from 'motion/react'

const Hero = () => {

    const forAnimat = (delay) => ({
        hidden: { x: 300, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay }
        }
    })

    return (
        <div className='block'>

            <div>
                <motion.img
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    src={servicePic}
                    style={{borderRadius: '50px'}}
                />
            </div>

            <div style={{maxWidth: '500px', margin: '0 0 0 20px', lineHeight: 'normal'}}>
                <motion.h2
                    variants={forAnimat(0)}
                    initial='hidden'
                    animate='visible'
                    style={{textShadow: 'black 3px 3px'}}
                >Luis Canto E Castro</motion.h2>
                
                <motion.div
                    variants={forAnimat(0.7)}
                    initial='hidden'
                    animate='visible'
                    style={{margin: '20px 0 0 0'}}
                >The text describing the person, and more text describing the person. The text describing the person, and yet more text describing the person. The text describing the person, more text describing the person.</motion.div>
            </div>

            <div style={{margin: '40px 0 0 0'}}>
                <a href='#Strategic Advisory'>=== THE SERVICES I PROVIDE ===</a>
            </div>
        </div>
    )
}

export default Hero
