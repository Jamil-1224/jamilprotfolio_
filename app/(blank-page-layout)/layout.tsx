import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Container } from "@/components/shared/container";

const BlankPageLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full">
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default BlankPageLayout;
