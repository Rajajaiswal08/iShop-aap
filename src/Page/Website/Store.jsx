import React, { useEffect, useState } from 'react';
import Productlist from '../../Comonent/Productlist';
import Catigery from '../../Comonent/Catigery';
import { useParams } from 'react-router-dom';

function Store() {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(0);
    const [totalproduct, setTotalproduct] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const { slug } = useParams();

    let pagination = [];
    for (let i = 0; i < Math.ceil(totalproduct / 30); i++) {
        pagination.push(i);
    }

    const getProduct = async () => {
        let resp;
        if (slug == null) {
            resp = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}&skip=${30 * page}`);
        } else {
            resp = await fetch(`https://dummyjson.com/products/category/${slug}/search?q=${searchQuery}&skip=${30 * page}`);
        }
        const data = await resp.json();
        setProduct(data.products);
        setTotalproduct(data.total);
    };

    useEffect(() => {
        getProduct();
    }, [slug, page, searchQuery]);

    const display = product.map((prod) => {
        return <Productlist key={prod.id} img={prod.thumbnail} name={prod.title} rating={prod.rating} />;
    });

    return (
        <div className='w-full mx-auto p-5'>
            {/* Search Input Section */}
            <div className='max-w-[1190px] mx-auto mt-6'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    placeholder="Search products..."
                    className='w-full p-2 border border-gray-300 rounded-md'
                />
            </div>

            {/* Product listing */}
            <div className='max-w-[1190px] mx-auto flex flex-col gap-5 md:flex-row overflow-hidden mt-7'>
                <div className='md:w-[30%] w-[100%] mt-6 md:mt-0'>
                    <Catigery />
                </div>
                <div className='md:w-[70%] mt-6 md:mt-0 grid grid-cols-1 md:grid-cols-3 mb-4 gap-6'>
                    {display}
                </div>
            </div>
            <div className='max-w-[1190px] mx-auto text-center mt-4'>
                <div className=' text-center'> 
                    <nav aria-label="Page navigation example" className='items-center'>
                        <ul className="flex items-center justify-center -space-x-px h-10 text-base">
                            <li>
                                <a
                                    href="#"
                                    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg
                                        className="w-3 h-3 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 1 1 5l4 4"
                                        />
                                    </svg>
                                </a>
                            </li>
                            {pagination.map((p) => (
                                <li key={p}>
                                    <a
                                        href="#"
                                        onClick={() => setPage(p)}
                                        className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${page === p ? 'bg-blue-400 text-white' : ''}`}
                                    >
                                        {p + 1}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#"
                                    onClick={() => setPage((prev) => Math.min(prev + 1, pagination.length - 1))}
                                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <span className="sr-only">Next</span>
                                    <svg
                                        className="w-3 h-3 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Store;
