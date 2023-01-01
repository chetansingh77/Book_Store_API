import React from "react";
import {GrClose} from "react-icons/gr";

function About({show,item,onClose}) {
    if(!show){
        return null;
    }
    let img = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <div className=" bg-transparent h-full w-full mt-4 absolute inset-y-48 inset-x-0 flex items-center justify-center ">
            <div className=" about max-w-3xl min-h-550 p-6 relative box-border overflow-hidden text-xl ">
                <button className=" absolute top-4 right-4 outline-none border-none text-lg bg-transparent" onClick={onClose}><GrClose size={30} /></button>
                <div className=" mt-8 flex justify-between">
                    <img className="ml-8 mr-5 w-36 h-48 rounded-lg font-bold" src={img} alt="no" />
                    <div className=" text-black mr-14">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3 className=" mt-3 text-green-500">{item.volumeInfo.authors}</h3>
                        <h4 className=" text-blue-500">{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span> </h4><br />
                        <a href={item.volumeInfo.previewLink} ><button className=" outline-none border-none w-full rounded bg-blue-500 text-white font-bold p-[0.3rem_0.5rem]">More</button></a>

                    </div>
                </div>
                <h4 className=" mt-8 p-5 font-semibold text-justify text-sm text-black">
                {item.volumeInfo.description}
                </h4>
            </div>
        </div>

    );

}


export default About;