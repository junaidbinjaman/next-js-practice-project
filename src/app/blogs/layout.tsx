import { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
    title: "All Blogs",
    description: "Browse all blogs",
}

export default function Layout({children}: {children: ReactNode}) {
  return children;
}
