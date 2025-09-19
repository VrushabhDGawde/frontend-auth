import { useState } from 'react';
import ProgressBar from './ProgressBar';


export default function PaperDetailsForm() {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        problem: '',
        solution: '',
        result: ''
    });
    const [isProcessing, setIsProcessing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        try {
            // Replace with your actual form submission logic
            const response = await fetch('/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Handle response here
            console.log('Form submitted:', formData);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="container mx-auto max-w-screen-lg ">
            <div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-600">Enter Details</h2>
                    <p className="mb-6 text-gray-500">Fill the form as per Shown. Give it a try.</p>

                    <div className="mb-6 rounded-2xl bg-white p-4 px-4 shadow-2xl hover:shadow-indigo-500 md:p-8">
                        <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3">
                            <div className="text-gray-600">
                                <p className="text-lg font-medium">Paper Details</p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-5">
                                    <div className="md:col-span-5">
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            placeholder="Enter the Title"
                                            required
                                        />
                                    </div>

                                    <div className="md:col-span-5">
                                        <label htmlFor="author">Author Names e.g.(author1, author2, author3)</label>
                                        <input
                                            type="text"
                                            id="author"
                                            name="author"
                                            className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                                            value={formData.author}
                                            onChange={handleInputChange}
                                            placeholder="Enter Author name"
                                            required
                                        />
                                    </div>

                                    <div className="md:col-span-3">
                                        <label htmlFor="problem">Problem Statement</label>
                                        <input
                                            type="text"
                                            id="problem"
                                            name="problem"
                                            className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                                            value={formData.problem}
                                            onChange={handleInputChange}
                                            placeholder="Enter the Problem statement"
                                            required
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="solution">Proposed Solution</label>
                                        <input
                                            type="text"
                                            id="solution"
                                            name="solution"
                                            className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                                            value={formData.solution}
                                            onChange={handleInputChange}
                                            placeholder="Enter Proposed Solution"
                                            required
                                        />
                                    </div>

                                    <div className="md:col-span-5">
                                        <label htmlFor="result">Result</label>
                                        <input
                                            type="text"
                                            id="result"
                                            name="result"
                                            className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                                            value={formData.result}
                                            onChange={handleInputChange}
                                            placeholder="Enter the result"
                                            required
                                        />
                                    </div>

                                    <div className="text-right md:col-span-5">
                                        <div className="inline-flex items-end">
                                            {!isProcessing ? (
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150"
                                                >
                                                    Submit
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-500 transition ease-in-out duration-150 cursor-not-allowed"
                                                    disabled
                                                >
                                                    <svg
                                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        ></path>
                                                    </svg>
                                                    Processing...
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProgressBar progress={isProcessing ? 50 : 100} />
        </div>

    );
}