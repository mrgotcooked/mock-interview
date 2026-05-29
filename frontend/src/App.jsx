import React from "react";

import {
  SignInButton,
  SignOutButton,
  SignedOut,
  UserButton,
  useUser,
  SignedIn
} from "@clerk/clerk-react";

const App = () => {

  const { isSignedIn } = useUser();

  return (
    <div>
      <h1>Welcome to the app</h1>

      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      <UserButton/>
    </div>
  );
};

export default App;