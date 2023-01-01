import * as React from 'react';
import { useState } from 'react';
import About from './about';


export default function ImgCard({ book }) {
    const [show,setShow]=useState(false);
    const [bookItem,setItem] = useState();
    console.log(book);

    return (

        book.map((item) => {
            let img = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
            if (img !== undefined && price !== undefined) {
                return (
                    < >
                        <div className='rounded-2xl p-2 mb-2.5 shadow-[0_5px_5px_rgba(212,185,150,.5)] text-center relative poppin hover:scale-90' onClick={()=>{setShow(true);setItem(item)}}>
                            <img className='w-full h-52 rounded-[1rem_1rem_0_0]' src={img} alt="no" />
                            <div className='flex flex-col'>
                                <h3 className='m-3 text-sm font-bold'>{item.volumeInfo.title}</h3>
                                <p className=' absolute left-2 right-2 bottom-2 bg-orange-200 text-black text-sm font-bold p-1 '>&#8377;{price}</p>
                            </div>
                        </div>
                        <About show={show} item={bookItem} onClose={()=>setShow(false)} />
                    </>

                )

            }

        })


    );
}