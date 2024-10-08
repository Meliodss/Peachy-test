import { register, load } from "@shopify/theme-sections";
import Header from "@/shopify/sections/header";
import FeaturedProducts from "@/shopify/sections/featured-products";
import VariantSwatch from "@/shopify/snippets/variant-swatch";

register("header", Header);
register("featured-products", FeaturedProducts);
register("variant-swatch", VariantSwatch);
load("*");
