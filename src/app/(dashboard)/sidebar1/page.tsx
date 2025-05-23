'use client'

import { useState } from "react";

const page = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission and API call
  };

  return (
    <div className=" bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
    <h1>Sidebar 1</h1>
    </div>
    </div>
  );
};

export default page;
