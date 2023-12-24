import { useState } from "react";
import { useForm } from "../../context/FormContext";
import { Header } from "../Sections/Header"

export const Ads = () => {

    const {addInfo, goBack, data} = useForm();
    const [service, setService] = useState(data.service);
    const [storage, setStorage] = useState(data.storage);
    const [profile, setProfile] = useState(data.profile);

    function handleBack(e){
        e.preventDefault();
        let data = {
            display : 1
        }
        goBack(data);
    }

    function handleSubmit(e){
        e.preventDefault();
        let newData = {
            service: service,
            storage: storage,
            profile: profile,
            display: 3
        }
        addInfo(newData);
    }

  return (
    <div>
        <Header head="Pick add-ons" para="Add-ons help enhance your gaming experience."/>
        <main>
            <form onSubmit={handleSubmit} className="flex flex-col mt-8" autocomplete="off">
                <div className="px-4 mb-3 py-3 border-[1px] border-slate-300 hover:border-slate-700 rounded-[7px]">
                    <label htmlFor="service" className="cursor-pointer flex items-center justify-between">
                        <div><input className="w-[17px] h-[17px]" defaultChecked={service} onChange={()=>setService(!service)} value={"service"} type="checkbox" id="service"/></div>
                        <div>
                            <p className="font-medium">Online service</p>
                            <p className="text-sm text-slate-500">Access to multiplayer games</p>
                        </div>
                        <div className="text-sm text-slate-500">+${data.duration?"10/yr":"1/mo"}</div>
                    </label>
                </div>
                <div className="px-4 mb-3 py-3 border-[1px] border-slate-300 hover:border-slate-700 rounded-[7px]">
                    <label htmlFor="storage" className="cursor-pointer flex items-center justify-between">
                        <div><input className="w-[17px] h-[17px]" defaultChecked={storage} onChange={()=>setStorage(!storage)} value={"storage"} type="checkbox" id="storage"/></div>
                        <div>
                            <p className="font-medium">Larger storage</p>
                            <p className="text-sm text-slate-500">Extra 1TB of cloud save</p>
                        </div>
                        <div className="text-sm text-slate-500">+${data.duration?"20/yr":"2/mo"}</div>
                    </label>
                </div>
                <div className="px-4 mb-3 py-3 border-[1px] border-slate-300 hover:border-slate-700 rounded-[7px]">
                    <label htmlFor="profile" className="cursor-pointer flex items-center justify-between">
                        <div><input className="w-[17px] h-[17px]" defaultChecked={profile} onChange={()=>setProfile(!profile)} value={"profile"} type="checkbox" id="profile"/></div>
                        <div>
                            <p className="font-medium">Customizable profile</p>
                            <p className="text-sm text-slate-500">Custom theme on your profile</p>
                        </div>
                        <div className="text-sm text-slate-500">+${data.duration?"20/yr":"2/mo"}</div>
                    </label>
                </div>
                <div className="mt-[17%]">
                    <button onClick={handleBack} className="text-slate-400 hover:text-blue-900">Go Back</button>
                    <button type="submit" className="py-3 float-right ml-auto hover:bg-blue-900 bg-blue-950 text-sm text-white w-[110px] rounded-lg">Next Step</button>    
                </div>
                
            </form>
        </main>
    </div>
  )
}
