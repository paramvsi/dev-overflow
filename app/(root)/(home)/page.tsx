import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  );
};

export default Home;
