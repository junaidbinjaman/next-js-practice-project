import React from 'react';
import HeroArea from './sections/heroArea';
import ContactFormSection from './sections/contactFormSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get free support from us'
}

export default function ContactPage() {
    return (
        <>
            <HeroArea />
            <ContactFormSection />
        </>
    );
}
