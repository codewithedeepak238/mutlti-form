import { Header } from "../Sections/Header"
import { useForm } from "../../context/FormContext"
import { useState } from "react";


export const PersonalInfo = () => {
  const {addInfo, data} = useForm();
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone_num);

  const handleSubmit = (e)=>{  
    e.preventDefault();
    const newData = {
      name: name,
      email: email,
      phone_num: phone,
      display: 1,
    }
    addInfo(newData);
  }

  return (
    <div>
        <Header head="Personal info" para="Please provide your name, email address, and phone number."/>
        <main>
            <form onSubmit={handleSubmit} className="flex flex-col mt-8" autoComplete="off">
                <label className="mb-1" htmlFor="name">Name</label>
                <input onChange={(e)=>setName(e.target.value)} value={name} className="border-[1px] text-sm py-2 px-4 rounded-[6px] mb-5" type="text" id="name" required name="name" placeholder="e.g. Stephen King"/>
                
                <label className="mb-1" htmlFor="name">Email Address</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className="border-[1px] text-sm py-2 px-4 rounded-[6px] mb-5" type="email" required id="email" name="email" placeholder="e.g. stephen@lorem.com"/>
                
                <label className="mb-1" htmlFor="name">Phone Number</label>
                <input onChange={(e)=>setPhone(e.target.value)} value={phone} className="border-[1px] text-sm py-2 px-4 rounded-[6px] mb-5" type="number" id="phone_num" name="phone_num" placeholder="e.g. +1 234 567 890" required/>

                <button className="py-3 float-right mt-[15%] ml-auto hover:bg-blue-900 bg-blue-950 text-sm text-white w-[110px] rounded-lg">Next Step</button>
            </form>
        </main>
    </div>
  )
}
