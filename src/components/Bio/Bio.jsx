import React from "react";
import './Bio.css';



function Bio(){
    function clicking(e){
        console.log("Grace McPherson");
        
    }
    return (
        <div id="bio">
            <div className="biopic">
                <img  src="https://github.com/akalink/personalsite/blob/main/raw%20stuff/portrait.jpg?raw=true" alt="my picture" />
            </div>
            <article>
                
                <h1 onClick={clicking}>Garrett McPherson</h1>
                
                <p>I am a Java Full Stack Software Developer and Automation Test Engineer with a passion for communication, collaboration, and accessible design. I am also a natural leader and a lifelong learner. With these strengths and passions, I have led teams of developers to create feature-complete applications using the Agile Methodology. My greatest strength is that I add positivity and provide comfort to a work environment during stressful situations. This has helped me and my peers to keep on task during stressful situations. I love to overcome challenges that will help me grow.

In my recent project with Warner Bros Discovery, I took great care to ensure the continued functionality of the WBD codebase. I took the initiative to provide testing for newly developing features. I also cleanly and concisely explained issues with examples for the developers to examine.

I have always been involved in some sort of game modding scene. After university, I participated in making games with local game developers and created a handful of games with them. One of my most recent works was recognized in the realm of VR with a VR experience featured at the 2021 Venice Film Festival. I formally studied and majored in classical composition.

As a musician who writes for the media, I cherish the rare moments when what I write perfectly synchronizes with what I am writing for. I have also taken up creating 3D art. I've had a lot of fun creating characters and bringing them to life. </p>

Interesting Facts:
                <ul className="points">
                    <li>I love Social VR and fully utilize my entire body when using it through motion capture-like technology.</li>
                    <li>I have created a handful of free software tools for some Metaverse apps</li>
                    <li>I have lost count of the number of instruments I can play.</li>
                    <li>I love 3D models and texture 3D models.</li>
                    <li>I love cooking and trying out my own recipe ideas.</li>
                </ul>
            </article>
           {/* <div onMouseOver={clicking}>Click me</div> */}
        </div>
    )
}
export default Bio;