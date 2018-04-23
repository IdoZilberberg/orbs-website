import React from 'react';
import ContactsLineComponent from './ContactsLineComponent';


class ContactFormComponent extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <div>
                <h1 className='contactFormTitle'>{content.getInTouch}</h1>
                <form
                    target='_blank'
                    className='contactForm'
                    action='https:formspree.io/hello@orbs.com'
                    method='POST'
                >
                    <input type="hidden" name="_next" value='https:ww.orbs.com/' />
                    <div className='formAuthorisation'>
                        <input
                            name='name'
                            className='formAuthorisationFields'
                            type='text'
                            placeholder={content.name}
                        />
                        <input
                            name='_replyto'
                            className='formAuthorisationFields'
                            type='text'
                            placeholder={content.email}
                        />
                    </div>
                    <textarea
                        name='message'
                        rows='4'
                        className='formTextarea'
                        placeholder={content.message}
                    />
                    <input
                        type='submit'
                        value={content.send}
                        className='sendButton'
                    />
                </form>
                <ContactsLineComponent />
            </div>
        );
    }
}
export default ContactFormComponent;
