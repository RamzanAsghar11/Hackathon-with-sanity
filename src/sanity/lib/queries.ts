// lib/queries.js
import { client } from "./client";


// Fetch a product by its ID
export const getProductById = async (id: string) => {
  const query = `*[_type == "product" && _id == $id][0] { 
  _id,
    title,
    price,
    description,
    "imageSrc": imageSrc.asset->url 
  }`;

  return await client.fetch(query, { id });
};

// Fetch all products
export async function getAllProducts() {
  const query = `*[_type == "product"]| order(_createdAt asc
) {
    _id,
    title,
    price,
    description,
    "imageSrc": imageSrc.asset->url 
  }`;
  
  const products = await client.fetch(query);
  return products;
}




export async function getfourProducts() {


  const query = `*[_type == "product"][0..3] | order(_createdAt asc){
    _id,
    title,
    price,
    description,
    "imageSrc": imageSrc.asset->url 
  }`;

  const products = await client.fetch(query);
  return products;
}
