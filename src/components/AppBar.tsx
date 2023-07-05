import React from "react";
import SignInButton from "./SignInButton";

export default function AppBar() {
  return (
    <header className="flex gap-4 p-4 bg-white">
      <SignInButton />
    </header>
  );
}
