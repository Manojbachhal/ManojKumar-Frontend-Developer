import React, { useEffect, useState } from "react";
import "./Home.css";
import banner3 from "../assets/banner3.png";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import Popup from "./Popup";

function Home() {
    const [searchQuery, setSearchQueary] = useState("");

    const [page, setPage] = useState(0);

    const [data, setData] = useState();

    const [popup, setPopup] = useState({
        vibility: false,
        data: {},
    });

    async function getData() {
        let url = `https://api.spacexdata.com/v3/capsules?limit=9&offset=${page * 10
            }${searchQuery}`;
        // console.log(searchQuery)

        let res = await fetch(url);
        let data = await res.json();
        setData(data);
        // console.log(data)
    }

    useEffect(() => {
        getData();
    }, [page]);
    return (
        <>
            <Navbar />
            {/* -----------------banner----------- */}

            <div
                id="check"
                style={{ backgroundColor: "#182633" }}
                className=" xl:flex md:flex"
            >
                <div>
                    <img src={banner3} alt="image" />
                </div>

                <div className="text-white md:w-1/2 xl:w-1/2 text-center p-20">
                    <h1 className=" mt-50 text-3xl font-bold xl:pt-40 md:pt-40 ">
                        Hello, busy Human{" "}
                    </h1>
                    <p className="text-2xl" style={{ color: "#F55C30" }}>
                        Welcome to Capsule
                    </p>
                    <p> Beyond the Horizon: Exploring the Cosmos with Space Capsules</p>
                </div>
            </div>

            {/*-------search-----------  */}

            <div className="bg-red grid grid-cols-2 gap-4 md:grid-cols-3 pt-20 pb-20 w-10/12 m-auto justify-items: center items-center">
                <div className="p-2">
                    <select
                        id="search"
                        class="bg-gray-50 border border-teal-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option selected>Choose a filter</option>
                        <option value="original_launch">Original launch</option>
                        <option value="status">Status</option>
                        <option value="type"> Type</option>
                    </select>
                </div>

                <div className="p-2">
                    <input
                        type="text"
                        className="w-full h-10 rounded-lg border border-teal-600 p-5"
                        placeholder="Search Capsule by Category"
                        onChange={(e) => {
                            setSearchQueary(
                                "&" +
                                document.getElementById("search").value +
                                "=" +
                                e.target.value
                            );
                        }}
                    />
                </div>

                <div>
                    <button
                        className="rounded-lg bg-teal-600 hover:bg-teal-500 text-base font-bold text-white w-40 h-10 "
                        onClick={getData}
                    >
                        {" "}
                        Search
                    </button>
                </div>
            </div>

            {/* searched data and default data */}

            <div>
                <h1 className=" text-3xl font-bold text-center">
                    Discover our Cutting-Edge Space Capsules for Extraordinary Journeys
                </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 w-5/6 m-auto">
                {data?.map((ele) => {
                    return (
                        <div
                            id="result_div"
                            className="p-5 rounded-lg"
                            onClick={() => {
                                setPopup({ ...popup, vibility: true, data: ele });
                            }}
                        >
                            <h1 className="text-xl text-teal-600" >
                                Capsule Name : {ele.capsule_id}
                            </h1>
                            <p>Serial Number : {ele.capsule_serial}</p>
                            <p>Status : {ele.status}</p>
                            <p>Type : {ele.type}</p>
                            <p>
                                Launch :{" "}
                                {ele.original_launch == null ? "Null" : ele.original_launch}
                            </p>
                        </div>
                    );
                })}
            </div>

            <Popup popup={popup} setPopup={setPopup} />
            <Pagination page={page} setPage={setPage} />
        </>
    );
}

export default Home;
