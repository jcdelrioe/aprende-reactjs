import { Link } from '../Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir al Home',
    description: 'Hola, me llamo JCDRE y esto es una prueba',
  },
  en: {
    title: 'About us',
    button: 'Go to Home',
    description: 'hi, my name is JCDRE and this is a proof',
  },
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function About({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src='https://ci6.googleusercontent.com/proxy/j9frsXMmGs9QT7zVrKZclGMKBN1c76H5072d5w3dIYyLdghS01FnUaK6uaaxdzQmdwqJCTJalt-ECsVRhy8gCM8mydCe2xyq1a-aHqp1US7CH7rVihhEXVHwF5Z1GZPCtWtWa3ucLqvxgy9lWDHgyrEuR2u-ueMe5cox-UWX23z8h7ILp2thS3Dlr_LsYGRy-9t1OHFEGKm-UeICXm55hbpqI3Qf40aHT_IvLxghbIxm39apTwQuC6a5VACwM90=s0-d-e1-ft#https://media.licdn.com/dms/image/C5603AQH2z1nZTbyTCg/profile-displayphoto-shrink_100_100/0/1605539990648?e=2147483647&v=beta&t=zRPWu9C3_7sys-XTtSgjUnvq-Ht2aHmn8VbCzUnHU1w'
          alt='JCDRE Pic'
        />
      </div>
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
