import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

type TermData = {
  headline?: string;
  subHeadine?: string;
  content: string | React.ReactNode;
};

interface ITerms {
  title: string;
  data: Array<TermData>;
}

const userCondition: Array<ITerms> = [
  {
    title: "Definitions",
    data: [
      {
        headline: "For the purposes of these Terms:",
        subHeadine: '"Account"',
        content:
          "means a unique account created for you to access our services or parts of our services.",
      },
      {
        subHeadine: '"Content"',
        content:
          "refers to text, graphics, images, music, software, audio, video, information, or other materials that can be posted, uploaded, linked to, or otherwise made available through our services.",
      },
      {
        subHeadine: '"User", "you", and “your"',
        content: "refer to the individual accessing or using our services.",
      },
      {
        subHeadine: '"Services"',
        content:
          "means the website, applications, and any related services provided by Easiffy.",
      },
      {
        subHeadine: '"Terms"',
        content: "refers to these Terms and Conditions.",
      },
      {
        subHeadine: '"Privacy Policy""',
        content:
          "means our policy on data collection, use, and sharing as published on our website.",
      },
    ],
  },
  {
    title: "Acceptance of Terms",
    data: [
      {
        content:
          "By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you must not use our services.",
      },
    ],
  },
  {
    title: "Changes to Terms",
    data: [
      {
        content:
          "We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services constitutes your acceptance of the revised Terms.",
      },
    ],
  },
  {
    title: "Eligibility",
    data: [
      {
        content:
          "You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this age requirement.",
      },
    ],
  },
  {
    title: "Account Registration",
    data: [
      {
        content:
          "● You are required to create an Account to use certain features of our services.",
      },
      {
        content:
          "● You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary.",
      },
      {
        content:
          "● You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your Account.",
      },
    ],
  },
  {
    title: "Use of Services",
    data: [
      {
        headline: "Permitted Use",
        content:
          "● You may use our services only for lawful purposes and in accordance with these Terms.",
      },
      {
        content:
          "● You agree not to use our services for any fraudulent, unauthorized, or unlawful activity.",
      },
      {
        headline: "Prohibited Use",
        content:
          "● You shall not misuse our services by introducing viruses, malware, or any other harmful material.",
      },
      {
        content:
          "● You shall not attempt to gain unauthorized access to our services, servers, or databases.",
      },
      {
        content:
          "● You shall not use our services to transmit unsolicited advertising or promotional material.",
      },
    ],
  },
  {
    title: "Services Provided",
    data: [
      {
        content:
          "Easiffy provides a range of digital services including, but not limited to, graphics design, writing, web and app development, social media management, and customized company support. Detailed descriptions of each service are available on our website.",
      },
    ],
  },
  {
    title: "Payment and Fees",
    data: [
      {
        content:
          "● All fees for our services are listed on our website and are subject to change.",
      },
      {
        content:
          "● Payment must be made in accordance with the payment terms specified at the time of purchase.",
      },
      {
        content:
          "● We use third-party payment processors to facilitate transactions. You agree to provide accurate payment information and to comply with the terms and conditions of the payment processor.",
      },
    ],
  },
  {
    title: "Cancellation and Refunds",
    data: [
      {
        content:
          "● You may cancel your Account or any service at any time by contacting our support team.",
      },
      {
        content:
          "● Refunds will be issued in accordance with our refund policy, which is available on our website.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    data: [
      {
        content:
          "● All Content and materials on our website and services are the intellectual property of Easiffy or our licensors.",
      },
      {
        content:
          "● You may not reproduce, distribute, modify, or create derivative works of our Content without our prior written consent.",
      },
    ],
  },
  {
    title: "User Content",
    data: [
      {
        content:
          "● You retain ownership of any Content you submit to our services. However, by submitting Content, you grant Easiffy a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute your Content.",
      },
      {
        content:
          "● You represent and warrant that you have the right to submit the Content and that it does not infringe on the rights of any third party.",
      },
    ],
  },
  {
    title: "Privacy",
    data: [
      {
        content: (
          <>
            Your privacy is important to us. Please review our{" "}
            <Link
              className="text-primary-60 hover:underline underline-offset-2"
              href="/privacy policy"
            >
              Privacy Policy
            </Link>
            , which explains how we collect, use, and disclose information about
            you.
          </>
        ),
      },
    ],
  },
  {
    title: "Termination",
    data: [
      {
        content:
          "● We reserve the right to suspend or terminate your Account and access to our services at our sole discretion, without notice, if we believe you have violated these Terms.",
      },
      {
        content:
          "● Upon termination, all provisions of these Terms that by their nature should survive will continue in effect.",
      },
    ],
  },
  {
    title: "Disclaimer of Warranties",
    data: [
      {
        content:
          '● Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied.',
      },
      {
        content:
          "● We do not warrant that our services will be uninterrupted, error-free, or secure.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    data: [
      {
        content:
          "● To the fullest extent permitted by law, Easiffy will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.",
      },
      {
        content:
          "● Our total liability to you for any claim arising out of or relating to these Terms or our services is limited to the amount you paid us, if any, in the 12 months preceding the claim.",
      },
    ],
  },
  {
    title: "Indemnification",
    data: [
      {
        content:
          "You agree to indemnify, defend, and hold harmless Easiffy and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in connection with your use of our services or your violation of these Terms.",
      },
    ],
  },
  {
    title: "Governing Law",
    data: [
      {
        content:
          "These Terms are governed by and construed in accordance with the laws of the state of Ohio, without regard to its conflict of laws principles.",
      },
    ],
  },
  {
    title: "Dispute Resolution",
    data: [
      {
        content:
          "● Any disputes arising out of or relating to these Terms or our services will be resolved through binding arbitration in Ohio.",
      },
      {
        content:
          "● You agree to waive any right to a jury trial or to participate in a class action.",
      },
    ],
  },
  {
    title: "Entire Agreement",
    data: [
      {
        content:
          "These Terms, together with our Privacy Policy and any other legal notices published on our website, constitute the entire agreement between you and Easiffy regarding our services.",
      },
    ],
  },
  {
    title: "Contact Information",
    data: [
      {
        content: (
          <>
            If you have any questions about these Terms, please contact us at{" "}
            <Link className="text-primary-60 font-semibold" href="#">
              support@easiffy.com.
            </Link>
          </>
        ),
      },
      {
        content:
          "By using Easiffy's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
      },
    ],
  },
];
const affiliateCondition: Array<ITerms> = [
  {
    title: "Introduction",
    data: [
      {
        content:
          "These Terms and Conditions govern your participation in our affiliate program, enabling you to earn commissions by promoting our products or services.",
      },
    ],
  },
  {
    title: "Definitions",
    data: [
      {
        subHeadine: '"Affiliate"',
        content:
          ": Refers to an individual or entity who has registered to participate in our affiliate program and has agreed to these terms and conditions.",
      },
      {
        subHeadine: '"Commission"',
        content:
          ": The monetary compensation earned by affiliates for qualifying sales or actions generated through their promotional efforts.",
      },
      {
        subHeadine: '"Promotion"',
        content:
          ": Refers to any marketing activity or effort undertaken by affiliates to promote our products or services.",
      },
    ],
  },
  {
    title: "Eligibility",
    data: [
      {
        content:
          "To be eligible for participation in our affiliate program, you must meet certain criteria outlined in this section, including but not limited to age requirements, residency restrictions, and compliance with applicable laws and regulations.",
      },
    ],
  },
  {
    title: "Affiliate Responsibilities",
    data: [
      {
        headline: "As an affiliate, you are responsible for:",
        content:
          "● Conducting promotional activities in compliance with these terms and conditions.",
      },
      {
        content:
          "● Adhering to all applicable laws and regulations governing affiliate marketing.",
      },
      {
        content:
          "● Upholding the reputation and integrity of [Company Name] in all promotional efforts.",
      },
    ],
  },
  {
    title: "Commission Structure",
    data: [
      {
        content:
          "Commissions are earned based on qualifying sales or actions generated through affiliate promotions. The commission structure, including commission rates and qualifying criteria, is detailed in the affiliate dashboard upon registration.",
      },
    ],
  },
  {
    title: "Payment Terms",
    data: [
      {
        content:
          "Affiliate commissions are paid out according to the payment terms specified in the affiliate dashboard. Payments are typically made on upon request, subject to meeting the minimum payment threshold and other conditions.",
      },
    ],
  },
  {
    title: "Promotional Guidelines",
    data: [
      {
        content:
          "Affiliates must adhere to the promotional guidelines outlined by Easiffy, including restrictions on advertising channels, prohibited content, and guidelines for creating promotional materials.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    data: [
      {
        content:
          "Affiliates are granted a limited license to use Easiffy's trademarks, logos, and other intellectual property solely for the purpose of promoting our products or services. Any unauthorized use of intellectual property is strictly prohibited.",
      },
    ],
  },
  {
    title: "Confidentiality",
    data: [
      {
        content:
          "Affiliates may have access to confidential information as part of their participation in the affiliate program. Affiliates are required to maintain the confidentiality of such information and refrain from disclosing it to third parties.",
      },
    ],
  },
  {
    title: "Termination",
    data: [
      {
        content:
          "Easiffy reserves the right to terminate an affiliate's participation in the program at any time, for any reason, including but not limited to violation of these terms and conditions, fraudulent activity, or failure to meet performance standards. .",
      },
      {
        headline:
          "Reasons for account termination may include but not limited to:",
        content: "● Operation of multiple affiliate accounts.",
      },
      {
        content:
          "● Referring yourself as a user in order to manipulate the system to earn commissions.",
      },
      {
        content:
          "● Engaging in illicit social media marketing practices specifically aimed at promoting Easiffy's services, such as using bots or automated systems to generate fake likes, follows, or comments on affiliate links.",
      },
      {
        content:
          "● Sending unsolicited promotional messages or spamming via email or social media platforms to promote Easiffy's affiliate links without proper consent from recipients.",
      },
      {
        content:
          "● Participating in spamming activities, including mass unsolicited emailing, to promote Easiffy's affiliate links without obtaining consent from recipients. ",
      },
      {
        content:
          "● Posting irrelevant or promotional content in comment sections or forums solely to promote Easiffy's affiliate links, thereby violating the community guidelines and terms of service of the platforms.",
      },
      {
        content:
          "● Using deceptive tactics to manipulate social media algorithms or artificially inflate engagement metrics for content containing Easiffy's affiliate links.",
      },
      {
        content:
          "● Purchasing followers, likes, shares, or engagement from third-party services to falsely enhance the visibility of content containing Easiffy's affiliate links.",
      },
      {
        content:
          "● Sharing or distributing sensitive information related to Easiffy's affiliate program without proper authorization or consent.",
      },
      {
        content:
          "● Violating the terms, conditions, or guidelines outlined in Easiffy's affiliate program agreement, including engaging in fraudulent activities or misrepresentation.",
      },
      {
        content:
          "● Failing to adhere to ethical standards and best practices when promoting Easiffy's affiliate links, including engaging in dishonest or misleading marketing tactics.",
      },
      {
        content:
          "● Any other activities deemed unethical, fraudulent, or harmful to Easiffy's reputation and interests as an affiliate partner.",
      },
    ],
  },
  {
    title: "Indemnification",
    data: [
      {
        content:
          "Affiliates agree to indemnify and hold harmless Easiffy from any claims, damages, or liabilities arising from their promotional activities or breach of these terms and conditions.",
      },
    ],
  },
  {
    title: "Amendment and Modification",
    data: [
      {
        content:
          "Easiffy reserves the right to amend or modify these terms and conditions at any time, without prior notice. Affiliates will be notified of any changes, and continued participation in the affiliate program constitutes acceptance of the updated terms.",
      },
    ],
  },
  {
    title: "Miscellaneous Provisions",
    data: [
      {
        subHeadine: "Severability",
        content:
          ": If any provision of these terms and conditions is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
      },
      {
        subHeadine: "Entire Agreement",
        content:
          ": These terms and conditions constitute the entire agreement between Easiffy and the affiliate, superseding any prior agreements or understandings.",
      },
      {
        subHeadine: "Waiver",
        content:
          ": The failure of Easiffy to enforce any provision of these terms and conditions shall not constitute a waiver of such provision or any other provision herein.",
      },
    ],
  },
  {
    title: "Contact Information",
    data: [
      {
        content:
          "Severability: If any provision of these terms and conditions is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
      },
      {
        content:
          "Entire Agreement: These terms and conditions constitute the entire agreement between Easiffy and the affiliate, superseding any prior agreements or understandings.",
      },
      {
        content:
          "Waiver: The failure of Easiffy to enforce any provision of these terms and conditions shall not constitute a waiver of such provision or any other provision herein.",
      },
    ],
  },
  {
    title: "Contact Information",
    data: [
      {
        content: (
          <>
            For questions or concerns regarding these terms and conditions or
            the affiliate program, please contact us at{" "}
            <Link className="text-primary-60 font-semibold" href="#">
              affiliates@easiffy.com.
            </Link>
          </>
        ),
      },
    ],
  },
  {
    title: "Effective Date",
    data: [
      {
        content: "These terms and conditions are effective as of 01-08-2024 and govern all affiliate activities from that date forward. ",
      },
    ],
  },
];

const ConditionTile: React.FC<ITerms> = (condition) => {
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
                <span className="font-bold text-custom-black">
                  {data.subHeadine}
                </span>
              )}{" "}
              {data.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function TermsConditions(): React.JSX.Element {
  return (
    <>
    <section className="relative z-0 py-16 mt-24 px-6 text-secondary-gray-40 bg-[url('/terms.jpeg')] bg-no-repeat bg-cover bg-center">
    <div className="absolute z-0 top-0 bottom-0 left-0 right-0 bg-black/60"></div>
      <div className="relative z-[1] w-full max-w-7xl mx-auto mt-10 text-white">
        {/* <h1 className=" text-4xl text-primary-60">TERMS AND CONDITIONS</h1> */}
        <p className="w-full max-w-3xl my-3">
          Welcome to Easiffy! These Terms and Conditions (&quot;Terms&quot;)
          govern your use of our website, applications, and services provided by
          Easiffy Technologies LLC (&quot;Easiffy,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;). By creating an account and using
          our services, you agree to these Terms. Please read them carefully.
        </p>
        <p className="w-full max-w-2xl font-semibold text-lg">
          Attention: By creating an account with Easiffy Technologies LLC, you
          agree to the User Terms of Agreement and Privacy Policy.
        </p>
      </div>
      </section>
    <section className="py-10 px-6 text-secondary-gray-40">
      <div className="w-full max-w-7xl mx-auto mt-10">
        <p className="flex items-center gap-1 font-semibold w-fit text-custom-black italic uppercase text-xl mt-4 ">
          <MdDoubleArrow size={16} /> User Service Agreement
        </p>

        <div className="my-5">
          {userCondition.map((condition, index) => (
            <ConditionTile key={index} {...condition} />
          ))}
        </div>

        <p className="flex items-center gap-1 font-semibold w-fit text-custom-black italic uppercase text-xl mt-4">
          <MdDoubleArrow size={16} /> Affiliate Program Service Agreement
        </p>

        <div className="my-5 pb-10">
          {affiliateCondition.map((condition, index) => (
            <ConditionTile key={index} {...condition} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
