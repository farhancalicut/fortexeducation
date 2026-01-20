import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[72px] md:pt-[112px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
