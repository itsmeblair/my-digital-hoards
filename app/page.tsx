'use client'
import { useState, useEffect } from "react"
import P5Wrapper from "./components/sketch"


export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentFiles, setCurrentFiles] = useState<any[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  // List all files
  const listFiles = async () => {
    const response = await fetch(`/api/s3`);  // Simplified URL
    const data = await response.json();
    setCurrentFiles(data.files)
  };

  useEffect(() => {
    listFiles();
  }, []);

  useEffect(() => {
    if (currentFiles.length > 0 && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [currentFiles, hasLoaded]);

  // Get a specific file


  console.log("hi ")
  return (
    <div className="">
      { hasLoaded ? <P5Wrapper currentFiles={currentFiles} /> : null }
      </div>
  );
}
