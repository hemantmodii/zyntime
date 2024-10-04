import { useState, useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
// import contactImg from './assets/contactImg.png';

function Contact() {
  const form = useRef(null);

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message || !name || !mobile || !email) {
      toast.error("Please fill all the fields");
      return;
    }

    console.log("Button clicked");

    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) {
      toast.error("Name should contain only alphabets and spaces");
      return;
    }

    const mobileRegex = /^[789]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      toast.error("Mobile number should be 10 digits and start with 7, 8 or 9");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    const messageRegex = /^[\x20-\x7E]{1,250}$/;
    if (!messageRegex.test(message)) {
      toast.error("Message should be less than 250 characters");
      return;
    }

    emailjs
      .sendForm("service_b7gqfxm", "template_09xj32b", form.current || "", {
        publicKey: "fXsEfXrMAUwJW_y7A",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setName("");
          setMobile("");
          setEmail("");
          setMessage("");
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <div className=" text-black flex flex-col justify-center items-center space-y-6 lg:mx-4">

        <p className="text-white text-[16px] md:text-[18px] leading-[2px] md:leading-[24px] tracking-wide pt-4">
          Send me a message here...<br />
        </p>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 w-full max-w-full">
        <div className="  ps-8 py-0 mb-6">
          <form className="space-y-6 my-2 w-full min-w-[40rem]" ref={form}>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="absolute -top-5 left-2 px-1 text-sm text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17B890]"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="mobile"
                className="absolute -top-5 left-2 px-1 text-sm text-white"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                name="user_phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17B890]"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="absolute -top-5 left-2 px-1 text-sm text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17B890]"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="absolute -top-5 left-2 px-1 text-sm text-white"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#17B890]"
                rows={4}
                maxLength={250}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="text-right text-sm text-gray-500">
                {message.length}/250
              </div>
            </div>
            <button
              type="submit"
              className="py-2 bg-[#000000] text-white border-white inset-2 border-2 font-semibold rounded-full hover:bg-[#119e7b] w-2/3"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
