import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaWhatsapp, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { SiMercadopago } from 'react-icons/si';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 transparent-footer">
            <Container>
                <Row>
                    <Col xs={12} sm={6} className="text-center text-sm-start mb-3 mb-sm-0">
                        <p className="follow-us">Síguenos en:</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer" className="text-facebook me-2">
                                <FaFacebook />
                            </a>
                            <a href="https://wa.me/numerodetelefono" target="_blank" rel="noopener noreferrer" className="text-whatsapp me-2">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="text-sm-end">
                        <p className="payment-methods">Métodos de Pago:</p>
                        <FaCcVisa className="text-visa larger-icon me-2" />
                        <FaCcMastercard className="text-mastercard me-2" />
                        <SiMercadopago className="text-mercadopago me-2" />

                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text-center mt-2">
                        <p className="footer-text mb-2">© 2024 - DexterSeed</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;


