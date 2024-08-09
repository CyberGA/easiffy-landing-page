import Link from "next/link";

type PolicyData = {
  headline?: string;
  subHeadine?: string;
  content: string | React.ReactNode;
};

interface IPolicy {
  title: string;
  data: Array<PolicyData>;
}

const items: Array<IPolicy> = [
  {
    title: "Information We Collect",
    data: [
      {
        headline: "Personal Information",
        content:
          "We collect personal information that you voluntarily provide to us when registering at the website or app, expressing an interest in obtaining information about us or our products and services, when participating in activities on the website or app, or otherwise contacting us. The personal information we collect may include, but is not limited to: ",
      },
      {
        subHeadine: "Full Name:",
        content: "To personalize your experience and identify you.",
      },
      {
        subHeadine: "Email Address: ",
        content:
          "Email Address: For communication purposes, including account verification, notifications, and updates.",
      },
      {
        subHeadine: "Phone Number:",
        content: "For contact and support purposes.",
      },
      {
        subHeadine: "Payment Information:",
        content:
          "Including credit card details, billing address, and transaction history for processing payments.",
      },
      {
        subHeadine: "Mailing Address:",
        content: "For shipping products or sending physical correspondence.",
      },
      {
        headline: "Non-Personal Information",
        content:
          "We also collect non-personal information that does not identify you or any other individual, such as:",
      },
      {
        subHeadine: "Browser and Device Information:",
        content:
          "Including the type of browser, version, operating system, device type, and other technical details.",
      },
      {
        subHeadine: "Usage Data:",
        content:
          "Such as pages visited, time spent on pages, clickstream data, and other analytical data.",
      },
      {
        subHeadine: "IP Address:",
        content:
          "To help diagnose problems with our server, administer the website, and gather broad demographic information.",
      },
      {
        headline: "Cookies and Tracking Technologies",
        content:
          "We use cookies, web beacons, and other tracking technologies to collect information about your browsing activities, preferences, and interaction with our services. Cookies are small data files stored on your device that help improve your user experience. You can manage your cookie preferences through your browser settings.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    data: [
      {
        content:
          "We use the collected information for various purposes, including but not limited to:",
      },
      {
        subHeadine: "Providing and Maintaining Services",
        content:
          "To deliver the services you request, manage your account, and provide customer support.",
      },
      {
        subHeadine: "Improving Our Services",
        content:
          "To enhance our platform, develop new features, and improve user experience.",
      },
      {
        subHeadine: "Communicating with You",
        content:
          "To send updates, newsletters, marketing materials, and other information that may be of interest to you.",
      },
      {
        subHeadine: "Processing Transactions",
        content: "To process payments and manage orders.",
      },
      {
        subHeadine: "Ensuring Security:",
        content:
          "To detect, prevent, and address technical issues, and to protect against fraud and abuse.",
      },
      {
        headline: "Providing and Maintaining Services",
        content:
          "We use your personal information to provide you with the services you have requested, including setting up your account, processing transactions, and providing customer support. This includes:",
      },
      {
        subHeadine: "Account Creation and Management:",
        content:
          "Using your email and personal details to create and maintain your user account.",
      },
      {
        subHeadine: "Payment Processing:",
        content:
          "Processing your payment information for purchases and subscriptions.",
      },
      {
        subHeadine: "Customer Support:",
        content:
          "Using your contact information to provide assistance and support for your inquiries or issues.",
      },
      {
        headline: "Improving Our Services",
        content:
          "We analyse the information we collect to improve our services and develop new features. This includes:",
      },
      {
        subHeadine: "User Experience Analysis:",
        content:
          "Analysing usage data to understand how users interact with our platform.",
      },
      {
        subHeadine: "Feature Development:",
        content:
          "Using feedback and usage data to develop and improve our services and features.",
      },
      {
        subHeadine: "Performance Monitoring:",
        content:
          "Monitoring the performance and reliability of our platform to ensure a high-quality experience.",
      },
      {
        headline: "Communicating with You",
        content:
          "We use your contact information to communicate with you about your account, transactions, and updates to our services. This includes:",
      },
      {
        subHeadine: "Account Notifications:",
        content:
          "Sending notifications about your account status, security alerts, and important updates.",
      },
      {
        subHeadine: "Marketing Communications:",
        content:
          "Sending newsletters, promotions, and other marketing materials if you have opted in to receive them.",
      },
      {
        subHeadine: "Feedback Requests:",
        content:
          "Requesting your feedback on our services to help us improve and better meet your needs.",
      },
      {
        headline: "Processing Transactions",
        content:
          "We use your payment information to process transactions for purchases and subscriptions. This includes:",
      },
      {
        subHeadine: "Transaction Processing:",
        content:
          "Using your payment information to process payments securely and efficiently.",
      },
      {
        subHeadine: "Billing and Invoicing:",
        content: "Sending invoices and billing statements for your records.",
      },
      {
        subHeadine: "Fraud Prevention:",
        content:
          "Monitoring transactions for fraudulent activity and taking steps to protect your account.",
      },
      {
        headline: "Ensuring Security",
        content:
          "We use your information to maintain the security and integrity of our platform. This includes:",
      },
      {
        subHeadine: "Security Monitoring:",
        content:
          "Monitoring for suspicious activity and potential security threats.",
      },
      {
        subHeadine: "Data Encryption:",
        content:
          "Using encryption and other security measures to protect your information.",
      },
      {
        subHeadine: "Access Controls:",
        content:
          "Implementing access controls to ensure that only authorized personnel have access to your data.",
      },
    ],
  },
  {
    title: "Sharing Your Information",
    data: [
      {
        content:
          "We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this Privacy Policy. We may share your information in the following situations:",
      },
      {
        subHeadine: "With Service Providers:",
        content:
          "We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and marketing assistance.",
      },
      {
        subHeadine: "For Legal Requirements:",
        content:
          "We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).",
      },
      {
        headline: "With Service Providers",
        content:
          "We engage third-party service providers to perform various services on our behalf. These service providers may have access to your personal information as needed to perform their functions but are not permitted to use it for other purposes. Examples include:",
      },
      {
        subHeadine: "Payment Processors:",
        content: "Processing your payment transactions securely.",
      },
      {
        subHeadine: "Data Analysts:",
        content: "Analysing usage data to help us improve our services.",
      },
      {
        subHeadine: "Marketing Partners:",
        content: "Assisting with our marketing efforts and campaigns.",
      },
      {
        headline: "For Legal Requirements",
        content:
          "We may disclose your personal information to comply with legal obligations or respond to lawful requests from public authorities. This includes:",
      },
      {
        subHeadine: "Compliance with Laws:",
        content:
          "Disclosing information as required by law, regulation, or legal process.",
      },
      {
        subHeadine: "Protection of Rights:",
        content:
          "Disclosing information to protect our rights, property, or safety, or the rights, property, or safety of others.",
      },
      {
        subHeadine: "Law Enforcement Requests:",
        content:
          "Responding to requests from law enforcement agencies or other government authorities.",
      },
    ],
  },
  {
    title: "Data Security",
    data: [
      {
        content:
          "We implement a variety of security measures to maintain the safety of your personal information. These measures include:",
      },
      {
        subHeadine: "Encryption:",
        content:
          "Data transmitted between your browser and our servers is encrypted using SSL/TLS protocols.",
      },
      {
        subHeadine: "Access Controls:",
        content:
          "Access to personal data is restricted to authorized personnel only.",
      },
      {
        subHeadine: "Regular Audits:",
        content:
          "We conduct regular audits and assessments of our data security practices.",
      },
      {
        headline: "Encryption",
        content:
          "We use encryption technologies to protect the confidentiality and integrity of your personal information during transmission. This includes:",
      },
      {
        subHeadine: "SSL/TLS Encryption:",
        content:
          "Securing data transmitted between your browser and our servers using industry-standard encryption protocols.",
      },
      {
        headline: "Access Controls",
        content:
          "We implement access controls to ensure that only authorized personnel have access to your personal data. This includes:",
      },
      {
        subHeadine: "Role-Based Access:",
        content:
          "Granting access to personal data based on the role and responsibilities of our employees.",
      },
      {
        subHeadine: "Authentication:",
        content:
          "Requiring strong authentication methods for accessing sensitive information.",
      },
      {
        headline: "Regular Audits",
        content:
          "We regularly audit our data security practices to identify and address potential vulnerabilities. This includes:",
      },
      {
        subHeadine: "Security Assessments:",
        content:
          "Conducting periodic security assessments and penetration tests.",
      },
      {
        subHeadine: "Compliance Audits:",
        content:
          "Ensuring compliance with relevant data protection regulations and standards.",
      },
    ],
  },
  {
    title: "Your Data Protection Rights",
    data: [
      {
        content:
          "You have certain rights regarding your personal information, including:",
      },
      {
        subHeadine: "Access:",
        content:
          "You have the right to request a copy of the personal data we hold about you.",
      },
      {
        subHeadine: "Correction:",
        content:
          "You have the right to request that we correct any information you believe is inaccurate or incomplete.",
      },
      {
        subHeadine: "Deletion:",
        content:
          "You have the right to request the deletion of your personal data, subject to certain conditions.",
      },
      {
        subHeadine: "Restriction:",
        content:
          "You have the right to request the restriction of processing your personal data under certain circumstances.",
      },
      {
        subHeadine: "Objection:",
        content:
          "You have the right to object to our processing of your personal data.",
      },
      {
        content:
          "To exercise any of these rights, please contact us using the contact information provided below.",
      },
      {
        headline: "Access",
        content:
          "You have the right to request a copy of the personal data we hold about you. To do so, please:",
      },
      {
        subHeadine: "Submit a Request:",
        content:
          "Contact us with your request for access to your personal data.",
      },
      {
        subHeadine: "Verification:",
        content:
          "Provide sufficient information for us to verify your identity before fulfilling your request.",
      },
      {
        headline: "Correction",
        content:
          "You have the right to request that we correct any information you believe is inaccurate or incomplete. To request a correction:",
      },
      {
        subHeadine: "Submit a Request:",
        content:
          "Contact us with details of the information you believe is incorrect and the corrections you are requesting.",
      },
      {
        subHeadine: "Verification:",
        content:
          "Provide sufficient information for us to verify your identity and the accuracy of the requested corrections.",
      },
      {
        headline: "Deletion",
        content:
          "You have the right to request the deletion of your personal data, subject to certain conditions. To request deletion:",
      },
      {
        subHeadine: "Submit a Request:",
        content: "Contact us with details of the data you wish to be deleted.",
      },
      {
        subHeadine: "Verification:",
        content:
          "Provide sufficient information for us to verify your identity and the legitimacy of the deletion request.",
      },
      {
        subHeadine: "Conditions:",
        content:
          "Note that we may retain certain information as required by law or for legitimate business purposes.",
      },
      {
        headline: "Restriction",
        content:
          "You have the right to request the restriction of processing your personal data under certain circumstances. To request a restriction:",
      },
      {
        subHeadine: "Submit a Request:",
        content:
          "Contact us with details of the processing activities you wish to restrict.",
      },
      {
        subHeadine: "Verification:",
        content:
          "Provide sufficient information for us to verify your identity and the legitimacy of the restriction request.",
      },
      {
        subHeadine: "Conditions:",
        content:
          "We will inform you of the implications of restricting the processing of your data.",
      },
      {
        headline: "Objection",
        content:
          "You have the right to object to our processing of your personal data. To object:",
      },
      {
        subHeadine: "Submit a Request:",
        content:
          "Contact us with details of the specific processing activities to which you object.",
      },
      {
        subHeadine: "Verification:",
        content:
          "Provide sufficient information for us to verify your identity and the nature of your objection.",
      },
      {
        subHeadine: "Conditions:",
        content:
          "Note that we may continue to process your data if we have compelling legitimate grounds or if it is required for legal claims.",
      },
    ],
  },
  {
    title: "Data Retention",
    data: [
      {
        content:
          "We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law. Factors determining the retention period include:",
      },
      {
        subHeadine: "Legal Obligations:",
        content:
          "Retaining information as required by applicable laws and regulations.",
      },
      {
        subHeadine: "Business Operations:",
        content:
          "Retaining information as necessary to support our business operations and provide our services.",
      },
      {
        subHeadine: "Dispute Resolution:",
        content:
          "Retaining information as necessary to resolve disputes, enforce our agreements, and protect our legal rights.",
      },
      {
        headline: "Legal Obligations",
        content:
          "We retain personal information as required by law, including:",
      },
      {
        subHeadine: "Compliance with Regulations:",
        content: "Retaining data to comply with financial and tax regulations.",
      },
      {
        subHeadine: "Legal Claims:",
        content: "Retaining data to support legal claims and proceedings.",
      },
      {
        headline: "Business Operations",
        content:
          "We retain personal information to support our business operations, including:",
      },
      {
        subHeadine: "Account Management:",
        content:
          "Retaining data to manage your account and provide ongoing services.",
      },
      {
        subHeadine: "Service Improvement:",
        content:
          "Retaining data to analyze and improve our services and user experience.",
      },
      {
        headline: "Dispute Resolution",
        content:
          "We retain personal information to resolve disputes and enforce our agreements, including:",
      },
      {
        subHeadine: "Legal Proceedings:",
        content:
          "Retaining data as necessary for legal proceedings and claims.",
      },
      {
        subHeadine: "Contractual Obligations:",
        content:
          "Retaining data to fulfil our contractual obligations and enforce o",
      },
    ],
  },
  {
    title: "International Data Transfers",
    data: [
      {
        content:
          "Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. We ensure that any international data transfers comply with applicable data protection laws and that your information is adequately protected.",
      },
      {
        headline: "Adequacy Decisions",
        content:
          "We may transfer your personal data to countries or organizations that have been recognized by relevant authorities as providing an adequate level of data protection.",
      },
      {
        headline: "Standard Contractual Clauses",
        content:
          "Where applicable, we use standard contractual clauses approved by relevant authorities to ensure that your data is protected when transferred internationally.",
      },
      {
        headline: "Consent",
        content:
          "By using our services and providing us with your information, you consent to the transfer of your personal data to countries outside your own.",
      },
    ],
  },
  {
    title: "Third-Party Links and Services",
    data: [
      {
        content:
          "Our services may contain links to third-party websites, products, or services that are not owned or controlled by Easiffy. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to review the privacy policies of any third-party sites or services before providing any personal information.",
      },
      {
        headline: "Links to Other Sites",
        content:
          "Our platform may include links to external websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.",
      },
      {
        headline: "Third-Party Services",
        content:
          "We may use third-party services to enhance our platform, including:",
      },
      {
        subHeadine: "Payment Processors:",
        content:
          "Third-party payment processing services that handle transactions on our behalf.",
      },
      {
        subHeadine: "Analytics Providers:",
        content:
          "Third-party analytics services that help us understand and analyze usage data.",
      },
      {
        subHeadine: "Marketing Services:",
        content:
          "Third-party marketing services that assist with our marketing efforts.",
      },
    ],
  },
  {
    title: "Children's Privacy",
    data: [
      {
        content:
          "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a user under the age of 13, we will delete such information from our records. If you believe that a child under 13 has provided us with personal information, please contact us immediately.",
      },
      {
        headline: "Parental Consent",
        content:
          "For users under the age of 18 but older than 13, we require verifiable parental consent before collecting any personal information. Parents or guardians must provide and authorize the collection of personal information.",
      },
      {
        headline: "Deletion Requests",
        content:
          "If we learn that we have collected personal information from a child under the age of 13 without verification of parental consent, we will take steps to delete that information. Parents or guardians can contact us to request the deletion of their child's information.",
      },
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    data: [
      {
        content:
          "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
      },
      {
        headline: "Notification of Changes",
        content:
          "We will notify you of any significant changes to our Privacy Policy by email or through a prominent notice on our platform.",
      },
      {
        headline: "Effective Date",
        content:
          "The effective date of this Privacy Policy is indicated at the top of the document. Any changes to this Privacy Policy will become effective upon posting on this page.",
      },
      {
        headline: "Continued Use",
        content:
          "Your continued use of our services after the posting of changes constitutes your acceptance of such changes. If you do not agree with the changes, you should discontinue using our services and contact us to deactivate your account.",
      },
    ],
  },
  {
    title: "Contact Us",
    data: [
      {
        content:
          "If you have any questions about this Privacy Policy, please contact us:",
      },
      {
        subHeadine: "Email:",
        content: <span className="text-primary-60">support@easiffy.com</span>,
      },
      {
        subHeadine: "Mailing Address:",
        content: (
          <span className="text-primary-60">
            Easiffy Technologies, [Address], [City], [State], [Postal Code]
          </span>
        ),
      },
      {
        headline: "Privacy Inquiries",
        content:
          "For any privacy-related inquiries or concerns, you can reach out to our dedicated privacy team via the contact information provided above.",
      },
      {
        headline: "Privacy Inquiries",
        content:
          "For any privacy-related inquiries or concerns, you can reach out to our dedicated privacy team via the contact information provided above.",
      },
      {
        headline: "Data Protection Officer",
        content:
          "If you have specific questions regarding our data protection practices, you can contact our Data Protection Officer at the email address provided above.",
      },
      {
        headline: "Complaint Resolution",
        content:
          "If you are not satisfied with our response to your privacy inquiries, you have the right to lodge a complaint with the relevant data protection authority. Thank you for trusting Easiffy with your personal information. We are committed to safeguarding your privacy and providing a secure and transparent user experience.",
      },
    ],
  },
  {
    title: "Data Protection Principles",
    data: [
      {
        content:
          "We adhere to the following principles to ensure the protection of your personal data:",
      },
      {
        subHeadine: "Lawfulness, Fairness, and Transparency:",
        content:
          "We process personal data lawfully, fairly, and in a transparent manner.",
      },
      {
        subHeadine: "Purpose Limitation",
        content:
          "We collect personal data for specified, explicit, and legitimate purposes and do not process it in a manner incompatible with those purposes.",
      },
      {
        subHeadine: "Data Minimization",
        content:
          "We collect and process only the personal data that is necessary for the purposes for which it is collected.",
      },
      {
        subHeadine: "Accuracy",
        content:
          "We ensure that personal data is accurate and kept up to date.",
      },
      {
        subHeadine: "Storage Limitation",
        content:
          "We keep personal data in a form that permits identification of data subjects for no longer than is necessary for the purposes for which the personal data is processed.",
      },
      {
        subHeadine: "Integrity and Confidentiality:",
        content:
          "We process personal data in a manner that ensures appropriate security, including protection against unauthorized or unlawful processing and against accidental loss, destruction, or damage.",
      },
      {
        subHeadine: "Accountability:",
        content:
          "We are responsible for, and able to demonstrate compliance with, these principles.",
      },
      {
        headline: "Lawfulness, Fairness, and Transparency:",
        content:
          "We ensure that your personal data is processed lawfully, fairly, and in a transparent manner. This includes:",
      },
      {
        subHeadine: "Providing Clear Information:",
        content:
          "Informing you about how your data is collected, used, and shared.",
      },
      {
        subHeadine: "Obtaining Consent:",
        content:
          "Ensuring that your consent is obtained where required and that you have the ability to withdraw consent at any time.",
      },
      {
        headline: "Purpose Limitation",
        content:
          "We collect personal data for specific, explicit, and legitimate purposes. This includes:",
      },
      {
        subHeadine: "Defining Purposes:",
        content:
          "Clearly defining the purposes for which personal data is collected and processed.",
      },
      {
        subHeadine: "Limiting Use:",
        content:
          "Ensuring that personal data is not used for purposes beyond those for which it was collected, unless you have provided additional consent.",
      },
      {
        headline: "Data Minimization",
        content:
          "We collect only the personal data that is necessary for the purposes for which it is processed. This includes:",
      },
      {
        subHeadine: "Collecting Relevant Data:",
        content:
          "Ensuring that we only collect data that is relevant and necessary for the specified purposes.",
      },
      {
        subHeadine: "Avoiding Excessive Data Collection:",
        content:
          "Avoiding the collection of unnecessary or excessive personal data.",
      },
      {
        headline: "Accuracy",
        content:
          "We ensure that personal data is accurate and kept up to date. This includes:",
      },
      {
        subHeadine: "Regular Updates:",
        content:
          "Regularly updating and correcting personal data to ensure its accuracy.",
      },
      {
        subHeadine: "User Access:",
        content:
          "Providing you with the ability to access and update your personal data.",
      },
      {
        headline: "Storage Limitation",
        content:
          "We retain personal data only for as long as necessary for the specified purposes. This includes: ",
      },
      {
        subHeadine: "Defining Retention Periods:",
        content:
          "Clearly defining the retention periods for different types of personal data. Secure Deletion: Ensuring that personal data is securely deleted or anonymized when it is no longer needed for the specified purposes.",
      },
      {
        headline: "Integrity and Confidentiality",
        content:
          "We process personal data in a manner that ensures its security. This includes:",
      },
      {
        subHeadine: "Data Encryption:",
        content:
          "Encrypting personal data both in transit and at rest to prevent unauthorized access.",
      },
      {
        subHeadine: "Access Controls:",
        content:
          "Implementing strict access controls to limit who can access personal data.",
      },
      {
        subHeadine: "Incident Response:",
        content:
          "Having procedures in place to respond to data breaches and other security incidents.",
      },
      {
        headline: "Accountability",
        content:
          "We are responsible for complying with data protection principles and can demonstrate our compliance. This includes:",
      },
      {
        subHeadine: "Documentation:",
        content:
          "Maintaining documentation of our data protection practices and policies.",
      },
      {
        subHeadine: "Training:",
        content:
          "Providing training to our employees on data protection and privacy principles.",
      },
      {
        subHeadine: "Audits:",
        content:
          "Regularly auditing our data protection practices to ensure compliance.",
      },
    ],
  },
  {
    title: "Password Security",
    data: [
      {
        content: "To protect your account, you should:",
      },
      {
        subHeadine: "Choose Strong Passwords:",
        content:
          "Use passwords that are difficult to guess and include a mix of letters, numbers, and symbols.",
      },
      {
        subHeadine: "Change Passwords Regularly:",
        content: "Periodically update your passwords to enhance security.",
      },
      {
        subHeadine: "Avoid Sharing Passwords:",
        content:
          "Never share your passwords with others and avoid using the same password across multiple sites.",
      },
      {
        headline: "Account Monitoring",
        content: "To detect unauthorized activity, you should:",
      },
      {
        subHeadine: "Review Account Activity:",
        content: "Regularly check your account activity and transactions.",
      },
      {
        subHeadine: "Report Suspicious Activity:",
        content: "Immediately report any suspicious activity to us.",
      },
      {
        headline: "Updating Information",
        content:
          "To ensure that your personal information is accurate, you should:",
      },
      {
        subHeadine: "Review Personal Information:",
        content:
          "Regularly review and update your personal information in your account settings.",
      },
      {
        subHeadine: "Notify of Changes:",
        content:
          "Inform us of any changes to your personal information, such as a new email address or phone number.",
      },
    ],
  },
  {
    title: "Third-Party Data Sharing",
    data: [
      {
        content:
          "We may share your data with third-party service providers for various purposes, including payment processing, data analysis, and marketing. These third parties are contractually obligated to protect your data and use it only for the purposes specified by us.",
      },
      {
        headline: "Payment Processors",
        content:
          "We share your payment information with trusted payment processors to facilitate transactions. These processors adhere to stringent security standards to protect your data.",
      },
      {
        headline: "Data Analytics Providers",
        content:
          "We use third-party analytics services to gain insights into how our platform is used. These providers use your data to generate aggregated, anonymized reports that help us improve our services.",
      },
      {
        headline: "Marketing Partners",
        content:
          "We may share your information with marketing partners to deliver targeted advertisements and promotions. These partners are required to handle your data in accordance with applicable privacy laws and our privacy policy.",
      },
    ],
  },
];

const Row: React.FC<IPolicy> = (condition) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 mt-3">
      <h4 className="font-extralight text-xl text-primary-60 max-w-[200px] w-full">
        {condition.title}
      </h4>
      <div className="flex flex-col gap-2 text-secondary-gray-40">
        {condition.data.map((data, index) => (
          <div key={index} className="flex flex-col gap-2">
            {data.headline && (
              <h5 className="font-extralight text-custom-black text-lg italic">
                {data.headline}
              </h5>
            )}
            <p className="text-secondary-gray-80">
              {data.subHeadine && (
                <span className="font-bold text-custom-black">{data.subHeadine}</span>
              )}{" "}
              {data.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Privacy(): React.JSX.Element {
  return (
    <>
      <section className="relative z-0 py-16 mt-24 px-6 text-secondary-gray-40 bg-[url('/privacy.jpeg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute z-0 top-0 bottom-0 left-0 right-0 bg-black/60"></div>
        <div className="relative z-[1] w-full max-w-7xl mx-auto mt-10 text-white">
          {/* <h1 className=" text-4xl text-primary-60">PRIVACY POLICY</h1> */}
          <p className="w-full max-w-3xl my-3">
            Welcome to Easiffy! At Easiffy, we are committed to protecting your
            privacy and ensuring the security of your personal information. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website and use our services. By
            using our services, you agree to the collection and use of
            information in accordance with this policy.
          </p>
          <p className="w-full max-w-3xl font-semibold text-lg">
            Notice: By creating an account with Easiffy (Easiffy technologies
            LLC) you agree to our user terms of agreement and Privacy policy.
          </p>
        </div>
      </section>
      <section className="py-10 px-6 text-secondary-gray-40">
        <div className="w-full max-w-7xl mx-auto mt-10">

          <div className="my-5 pb-10">
            {items.map((condition, index) => (
              <Row key={index} {...condition} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
