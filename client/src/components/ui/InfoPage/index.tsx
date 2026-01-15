
import React from 'react';

interface InfoPageProps {
  title: string;
  children: React.ReactNode;
}

const InfoPage: React.FC<InfoPageProps> = ({ title, children }) => {
  return (
    <div className="w-full bg-[#FFF9F5] font-sans py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-trivira-primary mb-8 font-heading">
            {title}
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
