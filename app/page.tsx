export default function Home() {
  const pages = Array.from({ length: 5 }, (element, index) => index + 1);
  console.log(pages);
  return (
    <div className="flex flex-col">
      {pages.map((value, index) => {
        return (
          <button key={index}>Level {value}</button>
        )
      })}
    </div>
  );
}
