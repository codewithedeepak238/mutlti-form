export const Header = ({head, para}) => {
  return (
    <div>
      <p className="font-medium text-3xl mb-2">{head}</p>
      <p className="text-slate-400">{para}</p>
    </div>
  )
}
