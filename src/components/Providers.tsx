"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type Props = {
  children: ReactNode;
  session?: Session | null;
};
export default function Providers({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
