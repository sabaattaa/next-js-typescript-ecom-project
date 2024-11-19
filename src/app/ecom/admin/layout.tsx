export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      this is he Admin layout
      {children}
    </>
  );
}
