import Header from "@/components/Header/Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {children}
    </div>
  );
}
