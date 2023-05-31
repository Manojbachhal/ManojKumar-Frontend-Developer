import React from 'react'

function Popup({ popup, setPopup }) {
    console.log(popup.data)
    return (
        <div style={{ display: popup.vibility ? 'block' : 'none' }} className=' m-auto fixed bg-red-200 text-black inset-0 top-20 p-10 w-5/6 h-3/4 rounded-lg'>
            <div className='flex justify-end'>
                <button className='rounded-lg bg-red-600 text-base  text-white w-10 h-10 align-left rounded-full' onClick={() => setPopup({ ...popup, vibility: false })}>X</button>
            </div>
            <div>

                <h1 className="text-xl" style={{ color: '#F55C30' }}>Capsule Name : {popup.data.capsule_id}</h1>
                <h2>details : {popup.data.details}</h2>
                <p>Serial Number : {popup.data.capsule_serial}</p>
                <p>Status : {popup.data.status}</p>
                <p>Type : {popup.data.type}</p>
                <p>landings : {popup.data.landings}</p>
                <p>Launch : {popup.data.original_launch == null ? "Null" : popup.data.original_launch}</p>
            </div>
        </div>
    )
}

export default Popup