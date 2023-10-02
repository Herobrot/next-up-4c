import { NextResponse } from "next/server";


export async function GET(){
    return NextResponse.json([
        {        
            url: "http://localhost:3000/banner.png"
        },
        {        
            url: "http://localhost:3000/Banner1.jpg"
        },
        {        
            url: "http://localhost:3000/banner2.jpg"
        },
        {        
            url: "http://localhost:3000/banner3.jpg"
        }
    ]);
}