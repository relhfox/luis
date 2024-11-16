import imag from '../img/img1.png'

const Block = ({ id, link, title, text }) => {
    return (
        <div id={id} className='block'>

            <div className='sub_block'>
                <h2>{title}</h2>
                <div style={{margin: '20px 0 0 0'}}>{text}</div>
            </div>

            <div><img src={imag} style={{borderRadius: '50px'}}/></div>

            <div style={{margin: '40px 0 0 0'}}>
                <a href={link}>=== GO TO THE NEXT ===</a>
            </div>
        </div>
    )
}

export default Block
