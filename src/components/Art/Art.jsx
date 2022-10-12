import React from "react";
import './Art.css' 
function Art(){
    return (
        <div id="gallery">
            <div className="imageGallery">
                <img src="http://www.mcphersonsound.com/uploads/1/4/1/7/14172286/published/vrchat-1920x1080-2020-07-05-00-23-49-860.png?1593934250"
            alt="sky waterfall" />
            <p><i>Waterfall from the flying isles</i></p>
            </div>
            <div className="imageGallery">
            <img src="http://www.mcphersonsound.com/uploads/1/4/1/7/14172286/vrchat-1920x1080-2020-07-05-00-22-13-653_orig.png"
            alt="low resolution valley park with pixel river" />
            <p><i>A nostalgic river of pixels</i></p>
            </div>
            <div className="imageGallery">
            <img src="http://www.mcphersonsound.com/uploads/1/4/1/7/14172286/vrchat-1920x1080-2020-07-05-00-24-45-697_orig.png"
            alt="dark living room with art pieces" />
            <p><i>A relaxing lounging area</i></p>
            </div>
            <div className="imageGallery">
            <img src="https://s2.booth.pm/b86b039a-a081-441d-bd5b-c92157dc0cc4/i/3504298/3f8614c2-166d-44d7-9647-984b7e1f7245_base_resized.jpg"
            alt="toony cyborg" />
            <p><i>A prototype for a cyborg</i></p>
            </div>
        </div>
        )
}
export default Art;