



  'use client';
import emailjs from 'emailjs-com';
import "flowbite";
import { useEffect, useState } from "react";
  
  const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pronouns, setPronouns] = useState("");
    const [university, setUniversity] = useState("");
    // const [collegeGrade, setCollegeGrade] = useState("");
    // const [majors, setMajors] = useState("");
    // const [minors, setMinors] = useState("");
    const [dietaryRestrictions, setDietaryRestrictions] = useState("");
    const [githubProfile, setGithubProfile] = useState("");
    // const [linkedInProfile, setLinkedInProfile] = useState("");
    // const [message, setMessage] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const templateParams = {
      to_name: 'John Doe',
      from_name: 'Jane Doe',
      subject: 'Hello from EmailJS',
      message: 'This is a test email sent using EmailJS!'
    };
  
    const SERVICE_ID = "service_fi2wh62"
    const TEMPLATE_ID = "template_yfxb7pp";
    const PUBLIC_KEY = "UMuEivg21JfCboqTq";
    
    useEffect(() => {
      // Any code that uses document should be placed here
    }, []);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const form = e.target as HTMLFormElement;
  
      // Send data to the server
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          pronouns,
          university,
          // collegeGrade,
          // majors,
          // minors,
          dietaryRestrictions,
          githubProfile,
          // linkedInProfile,
          // message,
        }),
      });
  
      const data = await res.json();
  
      setError(data.msg || []);
      setSuccess(data.success || false);
  
      if (data.success) {
        // Send the form using emailjs
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            alert('Message Sent Successfully');
          }, (error) => {
            console.log(error.text);
            alert('Something went wrong!');
          });
  
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setPronouns("");
        setUniversity("");
        // setCollegeGrade("");
        // setMajors("");
        // setMinors("");
        setDietaryRestrictions("");
        setGithubProfile("");
        // setLinkedInProfile("");
        // setMessage("");
  
        // Reset the form
        form.reset();
      }
    };
  
    return (
      <div className="p-6 md:p-12 lg:p-16 flex justify-center">
        <form onSubmit={handleSubmit} className="max-w-md w-full py-4 mt-4 border-t flex flex-col gap-5">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              id="firstName"
              placeholder="John"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
  
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              id="lastName"
              placeholder="Doe"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
  
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="name@example.com"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
  
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              type="text"
              id="phoneNumber"
              placeholder="123-456-7890"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
  
          <div>
            <label htmlFor="pronouns">Pronouns</label>
            <input
              onChange={(e) => setPronouns(e.target.value)}
              value={pronouns}
              type="text"
              id="pronouns"
              placeholder="she/her"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
  
          <div>
            <label htmlFor="university">University</label>
            <input
              onChange={(e) => setUniversity(e.target.value)}
              value={university}
              type="text"
              id="university"
              placeholder="Example University"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
  
          {/* <div>
            <label htmlFor="collegeGrade" className="block mb-2 text-sm font-medium text-gray-900 mt-4">
              College Grade
            </label>
            <select
              id="collegeGrade"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={(e) => setCollegeGrade(e.target.value)}
              value={collegeGrade}
            >
              <option value="">Select your grade</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>
          </div> */}
  
          {/* <div>
            <label htmlFor="majors">Majors</label>
            <input
              onChange={(e) => setMajors(e.target.value)}
              value={majors}
              type="text"
              id="majors"
              placeholder=" "
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div> */}
  
          {/* <div>
            <label htmlFor="minors">Minors</label>
            <input
              onChange={(e) => setMinors(e.target.value)}
              value={minors}
              type="text"
              id="minors"
              placeholder=" "
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div> */}
  
          <div>
            <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
            <input
              onChange={(e) => setDietaryRestrictions(e.target.value)}
              value={dietaryRestrictions}
              type="text"
              id="dietaryRestrictions"
              placeholder="Vegan"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
  
          <div>
            <label htmlFor="githubProfile">GitHub Profile</label>
            <input
              onChange={(e) => setGithubProfile(e.target.value)}
              value={githubProfile}
              type="text"
              id="githubProfile"
              placeholder="https://github.com/janedoe"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
  
          {/* <div>
            <label htmlFor="linkedInProfile">LinkedIn Profile</label>
            <input
              onChange={(e) => setLinkedInProfile(e.target.value)}
              value={linkedInProfile}
              type="text"
              id="linkedInProfile"
              placeholder="https://linkedin.com/in/janedoe"
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div> */}
{/*   
          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="message"
              placeholder="Type your message here..."
            ></textarea>
          </div> */}
  
          <button className="bg-green-700 p-3 text-white font-bold" type="submit">
            Send
          </button>
        </form>
  
        <div className="bg-slate-100 flex flex-col">
          {error.length > 0 && error.map((e, index) => (
            <div
              key={index}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ContactForm;