import LoadingIcon from "./icons/LoadingIcon";
import PlaceholderIcon from "./icons/PlaceholderIcon";

type ImageDisplayProps = {
  imageURL: string;
  loading: boolean;
  error: null | string;
};

export default function ImageDisplay({
  imageURL,
  loading,
  error,
}: ImageDisplayProps) {
  return (
    <div>
      {loading && (
        <div className="flex flex-col items-center gap-6 mt-12">
          <p>Your image is being generated...</p>
          <div>
            <div>
              <div>
                <LoadingIcon />
              </div>
            </div>
          </div>
        </div>
      )}

      {imageURL && !loading && (
        <div className="flex flex-col items-center gap-6 mt-12">
          <p>Find your generated image below</p>
          <img src={imageURL} width={600} height={600} alt="Generated image" />
        </div>
      )}

      {!imageURL && !loading && (
        <div className="flex flex-col items-center gap-6 mt-12">
          <p>Your image will appear below</p>
          <div>
            <div>
              <div>
                <PlaceholderIcon />
              </div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="text-center w-1/2 mx-auto bg-red-500 mt-2 rounded border border-red-800">
          {error}
        </div>
      )}
    </div>
  );
}
