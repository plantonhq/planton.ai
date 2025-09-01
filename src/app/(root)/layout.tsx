import { Layout } from '@/components/layout/MainLayout';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
