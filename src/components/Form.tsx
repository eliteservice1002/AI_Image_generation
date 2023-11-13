type FormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isButtonDisabled: boolean;
  buttonClasses: string;
  loading: boolean;
};

export default function Form({
  handleSubmit,
  inputValue,
  onInputChange,
  isButtonDisabled,
  buttonClasses,
  loading,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col items-center gap-4">
        <label htmlFor="prompt" className="text-sm sm:text-base">
          Image prompt
        </label>
        <textarea
          id="prompt"
          placeholder="Enter your prompt"
          value={inputValue}
          onChange={onInputChange}
          className="border border-slate-200 rounded p-2 w-3/4 h-32 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isButtonDisabled}
        aria-disabled={isButtonDisabled}
        className={buttonClasses}
      >
        {loading ? "Loading..." : "Generate"}
      </button>
    </form>
  );
}
