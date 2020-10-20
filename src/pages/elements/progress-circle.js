import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import CTA from '../../containers/global/cta-area/section-one'
import SectionOne from '../../containers/elements/progress-circle/section-one'
import SectionTwo from '../../containers/elements/progress-circle/section-two'
import SectionThree from '../../containers/elements/progress-circle/section-three'

const ProgressCirclePage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Progress Circle" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Progress Circle"
            />
            <main className="site-wrapper-reveal">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <CTA />
            </main>
            <Footer />
        </Layout>
    )
}

export default ProgressCirclePage
