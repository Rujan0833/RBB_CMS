import React, { useState, useEffect, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { getForm, submitForm } from '../lib/cms';

interface DynamicFormProps {
    formId: string;
    onSuccess?: () => void;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ formId, onSuccess }) => {
    const [formConfig, setFormConfig] = useState<any>(null);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        const loadForm = async () => {
            console.log('Loading form config for ID:', formId);
            const config = await getForm(formId);
            if (config) {
                console.log('Form config loaded:', config);
                setFormConfig(config);
                // Initialize form data
                const initialData: Record<string, any> = {};
                config.fields?.forEach((field: any) => {
                    initialData[field.name] = field.defaultValue || '';
                });
                setFormData(initialData);
            } else {
                console.error('Failed to load form config');
            }
        };
        loadForm();
    }, [formId]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        console.log('Handing submit for formId:', formId);
        const success = await submitForm(formId, formData);

        if (success) {
            console.log('Submission SUCCESSful');
            setSubmitStatus('success');
            // Reset form
            const resetData: Record<string, any> = {};
            formConfig.fields?.forEach((field: any) => {
                resetData[field.name] = field.defaultValue || '';
            });
            setFormData(resetData);
            if (onSuccess) onSuccess();
        } else {
            console.error('Submission FAILED');
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
                const label = (
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label} {field.required && '*'}
                    </label>
                );

                const isPhone = field.name.toLowerCase().includes('phone') || field.name.toLowerCase().includes('tel');

                const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
                    let value = e.target.value;
                    if (isPhone) {
                        // Strip everything except digits and + (for country codes)
                        value = value.replace(/[^0-9+]/g, '');
                    }
                    setFormData({ ...formData, [field.name]: value });
                };

                const commonProps = {
                    id,
                    required: field.required,
                    value: formData[field.name] || '',
                    onChange: handleChange,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-colors",
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
