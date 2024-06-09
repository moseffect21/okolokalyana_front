import NotFoundPage from 'application/presentation/pages/ErrorPages/ServerErrorPage'
import { getNotFoundPageServerSideProps } from 'application/presentation/pages/ErrorPages/NotFoundPage'

export const getStaticProps = getNotFoundPageServerSideProps

export default NotFoundPage
