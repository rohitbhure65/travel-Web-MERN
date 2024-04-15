import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/app/lib/dbConnection/dbconfig";

import Tour from "@/app/lib/model/touradd";
// GOAL : CREATE A LISTING  

connectDB()
export async function POST(request: NextRequest){
    try {
        const reqBody =  await request.json();  
        const {title,description,image,price,duration,featured} = reqBody;


        console.log(reqBody);
        const listing = new Tour({title,description,image,price,duration,featured})
            
        const savedlisting = await listing.save()
        console.log(savedlisting)   
        
        return NextResponse.json({ 
            message: "Tour Listing Created Successfully",
            success: true,
            status: 201,
            savedlisting
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status: 400})
    }
}