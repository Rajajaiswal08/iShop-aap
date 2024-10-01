import React, { useEffect, useState } from 'react';
import Productlist from '../../Comonent/Productlist';
import Catigery from '../../Comonent/Catigery';
import { useParams } from 'react-router-dom';

function Store() {
    const [products, setProducts] = useState([]); 
    const [page, setPage] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0); 
    const [searchQuery, setSearchQuery] = useState(''); 
    const { slug } = useParams(); 

    const pagination = Array(
        Math.ceil(totalProducts / 30)
    )
    .fill(0).map(
        (_, i) => i
    );

    const getProducts = async () => {
        let url = `https://dummyjson.com/products/search?q=${searchQuery}&skip=${30 * page}`;
        if (slug) {
            url = `https://dummyjson.com/products/category/${slug}?skip=${30 * page}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        setProducts(data.products || []); 
        setTotalProducts(data.total || 0); 
    };

    useEffect(() => {
        getProducts();
    }, [slug, page, searchQuery]);

    return (
        <div className="min-h-screen w-full mx-auto p-5">

            <div className="max-w-[1190px] mx-auto mt-6">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="max-w-[1190px] mx-auto flex flex-col gap-5 md:flex-row mt-7">
                <div className="md:w-[30%] w-[100%] mt-6">
                    <Catigery />
                </div>
                <div className="md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((prod) => (
                        <Productlist key={prod.id} img={prod.thumbnail} name={prod.title} rating={prod.rating} />
                    ))}
                </div>
            </div>

            <div className="max-w-[1190px] mx-auto text-center mt-4">
                <div className="flex justify-center items-center space-x-2">
                    <button onClick={() => setPage(Math.max(page - 1, 0))} className="px-4 py-2 bg-gray-300">Prev</button>
                    {pagination.map((p) => (
                        <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={`px-4 py-2 ${p === page ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        >
                            {p + 1}
                        </button>
                    ))}
                    <button onClick={() => setPage(Math.min(page + 1, pagination.length - 1))} className="px-4 py-2 bg-gray-300">Next</button>
                </div>
            </div>
        </div>
    );
}

export default Store;
