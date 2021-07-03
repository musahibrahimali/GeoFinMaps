import Head from 'next/head';

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>GeoFinMaps</title>
        <meta name="description" content="Realtime preview of all fibre cable layings of mtn in ghana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-grey">
        <h1 className="lg:bg-grey">Hello world</h1>
      </main>

    </div>
  );
}

export default Home;
