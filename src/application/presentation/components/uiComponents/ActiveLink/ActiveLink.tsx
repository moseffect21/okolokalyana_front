import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type ActiveLinkProps = LinkProps & {
  activeClassName: string
  children: React.ReactNode
  className: string
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  activeClassName,
  className,
  ...props
}) => {
  const { asPath } = useRouter()
  const linkClass =
    asPath === props.href || asPath === props.as
      ? `${className} ${activeClassName}`.trim()
      : className

  return (
    <Link {...props} className={linkClass}>
      {children}
    </Link>
  )
}

export default ActiveLink
