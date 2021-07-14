import Head from 'next/head';
import { GoogleMap, RegisterForm } from '../components/exports';

const index = () => {
  return (
    <div>
      {/* head and meta tags */}
      <Head>
        <title>GeoFinMaps</title>
        <meta name="description" content="General map view of fibre laying of mtn in ghana" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="mtn fibre layings" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* main app body for home page */}
      <main className="h-full w-full">
        {/* <GoogleMap /> */}
        <p className="text-gray-700 dark:text-gray-300 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis totam repellendus aut. Harum adipisci, maxime doloribus molestiae eveniet suscipit obcaecati laborum, labore quas amet mollitia animi dolor dolores sapiente tenetur.
        </p>
      </main>
    </div>
  );
}

export default index;