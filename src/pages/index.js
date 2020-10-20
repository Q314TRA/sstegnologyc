import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'

// import Header from '../containers/layout/header/header-five'
import Header from '../containers/layout/header/header-four'

import Footer from '../containers/layout/footer/footer-one'

// import HeroArea from '../containers/index-cybersecurity/hero-area'
import HeroArea from '../containers/index-services/hero-area'


import AboutArea from '../containers/index-cybersecurity/about-area'
import ServicesArea from '../containers/index-cybersecurity/services-area'
import FeaturesArea from '../containers/index-cybersecurity/features-area'
import FunFactArea from '../containers/global/funfact-area/section-one'
import CaseStudyArea from '../containers/index-cybersecurity/case-study-area'
import PricingArea from '../containers/index-cybersecurity/pricing-area'
import BlogArea from '../containers/index-cybersecurity/blog-area'
import ClientsArea from '../containers/index-cybersecurity/clients-area'
import ContactFormArea from '../containers/index-cybersecurity/contact-form-area'
import ContactInfoArea from '../containers/global/contact-area/contact-two'

import CTAArea from '../containers/global/cta-area/section-two'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO />
    <Header transparent/>
    <main className="site-wrapper-reveal">
      <HeroArea />
      <FeaturesArea />
      <CTAArea/>
      <AboutArea />
      <ServicesArea />
      <ClientsArea />
      <ContactFormArea />
      <ContactInfoArea />
    </main>
  </Layout>
)

export default IndexPage
