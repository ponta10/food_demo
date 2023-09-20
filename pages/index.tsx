import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    axios
      .get('/api/food')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error: ああああ</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Place Details</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
