import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/profile/Profile";
import { Saved } from "./pages/profile/Saved";
import { Tagged } from "./pages/profile/Tagged";
import { Followers } from "./pages/profile/Followers";
import { Following } from "./pages/profile/Following";
import { Editprofile } from "./pages/accounts/Editprofile";

import "./static/css/bootstrap.css";
import "./static/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/suryawanshi_shrinath/' element={<Profile />} />
        <Route path='/suryawanshi_shrinath/saved' element={<Saved />} />
        <Route path='/suryawanshi_shrinath/tagged' element={<Tagged />} />
        <Route path='/suryawanshi_shrinath/followers' element={<Followers />} />
        <Route path='/suryawanshi_shrinath/following' element={<Following />} />
        <Route path='/accounts/edit' element={<Editprofile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
