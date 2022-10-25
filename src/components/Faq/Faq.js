import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq-container'>
            <div className='container'>
                <div className="faq-container-item">
                    <h2 className='text-center py-4 text-3xl'>Ask Questions after cheaking the Answer!!</h2>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How do I purchase a course?</Accordion.Header>
                            <Accordion.Body>
                                To purchase your course online just follow the link. Online purchases can either be paid for immediately by credit/debit card, you can nominate somebody else to pay on your behalf, or an invoice can be requested. RQA Members login using their existing membership number and password. Non RQA Members must register their details first.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Do I have to pay VAT?</Accordion.Header>
                            <Accordion.Body>
                                No need to pay extra VAT. All are included with the charge.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How long do I have access to my purchased course?</Accordion.Header>
                            <Accordion.Body>
                                You have access to the courses you have purchased indefinitely.  Access to the assessment will be for life time period from the date of purchase.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Do I have to complete a course in one go?</Accordion.Header>
                            <Accordion.Body>
                                No, you can visit it at anytime, wherever you are. Each course is made up of a number of individual modules which enables you to complete it in your own time and at times convenient to you. If you wish to return to the course at the point you last left it at, please ensure you use the same device to access the course and do not clear your cache in between visits.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Is my purchased course transferable?</Accordion.Header>
                            <Accordion.Body>
                                No. Your course cannot be transferred to anyone else.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Which Tool can be Learned in the Shortest Time?</Accordion.Header>
                            <Accordion.Body>
                                Articulate Storyline 360 has an easy to moderate learning curve which makes it the easiest authoring tool to learn. This is mainly because it:
                                Offers solutions for most eLearning requirements as well as authoring features for developers of all levels of expertise
                                Is similar to the PPT interface but with more options for customization
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Is it Possible to Translate eLearning in-House?</Accordion.Header>
                            <Accordion.Body>
                                Yes, it is possible. However, your in-house team should include expert translators with years of experience or specialized training. Just because your full-time employees are fluent in a language does not mean they are qualified to become eLearning translators.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='faq-spacing'>

                </div>

            </div>
        </div>
    );
};

export default Faq;