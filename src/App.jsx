import './App.css'
import Block from './components/Block'
/* import { ReactLenis } from 'lenis/react' */

function App() {

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

    return (
/*      <ReactLenis root options={{ autoRaf: true }}> */
            <div className='main'>
                <div className='container'>
                    <div className='services'>
                        <h1>www.unstoppableliving.co.uk</h1>
                        <Block id='' link='#second' title={titleFirst} text={textFirst} />
                        <Block id='second' link='#third' title={titleSecond} text={textSecond} />
                        <Block id='third' link='#fourth' title={titleThird} text={textThird} />
                        <Block id='fourth' link='#fifth' title={titleFourth} text={textFourth} />
                        <Block id='fifth' link='' title={titleFifth} text={textFifth} />
                        <br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
/*        </ReactLenis> */
    )
}

export default App
