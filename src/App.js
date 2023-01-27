import ProfileView from "./components/ProfileView";
import ProfileViewUser from "./components/ProfileView_user";
import NavbarLinked from "./components/Navbar";
import Mainfeed from "./components/FeedPage/mainfeed";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarLinked />
        <Routes>
          <Route path="/" element={<Mainfeed />} />
          <Route path="/profile/me" element={<ProfileView />} />
          <Route path="/profile/:userid" element={<ProfileViewUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
