"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import {cn } from "@/lib/utils"


interface IQuestion {
  question: string;
  answer: string;
}

type ClientType = "user" | "affiliate";

const userQuestions: IQuestion[] = [
  {
    question: "What services does Easiffy offer?",
    answer:
      "Easiffy offers a wide range of remote digital services, including content creation, graphic design, presentation design, web development, content creation, customized digital company support, data entry and more.",
  },
  {
    question: "How does Easiffy work?",
    answer:
      "Easiffy works by connecting clients with skilled professionals in various fields who can complete tasks remotely according to the client's specifications and timeline.",
  },
  {
    question: "How can I request a service from Easiffy?",
    answer:
      "You can request a service from Easiffy by signing up on our website, submitting a task request detailing your requirements, and selecting a suitable service package.",
  },
  {
    question: "Are Easiffy's services customizable?",
    answer:
      "Yes, Easiffy's services are fully customizable to meet the unique needs and preferences of each client. We tailor our solutions to align with your specific objectives and vision.",
  },
  {
    question: "What is the turnaround time for tasks on Easiffy?",
    answer:
      "Upon the initiation of each task, clients specify the turnaround time. The turnaround time for tasks on Easiffy varies depending on the complexity and scope of the project. We strive to deliver tasks within agreed-upon deadlines to ensure timely completion.",
  },
  {
    question: "How does Easiffy ensure quality and professionalism?",
    answer:
      "Easiffy maintains a rigorous vetting process to onboard experienced and skilled professionals in each service category. Additionally, we provide ongoing support and feedback to ensure high-quality results.",
  },
  {
    question: "What if I'm not satisfied with the completed task?",
    answer:
      "If you're not satisfied with the completed task, you can request revisions or adjustments until it meets your expectations. Client satisfaction is our top priority, and we'll work with you to ensure your satisfaction.",
  },
  {
    question: "Is my information secure with Easiffy?",
    answer:
      "Yes, Easiffy takes data security and confidentiality seriously. We have robust measures in place to safeguard your information and ensure compliance with data protection regulations.",
  },
  {
    question: "How much does it cost to use Easiffy's services?",
    answer:
      "The cost of using Easiffy's services depends on the type and complexity of the task, as well as the selected service package. We offer flexible pricing options to suit different budgets and needs.",
  },
  {
    question: "Can I cancel my subscription with Easiffy?",
    answer:
      "Yes, you can cancel your subscription with Easiffy at any time. We offer flexible subscription plans with no long-term commitments, allowing you to adjust or cancel your subscription as needed.",
  },
  {
    question: "Does Easiffy offer refunds?",
    answer:
      "Easiffy's refund policy varies depending on the circumstances and terms outlined in our terms of service. We strive to resolve any issues or concerns promptly and fairly.",
  },
  {
    question: "How do I communicate with my assigned professional on Easiffy?",
    answer:
      "You can communicate with your assigned professional on Easiffy through our secure messaging platform within the platform. This allows for easy collaboration and clarification on project details.",
  },
  {
    question: "Does Easiffy offer support for urgent or last-minute tasks?",
    answer:
      "Yes, Easiffy understands that emergencies or urgent tasks may arise. While we prioritize timely planning and scheduling, we also accommodate urgent requests whenever possible to meet our clients' needs.",
  },
  {
    question:
      "Is there a limit to the number of tasks I can request with my subscription?",
    answer:
      "The number of tasks you can request with your subscription depends on the specific service package you've chosen. We offer different subscription tiers with varying task limits to accommodate different needs and budgets.",
  },
  {
    question: "Can I upgrade or downgrade my subscription plan?",
    answer:
      "Yes, you can upgrade or downgrade your subscription plan at any time to better align with your changing needs or budget. Simply contact our support team, and we'll assist you with the process.",
  },
  {
    question: "Does Easiffy provide ongoing support after task completion?",
    answer:
      "Yes, Easiffy provides ongoing support and assistance even after task completion. If you have any questions, concerns, or need further assistance, our support team is available to help you.",
  },
  {
    question:
      "Does Easiffy offer training or guidance for clients unfamiliar with digital services?",
    answer:
      "Yes, Easiffy offers training or guidance for clients who may be unfamiliar with digital services or need assistance navigating our platform. Our support team is dedicated to ensuring a seamless experience for all clients.",
  },
  {
    question: "How does Easiffy handle disputes?",
    answer:
      "Easiffy takes disputes seriously and seeks to resolve them promptly and fairly. We have established protocols and escalation procedures in place to address any issues that may arise. We also refund.",
  },
  {
    question:
      "Is there a trial period or free trial available for Easiffy's services?",
    answer:
      "Easiffy does not currently offer a trial period or free trial for its services. However, we offer flexible subscription plans and transparent pricing to ensure that clients can find the right solution for their needs.",
  },
  {
    question: "Can I schedule tasks in advance with Easiffy?",
    answer:
      "Yes, Easiffy allows you to schedule tasks in advance to ensure timely delivery and efficient planning.",
  },
  {
    question: "Does Easiffy offer 24/7 customer support?",
    answer:
      "Easiffy's customer support team is available around the clock to assist you with any questions or concerns you may have.",
  },
  {
    question: "Can I request a specific professional to work on my tasks?",
    answer:
      "Yes, Easiffy gives you the option to request a specific professional based on your preferences and past experiences.",
  },
  {
    question: "Are there any hidden fees with Easiffy's services?",
    answer:
      "Easiffy operates with full transparency, and there are no hidden fees associated with our services. You only pay for what you use.",
  },
  {
    question: "Can Easiffy help with urgent or time-sensitive projects?",
    answer:
      "Yes, Easiffy understands the importance of urgent projects and can prioritize them accordingly to meet your deadlines.",
  },
  {
    question: "Is there a minimum contract length with Easiffy?",
    answer:
      "The minimum timeline for contract is 30 days, Easiffy offers flexible contract lengths with no minimum commitment, allowing you to adjust your subscription as needed.",
  },
  {
    question: "Does Easiffy offer discounts for long-term contracts?",
    answer:
      "Yes, Easiffy offers discounts for clients who choose to commit to long-term contracts, providing cost savings and added value.",
  },
  {
    question: "What measures does Easiffy take to ensure data security?",
    answer:
      "Easiffy employs industry-standard security measures to protect your data and ensure confidentiality at all times.",
  },
  {
    question:
      "Can I view samples of previous work completed by Easiffy professionals?",
    answer:
      "Yes, Easiffy provides access to portfolios and samples of work completed by our professionals to help you make informed decisions.",
  },
  {
    question:
      "How quickly can I expect a response to my task request on Easiffy?",
    answer:
      "Easiffy aims to respond to task requests promptly, usually within 24 hours, to initiate the process as quickly as possible.",
  },
  {
    question:
      "Does Easiffy offer specialized services for specific industries or niches?",
    answer:
      "Yes, Easiffy can provide specialized services tailored to specific industries or niches to meet your unique requirements.",
  },
  {
    question:
      "Can I customize my subscription package with additional services?",
    answer:
      "Yes, Easiffy offers customizable subscription packages that allow you to add additional services or features as needed.",
  },
  {
    question: "How does Easiffy ensure fair pricing for its services?",
    answer:
      "Easiffy conducts regular market research and benchmarking to ensure that our pricing remains competitive and fair for our clients.",
  },
  {
    question: "Does Easiffy provide invoices for completed tasks?",
    answer:
      "Yes, Easiffy provides detailed invoices for completed tasks, including a breakdown of services rendered and associated costs.",
  },
  {
    question: "Can I track the progress of my tasks on Easiffy?",
    answer:
      "Yes, Easiffy provides real-time task tracking and updates to keep you informed of the progress and status of your projects.",
  },
  {
    question:
      "Is there a limit to the number of revisions I can request for a task?",
    answer:
      "Easiffy offers unlimited revisions within reason to ensure that the final deliverable meets your expectations and requirements.",
  },
  {
    question: "Does Easiffy offer consulting services or strategic guidance?",
    answer:
      "Yes, Easiffy provides consulting services and strategic guidance to help clients optimize their digital projects and initiatives.",
  },
  {
    question:
      "Can I collaborate with Easiffy professionals on multiple projects simultaneously?",
    answer:
      "Yes, Easiffy facilitates seamless collaboration on multiple projects simultaneously to maximize efficiency and productivity.",
  },
  {
    question:
      "How does Easiffy ensure accountability and professionalism among its professionals?",
    answer:
      "Easiffy maintains strict quality control measures and performance monitoring to ensure that our professionals uphold high standards of accountability and professionalism.",
  },
  {
    question: "How does Easiffy count tasks that contain multiple projects?",
    answer:
      "Each project within a task is counted individually by Easiffy, ensuring accurate tracking. This helps mitigate fraud and ensures transparency. This helps mitigate fraud and ensures transparency.",
  },
];

