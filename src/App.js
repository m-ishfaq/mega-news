import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './styles/app.scss'
import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Loader from './components/Loader';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import ProfileEdit from './components/ProfileEdit';
import Profile from './components/Profile';
import ProfilePostVideo from './components/ProfilePostVideo';
import ProfilePostNew from './components/ProfilePostNew';
import ProfileSavedPosts from './components/ProfileSavedPosts';
import Writer from './components/Writer';
import Category from './components/Category';
import Tags from './components/Tags';
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import Single from './components/Single';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <Router>
      {
        !isLoaded && <Loader />
      }
      {
        isLoaded && (
          <>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/profile/edit' element={<ProfileEdit />} />
              <Route path='/profile/create-new/video' element={<ProfilePostVideo />} />
              <Route path='/profile/create-new' element={<ProfilePostNew />} />
              <Route path='/profile/saved-posts' element={<ProfileSavedPosts />} />
              <Route path='/writer' element={<Writer />} />
              <Route path='/category' element={<Category />} />
              <Route path='/Tags' element={<Tags />} />
              <Route path='/sign-in' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/forgot-password' element={<Forgot />} />
              <Route path='/reset-password' element={<Forgot />} />
              <Route path='/single' element={<Single />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
            <Toaster />
          </>
        )
      }
    </Router>
  );
}

export default App;