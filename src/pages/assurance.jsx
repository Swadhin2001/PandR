import React from 'react'
import Header from '../components/Header'
import Elementor_widget_wrap from '../components/Elementor_widget_wrap'
import Body_5 from '../components/Body_5'
import Footer from '../components/Footer'
import header_image from '../assets/assurance-banner.jpg'
import banner_image1 from '../assets/Audits-provide-assurance-to-stakeholders.jpg'
import banner_image2 from '../assets/An-external-audit-provides-credibility.jpg'
import banner_image3 from '../assets/Auditors-are-well-placed-to-also-provide-sound-general-business-advice.jpg'
import banner_image4 from '../assets/Audit-can-be-a-proactive-way-to-reduce-risk-and-drive-forward-business-strategy.jpg'
import banner_image5 from '../assets/An-audit-improves-internal-systems-and-controls-while-improving-business-process.jpg'
import Elementor_container from '@/components/Elementor_container'
import card_image1 from '../assets/Statutory-Audit.jpg'
import card_image2 from '../assets/Management-Audit.jpg'
import card_image3 from '../assets/Internal-Audit.jpg'
import card_image4 from '../assets/Operational-Audit.jpg'
import card_image5 from '../assets/Limited-Assurance-&-Risk-Review.jpg'
import card_image6 from '../assets/Due-Diligence-&-Reporting.jpg'
import Black_cards from '@/components/Black_cards'


function Assurance() {
  return (
    <>
      <Header image = {header_image} heading = "Providing assurance you need" about ="with transparency, reliability & independence." color = "black"/>
      <Black_cards/>
      <Body_5
        image1 = {banner_image1} heading1 = "Audits provide assurance to stakeholders" about1 = "Most small and medium businessess are run by a small board of directors or a management team on behalf of the shareholders who can be remote with little involvement in the day to day operations of the business. An independent review of the financial statements by an ‘independent external auditor’ can provide transparency and visibility to the shareholders that the company is being run within their best interests and can highlight any issues that have occurred which may not have been brought to their attention. The audit provides them the much needed assurance that all’s well with their business."

        image2 = {banner_image2} heading2 = "An external audit provides credibility" about2 = "Having your financial statements verified by an external auditor can lead to more credibility in the business marketplace than those that have not. Should you be seeking to raise finance or sell your business in the future, providing audited accounts gives security that your accounts are free from material error or malpractice, making you more likely to be successful in achieving your goals. So, even if you ae not required to mandatory get your accounts audited, it is preferable to opt for voluntary audit, which lends more credibility to your business"

        image3 = {banner_image3} heading3 = "Auditors are well placed to also provide sound general business advice" about3 = "The work performed as part of an audit does give us an understanding of how a company and financial reporting function. This means an auditor may be able to identify issues related to internal controls, processes, inefficiencies, cash flows problems as well as company and industry trends. As a result, the work performed during an audit puts an auditor in the best position to provide clients with general business advice based on the insights gained during the engagement."

        image4 = {banner_image4} heading4 = "Audit can be a proactive way to reduce risk and drive forward business strategy" about4 = "Our pragmatic, hands-on approach can help improve your business performance. Use the understanding and insight gained from the audit as a basis for developing strategies to drive your business forward. Reduce risk and improve your organisational performance by challenging existing assumptions and practices. Secure peace of mind from knowing that your statutory obligations are met, accounts are true and potential problems have been identified early on."

        image5 = {banner_image5} heading5 = "An audit improves internal systems and controls, while improving business process" about5 = "As auditors, we do not just focus on the numbers but will gain an understanding of the overall systems and controls environment of the business. This will enable us to identify deficiencies in the accounting systems or controls for which recommendations can be made, making your business more efficient and less prone to fraud or error. Our findings can help you steamline important business processess, making it more effective and efficient, leading to direct business gains"
      />
      <Elementor_container
      heading = "Our Services under Assurance Practice"
      image1 = {card_image1} heading1 = "Statutory Audit" about1 = "In a limited liability entity, where the entity is distinct from their shareholders, there is a statutory need to obtain independent assurance from auditors. The purpose of a statutory audit audit is to independently examine and verify the financial statements to determine if it provides a true and fair view and the financials are prepared in accordance with applicable accounting standards and accounting principles"
      image2 = {card_image2} heading2 = "Management Audit" about2 = "Management audit is an analysis and assessment of the competencies and capabilities of a company’s management in carrying out corporate objectives. It is an assessment of how well an organization’s management team is applying its strategies and resources. It is an audit to evaluate if the management team is working in the best interest of shareholders, employees, and the company’s reputation."
      image3 = {card_image3} heading3 = "Internal Audit" about3 = "An internal audit is designed to assess key risks facing the business, effectiveness of the business in managing those risks along with the control processes that management have implemented. Internal auditors often perform a more advisory role by issuing recommendations aimed to support management in improving their systems and controls for the instances where they identify deficiencies in certain business areas. "
      image4 = {card_image4} heading4 = "Operational Audit" about4 = "Businesses can get a decent idea of how they are doing in operations by examining company data on their own. However, sometimes those close to the company or those very familiar with the operations don’t review this data completely objectively An operational audit is an examination of the manner in which an organization conducts business, with the objective of pointing out improvements."
      image5 = {card_image5} heading5 = "Limited Assurance & Risk Review" about5 = "Where a full statutory audit is not required, companies may consider other types of limited assurance over the financial position & risk. An assurance review can provide both internal and external confidence over the financial statements & risk position and depending on the scope of the work, could cover the full financial position, or just key areas of concern or risk."
      image6 = {card_image6} heading6 = "Due Diligence & Reporting" about6 = "Due diligence is a comprehensive appraisal of a business undertaken by a prospective buyer, especially to establish its assets and liabilities and evaluate its commercial potential. It is a process to confirm all relevant facts and financial information. Due diligence is taken up at the instance of a potential buyer and completed before a deal closes to provide the buyer with an assurance of what they’re getting."
      />
      <Footer/>
    </>
  )
}

export default Assurance