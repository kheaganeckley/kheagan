/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, graphql, useStaticQuery } from 'gatsby'
import {FiFacebook, FiTwitter} from 'react-icons/fi'


const query = graphql`
  {
    site {
      siteMetadata {
        facebook
        twitter
        types {
          name
        }
      }
    }
  }
`
export default () => {
  const {
    site: {
      siteMetadata: { facebook, twitter, types },
    },
  } = useStaticQuery(query)
  return (
    <footer
      sx={{
        backgroundColor: 'footerBG',
        color: 'footerText',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '600px',
        marginTop: '100px',
        fontSize: '20px'
      }}
    >
      Menu
      <p
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems:'center',
          marginBottom: '40px',
          fontSize: '15px'
        }}
      >
            <i
            sx={{
              margin: '10px'
            }}
            key='home'
            >
              <Link
                to='/'
                sx={{
                  textDecoration: 'none',
                  color: 'footerText',
                }}
              >
                home
              </Link>
            </i>

            <i
            sx={{
              margin: '10px'
            }}
            key='browse'
            >
              <Link
                to='/Browse'
                sx={{
                  textDecoration: 'none',
                  color: 'footerText',
                }}
              >
                Browse
              </Link>
            </i>



        {types.map(({ name }) => (
            <i
            sx={{
              margin: '10px'
            }}
            key={name}
            >
              <Link
                to={name}
                sx={{
                  textDecoration: 'none',
                  color: 'footerText',
                }}
              >
                {name}
              </Link>
            </i>
        ))}
      </p>
      <i>
        <Link to="Contact" sx={{ color: 'footerText' }}>
          Contact me here
        </Link>
      </i>
      <i sx={{ fontSize: '14px' }}>or on</i>
      <p
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems:'center',
          marginBottom: '40px',
          textAlign: 'center',
          fontSize: '15px'
        }}
      >

            <a
              href={facebook}
              sx={{
                textDecoration: 'none',
                color: 'footerText',
                margin: '10px'
              }}
            >
             <FiFacebook/> facebook
            </a>
            <a
              href={twitter}
              sx={{
                textDecoration: 'none',
                color: 'footerText',
                margin: '10px'
              }}
            >
              <FiTwitter/> twitter
            </a>
      </p>
    </footer>
  )
}
