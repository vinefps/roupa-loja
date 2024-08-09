import { Button } from './Button'
import { TypeItemSearch } from '../app/types/product'

export function PrimaryInput({ setItemSearch }: TypeItemSearch) {


    return (
        <div className=''>
            <input onChange={(e) => setItemSearch(e.target.value)} className="bg-gray-100 outline-none p-2 rounded-md" type="text" placeholder="Nome do Produto"/>
            <Button />
        </div>
    )
}