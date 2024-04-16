import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import { NextResponse,NextRequest } from "next/server";
import connectDB from "@/app/lib/dbConnection/dbconfig"
import User from "@/app/lib/model/UserModel"

connectDB();

export async function GET(request: NextRequest) {
    try {
       const userId = await getDataFromToken(request);
       const user = await User.findOne({_id: userId}).select("-password")
       
       return NextResponse.json({
        message: "User Found",
        data: user
       })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}