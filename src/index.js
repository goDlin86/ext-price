import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom'
import { parse } from 'node-html-parser'

const App = () => {
    const [price, setPrice] = useState('...')

    useEffect(() => {
        fetchData()
    }, [])
    
    const fetchData = async () => {
        try {
            const res = await fetch('https://www.citilink.ru/product/kompyuter-apple-mac-mini-mgnr3ru-a-apple-m1-8gb-256gb-ssd-macos-serebr-1441976/')
            const html = await res.text()
            const dom = parse(html)

            setPrice(dom.querySelector('.ProductPrice__price').text)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            Ситилинк - {price}
        </div>
    )
}

createRoot(document.getElementById('price')).render(<App />)