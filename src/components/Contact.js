import React from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

   
   const notify = () =>{toast.success('The message sent successfully', {
                       position: "top-center",
                       autoClose: 3000,
                       hideProgressBar: false,
                       closeOnClick: true,
                       pauseOnHover: true,
                       draggable: true,
                       progress: undefined,
                       });};

         const sendEmail = (e) => {
           e.preventDefault();
           emailjs.sendForm('service_chtwtga', 'template_h9a8k4s', e.target, 'nZlkeEEKDfoKQie_1')
           .then((result) => {
           console.log(result.text);
           }, (error) => {
            console.log(error.text);
           });
            e.target.reset();
            notify();
         };

  return (<>
     <svg className="w-full m-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#383838" fill-opacity="1" d="M0,128L720,256L1440,96L1440,320L720,320L0,320Z"></path></svg>
      <div className="bg-[#383838]" >
         <div id="contact" className="text-3xl lg:text-4xl bg-[#383838] font-bold pt-8 text-center text-gray-100 ">CONTACT</div>
         <p className=" text-gray-100 text-center pt-8 bg-[#383838] ">Have a question or want to work together?</p>
         <div className="bg-[#383838] m-0 flex justify-center">
    
            <form onSubmit={sendEmail} className="flex flex-col justify-center w-96 pb-8 pt-2 lg:m-0 mx-4 "  >
                <input name="user_name" className=" bg-gray-700 p-2 text-gray-100  mt-1 " type="text" placeholder="Name" required />
                <input name="user_email" className=" bg-gray-700 p-2 text-gray-100  mt-1 " type="email" placeholder="Email" required />
                <textarea name="message" className=" bg-gray-700 p-2 text-gray-100  mt-1 " rows="5" cols="33" placeholder="Write your message here..." required ></textarea>
                <button className=" bg-gray-700 p-2 mt-1 text-gray-100 hover:bg-gray-500 transform duration-300 "  type="submit"  >Send</button>  
            </form>

        </div>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable
pauseOnHover
/>
    </div>
    </>
  )
}

export default Contact