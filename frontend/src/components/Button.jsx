import { ArrowUpRight } from 'lucide-react'

function Button({ children, href, variant = 'primary', icon: Icon = ArrowUpRight, ...props }) {
  return (
    <a className={`button button--${variant}`} href={href} {...props}>
      <span>{children}</span>
      {Icon && <Icon size={17} aria-hidden="true" />}
    </a>
  )
}

export default Button