const affiliateQuestions: IQuestion[] = [
  {
    question: "What is the Easiffy Affiliate Program",
    answer:
      "The Easiffy Affiliate Program allows individuals to earn commissions by referring new customers to our platform.",
  },
  {
    question: "How does the Affiliate Program work?",
    answer:
      "Affiliates receive a unique referral link to share with their network. When someone clicks on their link and makes a purchase, the affiliate earns a commission.",
  },
  {
    question: "How much commission do affiliates earn?",
    answer:
      "Affiliates earn a commission of 10% on the first amount their referrals spend on our services.",
  },
  {
    question: "Is there a limit to how much I can earn as an affiliate?",
    answer:
      "There is no limit to the amount you can earn as an affiliate. The more referrals you bring in, the more you can earn.",
  },
  {
    question: "How do I become an affiliate?",
    answer:
      "You can apply to become an affiliate through our website. Once approved, you'll receive your unique referral link.",
  },
  {
    question: "Is there a cost to join the Affiliate Program?",
    answer: "No, joining our Affiliate Program is completely free.",
  },
  {
    question: "How do I track my referrals and earnings?",
    answer:
      "You can track your referrals and earnings through your affiliate dashboard, which provides real-time data on conversions, and commissions.",
  },
  {
    question: "When do I get paid my commissions?",
    answer: "Commissions are paid immediately affiliates request for payouts.",
  },
  {
    question: "What payment methods are available for commission payouts?",
    answer: "We offer commission payouts via PayPal or bank transfer.",
  },
  {
    question: "Do I need to have technical skills to be an affiliate?",
    answer:
      "No technical skills are required. Simply share your referral link with your network and start earning commissions.",
  },
  {
    question: "Can I promote Easiffy on social media?",
    answer:
      "Yes, you can promote Easiffy on social media platforms using your referral link.",
  },
  {
    question: "Are there any restrictions on how I can promote Easiffy?",
    answer:
      "You must adhere to our Affiliate Program terms and conditions when promoting Easiffy.",
  },
  {
    question: "Can I refer myself to earn commissions?",
    answer: "No, self-referrals are not allowed in the Affiliate Program.",
  },
  {
    question: "What marketing materials are available for affiliates?",
    answer:
      "We provide affiliates with a range of marketing materials, including banners, images, and text links, to help promote Easiffy.",
  },
  {
    question:
      "Is there a time limit on when my referrals need to make a purchase for me to earn a commission?",
    answer:
      "No, commissions can always be earned anytime your referrals make a purchase.",
  },
  {
    question: "What happens if my referral returns a purchase?",
    answer:
      "If a referral cancels an ongoing project, the corresponding commission will not be added to your earnings.",
  },
  {
    question: "Can I refer businesses to Easiffy?",
    answer:
      "Yes, you can refer both individuals and businesses to Easiffy and earn commissions on their purchases.",
  },
  {
    question: "Is there a support team available for affiliates?",
    answer:
      "Yes, we have a dedicated support team available to assist affiliates with any questions or issues they may have.",
  },
  {
    question: "How can I maximize my earnings as an affiliate?",
    answer:
      "You can maximize your earnings by actively promoting Easiffy to your network and providing valuable information about our services.",
  },
  {
    question: "When are bonuses credited to affiliates' accounts?",
    answer:
      "Bonuses are credited to affiliates' accounts when the contract with their referrals has ended without cancellation.",
  },
  {
    question: "Can affiliates track the progress of potential contracts?",
    answer:
      "Yes, affiliates can track the countdown and time remaining for each individual potential contract in their dashboard.",
  },
  {
    question: "What happens if a contract with a referral is canceled?",
    answer:
      "If a contract with a referral is canceled, the corresponding bonus will not be credited to the affiliate's account.",
  },
  {
    question:
      "Is there a minimum contract duration for bonuses to be credited?",
    answer: "No, affiliates earn bonuses on all categories of projects.",
  },
  {
    question: "Can affiliates see the status of their referrals' contracts?",
    answer:
      "Yes, affiliates can view the status of their referrals' contracts, including whether they have ended successfully or been canceled.",
  },
  {
    question:
      "Are there any restrictions on the types of contracts eligible for bonuses?",
    answer:
      "Bonuses are credited for any completed contract that meets our eligibility criteria, regardless of the type of service provided.",
  },
  {
    question: "How often are bonuses credited to affiliates' accounts?",
    answer:
      "Bonuses are credited to affiliates' accounts once the contract with their referral has ended successfully.",
  },
  {
    question:
      "Can affiliates earn bonuses on multiple contracts with the same referral?",
    answer:
      "No, bonuses are only on the first amount their referrals spend buying our services.",
  },
  {
    question: "Is there a limit to the number of bonuses affiliates can earn?",
    answer:
      "There is no limit to the number of bonuses affiliates can earn, as long as their referrals' contracts meet the bonus eligibility criteria.",
  },
];

