import NewsletterInput from "@/components/layout/newsletter-input";

export default function Page(): React.ReactNode {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-6 text-center">
      <h1 className="text-3xl md:text-6xl w-full leading-[1.2] text-primary-60">
        Coming Soon
      </h1>
      <p className="my-12 md:my-5 text-base w-full text-primary-6B">
        In the meantime, sign up for our newsletter to stay up to date
      </p>
      <NewsletterInput />
    </div>
  );
}
