import { useForm } from "../../context/FormContext";
import { Header } from "../Sections/Header";

export const Summary = () => {
    const {data, addInfo, goBack} = useForm();
    let total = data.cost + (data.service?(data.duration?10:1):0) + (data.storage?(data.duration?20:2):0) + (data.profile?(data.duration?20:2):0);

    function handleBack(e){
        e.preventDefault();
        let data = {
            display: 2
        }
        goBack(data);
    }
    function handleChange(){
        let data = {
            display: 1
        }
        goBack(data);
    }
    function handleSubmit(e){
        e.preventDefault();
        let data = {
            display: 4
        }
        addInfo(data);
    }
  return (
    <div>
        <Header head="Finishing up" para="Double-check everything looks OK before confirming."/>
        <main>
            <form onSubmit={handleSubmit} className="flex flex-col mt-8" autocomplete="off">

                <div className="bg-slate-50 p-5">
                    <div className="pb-5 border-b-[1px]">
                        <p className="flex justify-between font-medium text-m"><span>{data.plan} ({data.duration?"Yearly":"Monthly"})</span><span>${data.cost}/{data.duration?"yr":"mo"}</span></p>
                        <p onClick={handleChange} className="text-sm inline underline text-slate-400 cursor-pointer hover:text-blue-600">Change</p>
                    </div>
                    <div className="mt-5">
                        {
                            data.service && (<p className="flex justify-between text-sm mb-2"><span className="text-slate-400">Online service</span><span className="text-slate-600 font-medium">+${data.duration?"10/yr":"1/mo"}</span></p>)
                        }
                        {
                            data.storage && (<p className="flex justify-between text-sm mb-2"><span className="text-slate-400">Larger storage</span><span className="text-slate-600 font-medium">+${data.duration?"20/yr":"2/mo"}</span></p>)
                        }
                        {
                            data.profile && (<p className="flex justify-between text-sm mb-2"><span className="text-slate-400">Customizable profile</span><span className="text-slate-600 font-medium">+${data.duration?"20/yr":"2/mo"}</span></p>)
                        }
                    </div>
                </div>

                <div className="p-5">
                    <p className="flex justify-between"><span className="text-slate-400 text-sm">Total (per {data.duration?"year":"month"})</span> <span className="text-xl font-[700] text-blue-700">${total}/{data.duration?"yr":"mo"}</span></p>
                </div>

                <div className="mt-[9%]">
                    <button onClick={handleBack} className="text-slate-400 hover:text-blue-900">Go Back</button>
                    <button type="submit" className="py-3 float-right ml-auto hover:bg-blue-950 bg-blue-900 text-sm text-white w-[110px] rounded-lg">Confirm</button>    
                </div>
                
            </form>
        </main>
    </div>
  )
}
