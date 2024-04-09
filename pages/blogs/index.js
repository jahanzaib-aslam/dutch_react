import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs'
import Blog from '../../components/blog';
import Layout from '../../Layout';
import Seo from '../../Seo/Seo';

const blogs = [
    {
      id: 0,
      date: "3/1/2023",
      title: "Title of Blog 1",
      content:
        "Lees meer over de ontwikkeling van de grootste online bloemenwinkel Dutchflowers",
      imageUrl: "images/blog1.jpg",
      link: "/blogs/0",
    },
    {
      id: 2,
      date: "2/1/2023",
      title: "Title of Blog 2",
      content:
        "Als het gaat om bloemen, is Jack Brasser absoluut een expert. Met meer dan 20 jaar ervaring in de bloemensector,",
      imageUrl: "images/blog2.jpg",
      link: "/blogs/1",
    },
    {
      id: 3,
      date: "1/1/2023",
      title: "Title of Blog 2",
      content:
        "Bent u op zoek naar verse bloemen voor een speciale gelegenheid of gewoon om uw huis op te fleuren? ",
      imageUrl: "images/blog3.jpg",
      link: "/blogs/2",
    },
  ];
const Blogs = () => {
    const breadcrumbItems = [
        { title: 'Home', href: '/' },
        { text: 'Blog', href: '#' }, 
      ];
      

    return (
        <>
            <Layout>
                <Seo />
                <Breadcrumbs breadcrumbItems={breadcrumbItems} title={"Blogs"} />
                <Blog blogPage  data={blogs}/>
            </Layout>

        </>
    )
}

export default Blogs
