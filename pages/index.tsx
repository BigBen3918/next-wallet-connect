export default function Home() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <div className="h-5"></div>
                <h1 className="text-3xl font-bold underline">
                    Welcome to world!!!
                </h1>
                <div className="h-5"></div>
                <button className="px-5 py-3 bg-[blue] text-[white] rounded-md">
                    Wallet Connect
                </button>
                <div className="h-40"></div>
                <div className="flex justify-center items-center gap-3">
                    <label className="text-[20px]">Address: </label>
                    <p>no address</p>
                </div>
            </div>
        </div>
    );
}
