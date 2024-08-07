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
        subHeadine:
          "Account Creation and Management:",
        content:
          "Using your email and personal details to create and maintain your user account.",
      },
      {
        subHeadine:
          "Payment Processing:",
        content:
          "Processing your payment information for purchases and subscriptions.",
      },
      {
        subHeadine:
          "Customer Support:",
        content:
          "Using your contact information to provide assistance and support for your inquiries or issues.",
      },
    ],
  },
  {
    title: "Sharing Your Information",
    data: [
      {
        content:
          "We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this Privacy Policy. We may share your information in the following situations: \nWith Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and marketing assistance. \nFor Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).",
      },
      {
        subHeadine: "3.1 With Service Providers",
        content:
          "We engage third-party service providers to perform various services on our behalf. These service providers may have access to your personal information as needed to perform their functions but are not permitted to use it for other purposes. Examples include: \nPayment Processors: Processing your payment transactions securely. \nData Analysts: Analyzing usage data to help us improve our services. \nMarketing Partners: Assisting with our marketing efforts and campaigns.",
      },
      {
        subHeadine: "3.2 For Legal Requirements",
        content:
          "We may disclose your personal information to comply with legal obligations or respond to lawful requests from public authorities. This includes: \nCompliance with Laws: Disclosing information as required by law, regulation, or legal process. \nProtection of Rights: Disclosing information to protect our rights, property, or safety, or the rights, property, or safety of others. \nLaw Enforcement Requests: Responding to requests from law enforcement agencies or other government authorities.",
      },
      {
        subHeadine: "3.2 For Legal Requirements",
        content:
          "We may disclose your personal information to comply with legal obligations or respond to lawful requests from public authorities. This includes: \nCompliance with Laws: Disclosing information as required by law, regulation, or legal process. \nProtection of Rights: Disclosing information to protect our rights, property, or safety, or the rights, property, or safety of others. \nLaw Enforcement Requests: Responding to requests from law enforcement agencies or other government authorities.",
      },
    ],
  },
  {
    title: "Data Security",
    data: [
      {
        content:
          "We implement a variety of security measures to maintain the safety of your personal information. These measures include: \nEncryption: Data transmitted between your browser and our servers is encrypted using SSL/TLS protocols. \nAccess Controls: Access to personal data is restricted to authorized personnel only. \nRegular Audits: We conduct regular audits and assessments of our data security practices.",
      },
      {
        subHeadine: "4.1 Encryption",
        content:
          "We use encryption technologies to protect the confidentiality and integrity of your personal information during transmission. This includes: \nSSL/TLS Encryption: Securing data transmitted between your browser and our servers using industry-standard encryption protocols.",
      },
      {
        subHeadine: "4.2 Access Controls",
        content:
          "We implement access controls to ensure that only authorized personnel have access to your personal data. This includes: \nRole-Based Access: Granting access to personal data based on the role and responsibilities of our employees. \nAuthentication: Requiring strong authentication methods for accessing sensitive information.",
      },
      {
        subHeadine: "4.3 Regular Audits",
        content:
          "We regularly audit our data security practices to identify and address potential vulnerabilities. This includes: \nSecurity Assessments: Conducting periodic security assessments and penetration tests. \nCompliance Audits: Ensuring compliance with relevant data protection regulations and standards.",
      },
    ],
  },
  {
    title: "Your Data Protection Rights",
    data: [
      {
        content:
          "You have certain rights regarding your personal information, including: \nAccess: You have the right to request a copy of the personal data we hold about you. \nCorrection: You have the right to request that we correct any information you believe is inaccurate or incomplete. \nDeletion: You have the right to request the deletion of your personal data, subject to certain conditions. \nRestriction: You have the right to request the restriction of processing your personal data under certain circumstances. \nObjection: You have the right to object to our processing of your personal data. To exercise any of these rights, please contact us using the contact information provided below.",
      },
      {
        subHeadine: "5.1 Access",
        content:
          "You have the right to request a copy of the personal data we hold about you. To do so, please: \nSubmit a Request: Contact us with your request for access to your personal data. \nVerification: Provide sufficient information for us to verify your identity before fulfilling your request.",
      },
      {
        subHeadine: "5.2 Correction",
        content:
          "You have the right to request that we correct any information you believe is inaccurate or incomplete. To request a correction: \nSubmit a Request: Contact us with details of the information you believe needs to be corrected. \nVerification: Provide sufficient information for us to verify your identity and the accuracy of your request.",
      },
      {
        subHeadine: "5.3 Deletion",
        content:
          "You have the right to request the deletion of your personal data, subject to certain conditions. To request deletion: \nSubmit a Request: Contact us with your request for deletion of your personal data. \nConditions: We will evaluate your request and may retain certain information as required by law or for legitimate business purposes.",
      },
      {
        subHeadine: "5.4 Restriction",
        content:
          "You have the right to request the restriction of processing your personal data under certain circumstances. To request restriction: \nSubmit a Request: Contact us with your request for restriction of processing. \nConditions: We will evaluate your request and may continue processing your data under certain conditions, such as for legal compliance.",
      },
      {
        subHeadine: "5.5 Objection",
        content:
          "You have the right to object to our processing of your personal data. To object: \nSubmit a Request: Contact us with your objection to the processing of your personal data. \nEvaluation: We will evaluate your objection and may continue processing your data if there are compelling legitimate grounds to do so.",
      },
    ],
  },
];

const Row: React.FC<IPolicy> = (condition) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 mt-3">
      <h4 className="font-semibold font-poppins text-primary-60 max-w-[200px] w-full">
        {condition.title}
      </h4>
      <div className="flex flex-col gap-2 text-secondary-gray-40">
        {condition.data.map((data, index) => (
          <div key={index} className="flex flex-col gap-2">
            {data.headline && (
              <h5 className="font-semibold font-lg font-poppins italic">
                {data.headline}
              </h5>
            )}
            <p className="text-secondary-gray-80">
              {data.subHeadine && (
                <span className="font-bold">{data.subHeadine}</span>
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
