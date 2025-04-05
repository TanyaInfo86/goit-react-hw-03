import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css'
const ContactForm = ({ onAddContact }) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Формат: 123-45-67').required('Required'),
    });

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                onAddContact(values.name, values.number);
                resetForm();
            }}
        >
            <Form className={s.wraper}>
                <label >
                    <span className={s.label}>Name</span>
                    <Field type="text" name="name" className={s.field} />
                </label>
                <ErrorMessage name="name" component="div" className={s.error} />

                <label>
                    <span className={s.label}>Number</span>
                    <Field type="text" name="number" className={s.field} />
                </label>
                <ErrorMessage name="number" component="div" className={s.error} />

                <button type="submit" className={s.button}>Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
