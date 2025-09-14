'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Load = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? '-100%' : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-red-50 z-50"
    >
      <Image src={"/spinner.gif"} height={0} width={0} priority={true} alt="Spinner Gif" className='h-auto w-auto' />
    </motion.div>
  );
}

export default Load;
