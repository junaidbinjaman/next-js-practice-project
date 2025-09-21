import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get free support from us'
}

export default function Layout({children}: {children: ReactNode}) {
    return children;
}