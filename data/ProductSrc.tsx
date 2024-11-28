import { productcartprop } from "@/types/Sitetypes";
import axios from "axios";

export const getProductserver = async () => {
  try {
    const { data, status } = await axios.get(
      "https://673896744eb22e24fca85fc4.mockapi.io/product"
    );
    if (status == 200) {
      return data.map((item: productcartprop) => {
        return {
          ...item,
          rating: 3,
          size: ["m", "l", "xl", "xxl"],
          discount: 20,
          desc: "সকলের ব্যবহারের জন্য উন্মুক্ত অত্যন্ত ফাস্ট, লাইট-ওয়েট এবং ফ্রি বাংলা ANSI ও Unicode কিবোর্ড। চিত্রলিপি. বিভিন্ন ধরনের টাইপোগ্রাফি, ব্যানার, পোস্টার ইত্যাদি ডিজাইন সামগ্রী যা আপনার কাজকে করে লিপিঘর কিবোর্ড",
          color: ["red", "green", "yellow"],
          stock: 100,
        };
      });
    } else {
      console.log("Connection error");
    }
  } catch (error) {
    return "server error";
  }
};
