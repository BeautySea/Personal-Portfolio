import styles from "./styles.module.css";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="self-center h-full w-full overflow-hidden">
      <div className="w-full h-full opacity-100 tansform-none">
        <div className="lg:grid grid-cols-12 h-full flex flex-col">
            {children}
        </div>
      </div>
    </main>
  );
}