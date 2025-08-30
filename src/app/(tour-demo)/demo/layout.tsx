import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platform Demo - Planton Cloud',
  description: 'Interactive demo showcasing Planton Cloud DevOps platform features and capabilities',
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="demo-layout isolate">
      {children}
    </div>
  )
}
