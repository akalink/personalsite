import React from "react";
import "./VR.css";
import VRBox from "./VRBox";

const exps = [
    {key: 1,
     img: "https://api.vrchat.cloud/api/1/file/file_608f7a1a-36e9-4bfb-bb55-9e5eeafe0d64/1/file",
     title: "Crypt of the Spirts",
     link: "https://vrchat.com/home/world/wrld_fda18709-0f92-4e6c-b995-11e22a159e5a",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa est ratione! Vitae, aliquid alias. Sequi voluptate excepturi amet fugit nihil, nam vero, quaerat rem enim nobis, expedita doloribus molestiae."
    },
    {key: 2,
     img: "https://api.vrchat.cloud/api/1/file/file_ef055bec-da99-43d1-a6c2-261daa846c31/1/file",
     title: "Infinity Rhythm",
     link: "https://vrchat.com/home/world/wrld_7dfdf6d6-dcc2-4a2b-90b4-f711b197ba60",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa est ratione! Vitae, aliquid alias. Sequi voluptate excepturi amet fugit nihil, nam vero, quaerat rem enim nobis, expedita doloribus molestiae."
    },{ key: 3,
        img: "https://api.vrchat.cloud/api/1/file/file_6200823e-5ae5-4c46-846c-38f8d5514e18/2/file",
        title: "akalink's Jazz Bar",
        link:"https://vrchat.com/home/world/wrld_ea0bb230-f1bb-4b4f-98f6-a82d2017a43c",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa est ratione! Vitae, aliquid alias. Sequi voluptate excepturi amet fugit nihil, nam vero, quaerat rem enim nobis, expedita doloribus molestiae."

    },{ key: 4,
        img: "https://api.vrchat.cloud/api/1/file/file_4f267552-c19b-4adb-9d6f-981a5d2ba6ae/3/file",
        title: "Rhythm Chasm （climbing）",
        link:"https://vrchat.com/home/world/wrld_5cbae5ab-10db-4b69-9c49-14235d00a231",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa est ratione! Vitae, aliquid alias. Sequi voluptate excepturi amet fugit nihil, nam vero, quaerat rem enim nobis, expedita doloribus molestiae."

    }, {key: 5,
        img: "https://api.vrchat.cloud/api/1/file/file_6ae9e60a-9785-402a-8458-098ff49cd142/1/file",
        title: "Path of the Accursed",
        link: "https://vrchat.com/home/world/wrld_35132929-c35d-4fd3-bfba-585937976141",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa est ratione! Vitae, aliquid alias. Sequi voluptate excepturi amet fugit nihil, nam vero, quaerat rem enim nobis, expedita doloribus molestiae."
    }

]

function VR(){
    return (
        <div id="vr">
            {exps.map((exp) => {
                return <VRBox img={exp.img} title={exp.title} link={exp.link} description={exp.description}/>})
            }
        </div>
    )
}
export default VR;