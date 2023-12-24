import { useState } from "react";
import { useForm } from "../../context/FormContext";
import { Header } from "../Sections/Header";
import arcade from "../../assets/icon-arcade.svg";
import advanced from "../../assets/icon-advanced.svg";
import pro from "../../assets/icon-pro.svg";

export const SelectPlan = () => {
    const {addInfo, goBack, data} = useForm();
    const [plan, setPlan] = useState(data.plan);
    const [duration, setDuration] = useState(data.duration);
    const [cost, setCost] = useState(data.cost);

    function handelArcade(){
        setPlan('Arcade');
        if(duration){
            setCost(90);
        }
        else{
            setCost(9)
        }
    }
    function handelAdvance(){
        setPlan('Advance');
        if(duration){
            setCost(120);
        }else{
            setCost(12);
        }
    }
    function handelPro(){
        setPlan('Pro');
        if(duration){
            setCost(150);
        }else{
            setCost(15);
        }
    }
    function handleDuration(){
        setDuration(!duration);
        let data = {
            duration: duration,
            cost: cost
        }
        addInfo(data);
    }
    function handleBack(e){
        e.preventDefault();
        let data = {
            display : 0
        }
        goBack(data);
    }

    function handleSubmit(e){
        e.preventDefault();
        let newData = {
            cost: cost,
            plan: plan,
            duration: duration,
            display: 2
        }
        addInfo(newData);
    }
  return (
    <div>
        <Header head="Select your plan" para="You have the option of monthly or yearly billing."/>
        <main>
            <form onSubmit={handleSubmit} className="flex flex-col mt-8" autocomplete="off">
                <div className="flex gap-3 mb-5">
                    <div onClick={handelArcade} className={`cursor-pointer px-3 justify-between py-4 flex flex-col border-[1px] border-slate-300 ${plan==="Arcade"? 'border-slate-700 bg-slate-50':""} hover:border-slate-700 w-[32%] rounded-[7px] h-[10rem]`}>
                        <img src={arcade} alt="arcade"  className="w-[30px] h-[30px]"/>
                        <div className="flex flex-col">
                            <span>Arcade</span>
                            <span className="text-sm text-slate-500">${duration?"90/yr":"9/mo"}</span>
                        </div>
                    </div>
                    <div onClick={handelAdvance} className={`cursor-pointer px-3 justify-between py-4 flex flex-col border-[1px] border-slate-300 ${plan==="Advance"? 'border-slate-700 bg-slate-50':""} hover:border-slate-700 w-[32%] rounded-[7px] h-[10rem]`}>
                        <img src={advanced} alt="arcade"  className="w-[30px] h-[30px]"/>
                        <div className="flex flex-col">
                            <span>Advanced</span>
                            <span className="text-sm text-slate-500">${duration?"120/yr":"12/mo"}</span>
                        </div>
                    </div>
                    <div onClick={handelPro} className={`cursor-pointer px-3 justify-between py-4 flex flex-col border-[1px] border-slate-300 ${plan==="Pro"? 'border-slate-700 bg-slate-50':""} hover:border-slate-700 w-[32%] rounded-[7px] h-[10rem]`}>
                        <img src={pro} alt="arcade"  className="w-[30px] h-[30px]"/>
                        <div className="flex flex-col">
                            <span>Pro</span>
                            <span className="text-sm text-slate-500">${duration?"150/yr":"15/mo"}</span>
                        </div>
                    </div>
                </div>

                <div className="py-3 bg-slate-100 text-sm font-medium flex gap-3 items-center justify-center">
                    <span className={`${!duration?"text-slate-900":"text-slate-400"}`}>Monthly</span>
                    <span onClick={handleDuration}><i className={`transition ease-in-out delay-150 duration-500 bi ${duration?"bi-toggle-on":"bi-toggle-off"} text-[25px] cursor-pointer`}></i></span>
                    <span className={`${duration?"text-slate-900":"text-slate-400"}`}>Yearly</span>
                </div>

                <div className="mt-[20%]">
                    <button onClick={handleBack} className="text-slate-400 hover:text-blue-900">Go Back</button>
                    <button type="submit" className="py-3 float-right ml-auto hover:bg-blue-900 bg-blue-950 text-sm text-white w-[110px] rounded-lg">Next Step</button>    
                </div>
                
            </form>
        </main>
    </div>
  )
}
