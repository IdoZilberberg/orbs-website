import React from 'react';
import textContent from 'textContentLocalisation';
import ContactsLineComponent from './ContactsLineComponent';


const ContactFormComponent = () => {
    return (
        <div>
            <h1 className='contactFormTitle'>{textContent.contactForm.getInTouch}</h1>
            <form
                target='_blank'
                className='contactForm'
                action='https://formspree.io/hello@orbs.com'
                method='POST'
            >
                <input type="hidden" name="_next" value='https://www.orbs.com/' />
                <div className='formAuthorisation'>
                    <input
                        name='name'
                        className='formAuthorisationFields'
                        type='text'
                        placeholder={textContent.contactForm.name}
                    />
                    <input
                        name='_replyto'
                        className='formAuthorisationFields'
                        type='text'
                        placeholder={textContent.contactForm.email}
                    />
                </div>
                <textarea
                    name='message'
                    rows='4'
                    className='formTextarea'
                    placeholder={textContent.contactForm.message}
                />
                <input
                    type='submit'
                    value={textContent.contactForm.send}
                    className='sendButton'
                />
            </form>
            <ContactsLineComponent />
        </div>
    );
}

export default ContactFormComponent;
