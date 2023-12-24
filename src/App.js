import { PersonalInfo, SelectPlan, Ads, Summary, Submit } from './components';
import { useForm } from './context/FormContext';
import './App.css';


function App() {
  const {data} = useForm();
  return (
    <section className="bg-white p-5 flex rounded-[2.5%]">
       <div className="bg-[url(./assets/bg-sidebar-desktop.svg)] px-8 py-10 w-[28%] bg-center bg-no-repeat bg-contain">
          <div className='flex gap-3 mb-8'>
            <div className={`rounded-full ${data.display===0?"bg-sky-200 text-slate-900":""} text-sky-200 hover:text-slate-900 border-2 border-sky-200 flex items-center justify-center hover:bg-sky-200 w-[35px] h-[35px]`}><span>1</span></div>
            <div className='flex flex-col'><span className='text-slate-200 text-xs'>STEP 1</span><span className='font-medium text-sm text-slate-50'>YOUR INFO</span></div>
          </div>
          <div className='flex gap-3 mb-8'>
            <div className={`rounded-full ${data.display===1?"bg-sky-200 text-slate-900":""} text-sky-200 hover:text-slate-900 border-2 border-sky-200 flex items-center justify-center hover:bg-sky-200 w-[35px] h-[35px]`}><span>2</span></div>
            <div className='flex flex-col'><span className='text-slate-200 text-xs'>STEP 2</span><span className='font-medium text-sm text-slate-50'>SELECT PLAN</span></div>
          </div>
          <div className='flex gap-3 mb-8'>
            <div className={`rounded-full ${data.display===2?"bg-sky-200 text-slate-900":""} text-sky-200 hover:text-slate-900 border-2 border-sky-200 flex items-center justify-center hover:bg-sky-200 w-[35px] h-[35px]`}><span>3</span></div>
            <div className='flex flex-col'><span className='text-slate-200 text-xs'>STEP 3</span><span className='font-medium text-sm text-slate-50'>ADD-ONS</span></div>
          </div>
          <div className='flex gap-3 mb-8'>
            <div className={`rounded-full ${data.display===3||data.display===4?"bg-sky-200 text-slate-900":""} text-sky-200 hover:text-slate-900 border-2 border-sky-200 flex items-center justify-center hover:bg-sky-200 w-[35px] h-[35px]`}><span>4</span></div>
            <div className='flex flex-col'><span className='text-slate-200 text-xs'>STEP 4</span><span className='font-medium text-sm text-slate-50'>SUMMARY</span></div>
          </div>
       </div>
       
       <div className='pl-[13%] pr-[4%] pt-[5%] w-[68%]'>
          {
            data.display ===0?<PersonalInfo/>:data.display===1?<SelectPlan/>:data.display===2?<Ads/>:data.display===3?<Summary/>:data.display===4?<Submit/>:""
          }
       </div>
    </section>
  );
}

export default App;
