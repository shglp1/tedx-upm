

const SectionPattern = () => {
    return (
        <div
            className="w-full h-[60px] bg-transparent dark:bg-black relative overflow-hidden"
            aria-hidden="true"
        >
            <div
                className="absolute inset-0 w-full h-full bg-black dark:bg-white/90"
                style={{
                    maskImage: 'url("/logo_collection_patterns.svg")',
                    WebkitMaskImage: 'url("/logo_collection_patterns.svg")',
                    maskRepeat: 'repeat-x',
                    WebkitMaskRepeat: 'repeat-x',
                    maskPosition: 'left center',
                    WebkitMaskPosition: 'left center',
                    maskSize: 'auto 50px',
                    WebkitMaskSize: 'auto 50px',
                }}
            />
        </div>
    );
};

export default SectionPattern;
