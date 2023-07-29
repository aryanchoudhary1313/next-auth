import Songs from "../components/Songs";

async function getSongData() {
  const url =
    "https://songmeanings.p.rapidapi.com/?key=%3CREQUIRED%3E&q=%3CREQUIRED%3E&page=1&page_size=25&matchmode=extended&method=songs.search&format=json";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b804c662bbmsh9c43e17c84b56fap15d32djsn510de904c134",
      "X-RapidAPI-Host": "songmeanings.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export default function Home() {
  const data = getSongData();

  return <Songs song={data} />;
}
