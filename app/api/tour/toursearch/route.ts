import Tour from '@/app/lib/model/touradd';
import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/app/lib/dbConnection/dbconfig";

// Ensure database connection
connectDB();

export async function GET(request: NextRequest) {
    try {
        const reqBody = await request.json();
        console.log(reqBody);

        const { keyword, destination, duration } = JSON.parse(reqBody);
        const queryobject: any = {};

        if (duration) {
            queryobject.duration = duration as string;
        }

        if (destination) {
            queryobject.destination = destination as string;
        }

        if (keyword) {
            queryobject.keyword = { $regex: keyword as string, $options: "i" };
        }

        const mydata = await Tour.find(queryobject);

        return NextResponse.json({ 
            message: "Successfully get listings",
            success: true,
            mydata
        });
    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status: 500})
    }
}
