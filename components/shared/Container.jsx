/**
 * Pembungkus lebar konten standar (maks. 6xl, jarak samping 16px di HP).
 * Pakai `as` untuk mengganti tag, mis. <Container as="section">.
 */
export default function Container({ as: Tag = "div", className = "", children, ...props }) {
  return (
    <Tag className={["mx-auto max-w-6xl px-4 sm:px-6", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </Tag>
  );
}
