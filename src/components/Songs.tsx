"use client";

// pages/song/[id].tsx

import { useEffect, useRef } from "react";
import { GetServerSideProps, NextPage } from "next";

interface Song {
  audioUrl: string;
}

interface SongPageProps {
  song: Song;
}

const SongPage: NextPage<SongPageProps> = ({ song }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const decoder = new TextDecoder();
  const chunkSize = 1024; // Adjust the chunk size as needed

  useEffect(() => {
    // Play the audio when the song data is available
    if (song.audioUrl && audioRef.current) {
      audioRef.current.src = song.audioUrl;
      audioRef.current.play();
    }
  }, [song]);

  return (
    <div>
      <audio ref={audioRef} controls>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SongPageProps> = async ({
  params,
}) => {
  const songId = params?.id;
  try {
    // Fetch song details based on the id from your backend API
    // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
    const response = await fetch(
      `https://spotifystefan-skliarovv1.p.rapidapi.com/getTracks`
    );
    const data = await response.json();

    // Assume the response data has the necessary song details, including the actual song URL
    const song: Song = {
      audioUrl: data.audioUrl, // Replace this with the actual key that holds the song URL
    };

    return {
      props: { song },
    };
  } catch (error) {
    console.error("Error fetching song details:", error);
    return {
      notFound: true,
    };
  }
};

export default SongPage;
