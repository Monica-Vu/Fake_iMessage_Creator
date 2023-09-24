import ProfilePictureContext from "./components/Common/FileContext/FileContext";
import Grid from "./components/Grid/Grid";
import { useState } from "react";

function App() {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  return (
    <ProfilePictureContext.Provider value={{ setProfilePicture, profilePicture }}>
      <div className="App">
        <Grid />
      </div>
    </ProfilePictureContext.Provider>
  );
}

export default App;
