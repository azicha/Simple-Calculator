export default function Calculator() {

    return(
        <div className="flex justify-center p-2 h-screen">
            <div className="w-[35%] h-fit rounded shadow-md p-4">
                <div className="flex flex-col">
                    <label htmlFor="output-screen">Output Screen</label>
                    <input type="text" name="output-screen" className="input-screen" disabled />
                </div>
                <div className="h-fit grid grid-cols-3 gap-2 my-2">
                    <button className="num-button">0</button>
                    <button className="num-button">1</button>
                    <button className="num-button">2</button>
                    <button className="num-button">3</button>
                    <button className="num-button">4</button>
                    <button className="num-button">5</button>
                    <button className="num-button">6</button>
                    <button className="num-button">7</button>
                    <button className="num-button">8</button>
                    <button className="num-button">9</button>
                    <button className="num-button">+</button>
                    <button className="num-button">-</button>
                    <button className="num-button">*</button>
                    <button className="num-button">/</button>
                    <button className="bg-orange-400 active:bg-orange-600/50  p-2 rounded-lg text-xl">=</button>
                    <button className="num-button">DEL</button>
                    <button className="bg-orange-400 active:bg-orange-600/50  p-2 rounded-lg text-xl col-span-2">CLS</button>
                </div>
            </div>
        </div>
    )
  }
  