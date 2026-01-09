import react from 'react';
import { getPayload } from 'payload';
import config from '../../payload.config';
import { Media } from '@/payload-types';
import Image from 'next/image';

export const Logos = async () => {
  const payload = await getPayload({config})
  const settings = await payload.findGlobal({slug: "setting"})
  const lightModeLogo = settings.lightModeLogo as Media
  const darkModeLogo = settings.darkModeLogo as Media



    return (
        <>
            <Image
            src={lightModeLogo.url || ''}
            alt={lightModeLogo.alt || 'Light Mode Logo'}
            width={lightModeLogo.width || 28}
            height={lightModeLogo.height || 10}
            className={'light-mode-logo'}
            />
            <Image
            src={darkModeLogo.url || ''}
            alt={darkModeLogo.alt || 'Dark Mode Logo'}
            width={darkModeLogo.width || 28}
            height={darkModeLogo.height || 50}
            className={'dark-mode-logo'}
            />
        
        </>

    
    )
}
