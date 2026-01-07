import React, { useState, useEffect, FormEvent } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { getForm, submitForm } from '../lib/cms';

interface DynamicFormProps {
    formId: string;
    onSuccess?: () => void;
}

// Nepali Phone Regex: 
// 1. Mobile: 98/97/96 followed by 8 digits. Optional +977 or 977 prefix.
// 2. Landline: 01 for KTM (7 digits) or 0 followed by area code (6-7 digits).
const NEPAL_PHONE_REGEX = /^(?:\+977|977|0)?(?:9[678]\d{8}|0\d{1,2}\d{6,7})$/;

export const DynamicForm: React.FC<DynamicFormProps> = ({ formId, onSuccess }) => {
    const [formConfig, setFormConfig] = useState<any>(null);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        const loadForm = async () => {
            const config = await getForm(formId);
            if (config) {
                setFormConfig(config);
                const initialData: Record<string, any> = {};
                config.fields?.forEach((field: any) => {
                    initialData[field.name] = field.defaultValue || '';
                });
                setFormData(initialData);
            }
        };
        loadForm();
    }, [formId]);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        formConfig.fields?.forEach((field: any) => {
            const value = formData[field.name];
            const isPhone = field.name.toLowerCase().includes('phone') || field.name.toLowerCase().includes('tel');

            // Required check
            if (field.required && !value) {
                newErrors[field.name] = `${field.label} is required`;
            }
            // Nepali Phone validation
            else if (isPhone && value) {
                const cleanValue = value.replace(/\s+/g, ''); // Remove spaces for raw check
                if (!NEPAL_PHONE_REGEX.test(cleanValue)) {
                    newErrors[field.name] = 'Please enter a valid Nepali phone number (e.g., 98XXXXXXXX or 01XXXXXXX)';
                }
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Run validation
        if (!validate()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        const success = await submitForm(formId, formData);

        if (success) {
            setSubmitStatus('success');
            const resetData: Record<string, any> = {};
            formConfig.fields?.forEach((field: any) => {
                resetData[field.name] = field.defaultValue || '';
            });
            setFormData(resetData);
            setErrors({});
            if (onSuccess) onSuccess();
        } else {
            setSubmitStatus('error');
        }
        setIsSubmitting(false);
    };

    if (!formConfig) {
        return <div className="animate-pulse h-64 bg-gray-100 rounded-lg"></div>;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {formConfig.fields?.map((field: any) => {
                const id = `field-${field.name}`;
                const hasError = !!errors[field.name];

                const label = (
                    <label htmlFor={id} className={`block text-sm font-medium mb-2 ${hasError ? 'text-red-600' : 'text-gray-700'}`}>
                        {field.label} {field.required && '*'}
                    </label>
                );

                const isPhone = field.name.toLowerCase().includes('phone') || field.name.toLowerCase().includes('tel');

                const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
                    let value = e.target.value;
                    if (isPhone) {
                        // Allow only digits, +, and spaces during typing
                        value = value.replace(/[^0-9+ ]/g, '');
                    }

                    setFormData({ ...formData, [field.name]: value });

                    // Clear error when user starts typing again
                    if (errors[field.name]) {
                        setErrors(prev => {
                            const newErrs = { ...prev };
                            delete newErrs[field.name];
                            return newErrs;
                        });
                    }
                };

                const commonProps = {
                    id,
                    required: field.required,
                    value: formData[field.name] || '',
                    onChange: handleChange,
                    className: `w-full px-4 py-3 border rounded-lg outline-none transition-colors ${hasError
                            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                            : 'border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent'
                        }`,
                    placeholder: field.placeholder,
                };

                return (
                    <div key={field.name}>
                        {label}
                        {field.blockType === 'textarea' ? (
                            <textarea {...commonProps} rows={6} className={`${commonProps.className} resize-none`} />
                        ) : field.blockType === 'select' ? (
                            <select {...commonProps}>
                                <option value="">Select an option</option>
                                {field.options?.map((opt: any) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                {...commonProps}
                                type={
                                    field.blockType === 'email' ? 'email' :
                                        field.blockType === 'number' ? 'number' :
                                            (field.name.toLowerCase().includes('phone') || field.name.toLowerCase().includes('tel')) ? 'tel' :
                                                'text'
                                }
                            />
                        )}
                        {hasError && (
                            <div className="mt-2 flex items-center text-red-600 text-sm">
                                <AlertCircle className="h-4 w-4 mr-1" />
                                {errors[field.name]}
                            </div>
                        )}
                    </div>
                );
            })}

            {submitStatus === "success" && formConfig.confirmationMessage && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium">
                        {typeof formConfig.confirmationMessage === 'string'
                            ? formConfig.confirmationMessage
                            : "Thank you! Your submission has been received."}
                    </p>
                </div>
            )}

            {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium">
                        Something went wrong. Please try again or contact us directly.
                    </p>
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    "Sending..."
                ) : (
                    <>
                        <Send className="mr-2 h-5 w-5" />
                        {formConfig.submitButtonLabel || "Send Message"}
                    </>
                )}
            </button>
        </form>
    );
};
