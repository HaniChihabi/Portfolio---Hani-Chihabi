"use client";

export default function ButtonUp() {
    return(
        <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="justify-center fixed bottom-4 right-4 bg-transparent text-white px-4 py-2 rounded-full hover:bg-neutral-700"
      aria-label="Scroll to top"
      style={{ fontSize: '36px' }}
    >
      ↑
    </button>
    )
}

