import { NextResponse, NextRequest } from "next/server";
import Tour from "@/app/lib/model/touradd";
import connectDB from "@/app/lib/dbConnection/dbconfig";
// GOAL : GET ALL LISTING
connectDB()
export async function GET(request: NextRequest){
    try {
        const getalllisting = await Tour.find({featured: true})
        // console.log(getalllisting)
        return NextResponse.json({ 
            message: "Successfully get all listings",
            success: true,
            getalllisting
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status: 500})
    }
}           