export const ContactInfo = () => {
  return (
    <div className="w-full h-12">
      <div className="w-full flex items-center justify-end h-full px-2 text-xs font-semibold gap-2 sm:text-lg">
        <div>+54 9 2324505937</div>
        <span>|</span>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
          <div>Calle 23 Esq. 28.</div>
          <span className="hidden sm:block">|</span>
          <div>Mercedes, Bs.As.</div>
        </div>
      </div>
    </div>
  );
};
