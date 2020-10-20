import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { MdComment, MdInfoOutline } from "react-icons/md";
import Section, { Container, Row, Col } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Button from '../../../../components/ui/button'

const CTASection = ({
    sectionStyle,
    heading,
    text,
    ButtonOne,
    ButtonTwo,
    ...props
}) => {
    const ctaData = useStaticQuery(graphql `
        query CtaTwoImgQuery {
            file(relativePath: {eq: "images/bg/cta-bg.png"}) {
                childImageSharp {
                    fluid(maxWidth: 779, maxHeight: 746, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        } 
    `);
    const imageData = ctaData.file.childImageSharp.fluid;
    return ( 
        <Section {...sectionStyle} bgImage={imageData}>
            <Container>
                <Row className="align-items-center text-lg-left text-center">
                    <Col xl={8} lg={7}>
                        <Heading {...heading}>Aprovecha al máximo tu tiempo, apóyate en expertos para tomar <span>las mejores decisiones. </span> </Heading> 
                    </Col> 
                    <Col xl ={4} lg={5} className="text-center">
                        <Button 
                            to="#contacto" 
                            {...ButtonOne} 
                            icon={<MdComment/>}
                            iconposition="left"
                            icondistance="4px"
                            iconsize="16px">
                            Contáctanos
                        </Button> 
                    </Col> 
                </Row> 
            </Container> 
        </Section>
    )
}

CTASection.propTypes = {
    heading: PropTypes.object
}

CTASection.defaultProps = {
    sectionStyle: {
        bgColor: '#f6f2ed',
        bgposition: 'top 35% right -68px',
        bgsize: 'auto',
        pt: '80px',
        pb: '80px',
        responsive: {
            medium: {
                pt: '60px',
                pb: '60px'
            },
            small: {
                pt: '40px',
                pb: '40px'
            }
        }
    },
    heading: {
        as: 'h3',
        child: {
            color: 'primary'
        },
        responsive: {
            medium: {
                mb: '10px'
            }
        }
    },
    text: {
        as: 'span',
        color: 'secondary'
    },
    ButtonOne: {
        skin: 'primary',
        m: '7px'
    },
    ButtonTwo: {
        skin: 'secondary',
        m: '7px'
    }
}


export default CTASection