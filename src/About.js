import './About.css'

function About() {
    return (
        <div className='About'>
            <div className='Profile'>
                <div>
                    <img className='ProfilePicture' src={'https://rafaeldomingues41431.github.io/Portfolio/Foto.png'} alt='' />
                </div>
                <div className='WhoAmI'>
                    <h3>Who am i?</h3>
                    <br></br>
                    <p>
                        Hi, I'm Rafael and I'm looking to
                        improve my skills in software development.
                    </p>
                    <p>
                        My preference is back-end development (APIs, databases and webapp prototypes).
                        I have used SpringMVC and ExpressJS to create APIs, JQuery and React for Web Apps.
                        I try to avoid dealing with UI/UX design, i find it difficult to create pleasing and intuitive UIs
                        and feel a bit of annoyance towards tinkering with CSS.
                    </p>
                    <p>
                        I also have an interest in embedded software, I have academic experience with C/C++ and would
                        like to improve my skills further to write hight quality high performance code.
                        Regretably when it comes to embedded software itself the most I have done was interact with Arduino LEDs and
                        send some text data back and forth.
                    </p>
                </div>
            </div>
            <div className='Contacts'>
                <img className='ContactsIcon' src={'https://rafaeldomingues41431.github.io/Portfolio/Gmail_icon_(2020).svg.png'} />
                <p className='ContactsText'>rafael.baeta.comingues@gmail.com</p>
                <img className='ContactsIcon' src={'https://rafaeldomingues41431.github.io/Portfolio/Mobile-Smartphone-icon.png'} />
                <p className='ContactsText'>935377874</p>
                <img className='ContactsIcon' src={'https://rafaeldomingues41431.github.io/Portfolio/174857.png'} />
                <a className='ContactsText' href='https://www.linkedin.com/in/rafael-domingues-45511b206/'>https://www.linkedin.com/in/rafael-domingues-45511b206/</a>
                <img className='ContactsIcon' src={'https://rafaeldomingues41431.github.io/Portfolio/25231.png'} />
                <a className='ContactsText' href='https://github.com/RafaelDomingues41431'>https://github.com/RafaelDomingues41431</a>
            </div>
        </div>
    )
}

export default About