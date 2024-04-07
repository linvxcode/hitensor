"use client";
import Button from "@/common/component/element/Button";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import Image from "@/common/component/element/Image";
import { RentDataItem } from "@/common/constant/RentDataItem";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";

export default function RentPage() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setSelectedItem(index);
  };

  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-center items-center px-5 lg:px-10  w-full mt-32 overflow-hidden ">
       {openModal && (
        <div className="fixed h-auto inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-[999]"></div>
      )}
      <div className="w-full  z-[9] items-center gap-5 flex justify-center">
        <div className=" w-auto flex  flex-col border-[1px] border-[#9DB0D8] rounded-2xl px-3 py-2">
          <div className="flex justify-start gap-2 items-center">
            <h1 className="text-[#9DB0D8]">•</h1>
            <Image
              src="/long_logo.png"
              alt="Nav Logo"
              width={130}
              height={130}
              className="w-[120px] h-auto object-cover !px-0"
            />
          </div>
        </div>
        <div className=" w-auto flex  flex-col border-[1px] border-gray-500 rounded-2xl px-3 py-2">
          <div className="flex justify-start gap-2 items-center">
            <h1 className="text-gray-500">•</h1>
            <h1 className="text-gray-500">CLOUD FULL</h1>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center flex-col items-center py-10">
        <div>
          <h1 className="text-3xl">More Server Coming</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 w-full mt-10">
          {RentDataItem.map((item, index) => (
            <div
              key={index}
              className="border-[1px] border-[#91AEFF] px-3 py-5 rounded-2xl"
            >
              <div className="w-full flex justify-center items-center">
                <h1 className="text-3xl text-[#91AEFF]">{item.title}</h1>
              </div>

              {/* Spesifikasi */}

              <div className="w-full flex flex-col justify-start items-start px-5 mt-5">
                <h1>{item.cpu}</h1>

                <h1>{item.ram}</h1>

                <h1>{item.nvme}</h1>

                <h1>{item.nic}</h1>

                <h1>{item.os}</h1>

                <h1>{item.rack}</h1>

                <h1>{item.optional}</h1>
              </div>
              <div className="w-full flex justify-center items-center py-5">
                <Button
                  className="!text-3xl"
                  onClick={() => handleOpenModal(index)}
                  color="default"
                  HoverColor="bg-neutral-100"
                  label="Coming Soon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
         <AnimatePresence>
          {openModal && (
            <motion.div
              initial={{
                translateY: 50,
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                translateY: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                translateY: 50,
                scale: 0.7,
                opacity: 0,
              }}
              className="w-[80%] md:w-[60%] xl:w-[50%] left-[10%] 2xl:w-[25%] mx-auto rounded-3xl flex  inset-44  h-[400px]  bg-neutral-900 fixed z-[999] backdrop-blur-lg"
            >
              
              <div className="w-full justify-center items-center py-2 ">
                <button
                  className=" w-auto flex items-end justify-end relative left-[80%] 2xl:left-[90%]"
                  onClick={() => setOpenModal(!openModal)}
                >
                  <GrFormClose size={50} />
                </button>


                <div className="w-full px-5 py-2 flex justify-center items-center">
                  <h1 className="text-4xl ">
                    COMING SOON
                  </h1>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
