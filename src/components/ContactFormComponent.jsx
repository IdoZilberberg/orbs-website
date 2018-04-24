import React from 'react';
import ContactsLineComponent from './ContactsLineComponent';
import emailjs from 'emailjs';


class ContactFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formName: '',
            formEmail: '',
            formMessage: ''
        }
    }
    componentWillMount() {
        emailjs.init("user_YwpWsRmWyemm3AydMdNCE")
    }
    submitForm(event) {
        event.preventDefault();
        emailjs.send("default_service", "template_3xctRnKH", {
            from_name: this.state.formName,
            reply_to: this.state.formEmail,
            message: this.state.formMessage
        })
            .then(function (response) {
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function (err) {
                console.log("FAILED. error=", err);
            });
    }
    render() {
        const { formName, formEmail, formMessage } = this.state
        const { content } = this.props;
        const submitForm = this.submitForm.bind(this);
        return (
            <div>
                <h1 className='contactFormTitle'>{content.getInTouch}</h1>
                <form
                    onSubmit={submitForm}
                    className='contactForm'
                >
                    <div className='formAuthorisation'>
                        <input
                            value={formName}
                            onChange={event => this.setState({ formName: event.target.value })}
                            name='name'
                            className='formAuthorisationFields'
                            type='text'
                            placeholder={content.name}
                        />
                        <input
                            value={formEmail}
                            onChange={event => this.setState({ formEmail: event.target.value })}
                            name='email'
                            className='formAuthorisationFields'
                            type='email'
                            placeholder={content.email}
                        />
                    </div>
                    <textarea
                        value={formMessage}
                        onChange={event => this.setState({ formMessage: event.target.value })}
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
