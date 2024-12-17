import Hero from '../components/Hero'
import Block from '../components/Block'

const Services = () => {

    const titleFirst = 'Strategic Advisory'
    const titleSecond = 'Physical Accessibility Stress Testing'
    const titleThird = 'Digital Accessibility User Testing'
    const titleFourth = 'Professional Coaching'
    const titleFifth = 'Speaking Engagements'

    const textFirst = 'Offering flexible consulting options — day rate, retainer, or custom arrangements.'
    const textSecond = 'Assessing physical spaces to ensure they are truly accessible to everyone.'
    const textThird = 'Evaluating online presence and internal systems to prevent exclusion.'
    const textFourth = 'Offering personalized coaching to professionals and organizations aiming to enhance their understanding and application of inclusion and accessibility principles.'
    const textFifth = 'Delivering engaging and insightful talks on inclusion, accessibility, and sustainable impact at conferences, seminars, and corporate events.'

    return (<>
        <Hero />
        <div className='services'>
            <Block title={titleFirst} text={textFirst} link={titleSecond}/>
            <Block title={titleSecond} text={textSecond} link={titleThird}/>
            <Block title={titleThird} text={textThird} link={titleFourth}/>
            <Block title={titleFourth} text={textFourth} link={titleFifth}/>
            <Block title={titleFifth} text={textFifth} link=''/>
            <br /><br /><br /><br /><br />
        </div>
    </>)
}

export default Services
