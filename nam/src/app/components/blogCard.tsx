//components/blogCard.tsx

export default function BlogCard() {
    return (
        <div className="col-span-1 h-48 bg-white rounded-lg border-2 shadow-lg border-brand-copper cursor-pointer relative flex items-center justify-center bg-[url('/images/office.jpg')] bg-cover mb-6">
            <div className="absolute bottom-0 w-full bg-brand-copper h-10 cursor-pointer">
                <div className="font-bold absolute left-0 text-brand-blue text-xs text-justify w-[15em] p-2">
                    Setting Up a Firm in Tanzania - A Step by Step Guide
                </div>
                <div className="absolute right-0 bottom-0 text-brand-blue"><i className="text-2xl bi bi-book p-2"></i></div>
            </div>
        </div>
    );
}