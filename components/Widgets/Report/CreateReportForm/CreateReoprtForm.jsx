import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PersonIcon from '@material-ui/icons/Person';
import {
    UseForm,
    Form,
    InputField,
    RadioControls,
    DatePicker,
    FormButton,
} from '../../widgets';
import { CreateReportFormStyles } from './CreateReportFormStyles';
import firebase from 'firebase';
import 'firebase/database';

const genderItems = [
    { id: "normal", title: "Normal" },
    { id: "warning", title: "Warning" },
    { id: "critical", title: "Critical" },
];

const initialValues = {
    id: 0,
    fullName: '',
    reportTitle: '',
    description: '',
    location: '',
    level: 'normal',
    reportDate: new Date(),
};

function CreateReportForm() {
    const styles = CreateReportFormStyles();
    const [media, setMedia] = useState({});

    const validateForm = (fieldValues = values) => {
        let temp = { ...errors };
        if ('fullName' in fieldValues) {
            temp.fullName = fieldValues.fullName ? "" : "This Field is required";
        }
        if ('reportTitle' in fieldValues) {
            temp.reportTitle = fieldValues.reportTitle ? "" : "This field is required";
        }
        if ('description' in fieldValues) {
            temp.description = fieldValues.description.length > 30 ? "" : "description should be at least 30 words";
        }
        if ('location' in fieldValues) {
            temp.location = fieldValues.location.length !== 0 ? "" : "This Field is required";
        }
        setErrors({
            ...temp
        });

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }
    }

    const handleOnFileChange = (event) => {
        event.preventDefault();
        let selectedFile = event.target.files[0];
        if(selectedFile.type === "image/jpeg" || selectedFile.type === 'image/jpg' || selectedFile.type === 'image/png'){
            setMedia(selectedFile);
            console.log(media);
        }else{
            alert("The selected file is not a supported image type");
        }
    }

    const handleAddToReport = async (event) => {
        event.preventDefault();
        const newReport = {
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            author: values.fullName,
            reportTitle: values.reportTitle,
            description: values.description,
            location: values.location,
            reportLevel: values.level,
            reportDate: values.reportDate,
        }
        await firebase.firestore().collection('reports').add(newReport);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            handleAddToReport().then((results) => {
                console.log("done successfully", results);
            });
        }
    }

    const {
        values,
        setErrors,
        handleInputChange,
        handleResetForm,
        errors,
        // eslint-disable-next-line no-unused-vars
        setValues,
    } = UseForm(initialValues, true, validateForm);


    return (
        <div className="mt-8">
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1">
                        <Grid item className="md:col-span-2 w-full">
                            <InputField
                                label="Full Name"
                                name="fullName"
                                value={values.fullName}
                                onChange={handleInputChange}
                                error={errors.fullName}
                                inputIcon={<PersonIcon />}
                            />

                            <InputField
                                label="Report Title"
                                name="reportTitle"
                                value={values.reportTitle}
                                onChange={handleInputChange}
                                error={errors.reportTitle}
                                inputIcon={<PersonIcon />}
                            />

                            <DatePicker
                                name="reportDate"
                                label="Report Date"
                                value={values.reportDate}
                                onChange={handleInputChange}
                            />

                            <InputField
                                label="Location"
                                name="location"
                                value={values.location}
                                onChange={handleInputChange}
                                error={errors.location}
                                inputIcon={<LocationCityIcon />}
                            />

                            <div className="mt-6 mb-4 mr-28 ml-4 md:mr-12 md:ml-2">
                                <label className="flex flex-col rounded-lg border-4 border-dashed border-gray-200 dark:border-gray-500 p-4 group text-center">
                                    <div className="h-full text-center flex flex-col items-center justify-center">
                                        <p className="pointer-none text-gray-500 dark:text-gray-600">
                                                <span
                                                    className="text-blue-600 cursor-pointer hover:underline">
                                                    select a file
                                                </span>
                                            {" "}
                                            from your computer
                                        </p>
                                    </div>
                                    <input type="file" name="file" className='hidden' onChange={handleOnFileChange} />
                                </label>
                            </div>

                        </Grid>

                        <Grid item className="md:col-span-2 w-full">
                            <RadioControls
                                name="level"
                                label="Report Level"
                                value={values.level}
                                items={genderItems}
                                onChange={handleInputChange}
                            />

                            <InputField
                                label="Description"
                                name="description"
                                multiline={true}
                                rows={10}
                                value={values.description}
                                onChange={handleInputChange}
                                error={errors.description}
                            />

                            <div className={styles.mainContainer}>
                                <FormButton
                                    type="submit"
                                    text="Report"
                                />
                                <FormButton
                                    variant="outlined"
                                    color="secondary"
                                    size="large"
                                    text="Reset"
                                    onClick={handleResetForm}
                                />
                            </div>
                        </Grid>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <div className="grid md:grid-cols-3 grid-rows-1">
                            {}
                        </div>
                    </div>
                </Grid>
            </Form>
        </div>
    )
}

export default CreateReportForm;
