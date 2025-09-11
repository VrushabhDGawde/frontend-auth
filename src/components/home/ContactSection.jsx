export default function ContactSection() {
  return (
    <section className="body-font relative text-gray-600" id="contactus">
      <div className="lg:px-24 lg:py-24 px-6 py-10">
        <h2 className="lg:pb-10 sm:pb-6 text-3xl mb-3 font-bold text-slate-400">
          <span className="block">Please feel free to reach out to us using our</span>
          <span className="block text-indigo-400">email provided.</span>
        </h2>
        <div className="overflow-hidden rounded-lg bg-indigo-200 p-4">
          <iframe
            className="lg:h-96 sm:h-32 w-full"
            frameBorder="0"
            title="map"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2643755123813!2d72.8180197750489!3d18.963928155481543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1486c8b1c1%3A0xb5e5277355a0e125!2ssiddhesh-deep%20co-op%20hsg!5e0!3m2!1sen!2sin!4v1682775546309!5m2!1sen!2sin"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="mt-4 rounded bg-white p-4 shadow-md">
            <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">ADDRESS</h2>
            <p className="mt-1 text-sm">
              Siddhesh-Deep Co-Op Hsg<br />
              XR7C+H69, Grant Road East, Mumbai, Maharashtra 400007
            </p>
            <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">EMAIL</h2>
            <a className="text-sm leading-relaxed text-indigo-400" href="mailto:vrushabhgawde143@gmail.com">
              vrushabhgawde143@gmail.com
            </a>
            <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">PHONE</h2>
            <p className="text-sm leading-relaxed">959-486-3123</p>
          </div>
        </div>
      </div>
    </section>
  );
}
