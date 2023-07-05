"use client";

import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";

export default function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>

        {session.user.image && (
          <Image src={session.user.image} alt="img" height={30} width={30} />
        )}
        <button
          className="text-red py-2 px-3 border border-solid border-black"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className="p-2 px-3 border border-solid border-black"
    >
      SignInButton
    </button>
  );
}
