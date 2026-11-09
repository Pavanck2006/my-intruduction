function SectionTitle({ eyebrow, title, highlight, description, number }) {
  return (
    <div className="section-title">
      <div className="section-title__meta">
        <span className="eyebrow"><span className="eyebrow__dot" />{eyebrow}</span>
        {number && <span className="section-title__number">{number}</span>}
      </div>
      <h2>{title} <span>{highlight}</span></h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionTitle
