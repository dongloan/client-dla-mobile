import React, { Component } from 'react'

class ContactPage extends Component {
    render() {
        return (
            <section className="contact-page-main">
                <div className="contact-page-main__sub__title">
                    <h1>Send Us A Message</h1>
                    <div className="hr-contact"></div>
                </div>
                <div className="contact-page-main__form">
                    <form className="contact-page-main__form__sub" action="mailto:trungdong400@gmail.com" method="post">

                        <div className="contact-page-main__form__sub__input">
                            <div className="contact-page-main__form__sub__input__left">
                                <input type="text" placeholder="First Name" className="beside-input w-input" />
                            </div>
                            <div className="contact-page-main__form__sub__input__right">
                                <input type="text" placeholder="Last Name" className="beside-input w-input" />
                            </div>
                        </div>
                        <div className="contact-page-main__form__sub__email">
                            <input placeholder="Your Email * " className="beside-input w-input" />
                        </div>
                        <div className="contact-page-main__form__sub__textarea">
                            <textarea placeholder="Message" type="text" className="beside-textarea"></textarea>
                        </div>
                        <div>
                            <input type="submit" className="button-contact" />
                        </div>

                    </form>
                </div>
            </section>
        )
    }
}

export default ContactPage;
