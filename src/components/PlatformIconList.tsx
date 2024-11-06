import {FaWindows, FaPlaystation, FaAndroid, FaXbox, FaApple, FaLinux} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import {Platform} from '../hooks/useGames';
import {HStack, Icon} from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface Props {
    platforms: Platform[];
}

    
const PlatformIconList = ({platforms}: Props) => {
    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        androind: FaAndroid,
        web: BsGlobe,
    }

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => 
                <Icon as={iconMap[platform.slug]} color=""/>
            )}
        </HStack>
    )
}

export default PlatformIconList
