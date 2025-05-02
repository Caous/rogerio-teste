"use client";

import { useEffect, useState, useTransition } from "react";

const POSTS_PER_PAGE = 6;

export default function PaginationControls({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const cards = document.querySelectorAll("#cards-container > div");

    cards.forEach((card, i) => {
      const start = (currentPage - 1) * POSTS_PER_PAGE;
      const end = currentPage * POSTS_PER_PAGE;
      card.style.display = i >= start && i < end ? "block" : "none";
    });
  }, [currentPage]);

  return (
    <div className="flex justify-center mt-10 gap-2">
      <button
        onClick={() =>
          startTransition(() => setCurrentPage((p) => Math.max(p - 1, 1)))
        }
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Anterior
      </button>

      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => startTransition(() => setCurrentPage(i + 1))}
          className={`px-4 py-2 rounded ${
            currentPage === i + 1
              ? "bg-[#FE5000] text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() =>
          startTransition(() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          )
        }
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Próximo
      </button>
    </div>
  );
}
