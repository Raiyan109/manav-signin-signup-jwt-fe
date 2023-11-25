import { useNavigate } from 'react-router-dom';
import bgImg from '../assets/pexels-dids-2983226.jpg'

const Hero = () => {
    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('userId')
        navigate('/login')
    }
    return (
        <div className="">
            <div className="grid grid-cols-3 grid-rows-1">
                <div className="col-span-3 md:col-span-1 h-screen">
                    <div className="flex justify-center items-center flex-col pt-12 px-5">
                        <h1 className="text-blackText text-3xl text-center py-4 font-bold">Welcome! </h1>

                        <div className="flex justify-center items-center">
                            <button className="bg-orange px-9 py-3 text-xl rounded-lg w-full"
                                onClick={logout}
                            >Log out</button>
                        </div>
                    </div>
                </div>
                <div className="bg-green-200 col-span-2 h-screen w-full object-cover hidden md:block" style={{ backgroundImage: `url(${bgImg})` }}>
                    rightside
                </div>
            </div>
        </div>
    );
};

export default Hero;