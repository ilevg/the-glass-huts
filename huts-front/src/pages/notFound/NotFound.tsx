import styles from './NotFound.module.scss'
import Title from '../../UI/title/Title'
import bg from '../../assets/images/about/about-4.png'

const NotFound = () => {
  const titleLinks = [
    {
      text: 'Go Home',
      url: '/'
    }
  ]
  return (
    <div>
      <Title titleText='Not Found!' bg={bg} links={titleLinks} />
    </div>
  )
}

export default NotFound
