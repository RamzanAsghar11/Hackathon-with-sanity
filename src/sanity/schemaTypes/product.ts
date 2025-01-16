import { Rule } from 'sanity';

export const product= {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
   
    {
      name: 'title',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(3).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule : Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule : Rule) => Rule.required().min(10).max(1000),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule : Rule) => Rule.required().positive().precision(2),
    },
 
    {
      name: 'imageSrc',
      title: 'Images',
      type: 'image',
      options:{

        hotspot : true
      }
      
    },
  
   
  ],
};

