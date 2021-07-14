import React from 'react';
import { Grid } from '@material-ui/core';
import * as employeeService from '../../../../Services/EmployeeService';
import {
    UseForm,
    Form,
    InputField,
    RadioControls,
    DropDown,
    CheckBox,
    DatePicker,
    FormButton,
} from '../../widgets';
import { CreateReoprtFormStyles } from './CreateReoprtFormStyles';

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

function SignUpForm() {
    const styles = CreateReoprtFormStyles();

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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            window.alert("working so far so good");
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
                    <div className="flex flex-col md:flex-row justify-evenly items-center">
                        <Grid item>
                            <InputField
                                label="Full Name"
                                name="fullName"
                                value={values.fullName}
                                onChange={handleInputChange}
                                error={errors.fullName}
                            />
                            <InputField
                                label="Report Title"
                                name="reportTitle"
                                value={values.reportTitle}
                                onChange={handleInputChange}
                                error={errors.reportTitle}
                            />
                            <InputField
                                label="Location"
                                name="location"
                                value={values.location}
                                onChange={handleInputChange}
                                error={errors.location}
                            />
                            <RadioControls
                                name="level"
                                label="Level"
                                value={values.level}
                                items={genderItems}
                                onChange={handleInputChange}
                            />
                            <div className="p-4">
                                <FormButton
                                    type="file"
                                    variant="outlined"
                                    color="primary"
                                    size="large"
                                    text="add media"
                                    onClick={handleResetForm}
                                />
                            </div>
                        </Grid>

                        <Grid item>
                            <DatePicker
                                name="reportDate"
                                label="Report Date"
                                value={values.reportDate}
                                onChange={handleInputChange}
                            />

                            <InputField
                                label="Description"
                                name="description"
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
                </Grid>
            </Form>
        </div>
    )
}

export default SignUpForm;
