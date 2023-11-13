import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Form from "./components/Form";
import ImageDisplay from "./components/ImageDisplay";
import { useImageFetcher } from "./hooks/useFetcher";

function App() {
  const { inputValue, imageURL, loading, error, setInputValue, handleSubmit } =
    useImageFetcher();

  const buttonClasses =
    inputValue.length === 0
      ? "bg-white text-gray-800 font-semibold py-2 px-4 border border-slate-400 rounded shadow opacity-50 hover:opacity-50 cursor-not-allowed"
      : "bg-white hover:bg-slate-100 text-gray-800 font-semibold py-2 px-4 border border-slate-400 rounded shadow";

  const isButtonDisabled = inputValue.length === 0 || loading;

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Layout>
        <section className="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
          <div className="bg-white shadow-md rounded border border-slate-200 p-14 text-center">
            <Hero />
            <Form
              handleSubmit={handleSubmit}
              inputValue={inputValue}
              onInputChange={onInputChange}
              isButtonDisabled={isButtonDisabled}
              buttonClasses={buttonClasses}
              loading={loading}
            />
          </div>
          <ImageDisplay imageURL={imageURL} loading={loading} error={error} />
        </section>
      </Layout>
    </>
  );
}

export default App;
