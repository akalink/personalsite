import React from "react";
import './Art.css' 
import ArtBox from "./ArtBox";

const arts = [
    { 
        key : 1,
        link : "http://www.mcphersonsound.com/uploads/1/4/1/7/14172286/published/vrchat-1920x1080-2020-07-05-00-23-49-860.png?1593934250",
        alt : "sky waterfall",
        comment: "comment"
    },
    { 
        key : 2,
        link : "http://www.mcphersonsound.com/uploads/1/4/1/7/14172286/vrchat-1920x1080-2020-07-05-00-22-13-653_orig.png",
        alt: "low resolution valley park with pixel river",
        comment: "A nostalgic river of pixels"
    },
    { 
        key : 3,
        link : "http://www.mcphersonsound.com/uploads/1/4/1/7/14172286/vrchat-1920x1080-2020-07-05-00-24-45-697_orig.png",
        alt: "dark living room with art pieces",
        comment: "A relaxing lounging area"
    },
    {
        key : 4,
        link : "https://s2.booth.pm/b86b039a-a081-441d-bd5b-c92157dc0cc4/i/3504298/3f8614c2-166d-44d7-9647-984b7e1f7245_base_resized.jpg",
        alt: "toony cyborg",
        comment: "A prototype for a cyborg"
    },
    {
        key : 5,
        link : "http://www.mcphersonsound.com/uploads/1/4/1/7/14172286/vrchat-1920x1080-2020-07-05-00-25-28-286_orig.png",
        alt: "Urban art",
        comment: "Urban art"
    },    
    {
        key : 6,
        link : "",
        alt: "",
        comment: ""
    }
]

function Art(){
    return (
        <div id="gallery">
            
            {arts.map((art) => {
                return <ArtBox img={art.link} alt={art.alt} comment={art.comment} />
            })}

        </div>
        )
}
export default Art;