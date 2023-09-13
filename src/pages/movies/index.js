import { star } from "@/assets/images";
import Seo from "@/components/Seo";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <Seo />
      <div className="grid grid-cols-12">
        <header className="col-span-2"></header>
        <main className="grid gap-5 col-span-10 p-5">
          {/* Movie trailer */}
          <section className="h-[500px] bg-gray-800 rounded-[20px]"></section>

          {/* Title and rating */}
          <section className="flex justify-between items-center">
            <div className="flex gap-3">
              <h1>
                <span>Movie title</span>
                <span>Year</span>
                <span>Viewer type</span>
                <span>Movie length</span>
              </h1>
              <div>
                <span>Tag</span>
                <span>Tag</span>
              </div>
            </div>

            <div className="flex gap-2">
              <div>
                <Image alt="rating" src={star} width={20} height={20} />
              </div>
              <p>0.0</p>
              <div>000k</div>
            </div>
          </section>

          {/* Movie details and showtime */}
          <section className="grid grid-cols-12">
            <div className="col-span-9 grid gap-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                eu dui sit amet justo ullamcorper laoreet at sed nulla. Quisque
                eget rutrum felis. Etiam sed mauris mi. In nec tortor nibh.
                Mauris nec dui est.
              </p>

              <p>
                <span>Director: </span>
                <span>John Doe</span>
              </p>
              <p>
                <span>Writers: </span>
                <span>John Doe, Jane Doe, Susan Doe</span>
              </p>
              <p>
                <span>Stars: </span>
                <span>John Doe, Susan Doe, Chris Doe, Ella Doe</span>
              </p>

              <div className="flex gap-3">
                <div>Top rated movie #00</div>
                <div>Awards 0 nominations</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
