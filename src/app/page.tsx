import SalesCampaignBanner from "@/components/layouts/SalesCampaignBanner";
import ProductGrid from "@/components/product/ProductGrid";
import { getAllProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import React from "react";

const HomePage = async () => {
	const products = await getAllProducts();
	return (
		<div className="">
			<SalesCampaignBanner />
			<section className="conatiner mx-auto py-8">
				<ProductGrid products={products} />
			</section>
		</div>
	);
};

export default HomePage;
