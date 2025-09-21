import React from 'react';
import HeroArea from './sections/heroArea';
import ContactFormSection from './sections/contactFormSection';

export const revalidate = false;

export default function ContactPage() {
    return (
        <>
            <HeroArea />
            <ContactFormSection />
        </>
    );
}
