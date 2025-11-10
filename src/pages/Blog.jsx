import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Link, useSearchParams } from 'react-router-dom';
import { FaSearch, FaRegCommentDots, FaUserCircle, FaCalendarAlt } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const BLOG_DATA_URL = 'https://raw.githubusercontent.com/hammadooptechnologies-dev/React_Website_OOP_TECHNOLOGIES_1/main/blogDetail.json'; // <-- REPLACE WITH YOUR GITHUB URL

const Blog = () => {
    const [blogsData, setBlogsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10); // Display 10 posts per page
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [displayedBlogs, setDisplayedBlogs] = useState([]);

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch(BLOG_DATA_URL);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          setBlogsData(data);
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      };
      fetchBlogs();
    }, []);

    useEffect(() => {
      const category = searchParams.get('category');
      setSelectedCategory(category);
      setCurrentPage(1); // Reset page when category changes
    }, [searchParams]);

    // Memoize sorted blogs to avoid re-sorting on every render
    const sortedBlogs = React.useMemo(() => [...blogsData].sort((a, b) => new Date(b.date) - new Date(a.date)), [blogsData]);

    useEffect(() => {
        const filtered = sortedBlogs.filter(blog =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.desc.toLowerCase().includes(searchTerm.toLowerCase())
        ).filter(blog => 
            // Further filter by selected category if it exists
            !selectedCategory || blog.category === selectedCategory
        );

        // Calculate pagination for filtered blogs
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        setDisplayedBlogs(filtered.slice(indexOfFirstPost, indexOfLastPost));
    }, [searchTerm, sortedBlogs, currentPage, postsPerPage, selectedCategory]);

    const totalPages = Math.ceil(sortedBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.desc.toLowerCase().includes(searchTerm.toLowerCase())
        ).filter(blog => 
            // Also apply category filter for total page count
            !selectedCategory || blog.category === selectedCategory
    ).length / postsPerPage);

    const recentPosts = React.useMemo(() => [...blogsData].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4), [blogsData]);
    const categories = React.useMemo(() => blogsData.reduce((acc, blog) => {
        acc[blog.category] = (acc[blog.category] || 0) + 1;
        return acc;
    }, {}), [blogsData]);

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1); // Reset to first page on new search
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / 3) * 3;
        let end = start + 3;
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages = [];
        // Always show first page
        pages.push(1);

        // Show ellipsis if current page is far from the start
        if (currentPage > 3) {
            pages.push('...');
        }

        // Show pages around the current page
        if (currentPage > 2) {
            pages.push(currentPage - 1);
        }
        if (currentPage !== 1 && currentPage !== totalPages) {
            pages.push(currentPage);
        }
        if (currentPage < totalPages - 1) {
            pages.push(currentPage + 1);
        }

        // Show ellipsis if current page is far from the end
        if (currentPage < totalPages - 2) {
            pages.push('...');
        }

        // Always show last page
        pages.push(totalPages);
        return [...new Set(pages)]; // Use Set to remove duplicates
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">Loading blogs...</div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>
        );
    }

    return (
        <>
            <section className="relative w-full h-[120px] bg-left lg:h-96 mb-2 sm:mb-0 mt-16 md:mt-20 px-6 md:py-24 bg-cover bg-no-repeat lg:bg-top"
                style={{ backgroundImage: `url("/assets/banner-portfolio.webp")` }} >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#221e1f]/90 mix-blend-multiply"></div>
                <Breadcrumb />
            </section>

            <div className="max-w-[1140px] mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-3 xl:gap-8">
                    {/* Main Content - Blog Cards */}
                    <div className="lg:col-span-1 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {displayedBlogs.map((blog, index) => (
                                <Link to={`/blog/${blog.slug}`} key={blog.id}>
                                    <div className="bg-white border border-gray-200 overflow-hidden group transition-all duration-300 shadow-sm h-full">
                                        {/* Image */}
                                        <div className="overflow-hidden h-[220px]">
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        {/* Content */}
                                        <div className="p-6 text-left">
                                            <div className="flex items-center uppercase font-semibold text-gray-500 text-[12px] mb-3 gap-5">
                                                <div className="flex items-center gap-2">
                                                    <FaRegCommentDots className="text-[#1b75bb]" />
                                                    <span>{blog.comments} Comments</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FaUserCircle className="text-[#1b75bb]" />
                                                    <span>{blog.author}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-[24px] font-semibold text-[#221e1f] mb-2 group-hover:text-[#1b75bb] transition-colors duration-300">
                                                {blog.title}
                                            </h3>
                                            <p className="text-sm text-[#777777] line-clamp-3">
                                                {blog.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center space-x-2 mt-8">
                                <button
                                    onClick={() => paginate(currentPage - 1)}
                                    hidden={currentPage === 1}
                                    className="p-4 rounded-full border border-gray-200 text-[#777777] hover:bg-[#1b75bb] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                >
                                    <FaAngleLeft />
                                </button>
                                {getPaginationGroup().map((item, index) =>
                                    typeof item === 'number' ? (
                                        <button
                                            key={index}
                                            onClick={() => paginate(item)}
                                            className={`w-[50px] h-[50px] rounded-full border border-gray-200 ${
                                                item === currentPage
                                                    ? 'bg-[#1b75bb] text-white'
                                                    : 'bg-white text-[#777777] hover:bg-[#1b75bb] hover:text-white'
                                            } transition-all duration-300`}
                                        >
                                            {item}
                                        </button>
                                    ) : (
                                        <span key={index} className="px-4 py-2 text-[#777777]">
                                            {item}
                                        </span>
                                    )
                                )}
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    hidden={currentPage === totalPages}
                                    className="p-4 rounded-full border border-gray-200 text-[#777777] hover:bg-[#1b75bb] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                >
                                    <FaAngleRight />
                                </button>
                            </div>
                        )}

                        {displayedBlogs.length === 0 && (
                            <div className="text-center text-gray-600 py-8">
                                <p>No blogs found matching your search term.</p>
                            </div>
                        )}



                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 px-2 space-y-8">
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
                        <div className="p-2 xl:p-9 bg-white border border-gray-200">
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
                                                <h4 className="font-semibold text-sm md:text-base text-[#221e1f] group-hover:text-[#1b75bb] transition-colors duration-300">{post.title}</h4>
                                                <p className="flex items-center gap-2 text-sm text-gray-500 mt-1">
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
                                    <li key={name} className="flex justify-between items-center">
                                        <Link to={`/blog?category=${encodeURIComponent(name)}`} className={`hover:text-[#1b75bb] transition-colors duration-200 ${selectedCategory === name ? 'text-[#1b75bb] font-bold' : ''}`}>
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

export default Blog;
