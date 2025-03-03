import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ygzyqtr",
        "template_14c3n4n",
        form.current,
        "lfBRm8hBIVU9ObsC_"
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
            fontSize: "16px",
            padding: "12px 16px",
          },
        });
      })
      .catch(() => {
        toast.error("Failed to send message!", {
          style: {
            borderRadius: "8px",
            background: "#ff4d4f",
            color: "#fff",
            fontSize: "16px",
            padding: "12px 16px",
          },
        });
      });
  };
  return (
    <div className="flex items-center justify-center pt-10 pb-10 md:min-h-screen px-4 bg-gray-200 dark:bg-gray-950 transition-all">
      <Toaster position="top-right" reverseOrder={false} />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 
               p-6 md:p-8 rounded-lg flex flex-col lg:flex-row gap-6 md:gap-8 shadow-xl"
      >
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center lg:text-left">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center lg:text-left">
            Any questions? Feel free to contact me at any time.
          </p>
          <div className="space-y-4 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <FaMapMarkerAlt className="text-xl text-green-500" />
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-green-500">Address</span>
                <br />
                Uzbekistan, Fergana, Kuvasay, 6
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <FaPhoneAlt className="text-xl text-green-500" />
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-green-500">Phone</span>
                <br />
                +998 91 398 79 42
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <FaEnvelope className="text-xl text-green-500" />
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-green-500">Email</span>
                <br />
                azizulloabdumannopov77@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Send a Message
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-lg mx-auto space-y-4"
          >
            <input
              type="text"
              name="to_name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 
                     text-gray-800 dark:text-white rounded focus:ring focus:ring-green-400 
                     focus:border-green-500 shadow-sm dark:shadow-md dark:shadow-gray-900"
            />
            <input
              type="email"
              name="from_name"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 
                     text-gray-800 dark:text-white rounded focus:ring focus:ring-green-400 
                     focus:border-green-500 shadow-sm dark:shadow-md dark:shadow-gray-900"
            />
            <textarea
              name="message"
              placeholder="Type your message..."
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 
                     text-gray-800 dark:text-white rounded h-32 focus:ring focus:ring-green-400 
                     focus:border-green-500 shadow-sm dark:shadow-md dark:shadow-gray-900"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 
                     transition-all duration-300 focus:ring focus:ring-green-400 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
