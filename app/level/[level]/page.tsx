export default async function Slug({params}: {params: Promise<{level: string}>}) {
  const level = (await params).level;
  console.log(level);
  return (
    <div>

    </div>
  )
}