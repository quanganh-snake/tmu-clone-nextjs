import { getAllProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import React from "react";

const HomePage = async () => {
	const products = await getAllProducts();
	return (
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
				{products.map((product) => (
					<div key={product._id} className="col-span-1 border rounded-lg overflow-hidden shadow-lg">
						<img src={urlFor(product.image as SanityImageSource).url()} alt={product.title} className="w-full h-48 object-cover" />
						<div className="p-4">
							<h2 className="font-bold text-xl mb-2">{product.title}</h2>
							<p className="text-gray-700">${product.price?.toFixed(2)}</p>
							<p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
