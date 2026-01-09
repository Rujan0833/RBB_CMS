import react from 'react';
import { getPayload } from 'payload';
import config from '../../payload.config';
import { Media } from '@/payload-types';
import Image from 'next/image';

export const Icons = async () => {
  const payload = await getPayload({config})
  const settings = await payload.findGlobal({slug: "setting"})
  const lightModeIcon = settings.lightModeIcon as Media
  const darkModeIcon  = settings.darkModeIcon as Media


    return (
        <>
            <Image
            src={lightModeIcon.url || ''}
            alt={lightModeIcon.alt || 'Light Mode Icon'}
            width={lightModeIcon.width || 28}
            height={lightModeIcon.height || 10}
            className={'light-mode-icon'}
            />
              
            <Image
            src={darkModeIcon.url || ''}
            alt={darkModeIcon.alt || 'Dark Mode Icon'}
            width={150}
            height={150}
            className={'dark-mode-icon'}
            />
        
        </>

    
    )
}
