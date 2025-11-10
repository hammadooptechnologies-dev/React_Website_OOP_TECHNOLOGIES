import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { FaSearch, FaRegCommentDots, FaUserCircle, FaCalendarAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaTumblr, FaGooglePlusG, FaRegUser, FaRegEnvelope , FaPen } from "react-icons/fa";

const BLOG_DATA_URL = 'https://raw.githubusercontent.com/hammadooptechnologies-dev/React_Website_OOP_TECHNOLOGIES_1/main/blogDetail.json'; // <-- REPLACE WITH YOUR GITHUB URL

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const SingleBlogDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [blogsData, setBlogsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [recentPosts, setRecentPosts] = useState([]);
    const [categories, setCategories] = useState({});

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(BLOG_DATA_URL);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setBlogsData(data);

                // Find the specific blog post by slug
                const currentBlog = data.find(b => b.slug === slug);
                setBlog(currentBlog);

                // Set recent posts (latest 4)
                const sortedRecent = [...data].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
                setRecentPosts(sortedRecent);

                // Calculate categories
                const categoryCounts = data.reduce((acc, blogItem) => {
                    acc[blogItem.category] = (acc[blogItem.category] || 0) + 1;
                    return acc;
                }, {});
                setCategories(categoryCounts);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, [slug]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
    }

    if (!blog) {
        return <div className="flex justify-center items-center h-screen">Blog post not found.</div>;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/blog?search=${searchTerm}`);
    };

    const handleOutlineClick = (e, outline) => {
        e.preventDefault();
        const targetId = slugify(outline);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const renderContent = (contentItem, index) => {
        if (contentItem.type === 'heading') {
            return <h2 key={index} id={slugify(contentItem.text)} className="text-[20px] font-semibold text-[#221e1f] my-4 scroll-mt-24">{contentItem.text}</h2>;
        }
        if (contentItem.type === 'subheading') {
            return <h2 key={index} className="text-base font-semibold text-[#777777] my-4">{contentItem.text}</h2>;
        }
        if (contentItem.type === 'paragraph') {
            return <p key={index} className="text-[#777777] mb-4 leading-relaxed">{contentItem.text}</p>;
        }
        if (contentItem.type === 'keyValue') {
            return (
                <div key={index} className="my-4 space-y-1">
                    {contentItem.items.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-[#777777]">
                            <span className="text-base font-semibold text-[#777777]">{item.key}:</span> {item.value}
                        </p>
                    ))}
                </div>
            );
        }

        if (contentItem.type === 'unorderedlist') {
            return (
                <ul key={index} className="list-disc list-outside pl-5 space-y-2 text-[#777777] my-6">
                    {contentItem.items.map((item, itemIndex) => {
                        if (typeof item === 'string') {
                            return <li key={itemIndex}>{item}</li>;
                        }
                        // Render nested list
                        return <li key={itemIndex}>{renderContent(item, itemIndex)}</li>;
                    })}
                </ul>
            );
        }
        if (contentItem.type === 'orderedlist') {
            return (
                <ol key={index} className="list-decimal list-outside pl-5 space-y-2 text-[#777777] my-6">
                    {contentItem.items.map((item, itemIndex) => {
                        if (typeof item === 'string') {
                            return <li key={itemIndex} className="">{item}</li>;
                        }
                        // Render nested list
                        return <li key={itemIndex}>{renderContent(item, itemIndex)}</li>;
                    })}
                </ol>
            );
        }
        return null;
    };

    return (
        <>
            <section className="relative w-full h-[120px] bg-left lg:h-96 mb-2 sm:mb-0 mt-16 md:mt-20 px-6 md:py-24 bg-cover bg-no-repeat lg:bg-top"
                style={{ backgroundImage: `url("/assets/banner-portfolio.webp")` }} >
                <div className="absolute inset-0 bg-[#221e1f]/90 mix-blend-multiply"></div>
                <Breadcrumb />
            </section>

            <div className="max-w-[1290px] mx-auto px-[15px] py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[66%_34%]">
                    {/* Main Content */}
                    <div className="lg:col-span-1 px-[15px]">
                        <div className="bg-white overflow-hidden">
                            <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover mb-6" />

                            <div className="flex items-center uppercase font-semibold text-gray-500 text-sm mb-4 gap-6">
                                <div className="flex items-center gap-2">
                                    <FaRegCommentDots className="text-[#1b75bb]" />
                                    <span>{blog.comments} Comments</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUserCircle className="text-[#1b75bb]" />
                                    <span>{blog.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-[#1b75bb]" />
                                    <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-[34px] font-semibold text-[#221e1f] mb-6">{blog.title}</h1>

                            {blog.outlines && blog.outlines.length > 0 && (
                                <div className="border border-gray-200 p-4 mb-6">
                                    <h3 className="text-lg mb-2 text-[#232323]">Article Outlines</h3>
                                    <ul className="list-decimal pl-4 list-inside text-[15.2px] text-[#444444]">
                                        {blog.outlines.map((outline, index) => (
                                            <li key={index} className="mb-1">
                                                <a href={`#${slugify(outline)}`} onClick={(e) => handleOutlineClick(e, outline)} className="hover:underline cursor-pointer">
                                                    {outline}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="text-left">
                                {blog.content.map(renderContent)}
                            </div>

                            {/* CTA */}
                            <section
                                id="get-free-mockups-and-seo-report" className="w-full border border-gray-800 bg-cover bg-no-repeat bg-center rounded-xl py-10 sm:py-12 md:py-5 mt-6 md:mt-8 scroll-mt-24" style={{ backgroundImage: `url("/assets/cta-bg.webp")` }}
                            >
                                <div className=" px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between text-[#231f20] text-left gap-6 md:gap-8">
                                    {/* Text content */}
                                    <div className="max-w-[485px] flex flex-col items-start">
                                        <h2 className="text-[36px] font-extrabold leading-tight mb-2">
                                            Get Free Mockups and SEO Report
                                        </h2>
                                        <p className="text-[18px] max-w-[500px]">
                                            We offer a variety of IT services designed to support your success.
                                        </p>
                                    </div>

                                    {/* Button */}
                                    <div>
                                        <button className="bg-[#231f20] text-white uppercase px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full font-medium shadow-lg hover:bg-[#231f20] hover:text-white transition-all duration-300">
                                            Get a quote
                                        </button>
                                    </div>
                                </div>
                            </section>


                            <div className=" mt-[60px] space-y-6">
                                {/* Social Share */}
                                <h3 className="text-[20px] font-semibold text-[#221e1f] mb-4">Social Share</h3>
                                <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
                                    <button className="flex items-center text-lg justify-center text-[#777777] hover:text-[#1b75bb] transition">
                                        <FaFacebookF />
                                    </button>
                                    <button className="flex items-center text-lg justify-center text-[#777777] hover:text-[#1b75bb] transition">
                                        <FaTwitter />
                                    </button>
                                    <button className="flex items-center text-lg justify-center text-[#777777] hover:text-[#1b75bb] transition">
                                        <FaLinkedinIn />
                                    </button>
                                    <button className="flex items-center text-lg justify-center text-[#777777] hover:text-[#1b75bb] transition">
                                        <FaTumblr />
                                    </button>
                                    <button className="flex items-center text-2xl justify-center text-[#777777] hover:text-[#1b75bb] transition">
                                        <FaGooglePlusG />
                                    </button>
                                </div>

                                {/* Comment Form */}
                                <h3 className="text-[22px] font-semibold text-[#221e1f] mb-10 mt-[50px]">Add a Comment</h3>
                                <form className="border border-gray-100 p-10 rounded-3xl space-y-4">
                                    <h3 className="text-base text-[#777777] mb-[30px]">Your email address will not be published. </h3>
                                    {/* Name */}
                                    <div className="flex items-center border border-gray-100 shadow-[0px_16px_32px_0_rgba(0,0,0,.06)] rounded-full px-5 py-4 mb-4">
                                        
                                        <input
                                            type="text"
                                            placeholder="Type your name..."
                                            className="w-full rounded-full outline-none text-sm text-[#777777]"
                                        />
                                        <FaRegUser className="text-red-400 text-sm" />
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center border border-gray-100 shadow-[0px_16px_32px_0_rgba(0,0,0,.06)] rounded-full px-5 py-5 mb-4">
                                        
                                        <input
                                            type="email"
                                            placeholder="Type your email..."
                                            className="w-full rounded-full outline-none text-sm text-[#777777]"
                                        />
                                        <FaRegEnvelope className="text-red-400 text-sm" />
                                    </div>

                                    {/* Checkbox */}
                                    <div className="flex items-center space-x-2 mb-4">
                                        <input
                                            type="checkbox"
                                            id="save-info"
                                            className="rounded text-blue-600"
                                        />
                                        <label htmlFor="save-info" className="text-[#777777] text-base">
                                            Save my name, email, and website in this browser for the next time I comment.
                                        </label>
                                    </div>

                                    {/* Comment */}
                                    <div className="flex items-start border border-gray-100 shadow-[0px_16px_32px_0_rgba(0,0,0,.06)] rounded-2xl px-5 py-3 mb-4">
                                        
                                        <textarea
                                            placeholder="Type your comments..."
                                            className="w-full outline-none text-base text-[#777777] h-40"
                                        />
                                        <FaPen className="text-red-400 text-sm" />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="bg-[#1b75bb] text-white px-[50px] py-4 rounded-full font-bold hover:opacity-70 transition duration-300"
                                    >
                                        Post Comment
                                    </button>
                                </form>
                            </div>




                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 px-[15px] space-y-8">
                        {/* Search */}
                        <div className="p-2 xl:p-10 bg-white border border-gray-200">
                            <h3 className="text-base font-semibold text-[#221e1f] uppercase"><span className='text-gray-200'>//</span> Search here</h3>
                            <div className="w-full h-px bg-gray-200 mt-4 mb-8"></div>
                            <form onSubmit={handleSearch} className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search your keyword..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-2.5 py-[15px] bg-gray-100 text-[#777777] text-xs italic focus:outline-none"
                                />
                                <button type="submit" className="bg-[#1b75bb] text-white px-4 py-[15px]">
                                    <FaSearch />
                                </button>
                            </form>
                        </div>

                        {/* Recent Posts */}
                        <div className="p-2 xl:p-8 bg-white border border-gray-200">
                            <h3 className="text-base font-semibold text-[#221e1f] uppercase"><span className='text-gray-200' >//</span> Recent Posts</h3>
                            <div className="w-full h-px bg-gray-200 my-4"></div>
                            <div className="space-y-4">
                                {recentPosts.map((post, index) => (
                                    <div key={post.id}>

                                        <Link to={`/blog/${post.slug}`} className="flex items-center gap-4 group">
                                            <div className="overflow-hidden w-20 h-20 shrink-0">
                                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-sm md:text-base text-[#221e1f] line-clamp-2 group-hover:text-[#1b75bb] transition-colors duration-300">{post.title}</h4>
                                                <p className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                                    <FaCalendarAlt className="text-gray-400" />
                                                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                                </p>
                                            </div>
                                        </Link>
                                        {index < recentPosts.length - 1 && <div className="w-full h-px bg-gray-200 mt-4"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="p-2 xl:p-10 bg-white border border-gray-200">
                            <h3 className="text-base font-semibold text-[#221e1f] uppercase"><span className='text-gray-200' >//</span> Category</h3>
                            <div className="w-full h-px bg-gray-200 my-4"></div>
                            <ul className="space-y-2 text-[#777777]">
                                {Object.entries(categories).map(([name, count]) => (
                                    <li key={name} className="flex justify-between">
                                        <Link to={`/blog?category=${encodeURIComponent(name)}`} className="hover:text-[#1b75bb] transition-colors duration-200">
                                            {name}
                                        </Link>
                                        <span className="text-gray-400">({count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogDetail;