
function HeaderectionTitle({title, subtitle, description}) {
  return (
    <div className="text-center w-[200px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">{subtitle}</p>
        <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl font-bold">{title}</h1>
        <p data-aos="fade-up" data-aos-delay="350" className="text-xs text-gray-400">{description}</p>
    </div>
  )
}

export default HeaderectionTitle