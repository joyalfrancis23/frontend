import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Dragdrop from "./Dragdrop";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import axios from 'axios';


const Upload = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try{
  //     const response = await fetch('/submit/',{
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     console.log("Data SendED!");
  //   }catch(error){
  //     console.log(error.body);
  //     console.log("Somethings not right");
  //   }

  //   setLoading(true);
  // };


const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
   

  axios.post('http://127.0.0.1:8000/', formData)
    .then(response => {
      // Handle the response from the Django backend
      console.log(response.data)
      setLoading(true)
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.log(error)
    });
}


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#30011E] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Let's do this</p>
        <h3 className={styles.sectionHeadText}>Compare.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Header Text</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-[#500232] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Text</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#500232] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div>OR</div>

          <Dragdrop />

          <button
            type="submit"
            className="bg-[#500232] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Checking..." : "Check"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Upload, "upload");
