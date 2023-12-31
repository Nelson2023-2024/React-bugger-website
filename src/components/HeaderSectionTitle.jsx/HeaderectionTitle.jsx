
function HeaderectionTitle({title, subtitle, description}) {
  return (
    <div className="text-center w-[200px] mx-auto">
        <p className="text-sm text-primary">{subtitle}</p>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-xs text-gray-400">{description}</p>
    </div>
  )
}

export default HeaderectionTitle