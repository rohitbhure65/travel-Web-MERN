// GOAL : GET INDIVIDUAL tour
import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/app/lib/dbConnection/dbconfig";
import Tour from "@/app/lib/model/touradd"

connectDB()
export async function GET(request: NextRequest){
    try {
        const id = request.url.split("listing/")[1];
        // const id = request.url
        console.log(id)
        const tour = await Tour.findById({_id : id})
        // console.log(tour)    

        if (!tour) {        
            throw new Error("No Such tour with this id")
        } else {
            return NextResponse.json({      
                message: "tour Found",
                status: 200,    
                data: tour
            })  
        }   

    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status: 500})
    }
}           