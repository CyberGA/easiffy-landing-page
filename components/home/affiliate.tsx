const items: Array<string> = [
  "Welcome to the Easiffy Affiliate Program, a dynamic platform where your potential for success knows no bounds! As an affiliate, you are not just a partner; you are an integral part of our journey to redefine the landscape of digital services and empower businesses worldwide.",
  "At Easiffy, we believe in the power of collaboration and the limitless possibilities that arise when like-minded individuals come together with a shared vision. As you embark on this exciting journey with us, we extend a warm welcome and a promise of unparalleled support every step of the way.",
  "As an affiliate, you play a crucial role in spreading the word about Easiffy and introducing our innovative solutions to businesses and individuals seeking top-notch digital services. Your efforts not only contribute to our growth but also empower others to harness the full potential of our platform.",
  "But being an Easiffy affiliate is more than just promoting a product—it's about building relationships, fostering trust, and delivering value to our clients. With a suite of cutting-edge services ranging from content creation and graphic design to web development and mobile app creation. Easiffy offers a comprehensive solution for businesses of all sizes and industries.",
  "As you navigate our affiliate program, you'll discover a wealth of resources at your disposal, including personalized support, marketing materials, and real-time analytics to track your progress. Whether you're a seasoned marketer or just starting out, we're here to provide the tools and guidance you need to succeed.",
  "But perhaps the most exciting aspect of being an Easiffy affiliate is the opportunity to earn generous commissions for your efforts. With a competitive commission structure and unlimited earning potential, your hard",
];

function Affiliate(): React.JSX.Element {
  return (
    <>
      <section className="mt-[100px] relative z-0 py-60 px-6 bg-[url('/affiiate-banner.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="absolute z-0 inset-0 bg-custom-black/70"></div>
        <div className="relative z-[1] w-full max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl text-white text-center">
            Democratizing Wealth
          </h2>
          <p className="text-center text-xl mt-2 text-white">
            Join the Easiffy Affiliate Movement and Empower Success
          </p>
        </div>
      </section>
      <section className="py-20 px-6 border-t ">
        <div className="w-full max-w-5xl mx-auto space-y-3">
          {items.map((text, index) => (
            <p
              key={index}
              className="w-full text-base mt-2  text-secondary-gray-40 duration-100"
            >
              {text}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}

export default Affiliate;
