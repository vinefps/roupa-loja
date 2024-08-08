
interface ButtonInterface {
    handleSubmit: () => void
}
export function Button({handleSubmit}: ButtonInterface) {
    return (
        <button onClick={handleSubmit} className="bg-blue-400 text-white py-2 px-4 ml-2 rounded hover:bg-blue-500">SUBMIT</button>
    )
}