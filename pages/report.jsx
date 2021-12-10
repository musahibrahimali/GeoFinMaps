import Head from 'next/head';
import { ReportForm } from '../components/exports';

const Report = () => {
    return (
        <>
            {/* head and meta tags */}
            <Head>
                <title>GeoFinMaps - Report an issue</title>
                <meta name="description" content="General map view of fibre laying of mtn in ghana" />
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="keywords" content="mtn fibre laying" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-white dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-200 m-4 p-5 flex justify-center items-center border border-gray-300 shadow-md rounded-md mt-4">
                    <ReportForm />
                </div>
            </div>
        </>
    );
}

export default Report;