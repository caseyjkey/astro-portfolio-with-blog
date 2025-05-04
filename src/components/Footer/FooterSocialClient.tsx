import type { ComponentType } from 'react';

interface Props {
    link: string;
    icon: ComponentType;
}

export default function FooterSocialClient({ link, icon: Icon }: Props) {
    return (
        <>
            {Icon &&
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Icon />
                </a>
            }
        </>
    );
}
