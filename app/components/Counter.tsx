type CounterProps = {
    count: number;
};

export default function Counter({ count }: CounterProps) {
    return (
        <span
            className="text-gray-800 bg-gray-200 px-3 py-1 rounded-full"
            role="status"
            aria-live="polite"
        >
            {count}
        </span>
    );
}
