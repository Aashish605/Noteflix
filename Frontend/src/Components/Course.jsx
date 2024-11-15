import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
    const { course } = useParams();
    const [CourseData, setCourseData] = useState({});

    useEffect(() => {
        const sendData = async () => {
            try {
                const response = await axios.post("https://noteflix-backend.onrender.com/course", `${course}`, {
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                })
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        sendData()
    }, [course])

    useEffect(() => {
        const getcourse = async () => {
            try {
                    const res = await axios.get(`https://noteflix-backend.onrender.com/notes`);
                    setCourseData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getcourse();
    }, [course]);

    return (
        <>
            {
                CourseData ? 
                <div>
                    <h1 className="text-center text-4xl mt-16">{CourseData.title} Notes</h1>
                    <div className="w-[90vw] ">
                        {CourseData.data && CourseData.data.map((i) => (
                            <div key={i.sem} className="m-8 w-full">
                                <div className="w-[80vw] border-2 my-4 border-slate-800"></div>
                                <h1 className="text-3xl mt-4">{i.sem} Notes</h1>
                                <div className="w-[80vw] flex flex-wrap gap-8 my-4 justify-center">
                                    {i.subjects.map((e) => (
                                        <NavLink
                                            to={`/notes/${i.sem}/${CourseData.title}/${e.name}/${e.link}`}
                                            key={e.name}
                                            className="no-underline text-inherit flex-grow"
                                        >
                                            <div className="bg-primary cursor-pointer group min-w-[100px] px-4 h-[15vh] shadow-md rounded-md grow flex items-center justify-center text-2xl relative">
                                                <span className='group-hover:z-10'>{e.name}</span>
                                                <div className="absolute group-hover:z-0 w-[102%] h-[103%] -z-10 rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></div>
                                            </div>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div> : 
                <div>Data is being</div>
            }
        </>
    );
};

export default Course;
