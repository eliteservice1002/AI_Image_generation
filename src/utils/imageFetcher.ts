export const fetchImage = async (prompt: string, url: string) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: prompt }),
  });

  if (response.ok) {
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      return data[0];
    }

    throw new Error("Unexpected server response");
  } else {
    throw new Error(response.statusText);
  }
};
