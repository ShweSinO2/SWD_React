import React from 'react'
import CategoryButton from './CategoryButton';

const CategorySection = () => {
    const ttl = "Product Categories";
    const categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ];
    return (
        <section id="category-section" className="p-5">
            <p className="text-sm text-gray-500 mb-2">{ttl}</p>
            <div className="flex overflow-auto category-button-group">
                <CategoryButton categoryName="all" current={true} />
                {categories.map((category) => (
                    <CategoryButton  key={category} categoryName={category} current={false} />
                ))}
            </div>
        </section>
    )
}

export default CategorySection