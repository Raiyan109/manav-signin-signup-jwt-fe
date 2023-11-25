import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import bgImg from '../assets/pexels-dids-2983226.jpg'
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data } = await axios.post('http://localhost:5000/api/users/signup', {
            name,
            email,
            password
        })
        localStorage.setItem('userId', data.data.userId)
        navigate('/login')
        console.log(data.userId);
        return data
    }
    return (
        <div className="">
            <div className="grid grid-cols-3 grid-rows-1">
                <div className="col-span-3 md:col-span-1 h-screen">
                    <div className="flex justify-center items-center flex-col pt-12 px-5">
                        <h1 className="text-blackText text-3xl text-center py-4 font-bold">Sign up for free</h1>
                        <p className="text-gray-400 text-lg text-center py-4">Remember everything in one place</p>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-8">
                                <div className="relative">
                                    <input
                                        className="h-[40px] border-none outline-none text-xl px-5 bg-yellow text-blackText placeholder-blackText placeholder-opacity-60 rounded-lg"
                                        placeholder="Name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        className="h-[40px] border-none outline-none text-xl px-5 bg-yellow text-blackText placeholder-blackText placeholder-opacity-60 rounded-lg"
                                        placeholder="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        className="h-[40px] border-none outline-none text-xl px-5 bg-yellow text-blackText placeholder-blackText placeholder-opacity-60 rounded-lg"
                                        placeholder="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="flex justify-center items-center">
                                    <button className="bg-orange px-9 py-3 text-xl rounded-lg w-full">Sign in</button>
                                </div>
                            </div>
                        </form>

                        <div className="mt-56">
                            <h3 className="text-blackText text-lg font-normal">Already Signed up? go to
                                <Link to='/login' className="text-orange font-semibold"> Login</Link>
                            </h3>
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

export default SignUp;