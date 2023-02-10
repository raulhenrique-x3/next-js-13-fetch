import Image from "next/image";

const getDogs = async () => {
  const data = await fetch("https://dogapi.dog/api/v2/breeds");
  return data.json();
};

export default async function Home() {
  const dogsData = getDogs();
  const [dogs] = await Promise.all([dogsData]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl p-2">Aprendendo sobre o novo Next.Js 13</h1>
        {dogs?.data?.map((dog: any, key: any) => (
          <ul key={dog?.id}>
            <li className="border-b-2 p-2 bg-zinc-100	">
              {dog.attributes.name}
            </li>
          </ul>
        ))}
      </div>
    </main>
  );
}
