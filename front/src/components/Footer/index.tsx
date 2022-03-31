import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import background from '././../../assets/images/background.jpg';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { pageWithImageBackground } from '../../libs/utils';

const Container = styled('footer')<{ image: string }>(({ image }) => ({
  width: '100%',
  height: '500px',
  background: image,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
}));

const TextTitle = styled(Typography)<{ color: string }>(({ color }) => ({
  fontSize: '30px',
  fontWeight: 'bold',
  color: color,
}));
const Text = styled(Typography)<{ color: string }>(({ color }) => ({
  fontSize: '20px',
  color: color,
}));

const Icon = styled(AutoGraphIcon)<{ color: string }>(({ color }) => ({
  color: color,
  fontSize: '40px',
  marginRight: '10px',
}));

const LinkText = styled('a')<{ color: string }>(({ color }) => ({
  color: color,
  fontSize: '20px',
  cursor: 'pointer',
}));

const Footer = () => {
  const stateFooterWithImageBackground = pageWithImageBackground.includes(
    window.location.pathname
  );
  return (
    <Container
      image={!stateFooterWithImageBackground ? `url(${background})` : '#fff'}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          width: '80%',
        }}
      >
        <div>
          <div style={{ display: 'flex' }}>
            <Icon
              color={stateFooterWithImageBackground ? 'inherit' : 'warning'}
            />
            <TextTitle color={stateFooterWithImageBackground ? '#000' : '#fff'}>
              Ke4°Kits
            </TextTitle>
          </div>
          <Text color={stateFooterWithImageBackground ? '#000' : '#fff'}>
            {' '}
            Organisez un projet professionel <br /> n'a jamais été aussi simple
            <br />
            avec Ke4 Kits.
            <br />
            <br />
          </Text>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '310px',
            }}
          >
            <TwitterIcon
              style={{
                fontSize: '45px',
                color: stateFooterWithImageBackground ? '#000' : '#fff',
                cursor: 'pointer',
              }}
            />
            <InstagramIcon
              style={{
                fontSize: '45px',
                color: stateFooterWithImageBackground ? '#000' : '#fff',
                cursor: 'pointer',
              }}
            />

            <LinkedInIcon
              style={{
                fontSize: '45px',
                color: stateFooterWithImageBackground ? '#000' : '#fff',
                cursor: 'pointer',
              }}
            />
            <FacebookIcon
              style={{
                fontSize: '45px',
                color: stateFooterWithImageBackground ? '#000' : '#fff',
                cursor: 'pointer',
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
          }}
        >
          <p
            style={{
              color: stateFooterWithImageBackground ? '#000' : '#fff',
              fontSize: '20px',
              textAlign: 'end',
            }}
          >
            <span style={{ fontWeight: 'bold' }}>Entreprise</span>
            <br />
            <br />
            KE4
            <br />
            SAS au capital de 78000 euros
            <br />
            <br />
          </p>
          <LinkText
            href="#"
            color={stateFooterWithImageBackground ? '#000' : '#fff'}
          >
            Conditions générales d'utilisation
            <br />
            <br />
          </LinkText>
          <LinkText
            href="#"
            color={stateFooterWithImageBackground ? '#000' : '#fff'}
          >
            Politique de confidentialité
          </LinkText>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
