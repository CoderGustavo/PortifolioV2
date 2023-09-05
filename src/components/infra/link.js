import React from 'react';
import LinkNext from 'next/link';

export default function Link({children, href, ...props}) {
    return (
        <>
            <LinkNext href={href ? href : '/'} {...props}>
                {children}
            </LinkNext>
        </>
    )
}
