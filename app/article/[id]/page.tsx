"use client";
import useNewsStore from "@/zustand/news.zustand";
import React, { useEffect } from "react";
import b4 from "../../../public/assets/images/bg/bg4.jpg";
import Image from "next/image";

const page = ({ params }: { params: { id: string } }) => {
  const { getSingleArticle, singleArticle } = useNewsStore();
  useEffect(() => {
    getSingleArticle(params.id);
  }, []);

  return (
    <div>
      <div>
        <Image src={b4} alt="image" />
      </div>
      <div>{singleArticle?.title}</div>
      <div>
        Article: {singleArticle?.author}
        Date:{singleArticle?.published}
      </div>
      <div>{singleArticle?.text}</div>
    </div>
  );
};

export default page;
