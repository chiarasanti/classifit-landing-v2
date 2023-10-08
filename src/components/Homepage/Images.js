import Image from "next/image";

export default function Images() {
    return(
        <div className="lg:flex overflow-x-hidden" data-aos="fade-up" data-aos-duration="800">
            <div className="flex items-center justify-center lg:w-1/2 py-32">
                <Image src="/mockup-equilibrio-corpo-e-mente.png" height="1450" width="1260" alt="equilibrio corpo e mente mockup" className="lg:-ml-72" />
            </div>
            <div className="flex bg-indigo-50 items-center justify-center lg:w-1/2 py-32">
                <Image src="/mockup-inflower.png" height="1450" width="1260" alt="inflower pilates studio mockup" className="lg:-mr-72" />
            </div>
        </div>
    )
}