import './App.css';

import GalleryHeader from './components/GalleryHeader';
import GalleryBody from './components/GalleryBody';
import GalleryFooter from './components/GalleryFooter';

import imageData from './components/imageData';

function App() {
  return (
    <div>
      <GalleryHeader/>
      <GalleryBody imageData={imageData}/>
      <GalleryFooter/> 
    </div>
  )
}

export default App;
