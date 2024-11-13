import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Fuse from "fuse.js";
import axios from "axios";

const Search = () => {
    const { data } = useParams();
    const [Data, setData] = useState([]);
    const [result, setResult] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("/api/search");
                setData(response.data);
                // Perform initial search if query is available
                if (data) {
                    performSearch(data, response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, [data]);

    // Handle input change and perform search
    const handleSearch = (e) => {
        const pattern = e.target.value;
        performSearch(pattern, Data);
    };

    // Function to perform search using Fuse.js
    const performSearch = (pattern, dataToSearch) => {
        if (pattern) {
            const fuse = new Fuse(dataToSearch, {
                keys: ["data.subjects.name"],
                includeScore: true
            });
            const fuseResults = fuse.search(pattern);
            const filteredResults = fuseResults.map(fuseResult => {
                const item = fuseResult.item;
                const matchedSubjects = item.data.map(sem => {
                    const matchedSem = { ...sem };
                    matchedSem.subjects = sem.subjects.filter(sub => 
                        sub.name.toLowerCase().includes(pattern.toLowerCase()));
                    return matchedSem;
                }).filter(sem => sem.subjects.length > 0);
                return { ...item, data: matchedSubjects };
            }).filter(item => item.data.length > 0);

            setResult(filteredResults);
        } else {
            setResult([]);
        }
    };


    return (
        <>
            <div className='h-full '>
                <div className='py-10'>
                    <div className="flex border-2 bg-white rounded-md md:w-[30vw] w-[65vw] py-2 mx-auto  ">
                        <input
                            type="text"
                            onChange={handleSearch}
                            className="md:w-[25vw] w-[50vw] mx-2 outline-none "
                            placeholder="Search by subject"
                        />
                        <NavLink>
                            <box-icon name='search-alt-2'></box-icon>
                        </NavLink>
                    </div>
                    <div className='w-[90vw] mx-auto'>
                        <div className='text-white my-4 flex flex-wrap'>
                            {
                                result.length > 0 ? result.map(item => (
                                    <div key={item.id} className='px-10 text-2xl'>
                                        {item.data.map(element => (
                                            <span key={element.sem} >
                                                {element.subjects.map(subject => (
                                                    <span key={subject.name} >
                                                        <NavLink to={`/${item.type}/${element.sem}/${item.title}/${subject.name}/${subject.link}`}>
                                                            <div className="bg-primary text-black cursor-pointer group w-[250px] h-[25vh] shadow-md my-9 rounded-md flex items-center justify-center text-2xl relative">
                                                                <span className='text-center group-hover:z-10'>{subject.name} {item.type}</span>
                                                                <div className="absolute group-hover:z-0 w-[102%] h-[103%] -z-10 rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></div>
                                                            </div>
                                                        </NavLink>
                                                    </span>
                                                ))}
                                            </span>
                                        ))}
                                    </div>
                                )) :
                                    <div className='mx-auto'>
                                        <img src="/nodata.jpg" alt="No Data found" />
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;
