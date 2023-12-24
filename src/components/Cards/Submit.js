import thankIcon from "../../assets/icon-thank-you.svg";

export const Submit = () => {
  return (
    <div className="w-[100%] h-[100%]">
        <main className="flex item-center justify-center h-[100%]">
            <div className="text-center">
                <div>
                    <img className="inline" src={thankIcon} alt="thank-Icon" />
                </div>
                <h2 className="mt-[5%] text-3xl font-bold">Thank you!</h2>
                <p className="mt-[5%] text-center text-slate-400">Thanks for conforming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
            </div>
        </main>
    </div>
  )
}
