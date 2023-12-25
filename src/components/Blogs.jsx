import React from 'react'

const Blogs = () => {

    const blogs = [
        {
            "id": 1,
            "title": "blog1",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            "coverImg": "https://img.freepik.com/free-photo/beautiful-sunflower-nature_23-2150977663.jpg?t=st=1703477076~exp=1703480676~hmac=4bef81c967b3b00d484237ae24594c45c90a1ee0418debceabebce91cfad19c3&w=1800"
        },
        {
            "id": 2,
            "title": "blog2",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            "coverImg": "https://img.freepik.com/free-photo/beautiful-sunflower-nature_23-2150977663.jpg?t=st=1703477076~exp=1703480676~hmac=4bef81c967b3b00d484237ae24594c45c90a1ee0418debceabebce91cfad19c3&w=1800"
        },
        {
            "id": 3,
            "title": "blog3",
            "desc": "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            "coverImg": "https://img.freepik.com/free-photo/beautiful-sunflower-nature_23-2150977663.jpg?t=st=1703477076~exp=1703480676~hmac=4bef81c967b3b00d484237ae24594c45c90a1ee0418debceabebce91cfad19c3&w=1800"
        },

    ]

    return (
        <div className='w-full bg-[#f9f9f9] py-[50px] '>
            <div className='max-w-[1240px] mx-auto '>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black'>


                    {blogs.map((blog) =>
                        <div className='bg-white rounded-xl overflow-hidden drop-shadow-md cursor-pointer'>
                            <img className='h-56 w-full object-cover' src={blog.coverImg} alt="" />
                            <div className='p-8'>
                                <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
                                <p className='text-gray-600 text-xl '>{blog.desc}</p>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </div>
    )
}

export default Blogs
