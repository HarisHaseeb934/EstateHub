import ContactUs from '@/components/sections/ContactUs'
import Hero from '@/components/sections/Hero'
import NewsArticles from '@/components/sections/NewsArticles'
import PropertiesSection from '@/components/sections/PropertiesSection'
import Testimonials from '@/components/sections/Testimonials'
import React from 'react'
import IndustriesEmpower from '../components/sections/IndutriesEmpower'

const page = () => {

    const salePropertiesData = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
            price: 'PKR 38,000,000',
            location: 'DHA Phase 6, Lahore',
            title: 'Modern 5 Bedroom House',
            beds: 5,
            baths: 5,
            size: '10 Marla',
            builtUp: '5,500 Sq Ft',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
            price: 'PKR 24,500,000',
            location: 'Bahria Town, Islamabad',
            title: 'Luxury 1 Kanal House',
            beds: 6,
            baths: 6,
            size: '1 Kanal',
            builtUp: '7,200 Sq Ft',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800',
            price: 'PKR 15,800,000',
            location: 'Emaar Canyon Views, Islamabad',
            title: '3 Bedroom Apartment',
            beds: 3,
            baths: 3,
            size: '1,850 Sq Ft',
            builtUp: '1,850 Sq Ft',
        },
    ]

    const rentPropertiesData = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800',
            price: 'PKR 85,000',
            location: 'Gulberg III, Lahore',
            title: 'Furnished 3 Bedroom House',
            beds: 3,
            baths: 3,
            size: '1 Kanal',
            builtUp: '3,200 Sq Ft',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800',
            price: 'PKR 55,000',
            location: 'F-10, Islamabad',
            title: '2 Bedroom Apartment',
            beds: 2,
            baths: 2,
            size: '1,200 Sq Ft',
            builtUp: '1,200 Sq Ft',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800',
            price: 'PKR 1,20,000',
            location: 'DHA Phase 5, Karachi',
            title: 'Modern 4 Bedroom Villa',
            beds: 4,
            baths: 4,
            size: '500 Sq Yd',
            builtUp: '4,000 Sq Ft',
        },
    ]

    return (
        <main>
            <Hero />

            <PropertiesSection variant='sale' properties={rentPropertiesData} description='Explore our handpicked properties for sale and find the perfect space to call your own. Quality homes. Great locations. Better living.' />

            <PropertiesSection variant='rent' properties={salePropertiesData} heading='Properties For Rent' description='Explore our handpicked properties for sale and find the perfect space to call your own. Quality homes. Great locations. Better living.' />
          <IndustriesEmpower />
            <NewsArticles variant='dark' />
            <Testimonials />
        </main>
    )
}

export default page
