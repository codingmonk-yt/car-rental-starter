import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import { Link, Stack, Button, Tooltip, IconButton } from '@mui/material';
//
import Iconify from './Iconify';
import { DiscordLogo, FacebookLogo, InstagramLogo, LinkedinLogo, TelegramLogo, YoutubeLogo } from '@phosphor-icons/react';

// ----------------------------------------------------------------------

SocialsButton.propTypes = {
  initialColor: PropTypes.bool,
  links: PropTypes.objectOf(PropTypes.string),
  simple: PropTypes.bool,
  sx: PropTypes.object,
};

export default function SocialsButton({ initialColor = false, simple = true, sx, ...other }) {
  const SOCIALS = [
    {
      name: 'Facebook',
      icon: <FacebookLogo color='#1877F2' size={20} weight='fill' />,
      socialColor: '#1877F2',
      path: 'https://www.facebook.com/codingmonk.dev',
    },
    {
      name: 'Instagram',
      icon: <InstagramLogo color="#E02D69" size={20} weight='fill' />,
      socialColor: '#E02D69',
      path: 'https://www.instagram.com/codingmonk.dev/',
    },
    {
      name: 'Linkedin',
      icon: <LinkedinLogo color='#007EBB' size={20} weight='fill' />,
      socialColor: '#007EBB',
      path: 'http://linkedin.com/company/coding-monk',
    },
    {
      name: 'Youtube',
      icon: <YoutubeLogo color="#FF0000" size={20} weight='fill' />,
      socialColor: '#FF0000',
      path: 'http://youtube.com/@coding-monk',
    },
    {
      name: 'Telegram',
      icon: <TelegramLogo color="#0088CC" size={20} weight='fill' />,
      socialColor: '#0088CC',
      path: 'https://t.me/+S4nrlQbCy85hNTc1',
    },
    {
      name: 'Discord',
      icon: <DiscordLogo color='#7289da' size={20} weight='fill' />,
      socialColor: '#7289da',
      path: 'https://discord.gg/ERMyzNEXNZ',
    },
  ];

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      {SOCIALS.map((social) => {
        const { name, icon, path, socialColor } = social;
        return simple ? (
          <Tooltip key={name} title={name} placement="top">
            <IconButton
              component={Link}
              href={path}
              target="_blank"  // Open link in a new tab or window
              color="inherit"
              sx={{
                ...(initialColor && {
                  color: socialColor,
                  '&:hover': {
                    bgcolor: alpha(socialColor, 0.08),
                  },
                }),
                ...sx,
              }}
              {...other}
            >
              {icon}
            </IconButton>
          </Tooltip>
        ) : (
          <Button
            key={name}
            href={path}
            target="_blank"  // Open link in a new tab or window
            color="inherit"
            variant="outlined"
            size="small"
            startIcon={<Iconify icon={icon} />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              ...(initialColor && {
                color: socialColor,
                borderColor: socialColor,
                '&:hover': {
                  borderColor: socialColor,
                  bgcolor: alpha(socialColor, 0.08),
                },
              }),
              ...sx,
            }}
            {...other}
          >
            {name}
          </Button>
        );
      })}
    </Stack>
  );
}
