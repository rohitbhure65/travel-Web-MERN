// pages/api/search.js

import { NextResponse, NextRequest } from "next/server";
import Tour from "@/app/lib/model/touradd"; // Assuming Tour model is defined in touradd file
import connectDB from "@/app/lib/dbConnection/dbconfig";

// Ensure database connection
connectDB();

export default async function handler(request: NextRequest) {
    try {
        // Parse request body to extract search/filter criteria
        const { title, destination, duration } = await request.json();

        // Construct query object based on provided criteria
        const queryObject: any = {};

        if (title) {
            queryObject.title  = { $regex: title, $options: "i" };
        }

        if (destination) {
            queryObject.destination = destination as string
        }

        if (duration) {
            queryObject.duration = duration as string;
        }

        // Fetch data from the database based on the constructed query
        const searchData = await Tour.find(queryObject);

        // Return the search results as JSON response
        return NextResponse.json({
            message: "Successfully fetched search results",
            success: true,
            searchData
        });
    } catch (error) {
        // If an error occurs during the process, return an error response
        console.error("Error:", error);
        return NextResponse.json({
            error: "An error occurred while processing the request"
        }, {
            status: 500
        });
    }
}
