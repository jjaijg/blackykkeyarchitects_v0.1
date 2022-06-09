import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

function ContactSection() {

  const [from_name, setName] = useState("");
  const [reply_to, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [message, setMessage] = useState('')
  
  const handleQuote = e => {
    e.preventDefault()
    
    emailjs.sendForm(
      "service_soewzs9",
      "template_sls8709",
      e.target,
      "0sTqUeRBbu5UyY-B-"
    ).then(result => {
      console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
    }).catch(error => {
      console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
    })
  }
  
  return (
    <section
      id="contact-section"
      className="relative bg-gradient-to-b from-purple-600 to-indigo-700 pb-12"
    >
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,600 C 0,600 0,200 0,200 C 105.52153110047848,233.0622009569378 211.04306220095697,266.1244019138756 301,271 C 390.95693779904303,275.8755980861244 465.3492822966507,252.5645933014354 569,246 C 672.6507177033493,239.4354066985646 805.5598086124401,249.6172248803828 902,232 C 998.4401913875599,214.3827751196172 1058.4114832535886,168.9665071770335 1142,159 C 1225.5885167464114,149.0334928229665 1332.7942583732056,174.51674641148327 1440,200 C 1440,200 1440,600 1440,600 Z"
          stroke="none"
          strokeWidth="0"
          fill="#08173088"
          className="transition-all duration-300 ease-in-out delay-150 path-10"
          transform="rotate(-180 720 300)"
        ></path>
        <path
          d="M 0,600 C 0,600 0,400 0,400 C 81.06220095693774,379.2631578947369 162.1244019138755,358.5263157894737 259,351 C 355.8755980861245,343.4736842105263 468.5645933014356,349.15789473684214 573,380 C 677.4354066985644,410.84210526315786 773.6172248803825,466.8421052631579 881,469 C 988.3827751196175,471.1578947368421 1106.9665071770337,419.4736842105263 1202,399 C 1297.0334928229663,378.5263157894737 1368.5167464114832,389.2631578947369 1440,400 C 1440,400 1440,600 1440,600 Z"
          stroke="none"
          strokeWidth="0"
          fill="#081730ff"
          className="transition-all duration-300 ease-in-out delay-150 path-10"
          transform="rotate(-180 720 300)"
        ></path>
      </svg>
      <div className="w-full -mt-[450px] flex items-center justify-center my-12">
        <form
          onSubmit={handleQuote}
          className="bg-white shadow rounded py-12 lg:px-28 px-8"
        >
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
            Let’s chat and get a quote!
          </p>
          <div className="md:flex items-center mt-12">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Name
              </label>
              <input
                tabIndex={0}
                arial-label="Please input name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input  name"
                name="from_name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email Address
              </label>
              <input
                tabIndex={0}
                arial-label="Please input email address"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input email address"
                name="reply_to"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Location
              </label>
              <input
                tabIndex={0}
                role="input"
                arial-label="Please input Location"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 "
                placeholder="Please input Location"
                name="location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Postal code
              </label>
              <input
                tabIndex={0}
                arial-label="Please input Postal code"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input Postal code"
                name="zipCode"
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold leading-none text-gray-800">
                Message
              </label>
              <textarea
                tabIndex={0}
                aria-label="leave a message"
                placeholder="leave a message..."
                type="name"
                className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 resize-none"
                defaultValue={""}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          {/* <p className="text-xs leading-3 text-gray-600 mt-4">
            By clicking submit you agree to our terms of service, privacy policy
            and how we use data as stated
          </p> */}
          <div className="flex items-center justify-center w-full">
            <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
