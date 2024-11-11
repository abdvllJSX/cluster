const MaxContainer = ({ children }) => {
  return (
    <div className="max-w-[1800px] w-full overflow-hidden mx-auto">
      {children}
    </div>
  );
};

export default MaxContainer;
