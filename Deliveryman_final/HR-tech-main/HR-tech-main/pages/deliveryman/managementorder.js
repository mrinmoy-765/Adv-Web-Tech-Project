import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Drawer from '../components/drawer'
import SessionCheck from '@/pages/components/sessionCheck';
import Footer from "../components/footer"
import Header1 from "../components/header1"

function ManagementOrder({ managementorder }) {
    return (
        <>
        <Header1 />
        <Drawer title="managementorder"/>
            <SessionCheck />

            {/* <Drawer title="Order" /> */}
            <div className="text-gray-600 body-font h-full">
                <div className="container mx-auto bg-gradient-to-b from-zinc-50 to-blue-100 h-screen flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="mb-6">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Management Orders</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.keys(managementorder).map((order) => (
                                <div key={order.id} className="bg-white p-4 shadow-md hover:shadow-lg hover:shadow-black rounded-lg">
                                    <div>
                                        <label className="font-semibold">Order Title:</label>
                                        <p>{managementorder.Title}</p>
                                    </div>
                                    <div>
                                        <label className="font-semibold">Order Description:</label>
                                        <p>{managementorder.Description}</p>
                                    </div>
                                   
                                   
                                   
                                    
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer/> 
        </>
    );
}

export async function getServerSideProps() {
    try {
        const response = await axios.get("http://localhost:3000/users/2/mngorder");
       const managementorder = response.data;
        return { props: { managementorder } };
     // return { props: { managementorder: [] } };
    } catch (error) {
        console.error('Error fetching customer reviews:', error);
        return { props: { managementorder: [] } };
    }
}

export default ManagementOrder;
