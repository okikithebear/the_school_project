import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {contactConfig} from "../content_option";

const Admissions = () => {
    return (
        <Container className="font-mulish font-semibold">

            <Row className="mb-5 mt-3">
                <Col lg="8">
                    <h1 className="display-4 mb-2 tex-darkBlue1"><span
                        className="text-darkgreenVariant">LightWorkers</span> Application</h1>
                    <hr className="t_border my-2 ml-0 text-left"/>
                    <p className="mt-1">We take various subjects, which includes:- Mathematics, Physics, Chemistry,
                        Biology, Advanced mathematics, Sociology, Technical Drawing, History, Music amongst others. You
                        will find below a form on simple informations that will be taken and also a message area for any
                        information in which the applicant wants to give us directly. Also below is our email and phone
                        contacts on reaching us</p>
                </Col>
            </Row>
            <Row className="sec_sp">
                <Col lg="5" className="mb-5">
                    <h3 className="text-darkBlue1 py-4">Get in touch and Apply</h3>
                    <address>
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                            {contactConfig.YOUR_EMAIL}
                        </a>
                        <br/>
                        <br/>
                        {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                            <p>
                                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                            </p>
                        ) : (
                            ""
                        )}
                    </address>
                    <p>{contactConfig.description}</p>
                </Col>
                <Col lg="7" className="d-flex align-items-center">
                    <form className="contact__form w-100">
                        <Row>
                            <Col lg="6" className="form-group">
                                <input
                                    className="form-control focus:outline-darkgreenVariant"
                                    id="name"
                                    name="name"
                                    placeholder="Applicants Name"
                                    type="text"
                                    required
                                />
                            </Col>
                            <Col lg="6" className="form-group">
                                <input
                                    className="form-control rounded-1 focus:outline-darkgreenVariant"
                                    id="email"
                                    name="email"
                                    placeholder="Applicants Email"
                                    type="email"
                                    required
                                />
                            </Col>
                            <Col lg="6" className="form-group">
                                <input
                                    className="form-control rounded-1 focus:outline-darkgreenVariant"
                                    id="phone"
                                    name="tel"
                                    placeholder="Applicants Parents Tel"
                                    type="tel"
                                    required
                                />
                            </Col>
                            <Col lg="6" className="form-group">
                                <input
                                    className="form-control rounded-1 focus:outline-darkgreenVariant"
                                    id="Age"
                                    name="number"
                                    placeholder="Applicants Age"
                                    type="number"
                                    required
                                />
                            </Col>
                            <Col lg="6" className="form-group">
                                <input
                                    className="form-control rounded-1 focus:outline-darkgreenVariant"
                                    id="Address"
                                    name="name"
                                    placeholder="Applicants Address"
                                    type="text"
                                    required
                                />
                            </Col>
                            <Col lg="6" className="form-group">
                                <input
                                    className="form-control rounded-1 focus:outline-darkgreenVariant"
                                    id="Date"
                                    name="date"
                                    placeholder="Applicants Date Of Birth"
                                    type="date"
                                    required
                                />
                            </Col>
                        </Row>
                        <textarea
                            className="form-control rounded-1 focus:outline-darkgreenVariant"
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows="5"
                            required
                        ></textarea>
                        <br/>
                        <Row>
                            <Col lg="12" className="form-group flex text-white">
                                <button
                                    className="py-1.5 px-3 mb-4 mx-auto text-sm font-semibold bg-darkBlue1
                                    hover:bg-darkgreenVariant  transition duration-500 rounded-1 md:text-base"
                                    type=" submit">
                                    Send
                                </button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>

    );
};

export default Admissions;