type CounterProps = {
    count: number;
};

export default function Counter({ count }: CounterProps) {
    return (
        <span
            className="text-white"
            role="status"
            aria-live="polite"
        >
            {count}
        </span>
    );
}
