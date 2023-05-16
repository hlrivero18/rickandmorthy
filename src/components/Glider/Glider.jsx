import React, {useEffect} from "react";
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

export default function MyGlider(){
    useEffect(() => {
        const glide = new Glide('.glide')
        glide.mount()
      }, [])
    
      return (
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">Slide 1</li>
              <li className="glide__slide">Slide 2</li>
              <li className="glide__slide">Slide 3</li>
            </ul>
          </div>
        </div>
      )
}