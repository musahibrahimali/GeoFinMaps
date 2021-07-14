import CreateReportForm from './CreateReportForm/CreateReoprtForm';

const ReportForm = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-gray-900 font-bold tracking-widest mb-4 uppercase text-2xl md:text-4xl">
                        Create a report
                    </h1>
                </div>
                <CreateReportForm />
            </div>
        </>
    );
}

export default ReportForm;