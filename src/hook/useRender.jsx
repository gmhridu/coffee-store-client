import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const useRender = () => {

 const {data, isLoading, refetch} =  useQuery({
   queryKey: ["coffees"],
    queryFn: async () => {
      const res = await fetch(`https://coffee-storess-server.vercel.app/coffees`)
      const data = await res.json()
      return data;
   }
    })

  return {data, isLoading, refetch}
};

export default useRender;