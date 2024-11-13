import { useParams } from "react-router-dom";


const Pdf = () => {
    const  {sem,course,subj,link} = useParams()
    return (
        <>
        <div className="h-full w-[80vw] mx-auto bg-primary my-8 flex flex-col items-center ">
            <p className="mt-8 text-xl">{course} {subj} {sem}</p>
            <h1 className="text-4xl my-8 font-semibold mx-10 text-center">{subj} Notes {course}  </h1>
            <p className="mx-10 text-justify ">Here is the pdf for {subj} notes of {course} department </p>
            <iframe className="my-20" src={`https://drive.google.com/file/d/${link}/preview`} width="640" height="480" allow="autoplay">
            </iframe>
            <iframe src="/math.pdf" className="w-96 h-80 bg-red-800"></iframe>
        </div>
        </>
    )
}

export default Pdf 