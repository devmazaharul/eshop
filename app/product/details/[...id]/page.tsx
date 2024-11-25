import Productdetails from "@/components/sub/product/Productdetails";
import { productcartprop, productDetailsprop } from "@/types/Sitetypes";
import axios from "axios";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const slag:any= (await params).id;

  const {data}=await axios.get("https://673896744eb22e24fca85fc4.mockapi.io/product");

  const filterData=data.filter((item:productcartprop) =>{
    if(item.id==slag[0]){
      return item
    }
  })


let banglatext="সকলের ব্যবহারের জন্য উন্মুক্ত অত্যন্ত ফাস্ট, লাইট-ওয়েট এবং ফ্রি বাংলা ANSI ও Unicode কিবোর্ড। চিত্রলিপি. বিভিন্ন ধরনের টাইপোগ্রাফি, ব্যানার, পোস্টার ইত্যাদি ডিজাইন সামগ্রী যা আপনার কাজকে করে লিপিঘর কিবোর্ড"
  return <>
  {filterData.map((item:productDetailsprop)=>(
    <Productdetails color={["red","black","yellow",'green','a']} discount={5} avatar="/lab.jpg" brand="Apel" city="dhaka" name={item.name} rating={4} price={item.price} key={item.id}  id={item.id} desc={banglatext} size={['xl','m','l']}/>
  ))}
  </>

}
