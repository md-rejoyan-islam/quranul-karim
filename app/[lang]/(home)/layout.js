export default function layout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
