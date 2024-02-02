export function ButtonCustom({ style, onClick, title }) {
  return (
    <button className={style} onClick={onClick}>
      {title}
    </button>
  );
}