const tabs: ["User", "Affiliate"] = ["User", "Affiliate"]

function FAQRow({ data }: { data: IQuestion }): React.JSX.Element {
  return (
    <AccordionItem value={data.question}>
      <AccordionTrigger className="pl-2 pr-4 text-left font-platypi hover:text-primary-4A ">
        {data.question}
      </AccordionTrigger>
      <AccordionContent className="px-3 text-primary-dark32">
        {data.answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default function FAQs(): React.JSX.Element {
  const [tab, setTab] = useState<ClientType>("user");

  const questions = tab === "user" ? userQuestions : affiliateQuestions;

  return (
    <section className="px-6 py-20" id="faqs">
      <div className="w-full max-w-6xl mx-auto">
        <div className="max-w-3xl w-full mx-auto mb-10">
          <div className="w-full mb-5">
            <h1 className="text-[40px] leading-[1] text-primary-orange61 text-center">
              Frequently Asked Questions
            </h1>
            <div className="flex gap-2 p-2 rounded-lg mt-4 bg-primary-D9/10">
              {tabs.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setTab((tab) => item.toLowerCase() as ClientType)
                  }
                  className={cn(
                    "py-2 px-3 w-full text-center rounded-lg duration-300",
                    tab === item.toLowerCase()
                      ? "bg-primary-60 text-white"
                      : "text-secondary-gray-80"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <Accordion
            type="multiple"
            className="w-full max-w-5xl mx-auto border rounded-lg"
            id="faq"
          >
            {questions.map((data, index) => (
              <FAQRow key={index} data={data} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
