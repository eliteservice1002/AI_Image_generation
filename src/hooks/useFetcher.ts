import { useState } from "react";
import { fetchImage } from "../utils/imageFetcher";

const apiEndpoint = "http://localhost:3030/api/genimg";

export function useImageFetcher() {
  const [inputValue, setInputValue] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = await fetchImage(inputValue, apiEndpoint);
      setImageURL(url);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    inputValue,
    imageURL,
    loading,
    error,
    setInputValue,
    handleSubmit,
  };
}
