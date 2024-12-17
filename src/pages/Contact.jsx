import Swal from 'sweetalert2'

const Contact = () => {

    const styles = {
        margin: '20px 0 0 0'
    }

    const handler = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.append("access_key", '5e032fe9-f35b-4106-b46a-f21d4ddd776b')
    
        const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)
    
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json())
    
        if (res.success) {
            Swal.fire({
                title: "Message sent!",
                text: "We'll get back to you! It's safe to close the form now.",
                icon: "success"
            })
        }
    }

    return (
        <div className="block">
            <form onSubmit={handler} style={{maxWidth: '800px', width: '100%', fontSize: '25px'}}>
                <div>
                    <label>*Your name:</label>
                    <input type="text" name="name" className='field' required/>
                </div>
                <div style={styles}>
                    <label>E-mail:</label>
                    <input type="email" name="email" className='field'/>
                </div>
                <div style={styles}>
                    <label>Phone number:</label>
                    <input type="text" name="phone" className='field'/>
                </div>
                <div style={styles}>Specify preferred contact type:</div>
                <div>
                    <input type="radio" name="preferred contact" value='by email'/>
                    <label>by e-mail</label>
                </div>
                <div>
                    <input type="radio" name="preferred contact" value='by phone'/>
                    <label>by phone</label>
                </div>
                <div>
                    <input type="radio" name="preferred contact" value='any' checked="checked"/>
                    <label>any</label>
                </div>
                <div style={styles}>
                    <label>*Your message:</label><br />
                    <textarea name="message" className='field messag' required></textarea>
                </div>
                <div style={styles}>
                    <label>*Specify your needs please:</label><br />
                    <textarea name="needs" className='field messag' required></textarea>
                </div>
                <div style={styles}>
                    <label>*Specify preferred engagement type:</label><br />
                    <textarea name="preferred engagement" className='field messag' required></textarea>
                </div>
                <button type="submit">Submit Form</button>
                <br />
                <br />
                <br />
            </form>
        </div>
    )
}

export default Contact
